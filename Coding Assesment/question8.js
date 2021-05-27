// Question 8
// Assume there is a json object of this format 
// var obj = {
//  “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }
// Write a code to sort the object by id 

const items = [
{
 "id": 165,
 "name": "a"},
{
 "id": 236,
 "name": "b"},
{
 "id": 376,
 "name": "c"},
{
 "id": 253,
 "name": "d"},
{
 "id": 235,
 "name": "e"},
{
  "id": 24,
  "name": "f"}
];

function objectSort(property) {
   return function(a, b) {
       return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
   }
}
items.sort(objectSort('id')); 
console.log(items);  
