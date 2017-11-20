const Timepicker = require('./timepicker');

(function($) {

  if(!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.timepicker = function(option) {
    var out;
    this.each(function() {
      var $this = $(this);
      var data = $this.data('timepicker');
      var options = typeof option === 'object' && option;

      if (!data) {
        data = new Timepicker(this, options);
        $this.data('timepicker', data);
      }

      if (option === 'remove') {
        out = data['remove']();
        $this.removeData('timepicker', data);
      }

      if (typeof option === 'string') {
        out = data[option]();
      }
    });

    return out || this;
  };

  //////////////
  // Data API //
  //////////////

  /* TODO: fix this
  $('[data-timepicker]').each(function() {
    var $this = $(this);
    $this.timepicker($this.data());
  });
  */

}(window.Zepto || window.jQuery));
