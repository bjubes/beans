//check if activated
console.log("BEANS ARE GO");

var go = false;
var toggleUrl = "https://beansrbeans.herokuapp.com/states/1.json"
$.ajax({
        url: toggleUrl,
        type: "GET",
        headers: {
     		'Cache-Control': 'no-cache, no-store, must-revalidate', 
     		'Pragma': 'no-cache', 
     		'Expires': '0'
   		},
  		processData: false,
	    success: function(data) {
	    	response = JSON.parse(data)
	    	console.log(response);
	    	if (response["status"]) {
	    		console.log("activating");
	    		go = true;
	    	} else {
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