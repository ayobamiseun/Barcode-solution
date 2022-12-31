function validate() {
        	var valid = true;
        var message;
    	    
        $("#validation-info").hide();
        	$("#validation-info").html();
        if($("#mrp").val() == "") {
            message = "All fields are required";
            	valid = false;
        } else if(!$.isNumeric($("#mrp").val())) {
            	message = "MRP should be in numbers";
            	valid = false;
        } else if($("#mfg_date").val() == "") {
            message = "All fields are required";
            	valid = false;
        } else if($("#exp_date").val() == "") {
                message = "All fields are required";
                valid = false;
        }
        if(valid == false) {
        	   $("#validation-info").show();
           $("#validation-info").html(message);
        }
        return valid;
    }