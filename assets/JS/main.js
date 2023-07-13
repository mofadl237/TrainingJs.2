// // let h = document.createElement("h1");
// // h.innerHTML="Elzero"
// // h.style="font-weight:bold; color:blue ; font-size:80px;  text-align:center; font-family:arial"
// // document.body.append(h)

// console.log("%cElzero%cWeb%cshool" , "color:red ; " , "color:green; font-weight:bold;font-size:30px","background-color:blue;color:white")
// console.table(["Ali" , "Fadl","mohamed" ,"Eldesokey"])

/*
// Add Variables Here
let num1=10;
let num2=20;

// Ouput
console.log(""+num1 + num2); // Normal Concatenate => 1020
console.log(typeof(""+num1 + num2)); // Normal Concatenate => String
console.log(`${num1 + num2}${num2}`); // Template Literals Way => 1020
console.log(typeof `${num1 + num2}${num2}`); // Template Literals Way => String

console.log(num2 +"\n"+num1);

//   Normal Concatenate
//   20
//   10


console.log(`${num2}
${num1}`);

//   Template Literals Way
//   20
//   10
*/
/*
let num = "10";

// Solution One
console.log(num * num.length); // 20

// Solution Two
console.log((+num + +num) ); // 20

// Solution Three
console.log(parseInt(num.repeat(2))); // 20

// Solution Four
console.log("Write Your Code Here"); // 20*/

// let points = 10;

// // Write Your Code Here

// console.log(points); // 13

// Write Your Code Here

// console.log(points); // 8;

/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
// myFriends.length[num]
console.log(myFriends.splice( ",", num)); // ["Ahmed", "Elham", "Osama"];*/

/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]*/
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]*/

/*


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].substr(website.length).toUpperCase()); // ZERO*/

/*

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
    console.log("found")
}
if(haystack.indexOf( needle)){
    console.log("found")
}
if(haystack.lastIndexOf(needle)){
    console.log("found")
}*/

/*

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1 , arr2).sort().slice(arr2.length).join("")); // fxy*/

/*
let start = 10;
let end = 100;
let exclude = 40;

// Output
for(let i = start  ; i<=end ; i+=10){
    if(i===exclude){
        continue;
    }
    console.log(i)
}
10
20
30
50
60
70
80
90
100*/

/*
let start = 10;
let end = 0;
let stop = 3;

// Output
for(let i=start ; i > end ; i--){
    if(i <  stop){
        break;
    }else if(i < 10){
        console.log(`0${i}`)
    }else if (i ===  stop){
        console.log(i)
        
    }

}
10
09
08
07
06
05
04
03*/

/*
let start = 1;
let end = 6;
let breaker = 2;

// Output

for(let i =start ; i<=end;i++){
    console.log(i);
    for(let j = breaker ; j<end ; j+=breaker){
        console.log(`--${j}`)
    }
}
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4*/

/*/////////////////////////////////Number Table \\\\\\\\\\\\\\\\\\\\*/
/*

for(let i = 1 ; i<=12 ; i++){
    console.log("Number Table " +i);
    for(let j=i;j<=12 ; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}*/

/*
let index = 10;
let jump = 2;

for (;;) {
 if(index <= jump){
    break;
 }
 console.log(index)
 index -=jump
}

// Output

10
8
6
4*/
/*

function sayHello(theName, theGender) {
    if(theGender === "Male"){
        console.log(`hello Mr ${theName}`)
    }else if(theGender === "Female"){
        console.log(`hello Mss ${theName}`)
    }else{
        console.log(`hello ${theName}`)
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
*/
/*
function calc(...num){
   var x  = [...num].reduce(function (ele , acc){
    return ele += acc
   })
    return x
}
console.log(calc(2,3,4,5))*/
/*
function calc(num){
    let result = 0 ;
    return result+num  || `Alll`
}

console.log(calc(0))*/
/*
function calc(){
    let num = [2,3,4,5]
    var x  = [...num].map(function (ele , i,arr){
     return ele += arr[i+1]
    })
     return x
 }
//  console.log(calc())*/
//  let my = document.createElement("div");
//  let attr = document.createAttribute("title");
//  attr.title = "hello";
//  my.setAttribute("title" , "hello")
//  let x =document.createComment("end Div");
//  my.appendChild(x);
//  document.body.appendChild(my);
// let x =1 ;
/*
function multiply(...num){
    let result=1;
    for(let i =0 ;  i<num.length ; i++ ){
        if(parseInt(num[i])){
            result *=parseInt(num[i])
        }
    }
    return result
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000*/

