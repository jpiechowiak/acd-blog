function InitDialogAndWizard(){
    var oDialogNode = $("#dialog-example");
    var oForm = oDialogNode.find("form");
    if (!oDialogNode.data("dialog-created")) {
        oForm.formwizard({
            disableUIStyles: true
        }); 
        oForm.bind("step_shown", function(oEvent, oData) {
			ManageStepButtons(oForm);
			if("dialog-example-form-third" == oData.currentStep){
				$('#spname').html($('#name').val());
				$('#spsurname').html($('#surname').val());
			}
        });
        oDialogNode.dialog({
            width: 500,
            height: 320,
            title: "Kreator",
			modal: true,
            create: function(oEvent, oUi) {
                $(this).data("dialog-created", true);
            },			
            beforeclose: function() {
                $(this).find(':input').val('');
            },
            buttons: [{
                id: "dialog-example-backbtn",
                text: "Wstecz",
                click: function() {
                    oForm.formwizard("back");
                },
                css: { "width": "120px" }
            },
            {
                id: "dialog-example-nextbtn",
                text: "Dalej",
                click: function() {
                    if (oForm.formwizard("state").isLastStep) {
                        alert("Koniec!");
                    } else {
                        oForm.formwizard("next");
                    }
                },
                css: { "width": "120px" }
            },
            {
                text: "Zamknij",
                click: function() {
                    $(this).dialog("close");
                },
                css: { "width": "120px" }
			}]
		});
    }
	ManageStepButtons(oForm);
}

function ManageStepButtons(oForm){
	if (oForm.formwizard("state").isFirstStep) {
		$("#dialog-example-backbtn").button("disable");
	} else {
		$("#dialog-example-backbtn").button("enable");
	}
	if (oForm.formwizard("state").isLastStep) {
		$("#dialog-example-nextbtn").button("option", "label", "Zatwierdź");
	} else {
		$("#dialog-example-nextbtn").button("option", "label", "Dalej");
	}   
}

$(document).ready(function() {
	$("#btn-run")
		.button()
		.click(function(){
			InitDialogAndWizard();
			$("#dialog-example").dialog("open");
		});
		
}); 