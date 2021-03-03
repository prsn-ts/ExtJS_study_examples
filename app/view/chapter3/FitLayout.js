Ext.define('MyExtJS.view.chapter3.FitLayout', {
    alias: 'widget.chapter3.FitLayout',
    extend: 'Ext.panel.Panel',
    height: 300,
    width: 300,
    padding: '5 5 5 5',
    layout: 'fit', //부모 클래스에 layout을 fit으로 하면 부모의 크기에 맞게 items 항목의 크기를 맞춘다(fit)
    items: {
        xtype: 'button', //여기서는 버튼을 부모의 크기에 맞춘다(fit)
        text: '버튼은 크기를 갖지만 부모 레이아웃이 Fit이면 부모 크기를 모두 사용합니다.'
    }
});