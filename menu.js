// 1.导入 electron 中的 Menu
const { Menu } = require('electron')

// 2.创建菜单模板,数组里的每一个对象都是一个菜单
const template = [
    {
        label: ' 关于...',
        // submenu 代表下一级菜单
        submenu: [
            {
                label: '程序开发：LFQ',
                // 点击菜单后，会触发 click 事件
                click: () => {
                    //console.log('点击了菜单')
                },
            },
            { label: '联系方式：lfq@lfq.cn' },
        ],
    },
]

// 3.从模板中创建菜单
const myMenu = Menu.buildFromTemplate(template)

// 4.设置为应用程序菜单
Menu.setApplicationMenu(myMenu)
