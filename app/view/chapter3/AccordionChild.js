Ext.define('MyExtJS.view.chapter3.AccordionChild', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter3-accordionchild',
    initComponent: function() {
        this.callParent(arguments);
        this.on('expand', function (expandPanel){ //패널이 확장(펼쳐졌을 때)되었을 때 실행할 메소드
            console.log('열린 패널은 :', this.title); //xtype: 'chapter3-accordionchild' 타입의 객체를 생성한 곳의 title 속성을 출력
        });
    }
});