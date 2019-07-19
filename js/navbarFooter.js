/*Navbar para dispositivos medios y pequeños*/

$(document).ready(function(){
	$("#abrir").click(function(){
		$(".menu").fadeIn();
	});
		
	$("#cerrar").click(function(){
		$(".menu").fadeOut();
	});

	$(window).resize(function() {
		if ($(window).width() < 990) {
		  $(".menu").css({"display":"none"});
		}
	
		else {
			$(".menu").css({"display":"block"});
		}
	});
}); 



// Efecto para cambiar la imagen de casatic y de usaid en el footer

$(document).ready(function(){
	// Logo casaTic
	$(".casatic").mouseover(function(){
		$(".colorCasatic").css(
			{"display":"block"}
		);
		$(".imgCasatic").css(
			{"display":"none"}
		);
	});

	$(".casatic").mouseout(function(){
		$(".colorCasatic").css(
			{"display":"none"}
		);
		$(".imgCasatic").css(
			{"display":"block"}
		);
	});

	// Logo usaid
	$(".puentes").mouseover(function(){
		$(".colorPuentes").css(
			{"display":"block"}
		);
		$(".imgPuentes").css(
			{"display":"none"}
		);
	});

	$(".puentes").mouseout(function(){
		$(".colorPuentes").css(
			{"display":"none"}
		);
		$(".imgPuentes").css(
			{"display":"block"}
		);
	});


	// efecto boton para ir arriba
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 20 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});


    (function () {
        var options = {
            facebook: "241199803092026", // Facebook page ID
            whatsapp: "+(503) 7226-6040", // WhatsApp number
            call_to_action: "¡Contáctanos!", // Call to action
            button_color: "#129BF4", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,whatsapp", // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
