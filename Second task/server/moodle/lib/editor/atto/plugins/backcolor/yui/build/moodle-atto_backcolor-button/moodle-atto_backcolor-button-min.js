YUI.add("moodle-atto_backcolor-button",function(o,t){var e=[{name:"white",color:"#FFFFFF"},{name:"red",color:"#EF4540"},{name:"yellow",color:"#FFCF35"},{name:"green",color:"#98CA3E"},{name:"blue",color:"#7D9FD3"},{name:"black",color:"#333333"}];o.namespace("M.atto_backcolor").Button=o.Base.create("button",o.M.editor_atto.EditorPlugin,[],{initializer:function(){var a=[];o.Array.each(e,function(o){var t=M.util.get_string("color_"+o.name,"atto_backcolor");a.push({text:'<div class="coloroption" style="background-color: '+o.color+'" aria-label="'+t+'" title="'+t+'"></div>',callbackArgs:o.color})}),this.addToolbarMenu({icon:"e/text_highlight",overlayWidth:"4",globalItemConfig:{inlineFormat:!0,callback:this._changeStyle},items:a})},_changeStyle:function(o,t){this.get("host").formatSelectionInlineStyle({backgroundColor:t})}})},"@VERSION@");