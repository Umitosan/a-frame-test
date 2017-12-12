

function makeBoxes(total) {
  for (var j=0; j<5; j++) {
    for (var i=0; i<(2*total) ;i+=2) {
      var xPos = i-total;
      var yPos = 5 + (j*1.5);
      var myDelay = i*300;
      var randColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      if (randColor.length < 7) {
        randColor = randColor + '0';
      }
      var myEnt = $('<a-entity>').attr({  class: 'BOXY' + i,
                                          geometry: 'primitive: box; width: 1; height: 1',
                                          position:  xPos + ' ' + yPos + ' -5',
                                          material: 'color: '+ randColor +'; shader: flat; src: assets/blublockstill.png'
                                          });
      var animSpin = $('<a-animation>').attr({ mixin: 'animSpin1',
                                               delay: myDelay
                                               });
      $('#scene1').append(myEnt);
      $('.BOXY' + i).append(animSpin);
    } // inner for
  } // outter for
  console.log("makeBoxes finished");
} // makeBoxes


$(document).ready(function() {
  console.log("<PAGE LODED>");

  makeBoxes(8);

})
