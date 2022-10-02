// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



















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
// //   const SCORE=document.querySelector("#score")
//   if (USER_NAME.value){
//   addItem(USER_NAME.value)      //gönderdikten sonra sıfırladık
//   USER_NAME.value=""
//   }else {
//     alertDOM.innerHTML=alertfunction("dikkat!","listeye boş ekleme yapamazsınız.","danger")
//   }
// }





// let userListDOM=document.querySelector("#userList")
// const addItem=(userName)=>{
// let LİDOM=document.createElement("li")
// LİDOM.innerHTML=`${userName}
// <span class="badge badge-primary badge-pill"></span>
// `

// LİDOM.classList.add(
//   `list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`
// )
// userListDOM.append(LİDOM)
// alertDOM.innerHTML=alertfunction("harika!","listeye eklendi","success")
// }



// let gel=document.querySelector("#silmek")
// gel.addEventListener("click",sil)
// function sil(){

//     userListDOM.innerHTML=""

// }


