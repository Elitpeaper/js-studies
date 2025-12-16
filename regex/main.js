let str = 'ben 30 yaşındayım ve 1993 yılında doğdum'
let username = 'mehmet koç'

//let pattern ='love'
//let flag = 'gi'
//let regEx = new RegExp(pattern,flag)
//console.log(regEx)

let word = /salak/i // büüyk küçük harf duyarsızlığı oluşturmak i,çin i kullanıyoruz 
// let commit = prompt('yorumunu yaz')


/*
if(word.test(commit)){
    alert('küfür etme')
}
    */

let string = 'ı    LOve javscript and i love cats'
console.log(string.match(/love/ig))

const txt = 'python is the most beautiful language that a human begin has ever craeated I recommend python for a first programming language'
matchReplaced = txt.replace(/python/ig,'Javascript')
console.log(matchReplaced)

console.log(str.match(/\d+/g)) // d sayıları ifade eder, + bu sayıları gruplu olarak gösterir + g ise global yani değişkendeki bütün sayıları alır 