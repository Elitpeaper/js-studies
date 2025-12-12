ad = "ali" // window scope
a = 'JavaScript'
b = 10
function letsLearnScopes(){
    console.log(a,b)
    if(true){
        console.log(a,b)
    }
}
console.log(a,b)
letsLearnScopes() // değişkenler window scope ile tanımlandığı için window un her yerinden erişilebilir


// global scope 
let c = 'Js' // is a global scope it will be found anywhere in this file
let d = 5  // is a global scope it will be found anywhere in this file  
function letslearnglobalscope(){
    console.log(c,d)
    if(true){
        let c = 'pip'
        let d = 100
        console.log(c,d)
    }
    console.log(c,d)
}
letslearnglobalscope()
console.log(c,d)

function varscope(){
    var gravity = 9.81
    console.log(gravity) // accassible
}
//console.log(gravity) // not accessible
varscope()

for(var i =  0 ; i<5; i++){
    console.log('i',i)
}console.log('son i',i)

function examples1(){
    // u can use let or const, but gravity is constand(sabit) I prefer to use const 
    const gravity = 9.81
    console.log(gravity)
}

if(true){
    const gravity = 9.81 
    console.log(gravity)
}

for(let i = 0 ; i<7 ; i++){
    console.log(i)
}

// objects 

const person  =  {
    firstName  : "alex",
    surName : "smith",
    age : 21 ,
    country  : "finland",
    city : "helsinki",
    skills :[
        "html",
        "css",
        "js",
        "react",
        "node",
        "mongodb",
        "python",
    ],
    getFullName: function(){
        return `${this.firstName} ${this.surName}`
    },
    'phone number': '+6556165432',
    test : {
        deneme  :"deneme text"
    },
    keyName : ''
}
console.log(person.firstName)

console.log(person.test.deneme)

console.log(person['phone number'])

console.log(person.getFullName())

keyName = 'skills'

console.log(person['keyName'])

person.keyName = 'random'
console.log(person.keyName)

person.skills.push('flutter','react native','svelte')
person.title = 'Software engineer'
console.log(person.skills)

const formatter = new Intl.ListFormat('tr',{
    style: 'long' , type : 'conjunction'
})

person.getPersonİnfo = function(){
    //let skillsWithoutLastOne = this.skills.splice(0, this.skills.length-1).join(', ')
    //let lastskill = this.skills.at(-1)
    //let skills = `${skillsWithoutLastOne} and ${lastskill}`
    let skills = formatter.format(this.skills)
    let fullname = this.getFullName()
    let statemant = `${fullname} is a ${this.title}.\nHe lives in ${this.country} .\nHe theachs ${skills}`
    return statemant
}

console.log(person.getPersonİnfo())

//let newUser = person  referanslı kopyalama 
//let newUser = Object.assign({},person)  bu da kullanılabilir ya da bir alt satırdakini de kullanabilirsin
let newUser = {...person}
//console.log(person)
newUser.firstName = "murat"
//console.log(newUser)

console.log(Object.keys(person))
console.log(Object.values(person))

for(let [key,val] of Object.entries(person)){
    console.log(key,val)
}

console.log(Object.entries(person))

console.log(person.hasOwnProperty('country') )

Object.freeze(person)// person objesini donduruyoruz ve bir daha yeni bir atama yapılmasını engelliyoruz8
Object.isFrozen(person)// obje dondurulmuşsa true değeri döner
Object.seal(person)// objedeki var olan key lerin value ları değiştirilebilir 
Object.isSealed(person)// eğer obje değiştirilmişse true değeri döner 

let array = [4,5,7,8,6,78]
/*function lastelement(arr){
    let lastelementarr = arr.at(-1)
    console.log(lastelementarr)
    return lastelementarr
}*/
const lastelement = (arr) => console.log(arr.at(-1))

lastelement(array)