console.log('hello')
console.log(1234)

// variable

var test = 'This is test';
console.log(test)

let test2 ='Variables defined with let can not be redeclared.';

console.log(test2);

test2 = 'But valu can change';

console.log(test2)


// variable declared with const keyword

const test4 = 'Variables defined with const also can not be redeclared and also cannot decleared';

console.log(test4)

// Type Conversion

// number to string
var number = String(8);

// bollon to string
var bollon = String(true);

//array to string string
var arraydata = String([,1,2,3,7]);


// 
console.log('Type Conversion')

console.log('number to string')
console.log(number);
console.log(typeof number);
console.log(number.length);

console.log('bollon to string')
console.log(bollon);
console.log(typeof bollon);
console.log(bollon.length);

console.log('array to string')
console.log(arraydata);
console.log(typeof arraydata);
console.log(arraydata.length);


console.log('Date funcation');

var date = new Date();

console.log(date);

console.log(date.toDateString());
console.log(date.getHours());

console.log('if eles statment');

const time = new Date().getHours();

if (time < 10 ){
    console.log('Good morning')
}else if (time < 20){
    console.log('Have a good day')
}else{
    console.log('good evening')
}



const Day_name =  date.getDay();

if (Day_name == 1){
    console.log('Monday')
} else if(Day_name == 2){
    console.log('Tuesday')
} else if(Day_name == 3){
    console.log('WednesDay')
} else if(Day_name == 4){
    console.log('ThuresDay')
} else if(Day_name == 5){
    console.log('friDay')
}else if (Day_name == 6){
    console.log('SaturDay')
}else{
    console.log('sunday')
}

console.log('switch');

