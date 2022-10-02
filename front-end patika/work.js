//  let serverName;
//  console.log(serverName)
//  serverName="https//kodluyoruz.org"
// console.log(serverName)
// let password=( "1234");
// console.log(password)
// let fullname="erol öz";
// console.log(fullname)
// fullname="erkan öz"
// console.log(fullname)
// fullname = fullname+" alime öz"
// console.log(fullname)

// // let fiyat=100
// let kdv=0.18
// let kdvtutarı=fiyat*kdv
// console.log(
    
//     "fiyat=",fiyat,
//     "kdv=", kdv, 
//     "kdvtutarı=",kdvtutarı,
//     "total fiyat",kdvtutarı+fiyat
//     )
    
// let counter=320
// counter=counter+1
// console.log(counter)

// veya

// counter+=1
// counter ++;
// console.log(counter)
// counter --;
// console.log(counter)
// counter*=10
// console.log(counter)
// counter/=2
// console.log(counter)





//işlem önceliği
// console.log(2+3*10)
// console.log( (2+3)*10)




// // mod(kalan ) bulma sayı tek mi çift mi
// console.log(3%2)
// console.log(15%2)       //   1 ise tek 15 in ikiye bölümünden kalanı
// console.log(14%2)       // 0 ise çift  14 in ikiye bölümünden kalanı



// //8 ürün alan koliye tüm ürünler sığıyor mu?
// console.log("koli örneği",8%8)
// console.log("koli kalan ürün örneği",18%8)






// üs alma
// console.log(2*2*2*2)
// console.log(2**4)



// aşşağı yuvarlama işlemi -----> Math.floor
// console.log("aşşağı yuvarlama",Math.floor(1.7))


// //yukarı  yuvarlama işlemi -----> Math.ceil
// console.log("yukarı yuvarlama",Math.ceil(1.4))




// yakına yuvarlama işlemi
// console.log("yakına yuvarlama",Math.round(1.2))
// console.log("yakına yuvarlama",Math.round(1.8))






// tırnak içine aldığımız için metinsel bir ifade olarak kabul ediyor.
// let stringNumber="11"
// console.log(stringNumber)




//  bu şekilde onun bir sayı olduğunu tanımladık
//  let newnumber=Number(stringNumber)
//  console.log(newnumber)







//  function toplama(a,b){
//     let toplam;
//     toplam = a + b
//     console.log(toplam)
// }

// toplama(5,7)

// toplama(6545646546545,87979789789798)



// function çarpma(c,k){
//     let çarpma;
//     çarpma = c*k
//     console.log(çarpma)
// }


// çarpma(70,14)







// BOOLEAN VERİ TÜRÜ İLE ÇALIŞMAK


// let isActive=false //0
// isActive=true //1
// console.log(isActive)


// let userName;
// let isUserName=Boolean(userName)
// console.log(isUserName)


// Boolean("11")   //true
// Boolean("0")    //true
// Boolean("")     //false


// userName="user"
// console.log("userName var mı :",Boolean(userName))


// let erol=Boolean(0)      //false 
// let ayşegül=Boolean(-0)     //false  
// let mavi=Boolean(-0.1)   //true
// console.log(erol,ayşegül,mavi)
// Boolean(0===0)  //true


// userName="user"
// Boolean(userName.length>0) // true








// veri türünü öğrenmek typeof:

// let price=111
// let stringPrice="111"
// let hasPassword=true

// console.log(
//     "price:",
//     typeof (price)
// )

// console.log(
//     "stringPrice:",
//     typeof (stringPrice)
// )


// console.log(
//     "hasPassword:",
//     typeof (hasPassword)
// )




// console.log(typeof("11") ==="string")






// string(metinsel) bilgileri int ve float'a dönüştürmek 

// let number1="11"
// console.log("number1: ", parseInt(number1)) 



// let number2="11"
// number2=parseInt(number2)
// console.log("number2: ",number2,typeof(number2)) 



// let number3="11px"
// number3=parseInt(number3)
// console.log("number3: ",number3,typeof(number3))



// let number4="11.4px"
// number4=parseFloat(number4)
// console.log("number4: ",number4,typeof(number4))





// number veri tipini sting'e dönüştürmek

// let number5=55
// number5=number5.toString()
// console.log(number5,typeof (number5))










// let username="hakan"
// const DOMAIN="kodluyoruz.org"
 
// let email=username+"@"+DOMAIN