/*

function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for(let i=startYear;i<=endYear;i++){
        document.write(`<option value=${i}>${i}</option>`)
    }
    document.write(`</select>`)
  }
  createSelectBox(2000, 2021);*/
/*
  function getDetails(zName, zAge, zCountry) {
    function namePattern() {
      return zName.slice(0,(zName.indexOf(" "))) + zName.substr(zName.indexOf(" ") , 2).toUpperCase() + ".";
    }
    function ageWithMessage() {
      return parseInt(zAge)
    }
    function countryTwoLetters() {
      return zCountry.substr(0,2).toUpperCase();
    }
    function fullDetails() {
      return `hello ${namePattern()}, Your Age Is ${ageWithMessage()}, You Live In ${countryTwoLetters()}`
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY*/

/*
  function specialMix(...data) {
    let result = 0 ;
    for(let i=0;i<data.length;i++){
        if(parseInt(data[i])){
            result +=parseInt(data[i])
        }
    }
    return result || "Alll"
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings*/
/*
  let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let x = mix.map(function (acc){
    return !parseInt(acc) ? acc:"";
}).reduce(function (acc ,current){
    return `${acc}${current}`
})
console.log(x)
// Elzero*/

/*
let myString = "EElllzzzzzzzeroo";
let stringFilter = myString.split("").filter(function(ele , i , arr){
    return ele !== arr[i+1]
})
console.log(stringFilter.join(""))
// Elzero
*/ /*

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myReduce = myArray.reduce(function (acc ,current){
    if(Array.isArray(current)){
        return acc +current.join("")
    }else {
    return acc +current
    }
})
console.log(myReduce)
// Elzero


// let myArray = ["E", "l", "z", ["e", "r"], "o"];
var arrFilter=myArray.reduce(function(acc,curent){
    if(Array.isArray(curent)){
        return acc+curent.join("")
    }else{
        return acc +curent
    }
})
console.log(arrFilter)*/

/*

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let arrFilter = numsAndStrings.filter(function(ele){
    return parseInt(ele)
}).map(function(ele){
    return -ele
})
console.log(arrFilter)*/
/*
let nums = [2, 12, 11, 5, 10, 1, 99];
let numsReduce= nums.reduce(function(acc,current){
    if(current % 2 == 0){
        return acc * current
    }else if(current % 2 == 1){
        return acc + current
    }
},1)
console.log(numsReduce)
// 500*/

// Create Your Object Here
/*
let member = {
    name:"Elzero",
    age:38,
    country:"Egypt",
    fullDetails:function(){
        return `My Name Is ${member.name} , Age Is ${member.age} ,I live In ${member.country}`
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt*/
/*
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a},threeNums,twoNums)
console.log(finalObject);


  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
/*

let image = document.querySelectorAll("div img");
for(let i =0 ;i <image.length;i++){
    image[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    image[i].alt="Elzero"
    image[i].style="background:blue"

}*/

/*
let input = document.querySelector("input");
input.min=0
input.max=100
let result =document.querySelector(".result");
input.oninput=function(){
    return result.innerHTML=`${input.value} USD Dollar = ${(input.value*15.6).toFixed(2)} Egyptian Pound`
}*/

