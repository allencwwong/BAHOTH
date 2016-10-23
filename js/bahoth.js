// var $ = JQuery;
$(document).ready(function(){

var chars = [
{
  "name" : "Brandon Jaspers",
  "info" : {
  	"age" : "12",
  	"height" : "5' 1",
  	"weight" : "109 lbs",
  	"hobbies" : "Computers, Camping, Hockey",
  	"birthday" : "May 21st"
  },
  "mental" : {
  	"sanity" : 4,
  	"knowledge" : 3
  },
  "physical" : {
  	"speed" : 4,
  	"might" : 4
  }
},
{
  "name" : "Peter Akimoto",
  "info" : {
  	"age" : "13",
  	"height" : "4' 11",
  	"weight" : "98 lbs",
  	"hobbies" : "Bugs, Basketball",
  	"birthday" : "September 3rd"
  },
  "mental" : {
  	"sanity" : 4,
  	"knowledge" : 4
  },
  "physical" : {
  	"speed" : 4,
  	"might" : 3
  }
},

{
  "name" : "Zoe Ingstrom",
  "info" : {
  	"age" : "8",
  	"height" : "3' 9",
  	"weight" : "49 lbs",
  	"hobbies" : "Dolls, Music",
  	"birthday" : "November 5th"
  },
  "mental" : {
  	"sanity" : 5,
  	"knowledge" : 3
  },
  "physical" : {
  	"speed" : 4,
  	"might" : 3
  }
},

{
  "name" : "Missy Dubourde",
  "info" : {
  	"age" : "9",
  	"height" : "4' 2",
  	"weight" : "62 lbs",
  	"hobbies" : "Swimming, Medicine",
  	"birthday" : "February 14th"
  },
  "mental" : {
  	"sanity" : 3,
  	"knowledge" : 4
  },
  "physical" : {
  	"speed" : 5,
  	"might" : 3
  }
},

{
  "name" : "Father Rhinehardt",
  "info" : {
  	"age" : "62",
  	"height" : "5' 9",
  	"weight" : "185 lbs",
  	"hobbies" : "Fencing, Gardening",
  	"birthday" : "April 29th"
  },
  "mental" : {
  	"sanity" : 6,
  	"knowledge" : 4
  },
  "physical" : {
  	"speed" : 3,
  	"might" : 2
  }
},

{
  "name" : "Professor Longfellow",
  "info" : {
  	"age" : "57",
  	"height" : "5' 11",
  	"weight" : "153 lbs",
  	"hobbies" : "Gaelic Music, Drama, Fine Wines ",
  	"birthday" : "July 27th"
  },
  "mental" : {
  	"sanity" : 3,
  	"knowledge" : 5
  },
  "physical" : {
  	"speed" : 4,
  	"might" : 3
  }
},

{

}
];

var charID = 0;
var stats = chars[charID];

  function addStat(stat){
    var myStat = stat.split("-");
    console.log(myStat);
    console.log(stat);

    myStat = myStat[1];
    if(myStat === "speed" || myStat === "might"){
      stats.physical[myStat]++;
      initStatus(stats);
    }
    if(myStat === "knowledge" || myStat === "sanity"){
      stats.mental[myStat]++;
      initStatus(stats);
    }    
  }
  
 function subtStat(stat){
    var myStat = stat.split("-");
    myStat = myStat[1];
   
    if(myStat === "speed" && stats.physical[myStat] >= 1 || myStat === "might" && stats.physical[myStat] >= 1){
      //alert(stats.physical[myStat]);
      if(stats.physical[myStat]){
        //call dead function
      }
      stats.physical[myStat]--;
      initStatus(stats);
    }  
    if(myStat === "knowledge" && stats.physical[myStat] >= 1 || myStat === "sanity" && stats.mental[myStat] >= 1){
      //alert(stats.physical[myStat]);
      if(stats.mental[myStat]){
        //call dead function
      }
      stats.mental[myStat]--;
      initStatus(stats);
    }    
 } 

function initStatus(){
    $("#speed").html("").append("<h1>"+stats.physical.speed+"</h1>");
    $("#sanity").html("").append("<h1>"+stats.mental.sanity+"</h1>");
   $("#might").html("").append("<h1>"+stats.physical.might+"</h1>"); 
     $("#knowledge").html("").append("<h1>"+stats.mental.knowledge+"</h1>");      
  } 

function status(){
 
  initStatus(); 
} 

// generate list of players 
function initListOfPlayers(){
  for(var i=0;i<chars.length;i++){
    $('.dropdown-menu').append("<li class='list-player' data-id='"+i+"'><a href='#"+chars[i].name+"'>"+chars[i].name+"</a></li>");
  }
}

function selectPlayer(){
  $('.list-player').on('click',function(){
    charID = $(this).data("id");
    stats = chars[charID];

  $("#player-name h1").html("").append(chars[charID].name);
  $("#player-details ul").html("").append(function(){
    var str = "";
    for(var attrs in chars[charID].info){
      console.log(attrs); 
      var attr = chars[charID].info[attrs];
      str+="<li>"+"<b>"+attrs+"</b>"+":"+" "+attr+"</li>";
    }
      return str;
  });
  $("#sanity h1").html("").append(chars[charID].mental.sanity);
  $("#knowledge h1").html("").append(chars[charID].mental.knowledge);
  $("#speed h1").html("").append(chars[charID].physical.speed);
  $("#might h1").html("").append(chars[charID].physical.might);

    status(); 
  });
}

function statAdjust(){
    var stats = chars[charID];
    $('.add-stat').on('click',function(){
      
      addStat($(this).attr("id"));
    });

    $('.subt-stat').on('click',function(){
      //var stats = chars[charID];
      subtStat($(this).attr("id"));
    }); 
}

initListOfPlayers();
selectPlayer();
statAdjust();


  

});

