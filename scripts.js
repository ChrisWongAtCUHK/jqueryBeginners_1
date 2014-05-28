$(function(){
	$('li').addClass('alert');
	$('li:eq(5)').removeClass();
	$('li:nth-child(8)').removeClass();
	$('li:even').css('color', 'orange');
	$('li:first').css('color', 'green');
	$('li:last').css('color', 'blue');
	$('li a[title=title]').css('color', 'cyan');

	$('p>a').css('color', 'lime');
});
