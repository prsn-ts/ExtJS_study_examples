/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
console.log("순서8");
Ext.application({
    extend: 'MyExtJS.Application',

    name: 'MyExtJS',

    requires: [
        // This will automatically load all classes in the MyExtJS namespace
        // so that application classes do not need to require each other.
        'MyExtJS.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyExtJS.view.main.Main'
});
