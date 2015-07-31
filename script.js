$(document).ready(function() {

//var calculator = {
//  sum: 0,
//  add: function(value) {
//    this.sum += value;
//  },
//  subtract: function(value) {
//    this.sum -= value;
//  },
//  multiply: function(value) {
//   this.sum *= value;
//  },
//  divide: function(value) {
//    this.sum /= value;
//  },
//  clear: function() {
//    this.sum = 0;
//  }, 
//  equals: function() {
//    return this.sum;
//  }
//}


//enters numbers and operation symbols into result area
$('.key').on('click', function() {
//	alert('hi');
//	var result = $('#result');
//	if($('#result').html===0){
//		$('#result').empty();
//		$('#result').append(this.value);
//	}
//	
	$('#result').append(this.value);
});
	
//performs calculations
$('#equals').on('click', function() {
	
	var final = $('#result').text();
	var result = eval(final);
	document.getElementById('result').innerHTML = result;
});
	
//clears results to zero
$('#clear').click(function() {
	document.getElementById('result').innerHTML = 0;
});

});//ends document.ready