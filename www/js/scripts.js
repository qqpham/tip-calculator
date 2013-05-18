function calculateTip() {
	var subtotal = $('#individual-subtotal').val(),
		tax = $('#individual-tax').val(),
		tipPercent = parseInt($('.tip .on button strong').text()),
		tip = (subtotal/100)*tipPercent,
		total = +subtotal + +tax + +tip;

	console.log(tipPercent);
	$('.output-tip .result').text('$' + tip.toFixed(2));
	$('.total .result').text('$' + total.toFixed(2));
}

$('.tip').on('click', 'button', function(){
	calculateTip();
});

$('.input').on('blur', 'input[type="number"]', function() {
	calculateTip();
})

$('.button-set li').on('click', function() {
	var tip = $(this);

	tip.addClass('on').siblings().removeClass('on');
});