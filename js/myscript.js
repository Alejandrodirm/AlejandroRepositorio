//alert("hello to JS");
//var y let para variables , var variables globales y let locales
console.log("(havaleria!!)");
var table ="Normal Table";
let chair = "One chair";
console.log(table);
console.log(chair);
//booleano
let testboolean =true;
console.log(testboolean);
//numeros
let testNumber = 10;
console.log(testNumber);
//string usar mejor comilla doble
let testString='text';
console.log(testString);
//objetos booleano
let testBooleanObject =new Boolean(true);
console.log(testBooleanObject);
//string
let testStringObject = new String('text');
console.log(testStringObject);
//number
let testNumberObject = new Number(10);
console.log(testNumberObject);
//concadenación de variables
/*let pname ="John";
let surname="Doe";
let question="How are you "+pname+" "+" "+surname+"?";
console.log(question);
*/
//To es6 we can use backtick to create interpolated string
let pname ="John";
let surname="Doe";
let Page =23;
let question=`how old is ${pname} ${surname}?`;
let answer="He is "+Page+" years old";
console.log(question);
console.log(answer);
//concatenate using method string.concat(String)
/*
let pname2 ="John";
let surname2="Doe";
et question="How are you ".concat+" "+" "+surname+"?";
let answer="He is "+Page+" years old";
console.log(question);
console.log(answer);
*/
//operaciones aritmeticas 
let operator_a=12;
let operator_b=6;
let sum=operator_a+operator_b;
let rest=operator_a-operator_b;
let mult=operator_a*operator_b;
let division=operator_a/operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);
//exponente,inccremento,decremento
let operator_a1=2;
let operator_b2=2;
let expo=operator_a1 ** operator_b2;
let incr= ++operator_a1
let decr= --operator_b2
console.log(expo);
console.log(incr);
console.log(decr);
//asignación
let x =5;
let y =6;
console.log(x+=5);//x=x+5
console.log(x-=5);
console.log(x*=5);
console.log(y/=5);
//typeof null y undefined
//typeof controlar los tipos de entrada  y limitar los tipos de entrada
console.log(typeof(testboolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));
//Null
let testNull=null;
console.log(typeof(testNull));
//undefined
let testUndefined;
console.log(typeof(testUndefined));
//Array
var firt_array=[];//no tiene nada
var second_array = new Array(3);//le da el tamaño
var third_array=new Array(3,5);//lo mete en las 2 primeras posiciones
var fourth_array=new Array(3,5,"Seville",true,third_array);//Fiesta
console.log(firt_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);
//array acces
console.log(third_array[1]);
console.log(fourth_array[4][0]);//del 3º ARRAY LA posi 0
//array lenght
console.log(fourth_array.length);
//array push
console.log(fourth_array.push("Spain"));
fourth_array.push("spain")
console.log(fourth_array);//lo mete en el siguiente que no este ocupado
//array unshift añadir al principio
fourth_array.unshift(1);
console.log(fourth_array)
//For/forEach
//for incrementando
for(var i=0;i<fourth_array.length;i++){
    console.log("Entramos en la iteración de "+fourth_array[i])
}
//for decrementando
for(var i=fourth_array.length-1;i>=0;i--){
    console.log("Entramos en la iteración de "+fourth_array[i])
}
var i=fourth_array.length-1;
for(;i>-0;i--){
    console.log("Entramos en la iteración de "+fourth_array[i])
}
//forEach
fourth_array.forEach(function(element) {
    console.log("Fourth iteration "+element);
});