// console.log("Merhaba,",username,"sitemize hoşgeldin","mail adresin:",email)





// let info=`merhaba ${username} sitemize hoşgeldin..
// mail adresin: ${email}
// mail adresinin uzunluğu:${email.length}
// borcunuz:${(2+3)*5} TL
// günün saat bilgisi:${new Date().getHours()}
// kısa isminiz:${username[0]}.`
// console.log(info)


// const kitap = {
//     ad: "Fırtına",
//     yazar: "Shakespeare",
//     tarih: 1610}



//     const bookTable =`
// kitap:${kitap.ad} 
// yazar:${kitap.yazar}
// tarih:${kitap.tarih}`
// console.log(bookTable)


// const kitap={
// isim:"mavi",
// yazar:"esfehan",
// tarih:"2022",
// konu:"yıldızlı bir gecede uyumak"

// }

// const kitapaşk=
// `huzura yolculuk!
// isim:  ${kitap.isim}
// yazar: ${kitap.yazar}
// tarih: ${kitap.tarih}
// konu:  ${kitap.konu}
// `
// console.log(kitapaşk)




// let email="erolozhit@gmail.com"
// let isim="erol"
// let soyisim="öz"


// string karakter sayısı ---> length(uzunluk)

// console.log(email.length)

// ilk karakterini bulmak

// console.log(isim[0])
// console.log(isim[1])
// console.log(isim.charAt(1))








// BÜYÜK HARF // KÜÇÜK HARF 

// isim=isim.toUpperCase()
// console.log(isim)


// isim=isim.toLowerCase()
// console.log(isim)









// string içinde istediğimiz bilgiyi aramak ve yerini bulmak--->
// console.log(email.search("@"))
// console.log(email[9])


// email.search("olmayan") /// -1







// belli bir yere kadar al--->:

// console.log(email.slice(0,6))

// console.log(email.slice(0,4))

// console.log(email.slice(15))










// belli bir yere kadar al--->:DOMAIN BİLGİSİ

// let DOMAIN=email.slice(email.search("@")+1)
// console.log(DOMAIN)











// karakterin index numarasını verme
// console.log(DOMAIN.indexOf("."))

// console.log(DOMAIN.slice(0,DOMAIN.indexOf("."))) //Sadece gmail kısmını aldık


















// bilgiyi değiştir--> replace:

// email=email.replace("gmail.com","kodluyoruz.org")
// console.log(email)













// istediğim bilgi var mı-->includes:
 
// console.log(email.includes("@"))

// console.log(email.includes("7"))

// istediğim bilgiyle başladı mı ? Bitti mi --> startsWith,endsWith :
// console.log(email.endsWith("@")) 

// console.log(email.endsWith("g"))

// console.log(email.endsWith("kodluyoruz.org"))

// console.log(email.startsWith("erolozhit"))


// ilk harflerini büyük yapmak 

// let isimler =`${isim[0].toUpperCase()}${isim.slice(1)} ${soyisim[0].toUpperCase()}${soyisim.slice(1)    }`
// console.log(isimler)





// DOM
// console.log(document.URL)
// console.log(document.location)
// console.log(document.location.pathname)
// console.log(document.body)
// console.log(document.body.tagName)
// console.log(document.body.translate)
// console.log(document.head)
// console.log(document.head.draggable)

// document.body.style.backgroundColor="aqua"


// DOM İÇERİSİNDEN ETİKET VE ID İLE ÖĞE SEÇİMİ

// let title=document.getElementById("title")
// console.log(title)
// console.log(title.innerHTML)
// console.log(title.innerHTML="Elveda dünya")



// şu şekilde de kullanabiliriz=
// let title=document.getElementById("title")
// title.innetHTML="Elveda dünya"
// console.log(title.innerHTML)












// let link=document.querySelector("ul>li>a")
// console.log(link)
// console.log(link.innerHTML)










// let metin=document.querySelector("h4#paragraf>p")
// console.log(metin)
// console.log(metin.innerHTML)
// metin.style.color="red"
// metin.classList.add("btn")







// let teşekkür=document.getElementById("şükür")
// teşekkür.innerHTML+=" ve ölüm"
// console.log(teşekkür)
















// PROMPT///////////////////////
// let fullname=prompt("lütfen adınızı giriniz: ")

// let title=document.querySelector("#title")
// title.innerHTML=`${title.innerHTML} <small style="color:red">${fullname}</small>`










// /liste içerisindeki öğeye erişmek ve yeni öğe eklemek

