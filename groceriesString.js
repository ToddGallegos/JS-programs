/*
Write a function groceries() that takes an array of object literals of grocery items.
The function should return a string with each item separated by a comma except the
last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

function groceries(objArray) {
    let items = [];
    for (let i = 0; i < objArray.length; i++) {
      items.push(objArray[i].item);
    };
    let j = items.length - 1;
    let lastItem = items[j];
    items.pop();
    if (items.length < 1) {
        return lastItem
    };

    return (items.join(', ') + ' and ' + lastItem);
  };

let testlist1 = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
let testlist2 = [{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}];
let testlist3 = [{item: 'Lettuce'}, {item: 'Onions'}];
let testlist4 = [{item: 'Ice Cream'}];

console.log(groceries(testlist4));