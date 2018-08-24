function calculadora(q,m,c,t) {
	var q =document.getElementById('val1').value;
	var m =document.getElementById('val2').value;
	var c =document.getElementById('val3').value;
	var t =document.getElementById('val4').value;
	 if (q == "") {
		  	var res = ( m * c ) * t;
		alert(res)
	}else if (m == "") {
		var res = ( t * c ) / q;
		alert(res)
	}else if (c == "") {
		var res = ( m * t ) / q;
		alert(res)
	}else if (t == "") {
		var res = ( m * c ) / q;
		alert(res)
	}else{
		alert('Você deve deixar um campo em branco')
	}

}