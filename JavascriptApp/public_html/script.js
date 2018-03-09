$(document).ready(function($){
  $("#submit").click(function(){  
  submit();
});

function submit() {
    var data = { nome: document.getElementById("nome").value,cognome: document.getElementById("cognome").value,
    matricola: document.getElementById("matricola").value,datanascita: document.getElementById("datanascita").value};
    var template = "L'alunno di nome {{ nome }} {{ cognome }} è nato il {{ datanascita }} con matricola {{ matricola }}";
    var text = Mustache.render(template, data);        
    $("#mypanel").html(text);
}
});