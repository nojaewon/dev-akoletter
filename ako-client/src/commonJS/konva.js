import Konva from 'konva';

export default class App {
    constructor(){
        const scene = document.querySelector('.layer');
        scene.id='layerApp'
        var width = 350;
        var height = 400;


      var stage = new Konva.Stage({
        container: 'layerApp',
        width: width,
        height: height,
      });

      var layer = new Konva.Layer();
      var rectX = stage.width() / 2 - 50;
      var rectY = stage.height() / 2 - 25;

      var box = new Konva.Rect({
        x: rectX,
        y: rectY,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
      });

      // add cursor styling
      box.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      box.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });

      layer.add(box);
      stage.add(layer);
    }
}
