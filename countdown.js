//Create a countdown with a specific date.

var countDownDate = new Date("Feb 28, 2024 00:00:00").getTime();


//Update the countdown every 1 second.
var x = setInterval(function() {

    var now = new Date().getTime();

    //To calculate the distance between the start date and the countdown date.
    var distance = countDownDate - now;

    
    //Calculate days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));    
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display the result in the element id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    //If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "OVER"
    }
}, 1000);