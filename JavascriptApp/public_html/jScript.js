/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
$(document).ready(function(){
    element1 = $("bt")
    element1.on("click",function(){
      element1.style.color("red");  
    });
    }*/    
    
    

$(document).ready(function(){
    $('#bt0').on('click', function () {
        $('#titolo').css('color', 'red');
		
		var name = document.getElementById("cd0").innerHTML;
		var surname = document.getElementById("cd1").innerHTML;
		var classe = document.getElementById("cd2").innerHTML;
		
		var tmp = "<p>L'alunno {{name}},{{surname}} fa parte della classe {{classe}}.</p>";
		var diz = {name : name,surname : surname, classe:classe };
		var tmpt = Mustache.to_html(tmp,diz);
		
		$('body').append(tmpt);
    });
	
	
});

