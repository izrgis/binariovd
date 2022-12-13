function asignarpuntos(id, rango, padre) {
	var puntosvd = document.getElementById('puntos'+id);
	var dbtvd = document.getElementById('db'+id);
	puntosvd.value = puntosrango(rango);
	var classrango = claserango(parseInt(puntosvd.value), dbtvd);
	if(parseInt(padre)>=0){
		var residuvd = document.getElementById('residual'+padre);
		residuvd.value = parseInt(residuvd.value) + parseInt(puntosvd.value);

		//alert(id.substring(id.length-1));
		if(parseInt(id.substring(id.length-1)) <= 1 ){//izq
			var piernaizq = document.getElementById('izq'+padre);
			piernaizq.innerHTML = puntosvd.value;
		}
		else{//der
			var piernader = document.getElementById('der'+padre);
			piernader.innerHTML = puntosvd.value;
		}
	}

}

function puntosrango(rango) {
	var pntsvalor = 0;
	switch(rango){
	 case 0:
		// code block
		pntsvalor = 120;
		break;
	  case 1:
		// code block
		pntsvalor = 240;
		break;
	  case 2:
		// code block
		pntsvalor = 480;
		break;
	  case 3:
		// code block
		pntsvalor = 960;
		break;
	  case 4:
		// code block
		pntsvalor = 1720;
		break;
	  case 5:
		// code block
		pntsvalor = 3440;
		break;
	  case 6:
		// code block
		pntsvalor = 6880;
		break;
	  default:
		// code block
		pntsvalor = 0;
	}

	return pntsvalor;
}

function claserango(puntos, dbtvd) {
	var clasepnts = "";
	switch(puntos){
	 case 0:
		// code block
		clasepnts = "dropbtn";
		break;
	  case 120:
		// code block
		clasepnts = "dropbtnafil";
		break;
	  case 240:
		// code block
		clasepnts = "dropbtnapr";
		break;
	  case 480:
		// code block
		clasepnts = "dropbtnsup";
		break;
	  case 960:
		// code block
		clasepnts = "dropbtnbronze";
		break;
	  case 1720:
		// code block
		clasepnts = "dropbtnplata";
		break;
	  case 3440:
		// code block
		clasepnts = "dropbtnoro";
		break;
	  case 6880:
		// code block
		clasepnts = "dropbtnororosa";
		break;
	  default:
		// code block
		clasepnts = "dropbtn";
	}

	//dbtvd.classList.toggle(classrango);
	dbtvd.classList.remove("dropbtn");
	dbtvd.classList.remove("dropbtnafil");
	dbtvd.classList.remove("dropbtnapr");
	dbtvd.classList.remove("dropbtnsup");
	dbtvd.classList.remove("dropbtnbronze");
	dbtvd.classList.remove("dropbtnplata");
	dbtvd.classList.remove("dropbtnoro");
	dbtvd.classList.add(clasepnts);
	return clasepnts;
}