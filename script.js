const API_URL = 'https://api.sportsdata.io/v4/soccer/scores/json/GamesByDate/';
const API_KEY = e6ae1fc33b5645daa9877834247c9e35; 


let currentDate = new Date().toISOString().split('T')[0];


window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex"; 
};


function loadMatches() {
    
    currentDate = new Date().toISOString().split('T')[0]; 

    fetch(`${API_URL}${currentDate}?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
           
            const matches = data.filter(game => game.Date.startsWith(currentDate));

            var matchList = document.getElementById("matchList");
            matchList.innerHTML = ""; 

            
            matches.forEach(function(match) {
                var li = document.createElement("li");
                li.textContent = `${match.HomeTeam.Name} vs ${match.AwayTeam.Name} - ${match.Date} - ${match.League.Name}`;
                matchList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Hiba történt a meccsek betöltésekor:', error);
        });
}


function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}


function setDailyUpdate() {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);  

    
    const timeUntilMidnight = nextMidnight - now;

   
    setTimeout(() => {
        loadMatches();  
        setInterval(loadMatches, 24 * 60 * 60 * 1000);  
    }, timeUntilMidnight);
}


setDailyUpdate();
