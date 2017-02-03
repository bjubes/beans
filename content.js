//check if activated
var toggleUrl = 
$.ajax({
        url: toggleUrl,
        type: "GET",
  		processData: false,
	    success: function(data) {
	    	console.log(data);
		}
	});


$( document ).ready(function() {
	beans();
});

window.setInterval(function(){
	beans();
}, 1000);


function beans() {
	$("img").attr("src", "https://github.com/bjubes/beans/blob/master/bean.png");
}