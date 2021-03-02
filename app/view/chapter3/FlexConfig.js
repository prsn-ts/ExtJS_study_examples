Ext.define('MyExtJS.view.chapter3.FlexConfig', {
    alias: 'widget.chapter3-flexconfig',
    extend: 'Ext.container.Container',
    width: 400,
    layout: {
        type: 'hbox',
        align: 'stretchmax' //가로 혹은 세로 등 입력되는 수치에 맞게 늘어나고 줄어드는 형식
    },
    //flex 비율에 맞게 hbox(가로로 나열) 이므로 가로 길이를 비율에 맞게 유연하게 설정.
    items: [{
        xtype: 'panel',
        title: 'Panel One',
        flex: 0.5
    }, {
        xtype: 'panel',
        title: 'Panel Two',
        height: 100,
        flex: 1
    }, {
        xtype: 'panel',
        title: 'Panel Three',
        flex: 0.7
    }]
});