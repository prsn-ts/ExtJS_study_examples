/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
console.log("순서6");
Ext.define('MyExtJS.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    config: {
        control: {
            /***
             * *는 모든 컴포넌트
             * #은 자기 뷰.
             */
            '#': {
                resize: function (view, width, height, oldWidth, oldHeight) { //resize 이벤트는 컴포넌트의 이전 크기와 변경된 크기를 감지한다.
                    if (oldWidth > width) {
                        this.fireEvent('togglescreen', false);
                    }
                }
            }
        }
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
