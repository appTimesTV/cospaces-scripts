var lion = Space.createItem('LP_Lion', 0, 0, 0);
var scale = 0;
lion.setScale(scale);

var scheduleRepeatingObj = Space.scheduleRepeating(function() {
  scale += 0.01;
  lion.setScale(scale);

  if (scale > 1) {
    lion.say('Stop!');
    scheduleRepeatingObj.dispose();
  }
}, 0);
