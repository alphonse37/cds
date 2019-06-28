// Imagen Ampliada
$(document).ready(function(){
    $("#noticias img").click(function(){
        var srcImagen = $(this).attr("src");
        $("#imagen img").attr("src", srcImagen);
        $("#mostrarIMG").show(200);
    });

    $("#mostrarIMG")
    .click(function(){
        ocultar(this)
    })

    function ocultar(elemento){
        $(elemento).hide();
    }
});

/* efecto navbar*/
	
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
		});
