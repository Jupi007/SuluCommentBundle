define(["services/sulucomment/thread-manager","services/sulucomment/thread-router","text!./list.html"],function(a,b,c){var d={templates:{list:c},translations:{title:"sulu_comment.threads"}};return{defaults:d,header:function(){return{title:this.translations.title,underline:!1,noBack:!0,toolbar:{buttons:{deleteSelected:{options:{callback:function(){this.sandbox.emit("husky.datagrid.threads.items.get-selected",this.deleteItems.bind(this))}.bind(this)}}}}}},layout:{content:{width:"max"}},initialize:function(){this.render(),this.bindCustomEvents()},render:function(){this.$el.html(this.templates.list()),this.sandbox.sulu.initListToolbarAndList.call(this,"threads",a.url()+"/fields",{el:this.$find("#list-toolbar-container"),instanceName:"threads",template:this.sandbox.sulu.buttons.get({settings:{options:{dropdownItems:[{type:"columnOptions"}]}}})},{el:this.sandbox.dom.find("#threads-list"),url:a.url()+"?sortBy=created&sortOrder=desc",searchInstanceName:"threads",searchFields:["title"],resultKey:"threads",instanceName:"threads",actionCallback:function(a){b.toEdit(a)},viewOptions:{table:{selectItem:{type:"checkbox",inFirstCell:!1}}}})},deleteItems:function(b){this.sandbox.emit("sulu.header.toolbar.item.loading","deleteSelected"),a.deleteMultiple(b).then(function(){for(var a in b)this.sandbox.emit("husky.datagrid.threads.record.remove",b[a]);this.sandbox.emit("sulu.header.toolbar.item.disable","deleteSelected")}.bind(this))},bindCustomEvents:function(){this.sandbox.on("husky.datagrid.threads.number.selections",function(a){var b=a>0?"enable":"disable";this.sandbox.emit("sulu.header.toolbar.item."+b,"deleteSelected",!1)}.bind(this))}}});