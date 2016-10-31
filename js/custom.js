$(function() {
  $('li.clickable').on('mousedown touchstart', function() {
    var $that = $(this);
    
    $(this).on('mouseup touchend', function(event) {
      event.preventDefault();
      
      location.href = $(this).find('a').attr('href');
      
      $that.off('mousemove touchmove mouseup touchend mouseout');
    });
    
    $(this).on('mousemove touchmove', function() {
      $that.off('mousemove touchmove mouseup touchend mouseout');
    });
    
    $(this).on('mouseout', function() {
      $that.off('mousemove touchmove mouseup touchend mouseout');
    });
  });
});


var gridster;

$(function() {

  gridster = $(".gridster ul").gridster({
    widget_base_dimensions: [100, 55],
    widget_margins: [5, 5],
    helper: 'clone',
    resize: {
      enabled: true,
      max_size: [8, 8],
      min_size: [2, 2]
    }
  }).data('gridster');

});


// when the page is loaded..
//$(function() {
    // make the cursor over <li> element to be a pointer instead of default
//    $('li.clickable').css('cursor', 'pointer')
    // iterate through all <li> elements with CSS class = "clickable"
    // and bind onclick event to each of them
//    .click(function() {
        // when user clicks this <li> element, redirect it to the page
        // to where the fist child <a> element points
//        window.location = $('a', this).attr('href');
//        return false;
//    });
//});