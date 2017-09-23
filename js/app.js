// jshint esversion:6

// FIRST REQUEST
var personReq = new XMLHttpRequest();
//console.log(oReq);
personReq.addEventListener("load", function(){
  var personObj =JSON.parse(this.responseText);
  //console.log(personObj.homeworld);
  document.getElementById("person4Name").innerHTML = personObj.name;

// SECOND REQUEST NESTED IN FIRST EVENT LISTENER
var homeWorldReq = new XMLHttpRequest();
homeWorldReq.addEventListener("load", function(){
  var homeworldObj = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML =homeworldObj.name;
});
//CALL SECOND REQUEST
homeWorldReq.open("GET", personObj.homeworld);
homeWorldReq.send();

});
//CALL FIRST REQUEST
personReq.open("GET", "http://swapi.co/api/people/4/");
personReq.send();



//THIRD REQUEST: "person14Name"
var person2Req = new XMLHttpRequest();
person2Req.addEventListener("load",function(){
  var personObj = JSON.parse(this.responseText);
  console.log(personObj);
  document.getElementById("person14Name").innerHTML=personObj.name;
//FOURTH REQUEST: "person14Species", NESTED IN THIRD FOR THE SPECIES PROPERTY IN PERSON2;
var speciesReq = new XMLHttpRequest();
speciesReq.addEventListener("load", function(){
  var speciesObj = JSON.parse(this.responseText);
  document.getElementById("person14Species").innerHTML = speciesObj.name;

//SEND FOURTH REQUEST
speciesReq.open("GET", personObj.species);
speciesReq.send();
});

//SEND THIRD REQUEST
});
person2Req.open("GET","http://swapi.co/api/people/14");
person2Req.send();


///////////////////////



var filmsReq = new XMLHttpRequest();
filmsReq.addEventListener("load", function(){
  var films = JSON.parse(this.responseText).results;
  console.log(films);
  for(var i = 0; i < films.length; i++){
    var list = document.createElement("li");
    var filmsObj = document.getElementById("filmList");
    var titles = films[i].title;
    list.innerHTML = titles;
    filmsObj.appendChild(list);
    //var title = films[i]
    console.log(titles);
    }












});
filmsReq.open("GET", "http://swapi.co/api/films/");
filmsReq.send();



// function personListener(){
//   var personObj =JSON.parse(this.responseText);
//   console.log(personObj.name);
//   var getName = document.getElementById("person4Name").innerHTML = personObj.name;
// }


// function homeListener(){
//   var homeWorld = JSON.parse(this.responseText);
//   //console.log(homeWorld);
//   var getHomeWorld = document.getElementById("person4HomeWorld").innerHTML =homeWorld.name;

// }

// function person14Listener(){
//   var personObj = JSON.parse(this.responseText);
//   var getName = document.getElementById("person14Name").innerHTML=personObj.name;
// }

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




