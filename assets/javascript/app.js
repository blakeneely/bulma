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

  function getNews(){
    var queryURL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
    });
  };
  function getTeamNews(){
    var queryURL = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/1"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
    });
  };



  function getPlayerNews(){
    var queryURL = "https://fantasysports.yahooapis.com/fantasy/v2/player/"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response)
    });
  };

  getNews();
  getTeamNews();
  getPlayerNews();
});