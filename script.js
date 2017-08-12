// got to twitchtv

// get users

// get profile via a search api (later)

// call api per user 

var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

// var streams api

// https://wind-bow.glitch.me/twitch-api/streams/user

//var users api

// https://wind-bow.glitch.me/twitch-api/users/ESL_SC2

// Determine the status


//function is used to pull data (api call)
function getData(type, user) {
    var url = "https://wind-bow.glitch.me/twitch-api/" + type + "/" + user;

    return $.getJSON(url)
}
users.forEach(function (user) {
    getData("users", user).then(function (userData) {
        getData("streams", user).then(function (streamsData) {
            displayData(userData, streamsData);
        })
    })

});

function displayData(userData, streamsData){
    console.log(userData);
    console.log(streamsData);
}