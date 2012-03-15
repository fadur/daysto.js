(function() {
  var timer;

  timer = {
    current: function(target) {
      var days, hours, m, markup, n, now, s, t;
      now = new Date();
      target = new Date(target);
      t = target.getTime() - now.getTime();
      n = new Date(t);
      m = n.getMinutes();
      s = n.getSeconds();
      days = Math.round(t / 86400000);
      hours = Math.round((t - (days * 86400000)) / 3600000);
      if (t > 0) {
        markup = "<p><span class='days'>" + days + " Days</span><br /> <span class='clock'>" + hours + ":" + m + ":" + s + "</span></p>";
        return markup;
      } else {
        return '0 days 0 hours 0 minutes 0 seconds ';
      }
    }
  };

  jQuery.fn.daysto = function() {
    var el;
    el = this;
    return setInterval(function() {
      return el.html(timer.current($(el).attr('data-target')));
    }, 1000);
  };

}).call(this);
