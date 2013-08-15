//= require_tree .
//= require "jquery"

$(document).ready(function(){

	$("#letsconnect").click(connectHandler);
	$("#connectHide").click(closeConnect);
});


connectHandler = function(){
	var connect = $("#connect");
	if(connect.css("right")==="-300px") openConnect();
	else closeConnect();
}

openConnect = function(){
	var connect = $("#connect");
	if(connect.css("right")==="-300px")
		connect.animate({right: "+=300"},250,easeInOutQuad);
	else connect.css("right","0px");
}

closeConnect = function(){
	var connect = $("#connect");
	if(connect.css("right")==="0px")
		connect.animate({right: "-=300"},250,easeInOutQuad);
	else
		connect.css("right",-300);
}

easeInOutQuad = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
}