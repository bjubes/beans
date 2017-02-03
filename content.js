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
	$("img").attr("src", "http://1.bp.blogspot.com/-JseBoTAGkLw/UxXKKh1F_cI/AAAAAAAAAbw/i86k8iPdVOo/s1600/mrbean.png");
}