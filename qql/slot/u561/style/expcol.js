  $(function(){
    
    $(".pageblock_box h2").each(function(){
			if ($(this).text()!="") {	
				$(this).addClass("title");	
				$(this).closest(".pageblock_box ").find(".ive_content").hide();	
				$(this).find("SPAN").remove();
			}
	  });

	$(".pageblock_box h2.title").click(function(){
		  if (($(this).hasClass("hidden")))
		  {
			$(this).removeClass("hidden");
			$(this).closest(".pageblock_box").find(".ive_content").hide();
		  }
		  else
		  {
			$(this).addClass("hidden");
			$(this).closest(".pageblock_box").find(".ive_content").show();
		  }
		}
      );
	  
  });