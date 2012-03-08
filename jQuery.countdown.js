(function() {
  var timer;

  timer = {
    current: function(target) {
      var d, h, m, n, now, s, t;
      now = new Date();
      target = new Date(target);
      t = target.getTime() - now.getTime();
      n = new Date(t);
      d = n.getDate() - 1;
      h = n.getHours() - 1;
      m = n.getMinutes();
      s = n.getSeconds();
      if (t > 0) {
        return d + ' days ' + h + ' hours ' + m + ' minutes ' + s + ' seconds ';
      } else {
        return '0 days 0 hours 0 minutes 0 seconds ';
      }
    }
  };

  jQuery.fn.countdown = function() {
    var el;
    el = this;
    return setInterval(function() {
      return el.text(timer.current($(el).attr('data-target')));
    }, 1000);
  };

}).call(this);

