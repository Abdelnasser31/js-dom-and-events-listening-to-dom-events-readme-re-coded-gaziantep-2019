// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById("main");

main.addEventListener('click',function (event) { 
  alert("I was clicked");
});

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  // console.log(String.fromCharCode(e.which))
  
  if(e.which === 65){
    console.log("default is prevented");
    return e.preventDefault();
  } else {
    console.log ("not an a")
  }
})


//bubbling test
