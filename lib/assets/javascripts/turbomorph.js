!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.morphdom=e()}}(function(){function e(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function t(e){!u&&document.createRange&&(u=document.createRange(),u.selectNode(document.body));var t;return u&&u.createContextualFragment?t=u.createContextualFragment(e):(t=document.createElement("body"),t.innerHTML=e),t.childNodes[0]}function n(){}function r(e,t){var n,r,o,i,d=t.attributes,a={};for(n=d.length-1;n>=0;n--)r=d[n],r.specified!==!1&&(o=r.name,i=r.value,a[o]=!0,e.getAttribute(o)!==i&&e.setAttribute(o,i));for(d=e.attributes,n=d.length-1;n>=0;n--)r=d[n],r.specified!==!1&&(o=r.name,a.hasOwnProperty(o)||e.removeAttribute(o))}function o(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function i(e){return e.id}function d(d,a,l){function u(e,t){var n=m(e);if(n?p[n]=e:t||g(e),1===e.nodeType)for(var r=e.firstChild;r;)u(r,t||n),r=r.nextSibling}function f(e){if(1===e.nodeType)for(var t=e.firstChild;t;)m(t)||(g(t),f(t)),t=t.nextSibling}function c(e,t,n){N(e)!==!1&&(t.removeChild(e),n?m(e)||(g(e),f(e)):u(e))}function h(e,t,n,o){var i=m(t);if(i&&delete p[i],!o){if(y(e,t)===!1)return;if(r(e,t),b(e,t)===!1)return}if("TEXTAREA"!=e.tagName){var d,a,l,u,f,g=t.firstChild,N=e.firstChild;e:for(;g;){for(l=g.nextSibling,d=m(g);N;){var C=m(N);if(a=N.nextSibling,!n&&C&&(f=v[C]))f.parentNode.replaceChild(N,f),h(N,f,n),N=a;else{var A=N.nodeType;if(A===g.nodeType){var S=!1;if(1===A?(N.tagName===g.tagName&&(C||d?d===C&&(S=!0):S=!0),S&&h(N,g,n)):3===A&&(S=!0,N.nodeValue=g.nodeValue),S){g=l,N=a;continue e}}c(N,e,n),N=a}}d&&((u=p[d])?(h(u,g,!0),g=u):v[d]=g),e.appendChild(g),1===g.nodeType&&(d||g.firstChild)&&T.push(g),g=l,N=a}for(;N;)a=N.nextSibling,c(N,e,n),N=a}var x=s[e.tagName];x&&x(e,t)}l||(l={}),"string"==typeof a&&(a=t(a));var p={},v={},m=l.getNodeKey||i,g=l.onNodeDiscarded||n,y=l.onBeforeMorphEl||n,b=l.onBeforeMorphElChildren||n,N=l.onBeforeNodeDiscarded||n,C=l.childrenOnly===!0,T=[],A=d,S=A.nodeType,x=a.nodeType;if(!C)if(1===S)1===x?d.tagName!==a.tagName&&(g(d),A=o(d,document.createElement(a.tagName))):A=a;else if(3===S){if(3===x)return A.nodeValue=a.nodeValue,A;A=a}if(A===a)g(d);else{h(A,a,!1,C);var E=function(t){for(var n=t.firstChild;n;){var r=n.nextSibling,o=m(n);if(o){var i=p[o];if(i&&n.tagName===i.tagName){if(n.parentNode.replaceChild(i,n),h(i,n,!0),n=r,e(p))return!1;continue}}1===n.nodeType&&E(n),n=r}};if(!e(p))e:for(;T.length;){var w=T;T=[];for(var k=0;k<w.length;k++)if(E(w[k])===!1)break e}for(var O in p)if(p.hasOwnProperty(O)){var P=p[O];g(P),f(P)}}return!C&&A!==d&&d.parentNode&&d.parentNode.replaceChild(A,d),A}var a,l;a={exports:l={}};var u,f,c="undefined"!=typeof document?document.body||document.createElement("div"):{};f=c.hasAttribute?function(e,t){return e.hasAttribute(t)}:function(e,t){return e.getAttributeNode(t)};var s={OPTION:function(e,t){(e.selected=t.selected)?e.setAttribute("selected",""):e.removeAttribute("selected","")},INPUT:function(e,t){e.checked=t.checked,e.value!=t.value&&(e.value=t.value),f(t,"checked")||e.removeAttribute("checked"),f(t,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!=n&&(e.value=n),e.firstChild&&(e.firstChild.nodeValue=n)}};return a.exports=d,a.exports}),function(){var e,t,n;Turbolinks.controller.view.renderSnapshot=function(t,r){var o,i,d,a,l,u,f,c,s,h,p,v;if(o=this.getSnapshot({clone:!1}),!o.hasSameTrackedHeadElementsAsSnapshot(t))return this.delegate.viewInvalidated(),!1;for(h=t.getInlineHeadElementsNotPresentInSnapshot(o),d=0,u=h.length;u>d;d++)i=h[d],document.head.appendChild(i.cloneNode(!0));for(p=o.getTemporaryHeadElements(),a=0,f=p.length;f>a;a++)i=p[a],document.head.removeChild(i);for(v=t.getTemporaryHeadElements(),l=0,c=v.length;c>l;l++)i=v[l],document.head.appendChild(i.cloneNode(!0));return s=t.body.cloneNode(!0),this.delegate.viewWillRender(s),n(s),morphdom(document.body,s),e(),"function"==typeof r&&r(),this.delegate.viewRendered()},n=function(e){var n,r,o,i,d,a;for(d=t(document.body),a=[],n=0,r=d.length;r>n;n++)o=d[n],(i=e.querySelector("[id='"+o.id+"']"))?a.push(i.parentNode.replaceChild(o,i)):a.push(void 0);return a},t=function(e){return e.querySelectorAll("[id][data-turbolinks-permanent]")},e=function(){var e;return null!=(e=document.body.querySelector("[autofocus]"))?e.focus():void 0}}.call(this);