Ext.define('MyExtJS.view.chapter7.CellEditingGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chapter7-CellEditingGrid',
    requires: [
        'MyExtJS.model.smpl.Order',
        'MyExtJS.view.chapter7.CodeComboBox',
        'Ext.grid.plugin.CellEditing'
    ],
    height: 200,
    columnLines: true,
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            plugins: [
                {
                    ptype: 'cellediting', //셀 에디팅 설정
                    clicksToEdit: 1 //셀을 한번 클릭 시 편집모드 발동
                }
            ],
            store: {// #2
                model : 'MyExtJS.model.smpl.Order',
                autoLoad: true
            },
            columns: this.getColumnConfig()
        });
        me.callParent(arguments);
    },

    getColumnConfig: function () {
        var me = this;
        return   [
            {
                xtype: 'rownumberer'
            },
            {
                text: '주문지역',
                align: 'center',
                width: 100,
                dataIndex: 'areaNm'
            },
            {
                text: '주문자',
                align: 'center',
                width: 70,
                dataIndex: 'customName',
                renderer: function (value) {
                    return value + '님'; //렌더링 될 때 필드값 뒤에 '님' 문자열 붙이기
                }
            },
            {
                text: '주문일자',
                align: 'center',
                //                xtype: 'datecolumn',   
                //                format: 'Y.m.d',       
                width: 100,
                dataIndex: 'orderDate',
                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
//                    console.log()
                    if ((rowIndex % 2) == 0) {  
                        metaData.align = 'left';    
                        metaData.style = 'color:red';  
                    } else {
                        metaData.align = 'right';
                        metaData.style = 'color:blue';
                    }
                    return Ext.util.Format.date(value, 'Y-m-d'); //날짜형식을 '2021-03-22'로 지정
                },
                editor: {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    allowBlank: false
                }
            },
            {
                text: '주문금액',
                //                xtype: 'numbercolumn',  // #8
                //                format: '0,000',        // #9
                style: 'text-align:center',
                align: 'right',
                width: 100,
                dataIndex: 'orderAmount',
                renderer: function (value) {
                    return this.setMoney(value, 'Korea');   // #10
                },
                editor: {
                    xtype: 'numberfield',    // #3
                    step: 1000    // #4
                }
            },
            {
                text: '회원여부',
                align: 'center',
                width: 100,
                dataIndex: 'isMember',
                xtype: 'booleancolumn',
                trueText: '회원구매',
                falseText: '비회원구매',
                // editor: {
                //     xtype: 'combo',
                //     allowBlank: false,
                //     displayField: 'codeNm',
                //     valueField: 'codeCd',
                //     store: Ext.create('Ext.data.Store', {
                //         autoLoad: true,
                //         fields: ['codeNm', 'codeCd', 'grpCd', 'grpNm'],
                //         proxy: {
                //             url: '/resources/data/memberCode.json',
                //             type: 'ajax',
                //             reader: {
                //                 type: 'json',
                //                 root: 'items'
                //             }    
                //         },
                //         filters: [
                //             {
                //                 property: 'grpCd',
                //                 value: 'G001'
                //             }
                //         ]
                //     })
                // }
                editor: {
                    xtype: 'chapter7-codecombo',
                    preload: true,
                    filterCd: 'G001',
                    allowBlank: false
                }
            },
            {
                text: '고객평가',
                align: 'center',
                width: 70,
                dataIndex: 'estimate',
                renderer: function (value, metaData) {
                    metaData.tdCls = 'thumb-' + value;    // #11
                    return '';
                },
                // editor: {
                //     xtype: 'combo',
                //     allowBlank: false,
                //     displayField: 'codeNm',
                //     valueField: 'codeCd',
                //     store: Ext.create('Ext.data.Store', {
                //         autoLoad: true,
                //         fields: ['codeNm', 'codeCd', 'grpCd', 'grpNm'],
                //         proxy: {
                //             url: '/resources/data/memberCode.json',
                //             type: 'ajax',
                //             reader: {
                //                 type: 'json',
                //                 root: 'items'
                //             }    
                //         },
                //         filters: [
                //             {
                //                 property: 'grpCd',
                //                 value: 'G002'
                //             }
                //         ]
                //     })
                // }
                summaryType: 'count',
                summaryRenderer: function() {
                    return '총 '+ value +'건';
                },
                editor: {
                    xtype: 'chapter7-codecombo',
                    preload: true,
                    filterCd: 'G002',
                    allowBlank: false
                }
            }
        ];
    },
    /**
     * 국가 코드에 맞는 통화형식을 설정한다.
     * @param value
     * @param nation
     */
    setMoney: function (value, nation) {    // #13
        if (nation == 'Korea')
            nation = '￦';
        else if (nation == 'US')
            nation = '$';
        else if (nation == 'EU')
            nation = '€';
        else if (nation == 'UK')
            nation = '￡';
        else if (nation == 'JP')
            nation = '￥';
        return Ext.util.Format.currency(value, nation, 0); // #14
    }
});