// let lastchild=document.querySelector("ul#list>li:last-child" )
// let firstchild=document.querySelector("ul#list>li:first-child" )
// firstchild.innerHTML="ilk öğe değişti..."

// console.log(lastchild,firstchild)












// uldom.append(lidom)

// let uldom=document.querySelector("#list")
// let lidom=document.createElement("li")
// let ilkdom=document.createElement("li")
// lidom.innerHTML="kendi oluşturduğumuz oge"
// ilkdom.innerHTML="kendi oluşturduğum ilk öğe"
// uldom.append(lidom)
// uldom.prepend(ilkdom)











//DOM'a css class bilgisi eklemek veya çıkarmak

// let title=document.querySelector("#title")
// title.classList.add("erol")
// title.classList.add("ayşegül")
// title.classList.add("mavi","esfehan","sokrat") //birden fazla class vermek

// title.classList.remove("erol")
// title.classList.remove("mavi","esfehan") //birden fazla class silmek

// console.log(title.classList)





// let price="100"
// let user="quest"

// // //==EŞİTSE
// console.log(price==1)
// console.log(price==100)


// // //===HEM DEĞERİ HEM DE TÜRÜ EŞİTSE
// console.log(price===1)
// console.log(price===100)


// // //!=EŞİT DEĞİLSE

// console.log(user!="quest")



// // //<KÜÇÜKSE
// console.log(price<100)
// console.log(price<200)




// // //KÜÇÜK VEYA EŞİTSE
// console.log(price<=100)
// console.log(price<=90)






// // //>BÜYÜKSE
// console.log(price>200)
// console.log(price>90)



// // //>=BÜYÜK VEYA EŞİTSE

// console.log(price>=100)
// console.log(price>=1000)





// // //&& VE


// console.log(price && user !="quest")//kullanıcı var mı ve user quest değil mi ? //false
//  console.log(price!=3 && user !="erol")//true

// // //||  VEYA

// console.log(price>100 || user !="erol")//bunlardan herhangi birisi geçerlityse







// // //! DEĞİL(TERSİ)

// console.log(price>90 && !user =="quest") //false


// console.log(price>90 && user =="quest")//true


// console.log(!(price>90 && user =="quest"))//false








//eğer kullanıcı bilgisi varsa ekrana yazdır
//eger(username.length>0){console.log(username)} degilse {console.log("bilgi yok")}
//if (username.length>0){console.log(username)}  else {console.log("bilgi yok")}
// ifte koşulları parantez içerisinde belirtiyorsunuz,sonra süslü parantez ile
//o blok içerisinde yapılmasını istedğiniz şeyi yazıyorsunuz.

// let username=prompt("kullanıcı adını giriniz:")



// if (username.length>0){                              // if kısmı her zaman true ise çalışır
//     console.log(`kullanıcı isminiz:${username}`)
// }else{
//     console.log("bilgi yok")
// }









// var x = 5;
// var y = 7;

// if(x > y) {
//     console.log(x + " sayisi" + y + " sayısından büyüktür." );
// }

// else {
//     console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
// }

















































// var vize=80
// var final=90
// var ortalama=(vize+final)/2
// if (ortalama>=0 && ortalama<=30){
//     console.log("not ortalamanız:"+ortalama+" kaldınız(ff)")

// }

// else if(ortalama>=31 && ortalama <=49){
//     console.log("not ortalamanız:"+ortalama+" koşullu(dc)")
// }

// else if (ortalama>=50 && ortalama<=84){
//     console.log("not ortalamanız:"+ortalama+" geçtiniz(cc)")

// }

// else if(ortalama>=85 && ortalama<=100){
//     console.log("not ortalamanız:"+ortalama+" harika(aa)")
// }













// //patikanın örneği

// var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

// var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

// var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

// if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
//   console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
// }

// else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
//   console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
// }

// else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
//   console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
// }

// else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
//   console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
// }






















// var randomsayı=Math.floor(Math.random()*10)
//  var tahmin=prompt("bir sayı gir ve rastgele sayıyı bulmaya çalış!")
//  if(randomsayı===tahmin && tahmin !=null) alert("bildin")
//  else if(tahmin=="")alert("boş giriş yaptınız!")
//  else if(tahmin==null)alert=("giriş yapmaktan vazgeçtiniz!")
//  else {
//     alert ("bir daha dene:( random sayı:"+randomsayı)
//  }











///////////BURADA KALDIM///////////////////////////










