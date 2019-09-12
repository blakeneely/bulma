$(document).ready(function(){

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  });

  var nflTeams = [
    "ARI",
    "ATL",
    "baltimore-ravens",
    "BUF",
    "CAR",
    "CHI",
    "cincinnati-bengals",
    "cleveland-browns",
    "DAL",
    "DEN",
    "DET",
    "green-bay-packers",
    "HOU",
    "indianapolis-colts",
    "jacksonville-jaguars",
    "LAC",
    "la-rams",
    "kansascity-chiefs",
    "MIA",
    "minnesota-vikings",
    "newengland-patriots",
    "neworleans-saints",
    "ny-giants",
    "ny-jets",
    "OAK",
    "philadelphia-eagles",
    "pittsburgh-steelers",
    "SF",
    "SEA",
    "tampa-bay-buccanneers",
    "tennessee-titans",
    "washington-redskins"
  ];

  function getNews(){
    var queryURL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
    });
  };
  function getMoreNews(){
    var queryURL = "https://gnews.io/api/v3/search?q=nfl&max=2&token=4a15688cc222a13cfdefce8d01e2b270"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
    });
  };
  function getTeamInfo(){
    for(var i = 0; i < nflTeams.length; i++){
      var queryURL = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/" + nflTeams[i];
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
          var imgDiv = $("<div>");
          imgDiv.addClass("imgDiv");
          var image = $("<img>");
          image.attr("src", response.team.logos[0].href);
          image.attr("id", response.team.abbreviation)
          image.addClass("logo");
          var record = $("<p>");
          record.text(response.team.record.items[0].summary);
          imgDiv.append(image);
          imgDiv.append(record);
          $(".team-container").prepend(imgDiv);
      });
    };
  };

  function getStats(){
    var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2019-regular/cumulative_player_stats.json?&player=drew-brees"
    $.ajax({
      url: queryURL,
      type: "GET",
      dataType: "json",
      headers: { 
        "Authorization": "Basic " + btoa("a437f7dc-b82f-4f70-8989-798c15" + ":" + "Classwork12")
     }
    }).then(function(response){
      console.log(response);
    });
  };

  function getPlayerStats(){
    var queryURL = "https://api.stattleship.com/football/nfl/player_season_stats?&season_id=nfl-2018-2019&player_id=nfl-drew-brees&interval_type=regularseason"
    $.ajax({
      url: queryURL,
      type: "GET",
      dataType: "json",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Token token=b67ab79662ba4b9960b58ff82cb5b569",
        "Accept": "application/vnd.stattleship.com; version=1"
     }
    }).then(function(response){
      console.log(response);
    });
  };

  getNews();
  // getMoreNews();     Don't use this until we need it, we are limited to 100 calls per 24 hours
  getTeamInfo();
  getStats();
});