
	jQuery(document).ready(function() {
	
	function megaHoverOver(){
		jQuery(this).find(".sub").stop().fadeTo('fast', 1).show();
		//alert('teste1');
		if ( jQuery(this).find(".row").length > 0 ) { //If row exists...
				var biggestRow = 0;
			//Calculate each row
			alert('teste');
										jQuery(this).find(".row").each(function() {
				calcSubWidth(this);
				//Find biggest row
				if(rowWidth > biggestRow) {
					biggestRow = rowWidth;
				}
			});
			//Set width
			jQuery(this).find(".sub").css({'width' :biggestRow});
			jQuery(this).find(".row:last").css({'margin':'0'});
			
		} else { //If row does not exist...
			calcSubWidth(this);
			//Set Width
			jQuery(this).find(".sub").css({'width' : rowWidth});
			
		}
	}
	
	function megaHoverOut(){
	jQuery(this).find(".sub").stop().fadeTo('fast', 0, function() {
		jQuery(this).hide();
	});
	}
	
	function calcSubWidth(obj){
		rowWidth = 0;
		var el = jQuery(obj);
		//Calculate row
							el.find("ul").each(function() {
			rowWidth += jQuery(this).width();
					});
	}


	var config = {
		sensitivity: 2,
		interval: 100,
		over: megaHoverOver,
		timeout: 500,
		out: megaHoverOut
	};

	jQuery("ul#topnav li .sub").css({'opacity':'0'});
	jQuery("ul#topnav li").hoverIntent(config);
			jQuery("#box-secretarias > ul").tabs("#box-secretarias > div");
		
	// Background carregado a partir do portal do governo
					//jQuery("body").css('background','#fafafa url("http://www.paraiba.pb.gov.br/commons/bg") no-repeat center top');
	
			
	
	});