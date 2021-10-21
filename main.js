let animals = ['cat', 'dog', 'parrot', 'cock'];
alert( animals.slice(2)); //parrot cock

let animals = ['cat', 'dog', 'parrot', 'cock'];
alert( animals.splice(1)); // dog,parrot,cock

let animals = ['cat', 'dog', 'parrot', 'cock'];
let removed = animals.splice(1,0, 'chicken');
alert(animals); //cat,chicken,dog,parrot,cock ничего не удала т.к. 0, но добавили новый элемент

let animals = ['cat', 'dog', 'parrot', 'cock'];
let removed = animals.splice(1,1, 'chicken');
alert(animals); //cat,chicken,parrot,cock удаление и вставка.

let arr = [1.2 , 1.6 , 8.5 , 5.3];
let mult = arr.map( Math.round);
alert (arr);//1.2,1.6,8.5,5.3
alert(mult);// 1,2,9,5 окргулился кажды элемент

let arr = ['a' , 'b', 'c', 'd'];
arr.forEach( function (item, i, arr){
alert(i + ": " + item + " (массив:" + arr + ")" );
});//перебор каждого элемента с атрибутами

let arr = [1, 2, 3,-4];
let positiveArray = arr.filter(function(number) {
return number > 0;
});
alert(positiveArray);// условие, что только положительные числа пройдут, поэтому 1 2 3

let arr = [1, 6, 2, 75, 2];
let sumArr = arr.reduce(function (sum, current) {
return sum + current;
} ,0);
alert (sumArr);//86

let arr = [ 1, 5, 45];
arr.sort();
alert(arr);//1 45 5, сравнение как у строк, по первому элементу.

function compareNumeric(a, b) {
    if (a > b) return 0;
    if (a == b) return 0;
    if (a < b) return -1;
    }
    
    let arr = [ 1, 5, 45];
    arr.sort(compareNumeric);
    alert(arr);// теперь все уравнялось блягодаря условиям функции, 1, 5, 45

let arr =  [1, 2, 3, 4, 5, 6];
let terms = (i) => i % 2 === 0;
alert(arr.some(terms));  //true 

function isBiggerThan10 (element, index, array) {
    return element > 10;
    }
    
    [1, 5, 8, 2, 7].some(isBiggerThan10);// false все числа меньше

    
function isBiggerThan10 (element, index, array) {
    return element > 10;
    }
[10, 50, 8, 20, 70].every(isBiggerThan10);   // falseт.к. не все, есть 8