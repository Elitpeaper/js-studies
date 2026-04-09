class Person{
    // def constructor
   constructor(
    firstname = 'defName',
    lastname = 'defLastName',
    age = 'defAge',
    country = 'defCountry',
    city = 'defCity',
    score = 0,
    skills = []
   ) {
    this.firstname = firstname ,
    this.lastname = lastname ,
    this.age = age,
    this.country = country,
    this.city = city,
    this.score = score,
    this.skills = skills
   }
   getFullName(){
    const fullName = this.firstname + " " + this.lastname
    return fullName 
   }
   get getScore(){
    return this.score
   }
   get getSkills(){
    return this.skills
   }
   set setScore(score){
    this.score += score
   }
   set setSkill(skill){
    this.skills.push(skill)
   }
   getPersonInfo(){
    let fullName = this.getFullName()
    let skills =
        this.skills.length > 0 && this.skills.slice(0,this.skills.length -1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
   }

   static favoriteSkill(){
    const skills = ["HTML","CSS","JS","REACT","PYTHON","NODE"]
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
   }
   static ShowDateTime(){
    let now = new Date();
    let year = now.getFullYear()
    let month = now.getMonth() 
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if(hours<10){
        hours = '0' + hours
    }
    if(minutes<10){
        minutes = '0' + minutes
    }
    let dateMonthYear = date + "." + month + '.' + year
    let time = hours + ":"+ minutes
    let fullTime = dateMonthYear + time
    return fullTime 
}
}

const person = new Person()
console.log(person)

const person1 = new Person('elit','peaper', 25, 'turkey','muğla')
console.log(person1)
console.log(person1.getFullName())
console.log(person1.getScore)
console.log(person1.getSkills)
person1.setScore = 15
person1.setSkill = 'entry Writer'
person1.setSkill = 'musician'
console.log(person1.getPersonInfo())

console.log(Person.favoriteSkill())
console.log(Person.ShowDateTime())

class Student extends Person{
    constructor (firstname,  lastname, age,country, gender){
        super(firstname,  lastname, age,country)
        this.gender = gender 
    }
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = 
            this.skills.length > 0 && this.skills.slice(0,this.skills.length -1)
            .join(' ,') + ` and ${this.skills[this.skills.length -1 ]} ` 
        let formattedSkills = skills ? ` He knows ${skills}` : ''
        let pronoun = this.gender == "Male" ? "he" : "she"
        let info = ` ${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info 
    }
}

const s1 = new Student('ahmet','durak',28,'usa','male')
s1.setScore= 1
s1.setSkill = 'ruby'
s1.setSkill = 'kotlin'
s1.setSkill = 'c++'
s1.setkill = 'asdsad'

const s2 = new Student('son','min', 36 , 'japan' ,'male ')
s2.setScore= 50 
s2.setSkill = 'java'
s2.setSkill = 'writer'
s2.setSkill = 'manager'

console.log(s1)
console.log(s1.getPersonInfo())
console.log(s2)
console.log(s2.getPersonInfo())
console.log(s2.getFullName())
