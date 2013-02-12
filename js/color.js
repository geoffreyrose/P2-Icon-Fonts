$(document).ready(function(){
	$('.custom').addClass('customizedbar');

	$('a#customize').click(function() {
		$('.custom').toggleClass('customizedbar');
		$('.arrow').toggleClass('arrowup');
	});


	$('#background li:nth-of-type(2) a').click(function() {
		$('body').css('background', '#0f0');
	});
	$('#background li:nth-of-type(3) a').click(function() {
		$('body').css('background', '#00f');
	});
	$('#background li:nth-of-type(4) a').click(function() {
		$('body').css('background', '#f00');
	});
	$('#background li:nth-of-type(5) a').click(function() {
		$('body').css('background', '#ffa300');
	});
	$('#background li:nth-of-type(6) a').click(function() {
		$('body').css('background', '#f60589');
	});
	$('#background li:nth-of-type(7) a').click(function() {
		$('body').css('background', '#eaff00');
	});
	$('#background li:nth-of-type(8) a').click(function() {
		$('body').css('background', '#000');
	});
	$('#background li:nth-of-type(9) a').click(function() {
		$('body').css('background', '#fff');
	});
	
	
	
	$('#color li:nth-of-type(2) a').click(function() {
		$('.container span').css('color', '#0f0');
	});
	$('#color li:nth-of-type(3) a').click(function() {
		$('.container span').css('color', '#00f');
	});
	$('#color li:nth-of-type(4) a').click(function() {
		$('.container span').css('color', '#f00');
	});
	$('#color li:nth-of-type(5) a').click(function() {
		$('.container span').css('color', '#ffa300');
	});
	$('#color li:nth-of-type(6) a').click(function() {
		$('.container span').css('color', '#f60589');
	});
	$('#color li:nth-of-type(7) a').click(function() {
		$('.container span').css('color', '#eaff00');
	});
	$('#color li:nth-of-type(8) a').click(function() {
		$('.container span').css('color', '#000');
	});
	$('#color li:nth-of-type(9) a').click(function() {
		$('.container span').css('color', '#fff');
	});
	
	
	$('#fontsize li:nth-of-type(2) a').click(function() {
		$('.container span').css('font-size', '1em');
	});
	$('#fontsize li:nth-of-type(3) a').click(function() {
		$('.container span').css('font-size', '1.5em');
	});
	$('#fontsize li:nth-of-type(4) a').click(function() {
		$('.container span').css('font-size', '2em');
	});
	$('#fontsize li:nth-of-type(5) a').click(function() {
		$('.container span').css('font-size', '2.5em');
	});
	$('#fontsize li:nth-of-type(6) a').click(function() {
		$('.container span').css('font-size', '3em');
	});
	$('#fontsize li:nth-of-type(7) a').click(function() {
		$('.container span').css('font-size', '3.5em');
	});
	$('#fontsize li:nth-of-type(8) a').click(function() {
		$('.container span').css('font-size', '4em');
	});
	$('#fontsize li:nth-of-type(9) a').click(function() {
		$('.container span').css('font-size', '4.5em');
	});
	
	
});