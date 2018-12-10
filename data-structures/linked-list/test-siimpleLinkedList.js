const SimpleLinkedList = require('./SimpleLinkedList');


const linkedList = new SimpleLinkedList();

linkedList.append('1');
linkedList.append('2');
linkedList.append('8');
// linkedList.append('4');
// linkedList.append('5');
// linkedList.append('6');
// linkedList.append('7');

// linkedList.append("8")

console.log("------------------------->");
console.log(linkedList);
// console.log("------------deleteHead------------->");
// console.log(linkedList.deleteHead());
// console.log("------------deleteHead------------->");
// console.log(linkedList.deleteTail());
// console.log("------------deleteTail------------->");

// console.log("------------find------------->");
// console.log(linkedList.find(4));
console.log("------------remove------------->");
//console.log(linkedList.remove('1'));
console.log(linkedList);
console.log(linkedList.toString());