Ext.define('MyExtJS.view.chapter2.DynamicPanel', {
    extend: 'Ext.panel.Panel',
    requires: ['MyExtJS.view.chapter2.RequireClass'],
    xtype: 'chapter2-dynamicloading',
    title: 'DynamicPanel',

    otherContent: [{
        type: '동적 로딩 클래스',
        path: 'app/view/chapter2/RequireClass.js'
    }],

    items: [{
        xtype: 'chapter2-requireclass'
    }]
});