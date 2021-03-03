Ext.define('MyExtJS.view.chapter3.BorderLayout', {
    alias: 'widget.chapter3.BorderLayout',
    extend: 'Ext.container.Container',
    width: 400,
    height: 400,
    layout: 'border',
    items: [{
        title: 'north',
        region: 'north',
        margin : 5, //동서남북 4방향에 margin을 적용
        height: 100,
        xtype: 'panel' //이 항목에는 panel을 적용.
    },{
        title: 'West',
        region: 'west',
        margin: '0 5 0 5',
        width: 100,
        collapsible: true, //true 일때 접힐 수 있도록 설정.(이 속성이 true여야 collapsed 속성 적용가능)
        split: true, //west와 center 영역 경계에 굵기가 있는 직선바가 생기며 이것을 통해 영역의 크기를 변경할 수 있다. 
        titleCollapse: true //true 일때 너비가 좁아 타이틀 문자가 잘릴 때 잘린 부분을 ..으로 표시
    },{
        title: 'Center',
        region: 'center'
    },{
        title: 'East',
        region: 'east',
        margin: '0 5 0 5',
        flex: .5,
        collapsible: true, //이 객체가 접힐 수 있는 지 여부(이 속성이 true여야 collapsed 속성 적용가능)
        collapsed: false //collapsible 속성이 true 일때만 collapsed 속성 사용가능(접혀있는 지 여부)
    },{
        title: 'South',
        region: 'south',
        margin: '0 5 0 5',
        flex: .3,
        split: true //west와 center 영역 경계에 굵기가 있는 직선바가 생기며 이것을 통해 영역의 크기를 변경할 수 있다. 
    }]
});