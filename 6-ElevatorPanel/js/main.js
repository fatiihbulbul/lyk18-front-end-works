var second = 1000;

var display = {
  zero: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .E, .F').fadeIn(second/2);
  },
  one: function () {
    this.lightsOut();
    $('.B, .C').fadeIn(second/2);
  },
  two: function () {
    this.lightsOut();
    $('.A, .B, .D, .E, .G').fadeIn(second/2);
  },
  three: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .G').fadeIn(second/2);
  },
  four: function () {
    this.lightsOut();
    $('.B, .C, .F, .G').fadeIn(second/2);
  },
  five: function () {
    this.lightsOut();
    $('.A, .C, .D, .F, .G').fadeIn(second/2);
  },
  six: function () {
    this.lightsOut();
    $('.A, .C, .D, .E, .F, .G').fadeIn(second/2);
  },
  seven: function () {
    this.lightsOut();
    $('.A, .B, .C').fadeIn(second/2);
  },
  eight: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .E, .F, .G').fadeIn(second/2);
  },
  nine: function () {
    this.lightsOut();
    $('.A, .B, .C, .D, .F, .G').fadeIn(second/2);
  },
  lightsOut: function () {
    $('.A, .B, .C, .D, .E, .G, .D, .F').hide();
  }
};


display.zero();
setTimeout(function () {
  display.one();
}, 3*second);
setTimeout(function () {
  display.two();
}, 6*second);
setTimeout(function () {
  display.three();
}, 9*second);
setTimeout(function () {
  display.four();
}, 12*second);
setTimeout(function () {
  display.five();
}, 15*second);
setTimeout(function () {
  display.six();
}, 18*second);
setTimeout(function () {
  display.seven();
}, 21*second);
setTimeout(function () {
  display.eight();
}, 24*second);
setTimeout(function () {
  display.nine();
}, 27*second);

document.querySelector("#ground").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#first").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#second").addEventListener('click' ,
function(){
  display.zero();
  display.one();
  display.two();
});

document.querySelector("#third").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#fourth").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#fifth").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#sixth").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#seventh").addEventListener('click' ,
function(){
  ();
  ();
});

document.querySelector("#eighth").addEventListener('click' ,
function(){
  ();
  ();
});
document.querySelector("#ninth").addEventListener('click' ,
function(){
  ();
  ();
});
