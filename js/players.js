var players = [];
var assignment = [];
var shuffledCharacters = [];
$(document).ready(function() {

  var frontChar = chars.filter(function(character){
    return character["id"]["position"] == "front";
  });



  var shuffleChars = function(frontChar){
    var m = frontChar.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = frontChar[m];
    frontChar[m] = frontChar[i];
    frontChar[i] = t;
  }

  return frontChar;
  };

  shuffleChars(frontChar);

    $("form").submit(function(event) {
        console.log($(this).serializeArray());
        var formPlayers = $(this).serializeArray();
        event.preventDefault();

        // remove empty string from non-players
        formPlayers = formPlayers.filter(function(player) {
            return player["value"] !== "";
        });

        // make an array of players from the form
        players = formPlayers.map(function(player) {
            return player["value"];
        });
        console.log(players);

        var assignCharacters = function(players){

          for(var i = 0; i < players.length; i++){
            assignment[players[i]] = frontChar[i];
          }
          revealCharacters(assignment);
          console.log(assignment);

        };

        var revealCharacters = function(){
          console.log("Hello" + assignment[0])
        };







        assignCharacters(players);
    });

});
