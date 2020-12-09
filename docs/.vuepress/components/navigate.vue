<template>
  <div class="box">
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      graph: null
    }
  },
  mounted() {
    this.resolve()
    this.addClickEvent()
  },
  methods: {
    addClickEvent() {
      document.getElementsByClassName('nav-link').forEach(a => {
        a.addEventListener('click', () => {
          if (this.graph) this.graph.destroy()
          this.resolve()
        })
      })
    },
    async resolve() {
      let data = require('../data.json')
      let willShowData = data
      if (location.hash) {
        const arr = location.hash.slice(1).split(',').map(i => decodeURI(i))
        arr.unshift(data.children)
        arr.reduce((root, parentNode) => {
          const Nodes = root.filter(i => i.id === parentNode)
          return Nodes[0].children
        })
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
      const G6 = await import('@antv/g6')
      Promise.resolve().then(() => {
        // const graph = new G6.TreeGraph({
        //   container: 'container',
        //   width,
        //   height,
        //   linkCenter: true,
        //   modes: {
        //     default: [
        //       {
        //         type: 'collapse-expand',
        //         onChange: function onChange(item, collapsed) {
        //           const data = item.get('model').data;
        //           data.collapsed = collapsed;
        //           return true;
        //         },
        //       },
        //       'drag-canvas',
        //       'zoom-canvas',
        //     ],
        //   },
        //   defaultNode: {
        //     size: 32,
        //     style: {
        //       fill: '#C6E5FF',
        //       stroke: '#5B8FF9',
        //     },
        //     labelCfg: {
        //       style: {
        //         fontSize: 4,
        //       }
        //     }
        //   },
        //   defaultEdge: {
        //     style: {
        //       stroke: '#A3B1BF',
        //     },
        //   },
        //   layout: {
        //     type: 'dendrogram',
        //     direction: 'LR',
        //     nodeSep: 20,
        //     rankSep: 100,
        //     radial: true,
        //   },
        // });

        // graph.node(
        //   node => node.id.indexOf('.') === -1 ? node.id : node.id.split('.')[1]
        // );
        
        // graph.data(willShowData);
        // graph.render();
        // graph.fitView();

        // --------------------------
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
          },
          defaultEdge: {
            type: 'cubic-horizontal',
          },
          layout: {
            type: 'mindmap',
            direction: 'H',
            getHeight: () => {
              return 16;
            },
            getWidth: () => {
              return 16;
            },
            getVGap: () => {
              return 10;
            },
            getHGap: () => {
              return 50;
            },
          },
        });

        let centerX = 0;
        graph.node(function(node) {
          const nodeText = node.id.indexOf('.') === -1 ? node.id : node.id.split('.')[1]
          return {
            label: nodeText,
            labelCfg: {
              position: 
                node.children && node.children.length > 0
                  ? 'left'
                  : node.x > centerX
                    ? 'right'
                    : 'left',
              offset: 5
            }
          }
        }
          // node => node.id.indexOf('.') === -1 ? node.id : node.id.split('.')[1]
        //   function (node) {
        //   if (node.id === 'Modeling Methods') {
        //     centerX = node.x;
        //   }

        //   return {
        //     label: node.id,
        //     labelCfg: {
        //       position:
        //         node.children && node.children.length > 0
        //           ? 'left'
        //           : node.x > centerX
        //             ? 'right'
        //             : 'left',
        //       offset: 5,
        //     },
        //   };
        // });
        );
        console.log(willShowData)
        graph.data(willShowData);
        graph.render();
        graph.fitView();
        
        graph.on('node:click', (event) => {
          const { item } = event;
          if (item._cfg.id.indexOf('.') === -1) return
          location.href = location.origin + '/md/' + item._cfg.id.split('.')[0] + '.html'
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
  height: calc(100vh - 60px);
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