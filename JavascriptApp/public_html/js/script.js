var APP = {
    //Dizionario dove sono posizionati le funzioni di callback
    initClickOnButton: function () {
        $('button').on('click', function () {
            var name = document.getElementById("nameInput").value;
            var surname = document.getElementById("surnameInput").value;
            var classe = document.getElementById("classInput").value;
            var number = document.getElementById("numberInput").value;
            var templateData = {
                'name': name,
                'surname': surname,
                'classe': classe,
                'number': number
            };
            var template = '<p>L\'alunno {{name}} {{surname}} frequenta la classe {{classe}}. Il suo numero di ' +
                'registro è {{number}}.';
            var renderedTemplate = Mustache.render(template, templateData);
            $('body').append(renderedTemplate);
        });
    }
};

$(document).ready(function () {
    APP.initClickOnButton();
});