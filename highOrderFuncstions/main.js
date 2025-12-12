// parametre alan fonksiyonlara callback fonksiyonları denir 
const cbfunc = (number) => number ** 2 
function cube(cbfunc,number) {
    return cbfunc(number) * number
}


console.log(cube(cbfunc,3))

// highorder func geriye fonksiyon döndürebilen fonkiyonlardır 
const a = s1 =>{
    const b = s2 =>{
        const c = s3 =>{
            return s1+s2+s3
        }
        return c
    }
    return b
}
console.log(a(10)(20)(30))


const numbers = [1,5,4,7,8,9]
let total = 0

//numbers.forEach(number => total += number)
/*numbers.forEach(number => {
    total += number
});*/
let sum = number => total+= number
numbers.forEach(sum)
console.log(total)

let sayHello =()=> console.log('Hello')
//setInterval(sayHello,10000) her 1 saniye de bir sayhello fonksiyonu çalışır 
//setTimeout(sayHello,1000) bu fonskiyon çalıştıktan 1 saniye sonra sayhello fonksiyonu çalışır

const interval = setInterval(sayHello,1000)

setTimeout(() => {
    clearInterval(interval)
    console.log('interval işlemi iptal edildi')
}, 5000);


const numbers2 = numbers.map(number => number*2)
console.log(numbers2)

console.log(numbers.filter(number => number > 3 && number < 9))

let users = [
    {
        id : 2,
        name  :'ahmet',
        age : 58,
        gender : 1
    },
    {
        id : 1,
        name  :'mehmet',
        age : 15,
        gender : 1
    },
    {
        id : 3,
        name  :'samet',
        age : 27,
        gender : 1
    },
    {
        id : 4 ,
        name : 'eda',
        age : 33,
        gender : 2
    }
]

users.sort((a,b) => a.id - b.id)

console.log(users)

users = users.map(user => {
    if(user.id === 2 ){
        user.name = 'hakan'
    }user
    return user
})
console.log(users)

const women = users.filter(user => user.gender === 2)
const men = users.filter(user => user.gender === 1)

console.log(women)


console.log(users.every(user => user.gender === 1)) // her bir elemanın gender değeri 1 ise true değerini dönürür
console.log(users.some(user => user.gender === 1)) // elemanlardan bazıları veya biri nin gender değeri 1 ise true değerini dönürür 
console.log(users.find(user => user.age < 20)) // bu koşula ilk uyan elemanı bulur 
console.log(users.findIndex(user => user.age < 20)) // bulunan elemanın kaçıncı index de olduğunu gösterir ( dizilerde kullanmak daha iyi)

const redsum = numbers.reduce((acc,val) => acc+val , 0)
console.log(redsum) // reduce ile kısa toplama 


const names =[
    'ahmet','mehmet','cemil'
]
console.log(names.sort())

console.log(numbers.sort((a,b ) => a - b )) // sayılarda küçükten büyüğe sıralama 
console.log(numbers.sort((a,b) => b-a)) // numaralarda büyükten küçüğe sıralama

console.log(names.sort((a,b) => a.localeCompare(b)) // aynı sayılar mantığında alfabetik sıralama 
)
console.log(names.sort((a,b) => b.localeCompare(a)) // bir üst satırdaki işlemin tersi
)