// let weight =prompt("lütfen ağırılığınızı girin")
// let height=prompt("lütfen boyunuzu giriniz")
// function vkiHesapla(weight, height) {
// let vki= weight/(height*height)
  
    
//   if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
//   if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
//   if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
//   if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
//   return alert("Girdiğiniz değerleri kontrol ediniz");
  
//   };
  
//   vkiHesapla(weight, height);
//   console.log(vkiHesapla)
  
















  //çoklu koşullarla çalışmak
//   let username=prompt("kullanıcı adınız:")
//   let age=prompt("yaşınız:")
//   let info=document.getElementById("title")










 






//TERNARY OPERATOR İLE SHORT İF KULLANIMI

// let username=prompt("kullanıcı bilginizi yazınız:")
// let info=document.querySelector("#title")

// //ternary kullanımı:
// //koşul? doğruysa : yanlışsa



// info.innerHTML=`${username.length>0 ? username:"kullanıcı bilginiz bulunamadı :( " }`



//koşullar ile çalışmak bölüm sonu egzersizi//////////////





// const smile=`
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//   <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>
// `

// const sad=`
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//   <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>
// `

// let examegrade=prompt("puanı girin:")
// let textinfo;
// let info=document.getElementById("title")

// if(examegrade>=0 && examegrade<=100){
//   textinfo=smile
//   info.classList.add(`text-primary`)
//   if(examegrade>90){
//       textinfo+=" AA"
//     }else if(examegrade>=85){
//       textinfo+=" BA"
//     }else if(examegrade>=80){
//       textinfo+=" BB"
//     }else if(examegrade>=75){
//       textinfo+=" CB"
//     }else if(examegrade>=70){
//       textinfo+=" CC"
//     }else if(examegrade>=65){
//       textinfo+=" DC"
//     }else if(examegrade>=60){7
//       textinfo+=" DD"
//     }else if(examegrade>=50){
//       textinfo+=" FD"
//     }else if(examegrade<50){
//       textinfo=`${sad}FF`
//       info.classList.remove(`text-primary`)
//       info.classList.add(`text-danger`)
//     }
// }else{
//   textinfo="bilgiler doğru değil"
// }


// info.innerHTML=`${textinfo}->${examegrade}`



































//////BURADAN İTİBAREN ÇALIŞ////////////////////////////////////////




































// function helloworld(){
//   console.log("hello world")
// }


// function hello(){
//   console.log("merhaba")
//   helloworld()
// }



// hata alabilriz.
// function usercheck(){
//   if (username && age>=18 ){
//     title.innerHTML="ehliyet alabilirsiniz"
//   }else if(!username){
//     title.innerHTML="kullanıcı adınız yok"
//   }else if(!(age>=18)){
//     title.innerHTML="yaş bilginiz yok veya 18 yaşından küçüksünüz"
//   }

// }

// hello() /// çalıştır



















//temel kurallar
//1.bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
//2.bir fonksiyon dışarı bilgi gönderebilir veya göndermeyebilir.
//3.mümkünse fonksiiyonun bağımlılıklarını azaltmak gerekir.


// let firstname="lorem"

// function greetings (firstname="",lastname=""){
//   // console.log(`merhaba ${firstname ? firstname:""} `)
//   console.log(`merhaba ${firstname}`)
//   console.log(`merhaba ${firstname}${lastname}`)

// }



// console.log(firstname)           // değişken bilgisi var
// greetings()                      //fonksiyona parametre göndermedik


// greetings("parametreler")  
// console.log(title)







// function greetings2(firstname,lastname){
//   let info=`merhaba ${firstname}${lastname}`
//   return info
// }


// let greetingsinfo=greetings2("ad"," soyad")
// // let info=deneme //
// console.log(greetingsinfo)





// function domIdWriteInfo(id,info){
//   let domobject=document.querySelector=(`#${id}`)
//   domobject.innerHTML=info
// }


// let htmlinfo=`<span style="color:red">dikkat!!!!</span>`
// domIdWriteInfo("title",htmlinfo)
// domIdWriteInfo("mavi",greetings2("erol"," öz"))




// // ES5
// var toplam = function(x, y) {
//   return x + y;
// };

// // ES6
// let toplam = (x, y) => x + y ;



// // ES5
// var sayi = function(x) {
//   return x*x
// };

// // ES6
// let sayi = x => x*x;


// // ES5
// var multiplier = function(item, multi) {
//   return item * multi
// };
// multiplier(5, 2); // output : 10

