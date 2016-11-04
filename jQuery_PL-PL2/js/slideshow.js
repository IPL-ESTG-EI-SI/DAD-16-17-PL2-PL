'use strict';
var slider = (function(){
  var imageFolder;
  var lastIndex;
  var timer;
  var currentIndex = 0;
  var img = $('#slider');

  function render(){
    var src = imageFolder+'/img-'+currentIndex+'.jpeg';
    img.attr('src', src);
  }

  function previous() {
    currentIndex--;
    if(currentIndex<1){
      currentIndex = lastIndex;
    } 
    render();
  }

  function next(){
    currentIndex++;
    if(currentIndex > lastIndex){
      currentIndex = 1;
    }
    render();
  }

  function stop(){
    clearInterval(timer);
  }

  function start(){
    if(timer !== undefined){
      clearInterval(timer);
    }
    timer = setInterval(next,2000);
  }

  function init(folder, lastImage){
    imageFolder = folder;
    lastIndex = lastImage;
    start();
  }

  $(function(){
    // DOM READY
    $('#restart').click(start);
    $('#next').click(next);
    $('#previous').click(previous);
    $('#stop').click(stop);
  });

  return {
    init:init
  }
})();

slider.init('slide_img',13);
