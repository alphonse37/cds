// Efecto de flechas en los botones que despliegan el mapa

// Santa Ana

$(document).ready(function(){
	$('#san').on('click',function(){
		$("#sa, #sal, #so, #ahu").addClass(".fa fa-angle-down");
		$("#sa").addClass(".fa fa-angle-up");
		$("#sa").addClass(".fa fa-angle-down");
		});
});

// San Salvador

$(document).ready(function(){
	$('#salv').on('click',function(){
		$("#sa, #sal, #so, #ahu").addClass(".fa fa-angle-down");
		$("#sal").addClass(".fa fa-angle-up")
		});
});

// Sonsonate

$(document).ready(function(){
	$('#son').on('click',function(){
		$("#sa, #sal, #so, #ahu").addClass(".fa fa-angle-down");
		$("#so").addClass(".fa fa-angle-up")
		});
});

// Ahuachapan

$(document).ready(function(){
	$('#ahua').on('click',function(){
		$("#sa, #sal, #so, #ahu").addClass(".fa fa-angle-down");
		$("#ahu").addClass(".fa fa-angle-up")
		});
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
			


// Validación de formulario

(function() {
	'use strict';
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();