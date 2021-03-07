Ext.define('MyExtJS.view.chapter3.CardChild2', {
    extend: 'Ext.container.Container',
    xtype: 'chapter3-cardchild2',
    id: 'card2', //클래스 검색에 사용할 id, 일반적으로 클래스 내부에 id를 설정하는 것은 권장 X
    border: 1,
    html: '두번째 컨테이너(id: card2)',
    listeners: {
        render: function() {//CardChild2 컴포넌트를 사용하는 html파일에서 렌더링 되었을 때 실행할 함수 등록
            console.log('card2이 렌더링 되었습니다.');
        }
    }
});