/*****************************************************************************
Calculate Tip
*****************************************************************************/
function calculateTip(subtotal, tax, tipPercent) {
	var tip = (subtotal/100)*tipPercent,
		total = +subtotal + +tax + +tip;

	return {
		'tip' : tip.toFixed(2),
		'total' : total.toFixed(2)
	}
}

/*****************************************************************************
Add Decimal
*****************************************************************************/
function addDecimal(amount) {
	if (amount.length > 1) {
		amount = amount.replace('.', '');

		output = [amount.slice(0, -2), amount.slice(-2)];
		return output.join('.');
	} else {
		return amount;
	}
}

/*****************************************************************************
Format value on keyup
*****************************************************************************/
$('input[type="text"]').on('keyup', function() {
	var $this = $(this),
		amount = $this.val();

	if (amount) {
		$this.val(addDecimal(amount));
	}
})

/*****************************************************************************
Get Tip
*****************************************************************************/
function getTip() {
	var subtotal = $('#individual-subtotal').val(),
		tax = $('#individual-tax').val(),
		tipPercent = parseInt($('.tip .on button strong').text());

	$('.output-tip .result').text('$' + calculateTip(subtotal, tax, tipPercent).tip);
	$('.total .result').text('$' + calculateTip(subtotal, tax, tipPercent).total);
}

$('.tip').on('click', 'button', function(){
	getTip();
});

$('.input').on('blur', 'input[type="text"]', function() {
	getTip();
})

/*****************************************************************************
Button Sets (Tabs)
*****************************************************************************/
$('.button-set li').on('click', function() {
	var tip = $(this);

	tip.addClass('on').siblings().removeClass('on');
});

/*****************************************************************************
Select All Text
*****************************************************************************/
$('input[type="text"]').on('click', function() {
	this.setSelectionRange(0,9999);;
});