// // ES6
// const multiplier = (item, multi) => item * multi;
// multiplier(5, 2); // output : 10


// //ES5
// var myList = function(param1, param2) {
//   return param1.concat(param2);
// };
// myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

// //ES6
// const myList = (param1, param2) => param1.concat(param2);
// myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]





// let mavi=document.querySelector("#mavi")
// mavi.addEventListener("click",function(){
//   console.log("tıklandı")
// })



// let mavi=document.querySelector("#mavi")
// mavi.addEventListener("click",domclick);

// function domclick(){
//   console.log("tıklandı")
//   console.log(this.innerHTML="TIKLANDIĞI İÇİN BİLGİ DEĞİŞTİ")
// }


// function domclick(){
//   console.log("tıklandı")
//   this.style.color="red"
// }


// function domclick(){
//   console.log("tıklandı")
//   this.style.color=="red" ? this.style.color="black": this.style.color="red"
// }





// let sayacs=localStorage.getItem("sayacs") ? Number(localStorage.getItem("sayacs")) : 0
// let sayacdom=document.querySelector("#sayac")
// let artırdom=document.querySelector("#artır")
// let azaltdom=document.querySelector("#azalt")

// sayacdom.innerHTML=sayacs



// artırdom.addEventListener("click",tıklama)
// azaltdom.addEventListener("click",tıklama)



// // function tıklama(){
// //   console.log(this.id)
// //   if(this.id=="artır"){

// //     sayacdom.innerHTML++                  //sayac++
// //   }else{
// //     sayacdom.innerHTML--              //sayac--
// //   }
// // }


// function tıklama(){
//   this.id=="artır" ? sayacs++ : sayacs--
//   localStorage.setItem("sayacs",sayacs)
//   sayacdom.innerHTML=sayacs
// }




// let user={username:"hakanyalcinkaya",isactive:true}

// localStorage.setItem("userinfo",JSON.stringify(user))

// let userinfo=localStorage.getItem("userinfo") //// bilgiyi al
// userinfo=JSON.parse(userinfo)
// console.log(userinfo) 







// let counter=localStorage.getItem("counter") ?Number(localStorage.getItem("counter")) : 0

// let sayaç=document.querySelector("#sayac")
// let artır=document.querySelector("#artır")
// let azalt=document.querySelector("#azalt")

// sayaç.innerHTML=counter

// artır.addEventListener("click",tıklama)
// azalt.addEventListener("click",tıklama)


// function tıklama(){
//   this.id=="artır" ? counter+=1 : counter-=1
//   localStorage.setItem("counter",counter)
//   sayaç.innerHTML=counter
// }





// let formDOM=document.querySelector("#userForm")
// formDOM.addEventListener("submit",formsubmit)




// function formsubmit(event){
//   event.preventDefault() /// default işlemi engelledik...
//   console.log("işlem gerçekleşti")

//   let scoreInputDOM=document.querySelector("#score")
//   console.log(scoreInputDOM.value)
//   localStorage.setItem("score",scoreInputDOM.value)
// }





/*Form seçimi
Input Bilgisini UL içerisine ekle
Form içindeki bilgiyi sıfırla
Eğer forma bilgi girilmez ise kullanıcıyı uyar */



// let userFromDOM=document.querySelector("#userForm")
// userFromDOM.addEventListener("submit",formHandler)
// const alertDOM=document.querySelector("#alert")


// const alertfunction=(title,message,className="warning")=>`
// <div class="alert alert-${className} alert-dismissible fade show" role="alert">
//   <strong>${title}</strong> ${message}
//   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
// `

// function formHandler(event){
//   event.preventDefault()
//   const USER_NAME=document.querySelector("#username")
//   const SCORE=document.querySelector("#score")
//   if (USER_NAME.value && SCORE.value){
//   addItem(USER_NAME.value,SCORE.value)      //gönderdikten sonra sıfırladık
//   USER_NAME.value=""
//   SCORE.value=""
//   }else {
//     alertDOM.innerHTML=alertfunction("başlık bilgisi","eksik bilgi girdiniz","danger")
//   }
// }





// let userListDOM=document.querySelector("#userList")
// const addItem=(userName,score)=>{
// let LİDOM=document.createElement("li")
// LİDOM.innerHTML=`${userName}
// <span class="badge badge-primary badge-pill">${score}</span>
// `

// LİDOM.classList.add(
//   `list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`
// )
// userListDOM.append(LİDOM)
// }





