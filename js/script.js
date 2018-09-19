$(document).ready(function(){
	$(".hdr").show("slow");
	$(".btn").click(function(){
		var idbtn="#"+$(this).attr("id");
		btnIdPlay(idbtn);
	});
	$("html").keydown(function(e){
  		$(".btn").each(function(){
  			if($(this).attr("data-key")==e.keyCode){
  				var idbtn="#"+$(this).attr("id");
  				btnIdPlay(idbtn);
  			}
  		})
  	});
	function btnIdPlay(idbtn){
		var audio=$(idbtn).find("audio");
		audio.trigger("play");	
	}
});