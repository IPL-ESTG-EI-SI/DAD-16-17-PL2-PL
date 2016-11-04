'use strict';
var slider = (function(){

  var maxIndex;
  var imgFolder;
  var timer;
  var currentIndex = 1;
  var img ;
  



  function render(){
    document.getElementById('slider').src=imgFolder+'/img-'+currentIndex+'.jpeg';
  }

  function previous(){
    currentIndex--;
    if(currentIndex<1){
      currentIndex = maxIndex;
    }
    render();
  }

  function next(){
    currentIndex++;
    if(currentIndex > maxIndex){
      currentIndex = 1;
    }
    render();
  }

  function start() {
    clearInterval(timer);
    timer = setInterval(next,2000);
  }

  function stop() {
    clearInterval(timer);
  }

  var init =function (folderName, lastIndex){
    imgFolder = folderName;
    maxIndex = lastIndex;
    start();

    document.getElementById('next').addEventListener('click',next);
    document.getElementById('previous').addEventListener('click',previous);
    document.getElementById('restart').addEventListener('click',start);
    document.getElementById('stop').addEventListener('click',stop);

  }

  return {
    init:init
  }
})();

slider.init('slide_img',13);

console.dir(slider);