$(document).ready(function(){ 
  $('.searchButton').click(function(){
    $('.searchDrop').css('visibility','visible');
    $('.land-text').css('margin-top','-110vh');
  });

  $('#close-search').click(function(){
    $('.searchDrop').css('visibility','hidden');
    $('.land-text').css('margin-top','0');
  });

  $(".rotate").textrotator({
    animation: "spin", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 1000 // How many milliseconds until the next word show.
  });

  // card begin
  $('#circleDrop').click(function(){
    $('.card-middle').slideToggle();
    $('.close').toggleClass('closeRotate');
  });
  // card end

  $('html, body').localScroll({duration:800});


  // masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });
}); // end doc