// array oluşşturmak

// let domaın="kodluyoruz"
// let isActive=false
// let items=[15,225,35,isActive,domaın]

// let amptyArray=[] //bos list


// // array içerisindeki eleman ve öğe sayısını öğrenmek
// console.log(items.length)


// document.quaryselector("#greeting").innerHTML=items.length



// // array içerisindeki ilk elemanın çağırılması
// console.log(items[0])
 


// // array içerisindeki son elemanın çağırılması
// console.log(items[items.length-1])




// // array içindeki ortadaki elemanın çağırılması
// console.log(
//     items[Math.floor(items.length/2)]
// )



// // değişken içerisindeki bilginin array olup olmadığının kontrol edilmesi
// console.log(typeof(items)) //object olarak çıktı veriyor

// console.log(Array.isArray(items))


// // hangileri isArray -> true verir?
 
// console.log("[]:",Array.isArray([]))
// console.log("1:",Array.isArray(1))
// console.log("true:",Array.isArray(true))



// let items =[ 10,20,30,40,]
// console.log("items-ilk hali:",items)

// // array : sona oge /eleman eklemek ->push

// items.push(50)
// console.log("50:",items)


// //array:basa oge eklemek-> unshift

// items.unshift(5)
// console.log("5:",items)



// //array:sondaki öğeyi çıkartmak ->pop

// let lastItem=items.pop()    //son elemanı lastItem içerisine ekledik 
// console.log("lastItem:",lastItem,"items:",items)

// // Array: baştaki öğeyi çıkartmak->shift

// let firstItem=items.shift()      //ilk elemanı firstItem içerisine ekledik 
// console.log("firstItem:",firstItem,"items:",items)



// //array içindeki bir öğenin bilgisinin değiştirilmesi


// //ilk öğenin değiştirilmesi

// items[0]=5;
// console.log(items)

// //sonuncu öğenin değiştirilmesi
// items[items.length-1]=1000;
// console.log(items)





// let items=[1,2,3,4,5]

// //array içinde array:
// let femaleUsers=["ayse","hulya","merve"]
// let maleUsers=["ahmet","hasan","mehmet"]


// items.unshift(femaleUsers)
// console.log(items)

// items.push(maleUsers)
// console.log(items)



// console.log(items.length)
// console.log(items[0].length) //array içerisindeki istediğimiz array in length bilgisini aldık
// console.log(items[0][0])    //ayşe bilgisine ulaştık



// //Array içerisinden oge ayırmak->splice(pos,item?)

// let newItems=items.splice(2,5)

// console.log("newItems:",newItems)
// console.log("items:",items)


// //array ieçrisindeki öğenin indeks bilgisi bulmak->indexOf("value")
// items.unshift("lorem")
// items.push("ipsum")

// console.log(items.indexOf("ipsum"))

// //Array kopyalamak ->slice,[...ES6]
// let copyItems=items
// console.log(items)

// copyItems.pop() // son öğeyi çıkarttık
// console.log("copyItems:",copyItems)
// console.log("items:",items)


// console.log("......kopyalandıktan sonra......")


// copyItems=items.slice() // kopyalama yaptı
// copyItems.pop() // son öğeyi çıkarttık
// console.log("copyItems:",copyItems)
// console.log("items:",items)




// let es6Items=[...items] // es6 ve sonrasında gelen kopyyalama işlemi
// console.log(es6Items)


// // iki array bilgisini birleştirmek -> [...ES6,...ES6]
// let allUsers=[...femaleUsers,...maleUsers] //es6  array yapısını birleştirmek
// console.log(allUsers)


// //Array içerisindeki bilgiyi string,e cevirmek->toString,joın

// console.log(allUsers.toString())
// console.log(allUsers.join(" --- "))


// //istediğimiz index bilgisine göre oge eklemek-splice(index,0,value)

// allUsers.splice(allUsers.length-1,0,"melisa")
// console.log(allUsers)
// allUsers.splice(Math.floor(allUsers.length) /2,0,"lorem")
// console.log(allUsers)





//for ([başlangıç ataması]; [koşul ifadesi]; arttırımİfadesi]){
//   yapılacak işlem
// }




// for(let index=0; index < 10; index++){
//   console.log(index)

// }



// let index=0

// for(; index < 10; index++){
//   console.log(index)

// }



// let users=["lorem","ipsum","dolor"]


