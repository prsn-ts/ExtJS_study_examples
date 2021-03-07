Ext.define('MyExtJS.view.chapter3.CardChild3', {
    extend: 'Ext.grid.Panel',
    xtype: 'chapter3-cardchild3',
    bodyStyle: 'padding: 20px',
    id: 'card3',
    title: '세 번째 그리드 패널(id: card3)',
    store: '',
    /*
        An array of Ext.grid.column.Column definition objects which define all columns that appear in this grid.

        해석: 그리드안에 나타나는 모든 칼럼을 정의하는 Ext.grid.column.Column의 정의 객체의 배열을 말한다.
        그리드 패널에서 스토어 또는 모델의 데이터들을 어떤 칼럼(열)으로 데이터들을 나열할 것인지에 대한 설정. 
    */
    columns: [
        {
            text: '게시글번호',
            width: 80,
            dataIndex: 'brd_seq',
            field: {
                allowBlank: false
            }
        },
        {
            text: '제목',
            flex: 1,
            /*
                dataIndex의 대한 설명↓

                The name of the field in the grid's Ext.data.Store's Ext.data.Model definition
                from which to draw the column's value.

                해석: 그리드 스토어의 모델에 정의된 필드의 이름이라는 뜻으로
                스토어 또는 모델에 저장된 데이터의 키와 연관시켜 해당하는 키의 값(value)을
                읽어올 수 있도록 설정해주는 속성.
            */    
            dataIndex: 'brd_title',
            field: {
                allowBlank: false
            }
        },
        {
            text: '입력자',
            width: 70,
            dataIndex: 'brd_input_user_nm',
            field: {
                allowBlank: false
            }
        }
    ],
    listeners: {
        render: function() {//CardChild3 컴포넌트를 사용하는 html파일에서 렌더링 되었을 때 실행할 함수 등록
            console.log('card3이 렌더링 되었습니다.');
        }
    }
});