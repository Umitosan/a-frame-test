
var $myEnt = $('<a-entity>').attr({ class: 'BOXY',
                                    geometry: 'primitive: box; width: 1; height: 1',
                                    position: '0 2 -2',
                                    material: 'color: #33DDEE; shader: flat'
                                    });



// position: '0 2 -2',

function makeBoxes() {
  $('#scene1').append($myEnt);
  console.log("makeBoxes finished");
} // makeBoxes


$(document).ready(function() {
  console.log("<PAGE LODED>");

  makeBoxes();

})
