var second = 1000;

var display = {
  zero: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .E, .F').fadeIn();
  },
  one: function () {
    this.lightsOut();
    $('.B, .C').fadeIn();
  },
  two: function () {
    this.lightsOut();
    $('.A, .B, .D, .E, .G').fadeIn();
  },
  three: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .G').fadeIn();
  },
  four: function () {
    this.lightsOut();
    $('.B, .C, .F, .G').fadeIn();
  },
  five: function () {
    this.lightsOut();
    $('.A, .C, .D, .F, .G').fadeIn();
  },
  six: function () {
    this.lightsOut();
    $('.A, .C, .D, .E, .F, .G').fadeIn();
  },
  seven: function () {
    this.lightsOut();
    $('.A, .B, .C').fadeIn();
  },
  eight: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .E, .F, .G').fadeIn();
  },
  nine: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .F, .G').fadeIn();
  },
  lightsOut: function () {
    $('.A, .B, .C, .D, .E, .G, .D, .F').hide();
  }
};

display.one();
setTimeout(function () {
  display.two();
}, 3*second);
setTimeout(function () {
  display.three();
}, 6*second);
setTimeout(function () {
  display.four();
}, 9*second);
setTimeout(function () {
  display.five();
}, 12*second);
setTimeout(function () {
  display.six();
}, 15*second);
setTimeout(function () {
  display.seven();
}, 18*second);
setTimeout(function () {
  display.eight();
}, 21*second);
setTimeout(function () {
  display.nine();
}, 24*second);
setTimeout(function () {
  display.zero();
}, 27*second);
