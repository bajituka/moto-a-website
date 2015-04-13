$(document).ready(function() {

//Spots section click handler
	$(".showList").on("click", function(event) {
		event.preventDefault();
		$(this).closest(".spotsLeftColumn").find(".hidden").slideToggle();
		$(this).closest(".spotsRightColumn").find(".hidden").slideToggle();
	});

//Prices section menu and submenu hover handler


	$(".menu1").on("mouseenter", function() {
		$(this).closest("nav").find(".dropdown").stop().slideDown("fast");
	});

	$(".dropdown").on("mouseleave", function() {
		$(".dropdown").stop().slideUp("fast");
	});

//Modal pop-up
	$(".contactus a").click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#modal_form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#modal_close, #overlay').click( function(){
		if (confirm("Вы действительно хотите закрыть окно?")) {
			$('#modal_form').animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
		} else {
			return false;
	};
	});

//Submit button confirmation
	
	$("#modal_form :submit").on("click", function() {
	var customerName = $("#modal_name").val();
	var customerPhone = $("#phone_number").val();
		if (confirm("Информация введена верно?\nИмя: " + customerName + "\nТелефон: " + customerPhone)) {
			alert("Спасибо! Мы перезвоним вам в течение суток.");
		} else {
			return false;
		}
	});

});
	


