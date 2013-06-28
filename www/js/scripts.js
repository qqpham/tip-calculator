/*****************************************************************************
Calculate Tip
*****************************************************************************/
function calculateTip(people, subtotal, tax, tipPercent) {
	var tip = (subtotal/100)*tipPercent,
		total = +subtotal + +tax + +tip,
		totalIndividual = total/people;

	return {
		'tip' : tip.toFixed(2),
		'total' : total.toFixed(2),
		'totalIndividual' : totalIndividual.toFixed(2)
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
	var people = $('#group-people').val(),
		subtotal = $('#individual-subtotal').val(),
		tax = $('#individual-tax').val(),
		tipPercent = parseInt($('.tip .on button strong').text());

	if (!people || people < 1) {
		people = 1;
	}

	if (subtotal) {
		$('.output-tip .result').text('$' + calculateTip(people, subtotal, tax, tipPercent).tip);
		$('.total .result').text('$' + calculateTip(people, subtotal, tax, tipPercent).total);
		$('.total-individual .result').text('$' + calculateTip(people, subtotal, tax, tipPercent).totalIndividual);
	} else {
		// do nothing
	}

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
