// destructuring -> şekilini bozma 
// spread -> dağılma, yayılma 
// rest -> kalanın tamamı

const numbers = [10,12,14]

const [number1,number2] = numbers

/*
console.log(numbers[0]) // 10
console.log(number1) // 10

console.log(numbers[1]) // 12
console.log(number2) // 12
*/

const stack = [
    ['html','css',['javascript','react','svelte']],
    ['php','mysql','nodejs']
]

const [frontend,backend] = stack
const [[firstlanguage, secondlanguage,thirdlanguage]] = stack


console.log(frontend,backend)
console.log(firstlanguage,thirdlanguage)


// rest 

const nums = [1,2,3,4,5,6,7,8,9]
let [num1, num2 , num3 , ...rest] = nums 
console.log(num1,num2,num3)
console.log(rest)


const names = ['ali','ahmet','hakan','samet','buğra']
const [name1, name2, name3 , ...othernames] = names

console.log(name1 , name2, name3)
console.log(othernames)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweneden','Stockholm'],
    ['Norway','Oslo'],
    ['Turkey','Ankara']
]

for(const [country,capital] of countries){
    console.log(`ülke : ${country} - başkent : ${capital}`)
}

const rectangle ={
    width : 20 , 
    height : 10 ,
    area : 200
}
let {width, height, area, primeter} = rectangle // bir objeyi dağıttığımız için değişkenlerimizin ismi objedeki keyler ile aynı olmak zorunda ve köşeli parantez yerine süslü parantez kullanmalıyız 
console.log(width,height,area,primeter)

let {width:w , height: h , area: a , primeter :p} = rectangle // eğer istersen değişkenleri yeniden de adlandırabilirsin
console.log(w,h,a,p)

/*
const sayilar = [1,3,4,5,32]
const [say1:sayi1, say2:sayi2,say3:sayi3] = sayilar
    bir üstteki yeniden adlandırma özelliğini dizilerde kullanamıyoruz çünkü yeniden adlandırılmaya ihtiyaçlarlı yok kullanmak istediğimizde hata alırız 
*/

function multiply([number1, number2]){
    return number1 * number2 
}

console.log(multiply(numbers))

const rect = {
    width : 20,
    height : 10
}

const CalculatePerimeter = rectangle =>{
    return 2*(rectangle.width + rectangle.height)
}

console.log(CalculatePerimeter(rect))


const user= {
    name : 'ali',
    surname : 'toprak',
    age : 25,
    pets :{
        cats :['kimyon'],
        dogs :['lokum']
    }
}

const {pets:{cats,dogs}} = user

function showUserInfo({name,surname,age,pets :{cats,dogs}}){
    return `merhaba ben ${name} ${surname} ${age} yaşındayım ${cats.length} tane kedim ve ${dogs.length} tane köpeğim var`
}

console.log(showUserInfo(user))

/*const sayilar = [1,2,3,4]
const sayilar2 = sayilar
console.log(sayilar)
sayilar2.push(20)
console.log(sayilar) // bir diziden referans alıp diğer diziye sayı eklemek istediğimizde 
                    referans aldığımız dizi de etkilenir bunu önlemek için spread operatörünü kullanıyoruz
*/

const sayilar =[1,2,3,4]
const sayilar2 = [...sayilar]
console.log(`sayilar 1 dizesi ${sayilar}`)
console.log(`sayilar 2 dizesi ${sayilar2}`)
sayilar2.push(20)
console.log(`sayilar 1 dizesi ${sayilar}`)
console.log(`sayilar 2 dizesi ${sayilar2}`)

console.log([0,...sayilar,6])