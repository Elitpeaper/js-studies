//let msg = 'merhaba dünya';  

function sayhello(){
    let msg = 'hello world';
    return msg ;
}

let hi = sayhello()

console.log(hi);    


function multply(a,b){
    return a * b ;

}

let total = multply(5,6);

console.log(`toplam ${total}`); 

function sumArrayValues(arr){
    let sum =  0;
    for (let i = 0 ; i < arr.length; i++){
        sum = sum +  arr[i];
    }
    return sum ;
}
const numbers = [1,2,3,4,5];
console.log(sumArrayValues(numbers));

const areaofcircle = radius => Math.PI * radius * radius ;

const sayilarArrow = (...sayilar) => {
    console.log(sayilar)
}

function toplamaArrow(...sayilar){
    let sum = 0 ;
    for(i= 0; i<sayilar.length;i++){
        sum += sayilar[i]
    }
    return sum
}
console.log(toplamaArrow(5,4,87,6,2,1,4,5,6))
sayilarArrow(5,4,87,6,2,1,4,5,6)

console.log(areaofcircle(10))

let areofcircle1 = (radius) => {
    radius = Math.PI * radius * radius ;
    return radius 
}

console.log(areofcircle1(10))


function sumallnumbs(){
    let sum = 0
    for(let i = 0 ; i < arguments.length; i++){
        sum += arguments[i]
    } 
    return sum
}

const infiniteNumbers = sumallnumbs(1,2,3,4,5,6,7,8,9,10)

console.log(infiniteNumbers)

// anonymous function 

const anonymousFun = function(){
    console.log('I am a anonymous function and my value is stored in anonymousFun')
}

anonymousFun()

const anonySayHello = function(name){
    return `Hello ${name}`
}

console.log(anonySayHello("ali"))

const sqaure = function(n){
    return n*n 
}

console.log(sqaure(5))
// kendi kendini çağıran fonksiyon
;(function(){
    console.log('sa')
})();

let squaredNum = (function(n){
    return n *n 
})(10)

console.log(squaredNum)

;(function(){
    console.log("sayfa yüklenir yüklenmez çalışırım")
})()

let sayhelllo2 = (function(name){
    console.log(name)
    return name 
})('ali')

console.log(typeof sayhelllo2)

// reduce kullanımı 

const sayilar = [1,5,9,7,9,8,6]

const toplamReduce = sayilar.reduce((acc,val) => acc + val )
console.log(`reduce ile toplama sonucu : ${toplamReduce}`)

const toplamReduceExplain = sayilar.reduce((gosterilenDeger, sira) => {
    console.log(`gösterilen değer : ${gosterilenDeger}, sırası : ${sira}`)
    return gosterilenDeger + sira 
},0);

console.log(`reduce toplam açıklamalı ${toplamReduceExplain}`)


function mesage(user_name){
    console.log(`merhaba ${user_name} bugün fonksiyonlar konusunu tamamladık`)
} 

mesage("ali")

function toplam3(a,b,c){
    return a + b + c 
}
console.log(toplam3(1,2))

function soru1(a){
    return a*2
}
console.log(soru1(5))

const soru2 = (a,b) =>{
    return a + b 
}
console.log(soru2(1,2))

function soru3(a,b=5 ){
    return a*b 
}
console.log(soru3(4,5))

const soru4 =( a,b) => x-y

let dizi =[1,2,3,4,5,6,7]
const dizikaresi = dizi => {
    let yenidizi = [] 
    for(i=0; i<=dizi.length;i++){
        let kare = i*i
        yenidizi.push(kare)
    }
    return yenidizi
}

console.log(dizikaresi(dizi))