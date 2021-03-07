Ext.define('MyExtJS.view.chapter3.HBoxLayout', {
    alias: 'widget.chapter3-hboxlayout',
    extend: 'Ext.panel.Panel',
    title: 'Hbox Layout',
    height: 300,
    layout: {
        type: 'hbox',
        padding: 10,
        //align: 'stretchmax' //자식 컴포넌트 중 가장 높은 컴포넌트를 기준으로 다른 자식 컴포넌트의 높이가 맞춰짐.
        //align: 'stretch' //자식 컴포넌트의 높이는 부모 컨테이너의 높이를 맞춘다.
    },
    items: [{
        xtype: 'panel',
        title: '첫번째 패널',
        html: '너비 100px <br>높이 200px',
        height: 200,
        width: 100
    },{
        xtype: 'panel',
        title: '두번째 패널',
        html: '너비는 가변적이다. <br>높이 100px',
        height: 100,
        flex: 1 //가변적으로 적용하기위한 속성.(hbox는 가로로, vbox는 세로로 가변적으로 된다.)
    },{
        xtype: 'panel',
        title: '세번째 패널',
        html: '너비 100px <br>높이 150px',
        height: 150,
        width: 100
    }]
});