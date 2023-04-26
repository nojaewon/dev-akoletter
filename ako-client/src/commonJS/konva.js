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

      var box2 = new Konva.Rect({
        x: rectX-50,
        y: rectY-70,
        width: 100,
        height: 50,
        fill: 'red',
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

      box2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      box2.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });

      layer.add(box);
      layer.add(box2);
      stage.add(layer);
    }
}
