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
//if/else/elseif
let aux =3;
if(aux>0){
    console.log("this number is positive");

}else if(aux<0){
    console.log("this number is negative");
}else{
    console.log("this number is 0");
}
//regular expressions
var DNI_REGEX=/^(\d{8})([A-Z])$/;
let dni="12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("Incorrect DNI");
}
//comparison operators
console.log(8==8);
console.log(8=="8");
console.log(8===8);//los 3 = son para comprobar que el valor y tipo son iguales
console.log(8==="8");
console.log(5>8);
console.log(5<8);
console.log(5>=8);
console.log(5<=8);
console.log(8!=8);
console.log(8!="8");
console.log(8!==8);
console.log(8!=="8");
console.log("test"=="test");
console.log("test"==='test');
console.log("test"=="Test");
//loop while
var i= 1;
while(i<10){
    console.log("the number is "+i)
    i++;
}
//date object
let today=new Date();
let first_october=new Date(2022, 9, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());
console.log(today.getMonth());//empieza en 0
//comparar las fechas
if(today>first_october){
    console.log("Today is after to first october");
}else{
    console.log("Today is before to first october");
}
//eventos
// hay que añadir primero en html ejem: <button id="btn">My first magic button</button>
//<button id="btn" onclick="myFirstFunction()">My first magic button</button>
function myFirstFunction(){
    console.log("Thank you for you click.");
}
function mySecondFunction(){
    console.log("Thank you for you interest.");
}
//Select DOM adañir de forma dinamica una clase a my_div
var div=document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);
//select dom II
var div=document.getElementsByTagName("div");
console.log(div);

var div=document.querySelector("#my_second_div");//# por que es una clase
console.log(my_second_div);
//llamo a todos los que se llamen my_third div
function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
console.log($(".div_especial"))
//funciones
//cada elemento del array lo elevo a 2
var numbers=[1,2,3,4];
var n_elevator_2=numbers.map(function(n){return n*n;});
console.log(n_elevator_2);
//otra forma del anterior => funcion flecha
var n_elevator_2=numbers.map((n)=>{return n*n;});
console.log(n_elevator_2);
// muestra el array del cambio con el console.log dentro
var n_elevator_2=numbers.map((n)=>{console.log(n*n); return n*n;});
console.log(n_elevator_2);
//map lo que hace dado un array le aplica una función 
var n_elevator_2=numbers.map(n=>n*n);
console.log(n_elevator_2);
//
let numbers=[[1,1],[2,2],[3,3],[4,4]];
let itself=numbers.map(([x,y])=>x*y);
console.log(itself);