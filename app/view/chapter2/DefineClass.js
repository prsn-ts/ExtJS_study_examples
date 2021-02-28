Ext.define('MyExtJS.view.chapter2.DefineClass', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter2-defineclass',
    initComponent: function(){
        Ext.apply(this, { //특정한 오브젝트(여기선 this)에 config(구성 관련) 속성을 저장시키는 apply 메소드
            title: '안녕하세요 환영합니다.^^',
            items: [
                {
                    xtype: 'button',
                    text: 'Click Me!'
                }
            ]
        });
        this.callParent(arguments); //initComponent 메소드안에서 callParent()를 반드시 포함해야한다.
        this.on('render', function(component){
            console.log('클래스가 브라우저에 렌더링될 때 실행되요.');
        });
    }
});