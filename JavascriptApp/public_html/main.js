// Dizionario coi listener
var APP = {
    buttonClick: function() {
        $(".button").on('click', function(){
            funz();		
        });
    }
};

function funz() {
	console.log("sla");
	var nome = document.getElementById('name').value;
	var cognome = document.getElementById('surname').value;
	var nReg = document.getElementById('codFisc').value;
	var annoDiNascita = document.getElementById('year').value;
	var templateDate = {
		"nome" : nome,
		"cognome" : cognome,
		"anno" : annoDiNascita,
		"registro" : nReg
	}
	var template = "L'iscritto {{nome}} {{cognome}} è nato nel {{anno}} ed ha questo codice fiscale {{registro}}."
	var render = Mustache.render(template, templateDate);
	alert(render);
};


// Main con installazione listener
$(document).ready(function($) {
    // Inizializzazione tasti click_abili
    APP.buttonClick();
});