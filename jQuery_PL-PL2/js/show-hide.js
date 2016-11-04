'use strict';
(function(){
  $(function(){
    // DOM READY
    $('#actionBar button:first-child').click(function(){
      $('#secret').toggleClass('invisible');
    })

    $('#actionBar button:nth-child(2)').mouseenter(function(){
      $('#secret').removeClass('invisible');
    })

    $('#actionBar button:last-child').on('mouseenter',function(){
      $('#secret').addClass('invisible');
    })
  });
})();