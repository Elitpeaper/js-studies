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
   set setSkills(skills){
    this.skills.push(skills)
   }
   getPersonInfo(){
    let fullName = this.getFullName()
    let skills =
        this.skills.length > 0 && this.skills.slice(0,this.skills.length -1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
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
person1.setSkills = 'entry Writer'
person1.setSkills = 'musician'
console.log(person1.getPersonInfo())