/*
let nav = document.querySelector(".navbar");
window.addEventListener("scroll",function(){
    if(window.scrollY >= "100"){
        nav.style="top:0;background-color:transparent;width:100%;" 
    }else{
        nav.style="top:1rem;background-color:black;width:80%;" 
    }
})
let cont=document.querySelector(".cont");
let contOffset =cont.offsetTop
window.addEventListener("scroll",function(){
    if(window.scrollY > contOffset-500 ){
        cont.style="background-color:red;width:100%;transform:translateX(0)" 
    }
    else{
        cont.style="background-color:red;width:100%;transform:translateX(-300%)" 
    }
})
let cont2 =document.querySelector(".cont2");
let contOFfset =cont2.offsetTop;
window.addEventListener("scroll" , function(){
    if(window.scrollY > contOFfset-500){
        cont2.style="background-color:blue;width:100%;transform:translateX(0)" 
    }
    else{
        cont2.style="background-color:blue;width:100%;transform:translateX(300%)" 
    }
    
})*/
/*
var num1=1;
let x =function (...nums){
   for(let i=0;i<nums.length;i++){
    num1 *= nums[i]
   }
   return num1
}
console.log(x(1,2,3,4,5))


function calc(...numb){
    let num = [...numb].map(function(ele,i,arr){
        return   ele *=arr[ i + 1 ];
    })
    return  num;
}
console.log(calc(1,2,3,4,5))*/

/*
// var x="5";
// console.log(+x.repeat(2) * 2)
var startYear =+prompt("Enter Start Year");
var endYear=+prompt("Enter End Year");
var escapeYear=+prompt("Enter Escape Year");
document.write("<select>")
for(let i=startYear ; i<=endYear;i++){
    if(i % 2 === 1){
        continue;
    }
    document.write(`<option value = ${i} > ${i}</option>`)
}
document.write("</select>")*/

// var firstName =prompt("Enter First Name");
// var endName =prompt("Enter End Name");
// var FullName = `${firstName.trim()} ${endName.trim()}`
// console.log(FullName[0].toUpperCase() +FullName.slice(1,FullName.indexOf(" ")) + FullName.substr(FullName.indexOf(" ") , 3).toUpperCase() +"...")
/*

function fullName(firstName , lastName){
    function first(){
        return firstName.toUpperCase()
    }
    function last(){
        return lastName.toUpperCase();
    }
    return `${first()} ${last()}`
}
console.log(fullName("Mohamed" , "Fadl"))*/

/*
var Name = "MMMOOOHAAAMMMEEEDDD   EEEEEEEEEEEEEEEEEELDDDDDDDDDDDESOOOOOOOKKKKKEYYYYYY FFFAAADLLLLL";
let nameFilter=Name.split("").map(function(ele , i , arr){
    return ele !== arr[i+1] ? ele: "";
});
console.log(nameFilter.join(""))*/

/*
let result = ""
var Name = "MMMOOOHAAAMMMEEEDDD   EEEEEEEEEEEEEEEEEELDDDDDDDDDDDESOOOOOOOKKKKKEYYYYYY FFFAAADLLLLL";
for(let i=0;i<Name.length;i++){
    if(Name[i] === Name[i+1]) continue;
    else result +=Name[i]
}
console.log(result);*/
/*
var div=document.querySelector(".cont");
div.classList.add("Fadl")
div.onclick=function(){
    div.parentElement.style = "background-color:red ; color:white;"
}
div.previousElementSibling.onclick =  function (){
    div.parentElement.style = "background-color:yellow ; color:green;"
}
div.nextElementSibling.onclick =  function (){
    div.parentElement.style = "background-color:blue ; color:#ed0ed0;"
}*/

/*
div.parentElement.onclick =  function (){
    div.parentElement.style = "background-color:black ; color:#fff;"
}*/
/*
function sayHello(name,age,gender,status){
    console.log(`Hello ${name} Your Age Is:${age} Your Gender :${gender} Your Status :${status}`)
}
setTimeout( sayHello, 3000 ,"Ebrahim",20,"Male","Married");*/

// const count=document.querySelector(".count")
// function calc(){
//     count.innerHTML -=1;
//     if(count.innerHTML === "0"){
//        window.open("https://elzero.org","","width=500,height=400,top=300,left=400")
//     }
// }
// let setCount = setInterval(calc , 200)

/*
var allAncour = document.links;
for(let i=0 ;i<allAncour.length ; i++){
    if(allAncour[i].classList.contains("open") && allAncour[i].innerHTML == "Elzero"){
        window.onload=function (){
           allAncour[i].click()
        }
    }
}*/

/*
function bod(){
    count.innerHTML -=1;
    if(count.innerHTML == "5"){
        
        document.body.style.backgroundColor=window.localStorage.color="red";
      
    }else if(count.innerHTML == "0"){
        document.body.style.backgroundColor=window.localStorage.color="blue";
        count.style.display="none"
        clearInterval(funcInterval)
    }
   
}
let count=document.querySelector(".count")
let funcInterval = setInterval(bod,300)*/


