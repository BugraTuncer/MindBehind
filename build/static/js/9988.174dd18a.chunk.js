/*! For license information please see 9988.174dd18a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkMindBehind=self.webpackChunkMindBehind||[]).push([[9988],{9988:function(e,n,t){t.r(n),t.d(n,{startFocusVisible:function(){return r}});var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=function(e){var n=[],t=!0,r=e?e.shadowRoot:document,i=e||document.body,c=function(e){n.forEach((function(e){return e.classList.remove(o)})),e.forEach((function(e){return e.classList.add(o)})),n=e},u=function(){t=!1,c([])},d=function(e){(t=s.includes(e.key))||c([])},a=function(e){if(t&&e.composedPath){var n=e.composedPath().filter((function(e){return!!e.classList&&e.classList.contains("ion-focusable")}));c(n)}},f=function(){r.activeElement===i&&c([])};r.addEventListener("keydown",d),r.addEventListener("focusin",a),r.addEventListener("focusout",f),r.addEventListener("touchstart",u),r.addEventListener("mousedown",u);return{destroy:function(){r.removeEventListener("keydown",d),r.removeEventListener("focusin",a),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",u),r.removeEventListener("mousedown",u)},setFocus:c}}}}]);
//# sourceMappingURL=9988.174dd18a.chunk.js.map