

function makeBoxes(total) {
  for (var i=0; i<(2*total) ;i+=2) {
    var xPos = i-total;
    var myEnt = $('<a-entity>').attr({  class: 'BOXY',
                                        geometry: 'primitive: box; width: 1; height: 1',
                                        position:  xPos + ' 7 -5',
                                        material: 'color: #33DDEE; shader: flat'
                                        });
    $('#scene1').append(myEnt);
  }
  console.log("makeBoxes finished");
} // makeBoxes


$(document).ready(function() {
  console.log("<PAGE LODED>");

  makeBoxes(8);

})
