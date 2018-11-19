(function () {
    $('.employee-grid__item__details').hover(function () {

        var EmplLabel = $(this).find('.EmployeeLabel');
        var EmpImage = $(this).parent().find('.employee-grid__item__image');

        EmplLabel.toggle(function () {

            if (EmplLabel.attr("customvisible") === "false") {
                
                EmplLabel.removeAttr("hidden");
                EmplLabel.attr("customvisible", "true");

            } else {
                EmplLabel.attr("customvisible", "false");
                EmplLabel.attr('hidden', true);

               
           }

        });


        if (EmpImage.css("opacity") == 0.1) {

            EmpImage.animate({ opacity: 1 }, 500);

        } else {

            EmpImage.animate({ opacity: 0.1 }, 500);
        }
        
        
       
    })
})()