/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Apr 11 13:49
*/
KISSY.add("input-selection",function(j,g){var k=g._propHooks;if(typeof j.Env.host.document.createElement("input").selectionEnd!="number"){k.selectionStart={set:function(a,b){var c=a.ownerDocument.selection.createRange();if(l(a).inRange(c)){var d=h(a,1)[1],e=n(a,b,d);c.collapse(false);c.moveStart("character",-e);b>d&&c.collapse(true);c.select()}},get:function(a){return h(a)[0]}};k.selectionEnd={set:function(a,b){var c=a.ownerDocument.selection.createRange();if(l(a).inRange(c)){var d=h(a)[0],e=n(a,
d,b);c.collapse(true);c.moveEnd("character",e);d>b&&c.collapse(false);c.select()}},get:function(a){return h(a,1)[1]}};var h=function(a,b){var c=0,d=0,e=a.ownerDocument.selection.createRange(),f=l(a);if(f.inRange(e)){f.setEndPoint("EndToStart",e);c=o(a,f).length;if(b)d=c+o(a,e).length}return[c,d]},l=function(a){if(a.type=="textarea"){var b=a.document.body.createTextRange();b.moveToElementText(a);return b}else return a.createTextRange()},n=function(a,b,c){var d=Math.min(b,c),e=Math.max(b,c);if(d==e)return 0;
if(a.type=="textarea"){a=a.value.substring(d,e).replace(/\r\n/g,"\n").length;if(b>c)a=-a;return a}else return c-b},o=function(a,b){if(a.type=="textarea"){var c=b.text,d=b.duplicate();if(d.compareEndPoints("StartToEnd",d)==0)return c;d.moveEnd("character",-1);if(d.text==c)c+="\r\n";return c}else return b.text}}var i,q=["paddingLeft","paddingTop","paddingBottom","paddingRight","marginLeft","marginTop","marginBottom","marginRight","borderLeftStyle","borderTopStyle","borderBottomStyle","borderRightStyle",
"borderLeftWidth","borderTopWidth","borderBottomWidth","borderRightWidth","line-height","outline","width","height","fontFamily","fontSize","fontWeight","fontVariant","fontStyle"];k.KsCursorOffset={get:function(a){var b=a.ownerDocument,c=a.scrollTop,d=a.scrollLeft;if(b.selection){var e=b.selection.createRange();return{left:e.boundingLeft+d,top:e.boundingTop+c}}var f;if(i)f=i;else{f=g.create("<div style='z-index:-9999;overflow:hidden;position: absolute;left:-9999px;top:-9999px;opacity:0;white-space:pre-wrap;word-wrap:break-word;'></div>");
j.each(q,function(p){g.css(f,p,g.css(a,p))})}e=a.selectionStart;f.innerHTML=j.escapeHTML(a.value.substring(0,e-1))+"<span>x</span>";if(!i){g.prepend(f,b.body);i=f}b=g.offset(a);g.offset(f,b);var m=f.lastChild;b=g.offset(m);b.top+=g.height(m);if(e>0)b.left+=g.width(m);b.top-=c;b.left-=d;return b}}},{requires:["dom"]});