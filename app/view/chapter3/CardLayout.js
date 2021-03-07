Ext.define('MyExtJS.view.chapter3.CardLayout', {
    alias: 'widget.chapter3-cardlayout',
    extend: 'Ext.panel.Panel',
    requires: [
        'MyExtJS.view.chapter3.CardChild1',
        'MyExtJS.view.chapter3.CardChild2',
        'MyExtJS.view.chapter3.CardChild3'
    ],
    title: 'Card Layout',
    width: 350,
    height: 300,
    layout: 'card', //카드형식으로 넘기면서 보여줄 수 있는 레이아웃
    initComponent: function() { //CardLayout 컴포넌트가 객체화될 때 맨 처음 실행되는 함수
        var me = this;
        Ext.apply(me, {
            bbar: [ '->', { //bbar는 Panel 클래스 하단에 추가할 툴바
                xtype: 'button', //툴바에 버튼 추가
                text: '이전',
                handler: function(btn) { //버튼을 클릭 시 동작할 함수 등록
                    //버튼의 상위 객체 중 panel을 찾으므로 부모 클래스인 CardLayout를 찾아 레이아웃 객체를 반환한다.
                    var layout = btn.up('panel').getLayout(); 

                    if(layout.getPrev()) { //getLayout()로 얻은 레이아웃 객체를 통해 이전 자식 컴포넌트가 존재하는지 확인
                        layout.prev(); //이전 카드 아이템으로 교체
                        me.cardInfo(); //cardInfo() 메소드를 호출해 렌더링 상태를 콘솔에 출력
                    }
                }
            },{
                xtype: 'button',
                text: '다음',
                handler: function(btn) {
                    var layout = btn.up('panel').getLayout();

                    if(layout.getNext()){ //Card 레이아웃의 다음 자식 컴포넌트가 존재하는 지 확인
                        layout.next(); //다음 카드 아이템으로 교체
                        me.cardInfo();
                    }
                }
            }],
            items: [
                {
                    xtype: 'chapter3-cardchild1'
                },
                {
                    xtype: 'chapter3-cardchild2'
                },
                {
                    xtype: 'chapter3-cardchild3'
                }
            ],
            listeners: {
                render: { //CardLayout가 렌더링 될 때 실행
                    fn: this.cardInfo,
                    scope: this
                }
            }
        });
        me.callParent(arguments);
    },

    cardCheck: function(domId) {
        var checkValue = Ext.Object.isEmpty(document.getElementById(domId));
        return `${domId} 는 ${checkValue ? '존재하지 않습니다.' : '존재합니다.'} 전체 Dom 크기는 : ${document.getElementsByTagName("*").length} 입니다.`;
    },

    cardInfo: function() {
        var me = this,
            task = new Ext.util.DelayedTask(function (){ //javascript의 setTimeout과 비슷한 역할
                //카드가 존재하는 지 여부 확인용
                console.log(me.cardCheck('card1')); 
                console.log(me.cardCheck('card2'));
                console.log(me.cardCheck('card3'));
            });
        task.delay(500); //Ext.util.DelayedTask 클래스의 메소드로 함수 실행에 있어 0.5초 딜레이된다.
    }
});