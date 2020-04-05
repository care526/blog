export default {
    render(h) {
        return h('div', {
            class: {
                btn: true,
                isActive: false
            }
        }, [
            h('img', {
                src: 'asdasd.png'
            })
        ])
    }
}