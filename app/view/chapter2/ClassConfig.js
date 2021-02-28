Ext.define('MyExtJS.view.chapter2.ClassConfig', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter2-classconfig',
    title: 'ClassConfig',

    /*
        Ext.Class.config 클래스에서 config를 검색하면 나오는 내용↓

        You need to make sure Ext.Base#initConfig is called from your constructor
        if you are defining your own class or singleton,
        unless you are extending a Component.
        Otherwise the generated getter and setter methods will not be initialized.
        -> 해석 : 컴포넌트를 확장하지않은 한, 자신의 클래스 및 싱글톤을 정의했을 경우
        생성자로부터 Ext.Base#initConfig 메소드가 호출될 것이라고 확실히 알아야할 필요가 있다.
        그렇지 않으면 getter, setter 메소드가 초기화(생성)되지 않는다.

        컴포넌트를 확장하지 않았을 때 Ext.Base 클래스의 initConfig 메소드가 호출되므로
        여기서는 Ext.Base를 상속받은 Ext.panel.Panel를 extend 했기 때문에 initConfig 메소드를 따로
        만들 필요가 없다.
    */
    config: { //config 오브젝트안에 만든 
        subject: '제목을 입력하세요',

        bottomBar: {
            height: 50,
            width: 200
        }
    },

    //Container 클래스를 상속받은 Panel 클래스를 상속한 ClassConfig에서 applyDefaults 메소드를 사용한 것으로 추정.
    applySubject: function (subject) {
        if(!Ext.isString(subject) || subject.length === 0) {
            console.log('제목은 반드시 입력해야 합니다');
        }
        else {
            return subject;
        }
    },

    //Container 클래스를 상속받은 Panel 클래스를 상속한 ClassConfig에서 applyDefaults 메소드를 사용한 것으로 추정.
    applyBottomBar: function (bottomBar) {
        if (bottomBar) {
            if(!this.bottomBar){
                return Ext.create('MyInnerClass', bottomBar);
            }
            else {
                this.bottomBar.setConfig(bottomBar);
            }
        }
    }
});

// ClassConfig.js 파일 내부의 ClassConfig 클래스 하단에 다음과 같이 기술했다.
Ext.define('MyInnerClass', {
    config: {
        height: undefined,
        width: 100
    }
});