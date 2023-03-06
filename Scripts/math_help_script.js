jq(document).ready(function(){
	mHelpinit(jq);
	sticky(jq);
});

function mHelpinit($) {
	var el = $(".js-m-help-form");

	el.on("submit", function(e){
		e.preventDefault();

		var _form = $(this);

		$.ajax({
			url : _form.data("url"),
			data : {
				form: _form.serialize()
			},
			type : 'POST',
			beforeSend : function() {
			},
			success : function(data) {
				try{
					data = $.parseJSON(data);
					if(data.result) {
						
						var success_msg;
						  // Show success message
						  success_msg = $("<div class='m-help-form-success'>Thanks! <br>we will contact you shortly</div>")
						  _form.replaceWith(success_msg);
						
					} else {
						alert(data);
					}
	
				}catch(e){
					console.info(data);
				}
			},
			complete: function(jqXHR, textStatus){
			  $(_form).trigger("reset");
			},
			error: function(jqXHR, textStatus, errorThrown){
					console.info(textStatus+' '+errorThrown);
			 }
		}); // ajax end
	});
}

function sticky($) {
	var el = $(".m-help-floating-sb");
	if ($(".m-help-floating-sb").length && ($(window).width() >= 768)) {
		el.stick_in_parent({
			parent: $(".m-help-sections__layout"),
			offset_top: 0,
			spacer: false
		});
	}	
}