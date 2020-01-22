$(document).ready(function() {

  // SMOOTH SCROLLING
  $("a").on('click', function(event) {  
      if (this.hash !== "") {
        event.preventDefault();

        let hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      }
  });
  //TABS
  $('.tabs li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('.tabs li').removeClass('active');
		$('.tabs__content').removeClass('current');

		$(this).addClass('active');
		$("#"+tab_id).addClass('current');
	})
  //RATINGS
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    let onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
  // Now highlight all the stars that's not after the current hovered star
  $(this).parent().children('li.star').each(function(e){
    if (e < onStar) {
      $(this).addClass('hover');
    }
    else {
      $(this).removeClass('hover');
    }
  });

  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });

  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    let onStar = parseInt($(this).data('value'), 10); // The star currently selected
    let stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
  });


        
});