// const userListDOM=document.querySelector("#userList")
// let index=0;
// for (;index < users.length; index++ ){
//   const liDom=document.createElement("li")
//   liDom.innerHTML=users[index]
//   userListDOM.appendChild(liDom)
//   console.log(users[index])
// }




// const LOREM_LIST=[
//   "lorem","ipsum","dolor","amet","consectetur","adipisicing","elit"
// ]

// let counter=0
// for(;counter<10; counter++){
//   if(counter===5){break}
//   console.log(counter)
// }


// let counter=0
// for(;counter<10; counter++){
  
// if(counter===5){continue}
//   console.log(counter)
// }


// const UL_DOM=document.querySelector("#userList")

// let index=0

// for (;index<LOREM_LIST.length;index++){
//   if (LOREM_LIST[index]=="dolor"){break}
//   let LI_DOM=document.createElement("li")
//   LI_DOM.innerHTML=LOREM_LIST[index]
//   UL_DOM.appendChild(LI_DOM)

// }



// const UL_DOM=document.querySelector("#userList")

// let index=0

// for (;index<LOREM_LIST.length;index++){
//   if (LOREM_LIST[index]=="dolor"){continue}
//   let LI_DOM=document.createElement("li")
//   LI_DOM.innerHTML=LOREM_LIST[index]
//   UL_DOM.appendChild(LI_DOM)

// }




// let counter=0
// while (counter <10 ){
//   console.log(counter)
//   counter++
// }



// let userName=""

// while (!userName){
//   userName=prompt("kullanıcı adını giriniz:")
//   console.log(userName)
// }







// const PRODUCTS=["laptop","phone","speaker","desktop PC","server","mouse","keyboard"]


// PRODUCTS.forEach((product,index,Array)=>console.log(product,index,Array))

// PRODUCTS.forEach((product,index,Array)=>console.log(Array [index]=product + " 111"))



// PRODUCTS.forEach((product,index,Array)=>Array [index]=`${product.toUpperCase()}`)

// console.log(PRODUCTS)







// const userListDOM=document.querySelector("#userList")

// let index=0;
// for (;index < users.length; index++ ){
//   const liDom=document.createElement("li")
//   liDom.innerHTML=users[index]
//   userListDOM.appendChild(liDom)
//   console.log(users[index])
// }



// const userListDOM=document.querySelector("#userList")



// PRODUCTS.forEach( item=>{
//     const liDom=document.createElement("li")
//     liDom.innerHTML=item
//     userListDOM.append(liDom)
// })





// const numbers=[12,24,36]
// const newnumbers=[]
// numbers.forEach((numbers)=>{
//   newnumbers.push(numbers+2)
  
// })
// console.log(newnumbers)



//5 harften fazla olanlar
// const PRODUCTS=["mic","cable","speaker","desktop PC","server","mouse","keyboard"]


// const NEW_PRODUCTS=PRODUCTS.filter(item=>item.length>5)
// console.log(NEW_PRODUCTS)
// //aktif kullanıcılar

// const USERS=[
// {fullName:"Ayse Sumer",isActive:false},
// {fullName:"Ahmet Urgan",isActive:true},
// {fullName:"Asya Basar",isActive:true},
// {fullName:"Aksel Durmaz",isActive:false},

// ]
// // const ACTIVE_USER=USERS.filter(user=>user.isActive)

// const ACTIVE_USER=USERS.filter(user=>user.isActive===false)
// console.log(ACTIVE_USER)


// const person = [{
//   name: "Adem",
//   age: 25,
//   languages: ["JavaScript", "CSS"],
// },
// {
//   name: "Oğuz",
//   age: 33,
//   languages: ["Java", "HTML"],
//   }
// ];



// const newperson=person.filter(person=>person.age>30)
// console.log(newperson)

// const knowjs=person.filter(js=>js.languages.includes("JavaScript"))

// console.log(knowjs)









// const USERS=["AYSE","MehMet","TugCE","AkSEL"]

// //USERNAME İÇERSİNDE İLK BİLGİ KALSIN
// //SHORTNAME İÇİNDE İLK HARF BÜYÜK . (A.)
// //NEWNAME İCİNDE İLK HARF BUYUK OLSUN
// //{userName:"AYSE",shortName:"A.",newName:"Ayse"}
// const NEW_USERS=USERS.map(user=>user.toLowerCase())
// console.log(NEW_USERS)

// const USERS_OBJ=USERS.map(item=>
  
//   {
//     return{
//       userName:item,shortName:`${item[0]}.`,newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
//   }
  
  
//   )

