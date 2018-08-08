
//click listener that called functions when each button is pressed
document.getElementById('Titanic').addEventListener("click", updateTitanic);
document.getElementById('Terminator 2').addEventListener("click", updateTerminator);

//function that updates html ids when Titanic button is pressed
function updateTitanic(){
  clearDetails();
  document.getElementById('title').innerHTML = movies["Titanic"]["title"];
  document.getElementById('director').innerHTML = movies["Titanic"]["director"];
  document.getElementById('genre').innerHTML = movies["Titanic"]["genre"];
  document.getElementById('filmRating').innerHTML = movies["Titanic"]["filmRating"];
  document.getElementById('description').innerHTML = movies["Titanic"]["description"];
  document.getElementById('audienceScore').innerHTML = movies["Titanic"]["audienceScore"];

  let i;
  for(i=0; i<movies["Titanic"]["cast"].length; i++){
    document.getElementById('cast').innerHTML += movies["Titanic"]["cast"][i]["actor"] + "<br>" + "-" + movies["Titanic"]["cast"][i]["role"]  + "<br>";
  }
  
  let x;
  for(x=0; x<movies["Titanic"]["reviews"].length; x++){
    document.getElementById('reviews').innerHTML += '"' + movies["Titanic"]["reviews"][x]["content"] + '"' + "<br>" + 
      "-" + movies["Titanic"]["reviews"][x]["username"]  + "<br>";
  }
 
  
} 

//function that updates html ids when terminator button is pressed
function updateTerminator(){
  clearDetails();
  document.getElementById('title').innerHTML = movies["Terminator 2"]["title"];
  document.getElementById('director').innerHTML = movies["Terminator 2"]["director"];
  document.getElementById('genre').innerHTML = movies["Terminator 2"]["genre"];
  document.getElementById('filmRating').innerHTML = movies["Terminator 2"]["filmRating"];
  document.getElementById('description').innerHTML = movies["Terminator 2"]["description"];
  document.getElementById('audienceScore').innerHTML = movies["Terminator 2"]["audienceScore"];

  let i;
  for(i=0; i<movies["Terminator 2"]["cast"].length; i++){
    document.getElementById('cast').innerHTML += movies["Terminator 2"]["cast"][i]["actor"] + "<br>" + "-" + movies["Terminator 2"]["cast"][i]["role"]  + "<br>";
  }
  
  let x;
  for(x=0; x<movies["Terminator 2"]["reviews"].length; x++){
    document.getElementById('reviews').innerHTML += '"' + movies["Terminator 2"]["reviews"][x]["content"] + '"' + "<br>" + 
      "-" + movies["Terminator 2"]["reviews"][x]["username"]  + "<br>";
  }
  
} 
//function to clear details of reviews & cast divs
function clearDetails(){
  document.getElementById('cast').innerHTML = "";
  document.getElementById('reviews').innerHTML = "";
}

 