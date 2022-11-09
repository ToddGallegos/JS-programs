/*
Program Title: Pilgrim's Progress
Program Author: Todd Gallegos
Date Created: 07292022
Last Revision: 08012022
*/

const prompt = require("prompt-sync")({ sigint: true });

const hat = "†";
const hole = "O";
const fieldCharacter = "░";
let pathCharacter = "☺";
const heart = "♥"
let strength = 0;
let petersCries = 1;

function getRandom() {
  let randomNum = Math.floor(Math.random() * 100);
  if (randomNum < 16) {
    return hole;
  } else if (randomNum > 15 && randomNum < 17) {
    return heart
  } else {
    return fieldCharacter;
  }
}

function randomQuestion() {
  process.stdout.write("\x1Bc");
  let randomNumber = Math.floor(Math.random() * 7)
  let questions = [
    'For God so _____ the world that He gave His only begotten\nSon that whoever believes in Him shall not perish\nbut have everlasting life.\n\na: pitied\nb: hated\nc: liked\nd: loved\n',
    'I can do ___ things through Christ who strengthens me\n\na: no\nb: some\nc: most\nd: all\n',
    'In the beginning, God _______ the heavens and the earth\n\na: found\nb: created\nc: loved\nd: saw\n',
    'The Lord is my _______, I shall not want. He makes me to\nlie down in green pastures. He leads me beside the still waters\n\na: Helper\nb: Master\nc: Shepherd\nd: Friend\n',
    'but God is faithful, who will not allow you to be tempted _____ what you are able\n\na: beyond\nb: below\nc: in spite of\nd: even close to\n',
    'Therefore, whether you eat or drink, or whatever you do, do ___ to the glory of God.\n\na: most\nb: some\nc: all\nd: none\n',
    'If we _______ our sins, He is faithful and just to forgive\nus our sins and to cleanse us from all unrighteousness\n\na: hide\nb: confess\nc: ignore\nd: feel bad about\n'
  ]
  let answers = ['d', 'd', 'b', 'c', 'a', 'c', 'b']
  console.log(questions[randomNumber])
  let answer = prompt('ANSWER? ')

  if (answer === answers[randomNumber]) {
    console.log(`Correct! Increased from Strength ${strength}`)
    strength = strength + (Math.floor(Math.random() * Field.field.length))
    pathCharacter = '☻';
    prompt(`to Strength ${strength}`)
  } else {
    prompt('Incorrect.')
  }
}



class Field {
  width = "";
  height = "";

  constructor(arr) {
    this.field = arr;
    this.height = "";
    this.width = "";


  }


  print() {
    console.log(`${pathCharacter} = Pilgrim\n${hat} = The Celestial City\n${hole} = Swamps of Despond\n${heart} = Strength from the Lord\n\n${strength} = Strength    ${petersCries} = Peter's Cries Remaining`);
    for (let i = 0; i < this.field.length; i++)
      console.log(this.field[i].join(""));
    console.log("");
  }
  static generateField(height, width) {
    Field.height = height;
    Field.width = width;
    this.field = [];
    for (let i = 0; i <= width; i++) {
      this.field.push([]);
      for (let j = 0; j <= height; j++) {
        this.field[i].push(getRandom());
      }
    }
    this.field[0][0] = pathCharacter;
    this.field[width][height] = hat;
    this.field[Math.floor(width / 2)][Math.floor(height / 2)] = heart;
    console.log(this.field.height);
    return this.field;
  }
}

function playGame() {

  process.stdout.write("\x1Bc");
  let fieldWidth = 0
  let fieldHeight = 0
  console.log('"s" = small (very difficult)\n"m" = medium\n"l" = large (very easy)\n')
  let mapSize = prompt("MAP SIZE: ");

  if (mapSize === 's') {
    fieldWidth = 20, fieldHeight = 10;
  } else if (mapSize === 'm') {
    fieldWidth = 40, fieldHeight = 20;
  } else if (mapSize === 'l') {
    fieldWidth = 50, fieldHeight = 20;
  } else {
    fieldWidth = 70, fieldHeight = 20;
  }

  if (fieldWidth >= fieldHeight) {
    strength = fieldWidth
  } else if (fieldHeight > fieldWidth) {
    strength = fieldHeight
  }

  let myField = new Field(Field.generateField(fieldWidth, fieldHeight));
  let playerX = 0;
  let playerY = 0;
  let hatX = myField.field[0].length - 1;
  let hatY = myField.field.length - 1;
  let playing = true;

  while (playing && strength > 0) {

    process.stdout.write("\x1Bc");
    myField.print();
    console.log(`w = up\na = left\ns = down\nd = right\n`);
    let input = prompt("ACTION? ");
    pathCharacter = '☺';

    if (input === "a") {

      myField.field[playerY][playerX] = fieldCharacter
      playerX -= 1;
    } else if (input === "d") {

      myField.field[playerY][playerX] = fieldCharacter
      playerX += 1;
    } else if (input === "w") {

      myField.field[playerY][playerX] = fieldCharacter
      playerY -= 1;
    } else if (input === "s") {

      myField.field[playerY][playerX] = fieldCharacter
      playerY += 1;
    } else if (input.toLowerCase() === "lord save me") {
      myField.field[playerY][playerX] = fieldCharacter
      petersCries = 0;
      playerX = hatX;
      playerY = hatY;
    } else {
      strength = strength + 1
      prompt("invalid input");

    }

    if (
      playerX < 0 ||
      playerY < 0 ||
      playerX >= myField.field[0].length ||
      playerY >= myField.field.length
    ) {
      playing = false;
      prompt("Out of Bounds - GAME OVER");
      return;
    }

    if (myField.field[playerY][playerX] === "O") {
      playing = false;
      prompt("Pilgrim fell in the Swamp of Despond - GAME OVER")
      return
    }
    if (myField.field[playerY][playerX] === "♥") {
      randomQuestion();
      myField.print();

    }

    if (
      playerX > -1 &&
      playerY > -1 &&
      playerX < myField.field[0].length &&
      playerY < myField.field.length
    ) {
      strength = strength - 1
      myField.field[playerY][playerX] = pathCharacter;
    }
    if (playerY === hatY && playerX === hatX) {
      playing = false;

      myField.field[playerY][playerX] = '☻'
      process.stdout.write("\x1Bc");
      myField.print();
      console.log("w = up\na = left\ns = down\nd = right\n");

      prompt("Pilgrim has entered the gates! YOU WON!");
      petersCries = 1
      return
    }
  }
  prompt('Pilgrim ran out of strength - GAME OVER')
}
let reply = 'y'
while (reply === 'y') {
  playGame();
  reply = prompt('Play Again? y or n: ')

}
