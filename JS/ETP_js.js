function iframeContSrc(op) {
	switch (op) {
		case 1:
			document.getElementById('iframe_Contenido').src = "pagHTML/ETP_Inicio.html";
			break;
		case 2:
			document.getElementById('iframe_Contenido').src = "pagHTML/ETP_AcercaNosotros.html";
			break;
		case 3:
			document.getElementById('iframe_Contenido').src = "pagHTML/ETP_Tours.html";
			break;
		case 4:
			document.getElementById('iframe_Contenido').src = "pagHTML/ETP_Destinos.html";
			break;
        case 5:
			document.getElementById('iframe_Contenido').src = "pagHTML/ETP_Hoteles.html";
			break;
        case 6:
			document.getElementById('iframe_Contenido').src = "pagHTML/ETP_Contacto.html";
			break;
        case 7:
			document.getElementById('iframe_Contenido').src = "pagHTML/AI_Registro.html";
			break;
	}
}