// console.log(USERS_OBJ)



//object (nesne) nedir? nasıl oluşturulur?



// let arrayObj=[1,2,3]
// let object1={obj:1}
// console.log("arrayObj",typeof(arrayObj))
// console.log("object1",typeof(object1))

// let item1=new Object()
// let item2={}

// console.log("item1",typeof(item1))
// console.log("item2",typeof(item2))




// let laptop1={
//   brand:"apple",
//   model:"MacBook pro",
//   "2kg":2,
//   modelName:"Macbook pro",
//   model_Name:"Macbook pro"

// }

// console.log(laptop1)

// console.log(laptop1.brand,laptop1["brand"])
// console.log(laptop1.model,laptop1["model"])
// console.log(laptop1["2kg"])


// // anahtart bilgisine yeni değer eklemek

// laptop1.brand="Mac"
// laptop1["brand"]="Mac1"

// console.log(laptop1)



// // yeni bilgi eklemek
// laptop1.version="10.15.7"
// console.log(laptop1)




// // anahtar bilgilerine ulaşmak (keys)-> object.keys(item)

// keys=Object.keys(laptop1)
// console.log(keys)
// console.log(Object.keys(laptop1))





// // for (const key in keys) {
// //   console.log(key)
  
// // }

// keys.forEach(keyInfo=>{
//   console.log(keyInfo)
//   console.log(laptop1[keyInfo])
// })

// // Deger bilgilkerine ulaşmak (values)-> object.values(item)
// console.log(
//   Object.values(laptop1)
// )

// let values =   Object.values(laptop1)

// values.forEach(value=>{
//   console.log(value)
  
// })




// let user1={
//   firstName:"bilgin",
//   lastName:"uzman",
//   score:[1,2,3,4],
//   isActive:true,
//   shortName:function(){
//     return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
//   }
// };

// console.log(user1)


// let settings ={
//   userName:"loremIpsum",
//   password:"BadPassword",
//   isActive:false,
//   ip:"127.0.0.1",
//   serverName:"kodluyoruz.org"
// }

//obje içersindeki bilgilerin tek seferde çıkarılması



// let userName=setting.userName
// console.log(userName)
//rename && destructuring
// let {
//   userName:user,password,ip:serverIp,serverName
// }=settings

// console.log(  user,password,serverIp,serverName)
// console.log(settings)
// console.log(user)





// obje içerisindeki bazı bilgilerin çıkarılması

// let {
//   userName:userName2, password:password2, isActive:isActive2, ...newSettings
// }=settings 

// console.log( userName2, password2, isActive2, newSettings)



// //objenin dectructuring ile kopyalanması


// //HATALI!!!!!!!!!!!!!!!!!!
// // let settings2=settings
// // settings2.userName="değişen bilgi"
// // console.log("settings",settings)
// // console.log("settings2",settings2)



// //DOĞRUSU :D
// let settings2={...settings}

// settings2.userName="değişen bilgi"
// console.log("settings",settings)
// console.log("settings2",settings2)



// let score =[100,200,300,400]
// let [score1,score2,...otherScore]=score
// console.log(score1,score2,otherScore)


// // object kopyalama ile aynı
// let copyOfScore=[...score]
// console.log(copyOfScore)




// hata yöntemi için try ve catch

// let products;



// try{
//   products.forEach(item=>console.log(item));

// }catch(error){
// console.log(error)
// // products=[1,2,3]
// // products.forEach(item=>console.log(item));

// }

// console.log("hata yönetimi düzgün  çalışıyor")
// let info ="kodluyoruz"
// console.log(info)


// try {
//   hello();
// }catch (err) {
//   console.error(err);
// }



// let erol ="1234"
// erol2=erol.split("")
// console.log(erol2)







//fetch api ile çalışmak

//JSON dosyadan veri çekmek:
// fetch("setting.json").then(
//   Response=> Response.json()

// ).then(ResponseJson=>{
//   console.log(ResponseJson)
//   console.log(ResponseJson.userName)
// })



// let userlistDOM=document.querySelector("#userList")

// // API ÜZERİNDEN VERİ ÇEKMEK
// fetch("https://jsonplaceholder.typicode.com/posts").then(
//   Response=> Response.json()
// ).then(ResponseJson=>{ResponseJson.forEach(item=>{
//   let LİDOM=document.createElement("li")
//   LİDOM.innerHTML=item.title
//   userlistDOM.append(LİDOM)
// })})



