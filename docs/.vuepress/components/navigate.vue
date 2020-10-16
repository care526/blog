<template>
  <div id="container"></div>
</template>

<script>
import G6 from '@antv/g6'
let data = require('../data/data.json')
data = {
  id: 'asda',
  children: data.children.slice(2, 3)
}
export default {
  mounted() {
    Promise.resolve().then(() => {
    const width = document.getElementById('container').scrollWidth;
    const height = document.getElementById('container').scrollHeight || 500;
    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      linkCenter: true,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model').data;
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        type: 'cubic-vertical',
        style: {
          stroke: '#A3B1BF',
        },
      },
      layout: {
        type: 'dendrogram',
        direction: 'TB', // H / V / LR / RL / TB / BT
        nodeSep: 40,
        rankSep: 100,
      },
    });

    graph.node(function (node) {
      let position = 'right';
      let rotate = 0;
      if (!node.children) {
        position = 'bottom';
        rotate = Math.PI / 2;
      }
      return {
        label: node.id,
        labelCfg: {
          position,
          offset: 5,
          style: {
            rotate,
            textAlign: 'start',
          },
        },
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();

    graph.on('circle-shape:click', function (event) {
      const { item } = event;
      console.log(item)
    });
  });
  }
}
</script>

<style>
#container {
  width: 1000px;
  height: 600px;
}
</style>