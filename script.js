
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "adam4813", "ThijsHS", "imaqtpie"]

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
  for (var i = 0; i<users[i].length; i++){
    // console.log(userData.stream);
    // console.log(userData.name);

    // console.log(userData.display_name);
    // console.log(streamsData);
    // $("#loc").html(loc)


    var name = userData.name
    var bio = userData.bio


    // $("#name").html(name)
  }
    $("#players").append("<li>"+"+'Name:"+name+""+bio+""+"</li>")
//+"+_+"+
}