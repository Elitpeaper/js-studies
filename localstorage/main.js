localStorage.setItem('name','alex')

localStorage.setItem('age', 25)
let skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]
const skillsJSON = JSON.stringify(skills,undefined)
localStorage.setItem('skills',skillsJSON)


const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}
const userTEXT = JSON.stringify(user)
localStorage.setItem('user',userTEXT)

const user2  = {
    firstName2 : 'vlad',
    age2 : 50 ,
    skills2 : ['HTML', 'CSS', 'JS', 'React']
}
const userTwoJSON = JSON.stringify(user2)
localStorage.setItem('user2',userTwoJSON)  

let skills3 = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills3)
console.log(skillsObj)


const userExample = {
    firstName : 'ismail',
    lastName : 'dörtkardeş',
    age : 31 ,
    country : 'türkiye',
    city : 'istanbul'
}

const userExampleJSON = JSON.stringify(userExample)
localStorage.setItem('userExample',userExampleJSON)


const PersonAccount = {
    ad : 'Ali',
    soyad : 'Emeksiz',
    gelirler : [],
    giderler : [],
    addIncome(description,amount){
        this.gelirler.push({description,amount})
    },
    addExpense(description,amount){
        this.giderler.push({description,amount})
    },
    totalIncome(){
        return this.gelirler.reduce((total,gelir) => total + gelir.amount, 0)
    },
    totalExpense(){
        return this.giderler.reduce((total,gider)=> total + gider.amount, 0)
    },
    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    },
    accountInfo(){
        return `Ad : ${this.ad} , Soyad : ${this.soyad}
        Toplam gelir : ${this.totalIncome()} TL
        Toplam gider : ${this.totalExpense()} TL
        Bakiye : ${this.accountBalance()}`
    }
}
PersonAccount.addIncome("Maaş",30000)
PersonAccount.addIncome("Freelance", 15000)

PersonAccount.addExpense("Kira",15000)
PersonAccount.addExpense("Yemek",5000)

console.log(PersonAccount.accountInfo())

const PersonAccountJSON = JSON.stringify(PersonAccount)
localStorage.setItem('person Account',PersonAccountJSON)
console.log(localStorage)