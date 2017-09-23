var personReq = new XMLHttpRequest();
//console.log(oReq);

personReq.addEventListener("load", function(){
  var personObj =JSON.parse(this.responseText);
  console.log(personObj.homeworld);
  document.getElementById("person4Name").innerHTML = personObj.name;

var homeWorldReq = new XMLHttpRequest();
hReq.addEventListener("load", function(){
  //var homeworld = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML =personObj.homeWorld.name;
});
homeWorldReq.open("GET", personObj.homeworld);
homeWorldReq.send();

});


// var hReq = new XMLHttpRequest();
// hReq.addEventListener("load", function(){});
// hReq.open("GET", "http://swapi.co/api/planets/1/");
// hReq.send();

var nReq = new XMLHttpRequest();
nReq.addEventListener("load",person14Listener);
nReq.open("GET","http://swapi.co/api/people/14");
nReq.send();

var soloReq = new XMLHttpRequest();
soloReq.addEventListener("load", speciesListener);
soloReq.open("GET", "http://swapi.co/api/species/1/");
soloReq.send();

var filmReq = new XMLHttpRequest();
filmReq.addEventListener("load", filmListener);
filmReq.open("GET", "http://swapi.co/api/films/");
filmReq.send();



// function personListener(){
//   var personObj =JSON.parse(this.responseText);
//   console.log(personObj.name);
//   var getName = document.getElementById("person4Name").innerHTML = personObj.name;
// }


function homeListener(){
  var homeWorld = JSON.parse(this.responseText);
  //console.log(homeWorld);
  var getHomeWorld = document.getElementById("person4HomeWorld").innerHTML =homeWorld.name;

}

function person14Listener(){
  var name = JSON.parse(this.responseText);
  var getName = document.getElementById("person14Name").innerHTML=name.name;
}

function speciesListener(){
  var species = JSON.parse(this.responseText);
  var getSpecies = document.getElementById("person14Species").innerHTML = species.name;
}

function filmListener(){
  var films = JSON.parse(this.responseText).results;
  for(var i = 0; i < films.length; i++){
  var filmTitles = document.createElement("li");
  var getFilms = document.getElementById("filmList");
  var titleName = films[i].title;
  filmTitles.innerHTML = titleName;
  getFilms.appendChild(filmTitles);
  }
}