let lis=document.querySelectorAll("ul li");
let div =document.querySelector(".containe");

lis.forEach((li)=>{
    li.addEventListener("click" , (e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("colors" ,  e.currentTarget.dataset.color);
        div.style.cssText=`background-color : ${ e.currentTarget.dataset.color}`
    })
});
if(window.localStorage.getItem("colors")){
    div.style.cssText=`background-color : ${window.localStorage.getItem("colors")}`
    lis.forEach((li)=>{
        li.classList.remove("active")
    })
    document.querySelector(`[data-color = ${window.localStorage.getItem("colors")}]`).classList.add("active");
}

/*
let myNumbers = [1, 2, 3, 4, 5];

let [a,,,,e] = myNumbers;

console.log(a * e); // 5*/

/*

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [a,b,c,[d,e,[f,g]]] =mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel*/

/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let arr = arr3.concat(arr1);
console.log(arr)
let [,a,b,c]=arr
// Write Your Destructuring Assignment Here

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
*/


/*
let inp = document.querySelectorAll("input");
if( window.sessionStorage.value){
    inp.forEach((va)=>{
        va.value=window.sessionStorage.value
    })
}
inp.forEach(function (va) {
    
    va.addEventListener("blur" ,function(e){
       window.sessionStorage.setItem("value" , e.value)
    })
})*/


/*///////////////      LocalStorage Storage */

let onec = document.getElementById("one");
let twoc = document.getElementById("two");
let threec = document.getElementById("three");

let selcc=document.getElementById("selct");
selcc.onchange=function(){
    window.localStorage.setItem("value",selcc.value)
}
onec.onblur=function(){
    window.localStorage.setItem("one",onec.value)
    console.log(onec.value)
}
twoc.onblur=function(){
    window.localStorage.setItem("two",twoc.value)
}
threec.onblur=function(){
    window.localStorage.setItem("three",threec.value)
}
selcc.value =  window.localStorage.getItem("value")
onec.value =  window.localStorage.getItem("one")
twoc.value =  window.localStorage.getItem("two")
threec.value =  window.localStorage.getItem("three")



/* change color bg-color  font family font size */

let sColor= document.getElementById("sColor");
let sBColor= document.getElementById("sBColor");
sColor.onchange=function(){
    window.localStorage.setItem("color",sColor.value)
    document.body.style.color=window.localStorage.getItem("color")
    sBColor.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
    sColor.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
    family.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
    size.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
}
sColor.value=window.localStorage.getItem("color");
document.body.style.color=window.localStorage.getItem("color");


sBColor.onchange=function(){
    window.localStorage.setItem("BgColor" ,sBColor.value);
    document.body.style.backgroundColor=window.localStorage.getItem("BgColor");
    
    sBColor.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
    sColor.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
    family.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
    size.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
}
sBColor.value=window.localStorage.getItem("BgColor");
document.body.style.backgroundColor=sBColor.value




let family = document.getElementById("family");
family.onchange =function(){
    window.localStorage.setItem("fontFamily" , family.value);
    document.body.style.fontFamily=window.localStorage.getItem("fontFamily")
}
family.value=window.localStorage.getItem("fontFamily");
document.body.style.fontFamily=window.localStorage.getItem("fontFamily");





let size=document.getElementById("size");
size.onchange=function(){
    window.localStorage.setItem("fontSize" , size.value);
    document.body.style.fontSize=size.value;
}
size.value=window.localStorage.getItem("fontSize");
document.body.style.fontSize=window.localStorage.getItem("fontSize");


