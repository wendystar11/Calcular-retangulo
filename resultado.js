 
	function calcularR(){
		comprimentoR= document.getElementById("comprimento").value;
		alturaR= document.getElementById("altura").value;
		larguraR= document.getElementById("largura").value;	
		
		comp = parseFloat(comprimentoR);
		altu = parseFloat(alturaR);
		larg = parseFloat(larguraR);
		
		resultado = comp*altu*larg;
		
		document.getElementById("resultado").value = resultado;
	} 
	
