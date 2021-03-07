Ext.define('MyExtJS.view.chapter3.CardChild1', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter3-cardchild1',
    id: 'card1', //클래스 검색에 사용할 id, 일반적으로 클래스 내부에 id를 설정하는 것은 권장 X
    bodyPadding: 5,
    title: '첫번째 패널(id: card1)',
    width: 300,
    items: [
        {
            xtype: 'datefield', //날짜를 입력할 수 있는 필드
            fieldLabel: 'Start date'
        },
        {
            xtype: 'datefield', //날짜를 입력할 수 있는 필드
            fieldLabel: 'End date'
        }
    ],
    listeners: {
        render: function() {//CardChild1 컴포넌트를 사용하는 html파일에서 렌더링 되었을 때 실행할 함수 등록
            console.log('card1이 렌더링 되었습니다.');
        }
    }
});