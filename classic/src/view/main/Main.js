/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
/* -------------------------------- 원본 코드 -------------------------------------- */
// Ext.define('MyExtJS.view.main.Main', {
//     extend: 'Ext.tab.Panel',
//     xtype: 'app-main',

//     requires: [
//         'Ext.plugin.Viewport',
//         'Ext.window.MessageBox',

//         'MyExtJS.view.main.MainController',
//         'MyExtJS.view.main.MainModel',
//         'MyExtJS.view.main.List'
//     ],

//     controller: 'main',
//     viewModel: 'main',

//     ui: 'navigation',

//     tabBarHeaderPosition: 1,
//     titleRotation: 0,
//     tabRotation: 0,

//     header: {
//         layout: {
//             align: 'stretchmax'
//         },
//         title: {
//             bind: {
//                 text: '{name}'
//             },
//             flex: 0
//         },
//         iconCls: 'fa-th-list'
//     },

//     tabBar: {
//         flex: 1,
//         layout: {
//             align: 'stretch',
//             overflowHandler: 'none'
//         }
//     },

//     responsiveConfig: {
//         tall: {
//             headerPosition: 'top'
//         },
//         wide: {
//             headerPosition: 'left'
//         }
//     },

//     defaults: {
//         bodyPadding: 20,
//         tabConfig: {
//             responsiveConfig: {
//                 wide: {
//                     iconAlign: 'left',
//                     textAlign: 'left'
//                 },
//                 tall: {
//                     iconAlign: 'top',
//                     textAlign: 'center',
//                     width: 120
//                 }
//             }
//         }
//     },

//     items: [{
//         title: 'Home',
//         iconCls: 'fa-home',
//         // The following grid shares a store with the classic version's grid as well!
//         items: [{
//             xtype: 'mainlist'
//         }]
//     }, {
//         title: 'Users',
//         iconCls: 'fa-user',
//         bind: {
//             html: '{loremIpsum}'
//         }
//     }, {
//         title: 'Groups',
//         iconCls: 'fa-users',
//         bind: {
//             html: '{loremIpsum}'
//         }
//     }, {
//         title: 'Settings',
//         iconCls: 'fa-cog',
//         bind: {
//             html: '{loremIpsum}'
//         }
//     }]
// });
/* -------------------------------------------------------------------------------- */

/* --------------------------------임의로 내가 바꾼 코드----------------------------- */
Ext.define('MyExtJS.view.main.Main', {
    extend: 'Ext.container.Viewport',	// #1
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',
    items: [
        {
            region: 'north',
            html: '상단 메뉴',
            frame: true,
            xtype: 'panel'
        },
        {
            region: 'center',
            xtype: 'panel',
            frame: true,
            html: '프로그램실행영역'
        },
        {
            xtype: 'panel',
            region: 'east',
            title: '코드보기',
            split: true,
            collapsible: true,
            collapsed: true,
            width: 350,
            minWidth: 100
        }
    ]
});
/* -------------------------------------------------------------------------------- */