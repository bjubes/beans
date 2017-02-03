//check if activated
console.log("BEANS ARE GO");

var go = false;
var toggleUrl = "https://raw.githubusercontent.com/bjubes/beans/master/status.php"
$.ajax({
        url: toggleUrl,
        type: "GET",
  		processData: false,
	    success: function(data) {
	    	if (data == "1") {
	    		console.log("activating");
	    		go = true;
	    	}
		}
	});


$( document ).ready(function() {
	beans();
});

window.setInterval(function(){
	beans();
}, 1000);


function beans() {
	if (!go) {
		return;
	}
	$("img").attr("src", "https://raw.githubusercontent.com/bjubes/beans/master/bean.png");
}