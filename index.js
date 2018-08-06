document.getElementById("Titanic").addEventListener("click", film)
function film() {
  
document.getElementById("title").innerHTML = movies["Titanic"]["title"] 

console.log(movies)

document.getElementById("director").innerHTML = movies["Titanic"]["director"] 
console.log(movies)

document.getElementById("genre").innerHTML = movies["Titanic"]["genre"] 
console.log(movies)

document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"] 
console.log(movies)

document.getElementById("poster").src = movies["Titanic"]["poster"] 
console.log(movies)

document.getElementById("description").innerHTML = movies["Titanic"]["description"] 
console.log(movies)

document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"] 
console.log(movies)

let cast = movies["Titanic"]["cast"];
let i;
for (i = 0; i < cast.length; i++) {
    document.getElementById("cast").innerHTML += movies["Titanic"]["cast"][i]["actor"] + "<br>";
    document.getElementById("cast").innerHTML += movies["Titanic"]["cast"][i]["role"] + "<br>";
} 
console.log(movies)


let reviews = movies["Titanic"]["reviews"];
let j;
for (j = 0; j < reviews.length; j++) {
    document.getElementById("reviews").innerHTML += movies["Titanic"]["reviews"][j]["username"] + "<br>";
    document.getElementById("reviews").innerHTML += movies["Titanic"]["reviews"][j]["content"] + "<br>";
    
}
console.log(movies)

}


document.getElementById("Terminator 2").addEventListener("click", film2)
function film2() {
  
document.getElementById("title").innerHTML = movies["Terminator 2"]["title"] 

console.log(movies)

document.getElementById("genre").innerHTML = movies["Terminator 2"]["genre"] 
console.log(movies)

document.getElementById("filmRating").innerHTML = movies["Terminator 2"]["filmRating"] 
console.log(movies)

document.getElementById("poster").src = movies["Terminator 2"]["poster"] 
console.log(movies)

document.getElementById("description").innerHTML = movies["Terminator 2"]["description"] 
console.log(movies)

document.getElementById("audienceScore").innerHTML = movies["Terminator 2"]["audienceScore"] 
console.log(movies)


let cast = movies["Terminator 2"]["cast"];
let i;
for (i = 0; i < cast.length; i++) {
    document.getElementById("cast").innerHTML += movies["Terminator 2"]["cast"][i]["actor"] + "<br>";
    document.getElementById("cast").innerHTML += movies["Terminator 2"]["cast"][i]["role"] + "<br>";
} 
console.log(movies)


let reviews = movies["Terminator 2"]["reviews"];
let j;
for (j = 0; j < reviews.length; j++) {
    document.getElementById("reviews").innerHTML += movies["Terminator 2"]["reviews"][j]["username"]
    + "<br>";
    document.getElementById("reviews").innerHTML += movies["Terminator 2"]["reviews"][j]["content"] 
    + "<br>";
    
}
console.log(movies)


  
}
