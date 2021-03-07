Ext.define('MyExtJS.view.chapter3.VBoxLayout', {
    alias: 'widget.chapter3-vboxlayout',
    extend: 'Ext.panel.Panel',
    title: 'Vbox Layout',
    width: 300,
    height: 300,
    layout: {
        type: 'vbox',
        padding: 10,
        //align: 'stretchmax' //자식 컴포넌트 중 가장 높은 컴포넌트를 기준으로 다른 자식 컴포넌트의 높이 또는 너비가 맞춰짐
        //align: 'stretch' //자식 컴포넌트의 높이는 부모 컨테이너의 높이를 맞춘다.
    },
    items: [
        {
            xtype: 'panel',
            title: '첫번째 패널',
            html: '너비 150px <br>높이 70px',
            height: 70,
            width: 150
        },
        {
            xtype: 'panel',
            title: '두번째 패널',
            html: '높이는 가변적이다. <br>너비 100px',
            width: 100,
            flex: 1 //가변적으로 적용하기위한 속성.(hbox는 가로, vbox는 세로 일때 가변적으로 적용된다.)
        },
        {
            xtype: 'panel',
            title: '세번째 패널',
            html: '너비 200px <br>높이 100px',
            height: 100,
            width: 200
        }
    ]
});