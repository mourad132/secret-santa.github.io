var santa =document.querySelector("span")
function secretSanta() {
 var name = document.querySelector("input").value.toLowerCase()
  if(name == "4848"){
    santa.textContent = "Maria";
  } else if(name == "5263") {
    santa.textContent = "Michael"
  } else if(name == "4485") {
    santa.textContent = "Martina"
  } else if(name == "4562") {
    santa.textContent = "Lidya"
  } else if(name == "5364") {
    santa.textContent = "Zakaria"
  } else if(name == "5436") {
    santa.textContent = "Kiro"
  } else if(name == "4379") {
    santa.textContent = "Logy"
  } else if(name == "4827") {
    santa.textContent = "Juana"
  } else if(name == "4273") {
    santa.textContent = "Peter"
  } else if(name == "5831") {
    santa.textContent = "Peter Eimel"
  }
  else {
    santa.textContent = "please enter a valid id"
  }
}
