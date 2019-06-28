/* efecto cambio de color navbar*/
	
$(document).ready(function(){
	$( "#f-item-1" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});
	
	// f-item-2
	$( "#f-item-2" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});
	
	// f-item-3
	$( "#f-item-3" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});
				
	// f-item-4
	$( "#f-item-4" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});
			
	// f-item-5
	$( "#f-item-5" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});
			
	// f-item-6
	$( "#f-item-6" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});

	// f-item-7
	$( "#f-item-7" ).hover(function() {
		$('.menu').css("background-color", "#c000009f");
		}, function(){
		$('.menu').css("background-color", "#003B7D");
	});
        


	// efecto de Sedes

	// santa ana
	$("#imgBot1").mouseover(function(){
		$("#imgDepa1").show();
	});
		
	$("#imgBot1").mouseout(function(){
		$("#imgDepa1").hide();
	});

	// san salvador
	$("#imgBot2").mouseover(function(){
		$("#imgDepa2").show();
	});
		
	$("#imgBot2").mouseout(function(){
		$("#imgDepa2").hide();
	});

	// sonsonate
	$("#imgBot3").mouseover(function(){
		$("#imgDepa3").show();
	});
		
	$("#imgBot3").mouseout(function(){
		$("#imgDepa3").hide();
	});

	// ahuachapan
	$("#imgBot4").mouseover(function(){
		$("#imgDepa4").show();
	});
		
	$("#imgBot4").mouseout(function(){
		$("#imgDepa4").hide();
	});

});
				

/*Efecto animacion de fases*/

/*fase 1*/
$(document).ready(function(){
	$(".f-texto1").mouseover(function(){
		$(".f-1").animate({
			width: '260px',
    		height: '260px'
		});
	});

	$(".f-texto1").mouseout(function(){
		$(".f-1").animate({
			width: '250px',
			height:'250px'
		})
	});
});

/*fase 2*/
$(document).ready(function(){
	$(".f-texto2").mouseover(function(){
		$(".f-2").animate({
			width: '235px',
    		height: '235px'
		});
	});

	$(".f-texto2").mouseout(function(){
		$(".f-2").animate({
			width: '225px',
			height:'225px'
		})
	});
});

/*fase 3*/
$(document).ready(function(){
	$(".f-texto3").mouseover(function(){
		$(".f-3").animate({
			width: '210px',
    		height: '210px'
		});
	});

	$(".f-texto3").mouseout(function(){
		$(".f-3").animate({
			width: '200px',
			height:'200px'
		})
	});
});
