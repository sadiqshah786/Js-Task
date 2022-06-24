

function HeadTailGame(){

// var HeadTale = document.getElementById('input');
// var name = document.getElementById("name");
var ans = document.getElementById("ans");



var UserName = prompt("Enter you Name :")

var HeadTale = prompt("what Do you want? (H/T)");

var HT = ["H","T"] 

var randomNumber = Math.floor(Math.random() * HT.length);

var word = HT[randomNumber];
    if(HeadTale === word){
        ans.innerHTML = `<span class="box">${UserName} is winner<span>`;
        
    }
    else if(HeadTale==""){
        // ans.innerHTML = `<span class="box">Empty Inpput<span>`;
        swal("Empty Input")
    }
    else if(HeadTale!=="H" || HeadTale=="F"){
        ans.innerHTML = `<span class="box">Niether Head nor Tail<span>`;
    }
   

    else{
        ans.innerHTML = `<span class="box">${UserName} is Lose <span>`;
    }}






