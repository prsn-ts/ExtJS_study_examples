Ext.define('MyExtJS.view.chapter3.ColumnLayout', {
    alias: 'widget.chapter3-columnlayout',
    extend: 'Ext.panel.Panel',
    title: 'Column Layout',
    width: 350,
    height: 250,
    layout: 'column', //열의 너비와 높이에 관련된 레이아웃
    items: [
        {
            title: 'Column 1',
            width: 120 //절댓값으로 크기를 정한다.
        },
        {
            title: 'Column 2',
            columnWidth: 0.69 //첫번째 항목의 너비(120px)를 제외한 남은 너비의 70%를 차지.
        },
        {
            title: 'Column 3',
            columnWidth: 0.3 //첫번째 항목의 너비(120px)를 제외한 남은 너비의 30%를 차지.
        }
    ]
});