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

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(ages) {
        this.ages = ages
    }

    count() {
        return this.ages.length
    }

    sum() {
        return this.ages.reduce((a, b) => a + b, 0)
    }

    min() {
        return Math.min(...this.ages)
    }

    max() {
        return Math.max(...this.ages)
    }

    range() {
        return this.max() - this.min()
    }

    mean() {
        return Math.round(this.sum() / this.count())
    }

    median() {
        const sorted = [...this.ages].sort((a, b) => a - b)
        const mid = Math.floor(sorted.length / 2)

        if (sorted.length % 2 === 0) {
            return Math.floor((sorted[mid - 1] + sorted[mid]) / 2)
        } else {
            return sorted[mid]
        }
    }

    mode() {
        const freq = {}

        this.ages.forEach(num => {
            freq[num] = (freq[num] || 0) + 1
        })

        let maxCount = 0
        let mode = null

        for (let key in freq) {
            if (freq[key] > maxCount) {
                maxCount = freq[key]
                mode = Number(key)
            }
        }

        return { mode, count: maxCount }
    }

    var() {
        const mean = this.mean()
        const variance = this.ages.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / this.count()
        return Number(variance.toFixed(1))
    }

    std() {
        return Number(Math.sqrt(this.var()).toFixed(1))
    }

    freqDist() {
        const freq = {}

        this.ages.forEach(num => {
            freq[num] = (freq[num] || 0) + 1
        })

        return Object.entries(freq)
            .map(([num, count]) => [(count / this.count() * 100).toFixed(1), Number(num)])
            .sort((a, b) => b[0] - a[0])
    }
}

const statistics = new Statistics(ages)
console.log(statistics.count())

console.log('Count:', statistics.count())
const usersData = [
    {name : "ali" , age : 25},
    {name : "alex" , age : 55},
    {name : "samet", age : 45},
    {name : "melek", age : 18},
    {name : "zeynep" , age : 22}
]

class UserService {
    constructor(users){
        this.users = users    
    }
    sortByAge(){
        return this.users.sort((a,b) => a.age - b.age).map(user=> user.age)
    }
    sortByAgeDesc(){
        return this.users.sort((a,b) => b.age-a.age).map(user=>user.age)
    }
    filterByName(name){
        return this.users.filter(user=> 
            user.name.toLowerCase().includes(name.toLowerCase())
        ).map(user=>user.name)
    }
    getAvarageAge(){
        const sum = this.users.reduce((acc,user)=> acc+user.age,0)
        return (sum / this.users.length).toFixed(1)
    }
}

const service = new UserService(usersData)

console.log("Küçükten Büyüğe : " + service.sortByAge())
console.log("Büyükten Küçüğe : " + service.sortByAgeDesc())
console.log("İsime göre : " + service.filterByName("a"))
console.log("Ortalama Yaş : " + service.getAvarageAge())

function a(){
    const arr = [10,20,30,5,86]
    return arr.sort((a,b) => a - b )
}

console.log(a())

