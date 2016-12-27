var prev = null;

var scale = 5;
for (var i = 0; i < 10; i++) {
    var cube = Space.createItem("Cube", 0, 0, 0);
    cube.setScale(scale);
    cube.setRandomColor();

    scale = scale * 0.8;
    if (prev != null) {
        cube.adjustTo("bottom", prev, "top");
    }
    prev = cube;
}


