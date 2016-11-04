"use strict";

(function(){

  var nameInput = document.getElementById('name');
  var gradeInput = document.getElementById('grade');
  var periodInput = document.getElementById('period');

  var nameOutput = document.getElementById('nameOutput');
  var gradeOutput = document.getElementById('gradeOutput');
  var periodOutput = document.getElementById('periodOutput');

  nameInput.addEventListener('change',function(){
    nameOutput.textContent = nameInput.value;
  });

  function copyGrade(){
    if(gradeInput.value == undefined || gradeInput.value == ''){
      gradeOutput.textContent = 'Empty';
    }else{
      gradeOutput.textContent = gradeInput.value;
    }
  }
  gradeInput.addEventListener('keyup',copyGrade);

  periodInput.addEventListener('change',function(){
    var value = periodInput.value;
    var text = periodInput.options[periodInput.selectedIndex].text;
    periodOutput.textContent = value+' ( '+text+' )';
  });

  document.getElementsByTagName('form')[0].addEventListener('reset',function(){
    nameOutput.textContent = 'Empty';
    gradeOutput.textContent = 'Empty';
    periodOutput.textContent = 'Empty';
  })

})();
