Ext.define('MyExtJS.view.chapter3.AbsoluteLayout', {
    alias: 'widget.chapter3-absolutelayout',
    extend: 'Ext.panel.Panel',
    height: 300,
    width: 300,
    padding: '5 5 5 5',
    layout: 'absolute',
    //autoScroll: false, extjs 5 이후의 버전은 지원되지 않는 것 같다.
    border: true,
    items: [
        {
            title: '패널1',
            x: 20, //부모 컴포넌트(AbsoluteLayout) 기준으로 x축으로 20px 이동
            y: 30, //부모 컴포넌트(AbsoluteLayout) 기준으로 y축으로 30px 이동
            height: 150,
            width: 150,
            html: 'x: 20, y: 30',
            frame: true //true일 시, 가장자리에 프레임을 씌운다.
        },
        {
            title: '패널2',
            x: 100,
            y: 100,
            anchor: '80% 80%', //부모의 크기의 너비 80% 높이 80%로 지정, 단 시작은 x,y좌표로 하고 끝나는 지점은 anchor로 지정한 크기를 계산해 결정.
            html: 'x: 100, y: 100',
            frame: false //false일 시, 가장자리에 프레임을 씌우지 않는다.
        }
    ]
});