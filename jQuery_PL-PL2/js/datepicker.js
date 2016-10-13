'use strict';

(function(){
  // code does not require DOM
  $(function(){
    // DOM READY
    var options = {
      minDate: new Date(),
      maxDate: '+1M',
      dateFormat: 'dd-mm-yy'
    }

    $('#date1').datepicker($.datepicker.regional[ 'en' ]);
    $('#date2').datepicker($.extend($.datepicker.regional[ 'en' ],options) );
    $('#date3').datepicker();
    $('#date4').datepicker(options);

  });
})();