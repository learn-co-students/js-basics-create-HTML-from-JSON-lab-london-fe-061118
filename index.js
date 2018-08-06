const titanic = document.getElementById('Titanic')
console.log(titanic)
 
titanic.addEventListener("click", function(event) {
  console.log("I was clicked")
  document.getElementById("title").innerHTML= movies["Titanic"]["title"]
  document.getElementById("director").innerHTML=movies["Titanic"]["director"]
  document.getElementById("genre").innerHTML=movies["Titanic"]["genre"]
  document.getElementById("filmRating").innerHTML=movies["Titanic"]["filmRating"]
  document.getElementById("poster").src=movies["Titanic"]["poster"]
  document.getElementById("audienceScore").innerHTML=movies["Titanic"]["audienceScore"]
  document.getElementById("description").innerHTML=movies["Titanic"]["description"]
  
  let i;
  for (i = 0; i < movies.Titanic.cast.length; i++) { 
    document.getElementById("cast").innerHTML += movies.Titanic.cast[i].role + "<br>" + "as" + "<br>";
    document.getElementById("cast").innerHTML += movies.Titanic.cast[i].actor + "<br>";
}
 let r;
 for (r=0; r < movies.Titanic.reviews.length; r++) {
   document.getElementById("reviews").innerHTML += movies.Titanic.reviews[r].username + ":";
   document.getElementById("reviews").innerHTML += movies.Titanic.reviews[r].content +"<br>";
 }
  
})
  


