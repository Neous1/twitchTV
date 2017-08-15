var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "adam4813", "ThijsHS", "imaqtpie", "loltyler1", "nl_Kripp"]

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

function displayData(userData, streamsData) {
    console.log(userData);
    console.log(streamsData);
    for (var i = 0; i < users[i].length; i++) {
        // console.log(userData.stream);
        // console.log(userData.name);

        // console.log(userData.display_name);
        // console.log(streamsData);
        // $("#loc").html(loc)


        var logo = userData.logo
        var name = userData.name
        var bio = userData.bio


        // $("#name").html(name)
    }
    $("#players").append("<li>" + ""+"<img class='logo' src='" +logo+"' alt='"+ name + "'>"+"  " +"<strong>Name :" +" "+ name + "</strong>" + "<br>" + bio + "<br>" + "</li>")
    // //+"+_+"+

        // $("#players").append("<li>" + "<span id='+logo+'></span>" + "</li>")
 
    
}