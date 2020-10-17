<template>
  <div class="box">
    <div id="container"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
let data = require('../data.json')

export default {
  data() {
    return {
      graph: null
    }
  },
  mounted() {
    this.resolve()
  },
  methods: {
    resolve() {
      let willShowData = data
      if (location.hash) {
        const arr = location.hash.slice(1).split(',').map(i => decodeURI(i))
        arr.unshift(data.children)
        willShowData = {
          id: arr[arr.length - 1],
          children: arr.reduce((root, parentNode) => {
            const Nodes = root.filter(i => i.id === parentNode)
            return Nodes[0].children
          })
        }
      }
      const width = document.getElementById('container').scrollWidth - 100
      const height = document.getElementById('container').scrollHeight - 60
      Promise.resolve().then(() => {
        const graph = new G6.TreeGraph({
          container: 'container',
          width,
          height,
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
            type: 'cubic-horizontal',
            style: {
              stroke: '#A3B1BF',
            },
          },
          layout: {
            type: 'dendrogram',
            direction: 'LR', // H / V / LR / RL / TB / BT
            nodeSep: 30,
            rankSep: 100,
          },
        });

        graph.node(function (node) {
          return {
            label: node.id,
            labelCfg: {
              position: node.children && node.children.length > 0 ? 'left' : 'right',
              offset: 5,
            },
          };
        });
        
        graph.data(willShowData);
        graph.render();
        graph.fitView();
        
        graph.on('node:click', (event) => {
          const { item } = event;
          if (item._cfg.id.indexOf('.') === -1) return
          location.href = location.origin + '/md/' + item._cfg.id.split('.')[0]
        });
        this.graph = graph
      });
    }
  }
}
</script>

<style>
.box {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 30px);
  margin-top: 0 !important;
  padding-top: 30px;
  background: #FFFFFF;
  z-index: 11;
}
#container {
  height: 100%;
}
#container canvas {
  margin: 0 50px;
}
</style>