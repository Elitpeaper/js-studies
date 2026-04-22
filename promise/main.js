//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(true,skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)

const doPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const skills = ['html','css','js']
        if(skills.length> 0){
            resolve(skills)
        } 
        else{
            reject('somethings wrong has happened')
        }
    }, 2000);
}) 

doPromise.then(result => {
    console.log(result)
}).catch(error => console.log(error))

const doPromise_2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        const skills = ['html','css','js']
        if(skills.includes('react')){
            resolve('seniour frontend dev')
        }
        else{
            reject('joniour frontend dev')
        }
    }, 3000);
})

doPromise_2.then(result => console.log(result)).catch(error => console.log(error))


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));


// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));


const url = 'https://restcountries.com/v3.1/all?fields=capital,name' // countries api
fetch(url)
  .then(response => response.json()) // API verilerine JSON olarak erişme
  .then(data => {
    // verileri almak
    console.log(data)
  })
  .catch(error => console.error(error)) // yanlış bir şey olursa işleme hatası

async function dilSayisi() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=languages")
    const data = await res.json()
    // const tumDiller = data.flatMap(ulke => Object.values(ulke.language || {}))
    const tumDiller = data
  .filter(ulke => ulke.languages)
  .flatMap(ulke => Object.values(ulke.languages));

    const benzersizDiller = [...new Set(tumDiller)]
    console.log(benzersizDiller.length)
    return benzersizDiller.length
}
dilSayisi()


async function dilKullanimsayisi() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=languages")
    const json = await res.json()
    const data = Array.isArray(json) ? json : json.data || json.results || []

    const dilSayaci = {}
   
  data.forEach(ulke => {
    if (ulke.languages) {
      Object.values(ulke.languages).forEach(dil => {
        dilSayaci[dil] = (dilSayaci[dil] || 0) + 1;
      });
    }
  });

  console.log(dilSayaci)
}
dilKullanimsayisi()

async function ulkeDilSayisi() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=languages,name")
    const json = await res.json()
    const data = Array.isArray(json) ? json : json.data|| json.results || []

    const ulkeDilSayisi={}
    data.forEach(ulke=>{
        const ulkeAdi = ulke.name?.common || ulke.name
        if(ulke.languages){
            const dilSayisi = Object.keys(ulke.languages).length
            ulkeDilSayisi[ulkeAdi] = `${dilSayisi} adet dil kullanılıyor`
        }else{
            ulkeDilSayisi[ulkeAdi] = `0 adet dil kullanılıyor`
        }
    })
    console.log(ulkeDilSayisi)
}
ulkeDilSayisi()

async function Top10cokDilliUkle() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=languages,name")
    const json = await res.json()
    const data = Array.isArray(json) ? json : json.data
    const sonuc =[]
    data.forEach(ulke => {
        const ulkeAdi = ulke.name?.common || ulke.name
        const dilSayisi = ulke.languages ? Object.keys(ulke.languages).length : 0
        

        sonuc.push({
            country : ulkeAdi,
            languages : dilSayisi
        })
    })
    const sirali = sonuc.sort((b,a) => a.languages - b.languages ).slice(0,10)
    sirali.forEach((ulke,index) =>{
        console.log(`${index + 1 }. ${ulke.country} - ${ulke.languages} dil`)
    })
    console.log(sirali)
}
Top10cokDilliUkle()

async function test() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=languages");
  
  console.log("status:", res.status);
  
  const text = await res.text();
  console.log(text);
}

test();

const square = async function(n){
    return n*n   
}
async function main() {
    const value = await square(2)
    console.log(value)
}
main()

const fetchData = async() => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        const countryNames = countries.map(country => country.name)
        console.log(countryNames)
        return countryNames
    }catch(err){
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()

async function kedilerGetir() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const cats = await response.json()
    const catNames = cats.map(cat => cat.name.length > 7 ? cat.name : null)
    console.log(catNames)
    return catNames 
}

kedilerGetir()
/*
async function enCokKonusulanDiller() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=languages");
  const data = await res.json();

  const dilSayaci = {};

  data.forEach(ulke => {
    if (ulke.languages) {
      Object.values(ulke.languages).forEach(dil => {
        dilSayaci[dil] = (dilSayaci[dil] || 0) + 1;
      });
    }
  });

  const sirali = Object.entries(dilSayaci)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  console.log("TOP 10 DİL:");
  sirali.forEach(([dil, sayi], index) => {
    console.log(`${index + 1}. ${dil} - ${sayi} ülkede konuşuluyor`);
  });

  return sirali;
}
async function grafikCiz() {
  const topDiller = await enCokKonusulanDiller();

  const labels = topDiller.map(item => item[0]); // dil isimleri
  const values = topDiller.map(item => item[1]); // sayılar

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Konuşulduğu ülke sayısı",
        data: values,
        borderWidth : 2
      }]
    }
  });
}

grafikCiz();

*/

let tumVeri = []

async function verileriGetir() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=languages,name")
    const data = await res.json()

    tumVeri=data.map(ulke=>{
        const ulkeAdi = ulke.name?.common || ulke.name
        const dilSayisi = ulke.languages ? Object.keys(ulke.languages).length : 0
        return {
            country : ulkeAdi,
            languages : dilSayisi
        }
    })
    tabloyuGuncelle(tumVeri)
}

function tabloyuGuncelle(veri){
    const tbody = document.getElementById("tableBody")
    tbody.innerHTML = ""

    veri.forEach(item => {
        const row = `
        <tr>
        <td>${item.country}</td>
        <td>${item.languages}</td>
        </tr>`
        tbody.innerHTML += row
    });
}

document.getElementById("search").addEventListener("input",(e) => {
    const arama = e.target.value.toLowerCase()
    const filtreli = tumVeri.filter(item=> 
        item.country.toLowerCase().includes(arama))
        tabloyuGuncelle(filtreli)
})
verileriGetir()
console.log(verileriGetir())