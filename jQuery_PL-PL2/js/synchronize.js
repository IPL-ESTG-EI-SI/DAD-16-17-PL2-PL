(function(){
  'use strict';
  $(function(){
    var nameInput = $("#name");
    var gradeInput = $("#grade");
    var periodInput = $("#period");
    var nameOutput  = $("#nameOutput");
    var gradeOutput = $("#gradeOutput");
    var periodOutput  = $("#periodOutput");
    var form = $('form');

    function updateName(){
      nameOutput.text(nameInput.val());
    }
    function updateGrade(){
      if(gradeInput.val() === undefined || gradeInput.val().length ===0){
        gradeOutput.text('Empty');
      }
      gradeOutput.text(gradeInput.val());
    }

    function updatePeriod(){
      var value = periodInput.val();
      var text = $('option:selected',periodInput).text();
      periodOutput.text(value+'( '+text+' )');
    }
    nameInput.change(updateName);

    gradeInput.keyup(updateGrade);

    periodInput.change(updatePeriod);

    form.on('reset',function(event){
      event.preventDefault();
      nameOutput.text('Empty');
      gradeOutput.text('Empty');
      periodOutput.text('P (Periodic Evaluation)');
      nameInput.val('');
      gradeInput.val('');
      periodInput.val('P');
    });

    updateName();
    updateGrade();
    updatePeriod();
    
  });
})();