var countDownDate = new Date("Oct 30, 2021 15:37:25").getTime();

var countdown = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (distance >0) {  

$("#daysTimer").html(days);
$("#hoursTimer").html(hours);
$("#minutesTimer").html(minutes);
$("#secondsTimer").html(seconds);
$("#timer").show();
$("#mint").hide();


}
else{
   clearInterval(countdown);
   countdown=0;
    $("#timer").hide();
    $("#mint").show();
    
}
},1000);
