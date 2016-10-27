$(document).ready(function(){

var charID = 0;
var myChar = chars[charID];

  function addStat(stat){
    var myStat = stat.split("-");
    myStat = myStat[1]+"Idx";
    //console.log(myStat);
    //console.log(stat);

    if(myStat === "speedIdx" && myChar.status[myStat] <= 6 || myStat === "mightIdx" && myChar.status[myStat] <= 6){
      
      console.log(myChar.status[myStat]++);
      initStatus(myChar);
    }
    if(myStat === "knowledgeIdx" && myChar.status[myStat] <= 6 || myStat === "sanityIdx" && myChar.status[myStat] <= 6){
      myChar.status[myStat]++;
      initStatus(myChar);
    }    
  }
  
 function subtStat(stat){
    var myStat = stat.split("-");
    myStat = myStat[1]+"Idx";
   
    if(myStat === "speedIdx" && myChar.status[myStat] >= 1 || myStat === "mightIdx" && myChar.status[myStat] >= 1){
      //alert(myChar.physical[myStat]);
      if(myChar.status[myStat]){
        //call dead function
      }
      myChar.status[myStat]--;
      initStatus(myChar);
    }  
    if(myStat === "knowledgeIdx" && myChar.status[myStat] >= 1 || myStat === "sanityIdx" && myChar.status[myStat] >= 1){
      //alert(myChar.physical[myStat]);
      if(myChar.status[myStat]){
        //call dead function
      }
      myChar.status[myStat]--;
      initStatus(myChar);
    }    
 } 

function initStatus(){
    $("#speed").html("").append("<h1>"+myChar["status-list"].speed[myChar.status.speedIdx]+"</h1>");
    $("#sanity").html("").append("<h1>"+myChar["status-list"].sanity[myChar.status.sanityIdx]+"</h1>");
   $("#might").html("").append("<h1>"+myChar["status-list"].might[myChar.status.mightIdx]+"</h1>"); 
     $("#knowledge").html("").append("<h1>"+myChar["status-list"].knowledge[myChar.status.knowledgeIdx]+"</h1>");    

     var status = function(stat){
      var statList = "";
      for(var i=0;i<8;i++){
        var statNum = myChar["status-list"][stat][i];
        if(myChar.status[stat+"Idx"] === i){
         statList+="<li class='active'><a href='#'>"+statNum+"</a></li>"; 
        }else{
        statList+="<li><a href='#'>"+statNum+"</a></li>";
        }
      }
      console.log(statList);
      return statList;
     };
     $('#sanity-stats').html("").append(status("sanity")); 
     $('#knowledge-stats').html("").append(status("knowledge")); 
     $('#speed-stats').html("").append(status("speed")); 
     $('#might-stats').html("").append(status("might"));


  } 

function status(){
 
  initStatus(); 
} 

// generate list of players 
function initListOfPlayers(){
  for(var i=0;i<chars.length-1;i++){
    $('.dropdown-menu').append("<li class='list-player' data-id='"+i+"'><a href='#"+chars[i].name+"'>"+chars[i].name+"</a></li>");
  }
}

function selectPlayer(){
  $('.list-player').on('click',function(){
    charID = $(this).data("id");
    myChar = chars[charID];

  $("#player-name h1").html("").append(myChar.name);
  $("#player-details ul").html("").append(function(){
    var str = "";
    for(var attr in myChar.info){
      console.log(attr); 
      var myAttr = myChar.info[attr];
      str+="<li>"+"<b>"+attr+"</b>"+":"+" "+myAttr+"</li>";
    }
      return str;
  });
  $("#sanity h1").html("").append(myChar["status-list"].sanity[myChar.status.sanityIdx]);
  $("#knowledge h1").html("").append(myChar["status-list"].knowledge[myChar.status.knowledgeIdx]);
  $("#speed h1").html("").append(myChar["status-list"].speed[myChar.status.knowledgeIdx]);
  $("#might h1").html("").append(myChar["status-list"].might[myChar.status.mightIdx]);

    status(); 
  });
}

function statAdjust(){
    var myChar = chars[charID];
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

