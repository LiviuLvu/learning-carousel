var startingItem = 3;

$(document).ready(function() {
   $('.carousel_data .carousel_item').each(function() {
      $('#carousel').append($(this).find('.image').html());
   });
   createCarousel();
   showCaption();


   // keyboard arrow navigation
   $('document').keyup(function(event) {
      if (event.keyCode == 37) {
         $('#carousel').roundabout('animateToNextChild', showCaption);
         console.log('left');
      } else if (event.keyCode == 39) {
         $('#carousel').roundabout('animateToPreviousChild', showCaption);
         console.log('right');
      }
   });

});

function createCarousel() {
   //implement the carousel plugin
   $('#carousel').roundabout({
      childSelector: 'img',
      startingChild: window.startingItem,
      tilt: -4.5,
      minOpacity: 1,
      minScale: 0.45,
      duration: 300,
      clickToFocus: true,
      clickToFocusCallback: showCaption
   });
   createCustonButtons();
}

function createCustonButtons() {

   // icons click navigation
   $('.prevItem').click(function() {
      hideCaption();
      $('#carousel').roundabout('animateToNextChild', showCaption);
   });
   $('.nextItem').click(function() {
      hideCaption();
      $('#carousel').roundabout('animateToPreviousChild', showCaption);
   });
   $('div#carousel img').click(function() {
      hideCaption();
   });

   // keyboard arrow navigation
   $(document).keyup(function(event) {
      if (event.keyCode == 37) {
         $('#carousel').roundabout('animateToPreviousChild', showCaption);
         console.log('left');
      } else if (event.keyCode == 39) {
         $('#carousel').roundabout('animateToNextChild', showCaption);
         console.log('right');
      }
   });
}

function showCaption() {
   var childInFocus = $('div#carousel').data('roundabout').childInFocus;
   var setCaption = $('.carousel_data .carousel_item .caption:eq(' + childInFocus + ')').html();
   $('#captions').html(setCaption);
   var newHeight = $('#captions').height() + 'px';
   $('.caption_container').animate({
      'height': newHeight
   }, 100, function() {
      // fade in text
      $('#captions').animate({
         'opacity': 1
      }, 100);
   });
}

function hideCaption() {
   // fade out text
   $('#captions').animate({
      'opacity': 0
   }, 100);
}