sBColor.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
sColor.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
family.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
size.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`



/*/////////////////////////form Input SessionStorage //////////////*/
let one=document.getElementById("one_t")
let two=document.getElementById("two_t")
let three=document.getElementById("three_t")
let four=document.getElementById("four_t") 
let select=document.getElementById("select_t");
one.oninput=function(){
    window.sessionStorage.setItem("one_t", one.value);
    one.value=window.sessionStorage.getItem("one_t")
}
one.value=window.sessionStorage.getItem("one_t")


two.oninput=function(){
    window.sessionStorage.setItem("two_t", two.value);
    two.value=window.sessionStorage.getItem("two_t")
}
two.value=window.sessionStorage.getItem("two_t")



three.oninput=function(){
    window.sessionStorage.setItem("three_t", three.value);
    three.value=window.sessionStorage.getItem("three_t")
}
three.value=window.sessionStorage.getItem("three_t")


four.oninput=function(){
    window.sessionStorage.setItem("four_t", four.value);
    four.value=window.sessionStorage.getItem("four_t")
}
four.value=window.sessionStorage.getItem("four_t")


select.oninput=function(){
    window.sessionStorage.setItem("select_t", select.value);
    select.value=window.sessionStorage.getItem("select_t")
}
select.value=window.sessionStorage.getItem("select_t")
select.style.cssText=`color:${window.localStorage.getItem("BgColor")} ; background-color:${window.localStorage.getItem("color")}`
/*////////////pop////////////////////*/


/*btn-Font Awesome*/
let btn_Previous = document.querySelector(".image-popu i:nth-child(1)");
let btn_close = document.querySelector(".image-popu i:nth-child(2)");
let btn_next = document.querySelector(".image-popu i:nth-child(3)");
/*popu container*/
let popu_Container = document.querySelector(".popu");
let popu_image = document.querySelector(".image-popu");
/* div color */
let container = Array.from(document.querySelectorAll(".container .image1"))
let counter ;
/*click show popue*/
for(let i =0 ;i<container.length;i++){
    container[i].addEventListener("click",function(e){
        popu_Container.style.display="flex"
        popu_image.style.backgroundColor=e.target.getAttribute("color")
        counter = container.indexOf(e.target);
        console.log(counter)
    })
}
/* Close popue */
btn_close.addEventListener("click" , function(){
    popu_Container.style.display="none"
})
/*next div popue */
btn_next.addEventListener("click",function(){
    counter++;
    if(counter >= container.length){
        counter = 0
    }
    popu_image.style.backgroundColor=container[counter].getAttribute("color")
})

/*btn_previous*/
btn_Previous.addEventListener("click" , function(){
    counter--;
    if(counter < 0 ){
        counter = container.length-1
    }
    popu_image.style.backgroundColor=container[counter].getAttribute("color")
    
    
})



/***Imagessssss */

/*btn-Font Awesome*/
let btn_Previous_img = document.querySelector(".image-popu_img i:nth-child(1)");
let btn_close_img = document.querySelector(".image-popu_img i:nth-child(2)");
let btn_next_img = document.querySelector(".image-popu_img i:nth-child(3)");
/*popu container*/
let popu_img = document.querySelector(".popu_img");
let popu_image_img = document.querySelector(".image-popu_img");
/* div color */
let popu_Container_img = Array.from(document.querySelectorAll(".container_img div img"))
let counter_img ;
/*click show popue*/
for(let i =0 ;i<popu_Container_img.length;i++){
    popu_Container_img[i].addEventListener("click",function(e){
        popu_image_img.style.backgroundImage=`url(${e.target.getAttribute("src")})`
        popu_img.style.display="flex"
        counter_img = popu_Container_img.indexOf(e.target);
    })
}
/* Close popue */
btn_close_img.addEventListener("click" , function(){
    popu_img.style.display="none"
})
/*next div popue */
btn_next_img.addEventListener("click",function(){
    counter_img++;
    if(counter_img >= popu_Container_img.length){
        counter_img = popu_Container_img.length-1
        btn_next_img.style.opacity="0"
        return;
    }
    popu_image_img.style.backgroundImage=`url(${popu_Container_img[counter_img].getAttribute("src")})`
    btn_Previous_img.style.opacity="1"
    // console.log(popu_Container_img[counter_img].getAttribute("src"))
})

/*btn_previous*/
btn_Previous_img.addEventListener("click" , function(){
    counter_img--;
    if(counter_img < 0 ){
        counter_img = 0
        btn_Previous_img.style.opacity="0"
        return
    }
    popu_image_img.style.backgroundImage=`url(${popu_Container_img[counter_img].getAttribute("src")})`
    btn_next_img.style.opacity="1"
    
    
})
