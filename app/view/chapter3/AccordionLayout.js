Ext.define('MyExtJS.view.chapter3.AccordionLayout', {
    alias: 'widget.chapter3-accordionlayout',
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Accordion',
        'MyExtJS.view.chapter3.AccordionChild' //AccordionChild 클래스를 로딩하기위한 requires 설정.
    ],
    height: 300,
    width: 300,
    padding: '5 5 5 5',
    /*
        Accordion 레이아웃은 여러 개의 패널을 하나에 모으고 이중 하나만 확장해
        보여주는 형태이다. 하나의 패널이 열려있으면 다른 패널이 열릴 때 기존의 패널은
        닫히고 새로운게 열리는 식의 레이아웃이다.
        이 레이아웃은 하나의 콘텐츠만 집중하게 하거나
        공간적 제약으로 여러 개의 콘텐츠를 동시에 보여주기 어려울 때 사용한다.
    */
    layout: 'accordion',
    border: true,
    items: [
        {
            xtype: 'chapter3-accordionchild',
            title: '애국가 1절',
            html: `동해물과 백두산이 마르고 <br> 닳도록 하느님이 보우하사 <br> 우리나라 만세
            <br> 무궁화 삼천리 화려강산 <br>대한사람 대한으로 길이 보전하세`
        },
        {
            xtype: 'chapter3-accordionchild',
            title: '애국가 2절',
            html: `남산 위에 저 소나무 철갑을 두른 듯<br>
            바람 서리 불변함은 우리 기상일세<br>무궁화 삼천리 화려강산 <br>대한사람 대한으로 길이 보전하세`
        },
        {
            title: '애국가 3절',
            html:`가을 하늘 공활한데 높고 구름 없이<br>
            밝은 달은 우리가슴 일편단심일세 <br>무궁화 삼천리 화려강산 <br>대한사람 대한으로 길이 보전하세`
        },
        {
            title: '애국가 4절',
            html:`이 기상과 이맘으로 충성을 다하여<br>
            괴로우나 즐거우나 나라사랑하세 <br>무궁화 삼천리 화려강산 <br>대한사람 대한으로 길이 보전하세`
        }
    ]
});