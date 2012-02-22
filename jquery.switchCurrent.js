(function($){
  $.fn.switchCurrent = function(config){
    var root = $(this);
    var option = $.extend({
      selector: 'input[type=radio]',
      onEnable: function(callback){ return false },
      onDisable: function(callback){ return false }
    }, config);

    root.find(option.selector).on('change', function(){
      root.find(option.selector).each(function(){
        if ($(this).attr('checked') == 'checked') {
          option.onEnable($(this));
        }
        else {
          option.onDisable($(this));
        }
      });
    });
  };

  /* [USAGE] switchCurrent
  $(function(){
    $('#reward-area').switchCurrent({
      onDisable: function(elem){
        elem.parent().parent().removeClass('selected');
      }, 
      onEnable: function(elem){
        elem.parent().parent().addClass('selected');
      }
    });
  });
  */
})(jQuery)
