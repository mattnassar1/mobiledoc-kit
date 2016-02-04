"use strict";define("mobiledoc-kit-demo/app",["exports","ember","ember/resolver","ember/load-initializers","mobiledoc-kit-demo/config/environment"],function(e,t,o,d,n){var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:o["default"]}),d["default"](a,n["default"].modulePrefix),e["default"]=a}),define("mobiledoc-kit-demo/components/app-version",["exports","ember-cli-app-version/components/app-version","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=o["default"].APP,n=d.name,a=d.version;e["default"]=t["default"].extend({version:a,name:n})}),define("mobiledoc-kit-demo/components/ember-card-editor",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({})}),define("mobiledoc-kit-demo/components/ember-card",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({})}),define("mobiledoc-kit-demo/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-component-card",["exports","ember-mobiledoc-editor/components/mobiledoc-component-card/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-dom-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/dom","mobiledoc-kit-demo/mobiledoc-atoms/dom","ember-mobiledoc-dom-renderer"],function(e,t,o,d,n){var a=new n["default"]({cards:o["default"],atoms:d["default"]});e["default"]=t["default"].Component.extend({didRender:function(){var e=this.get("mobiledoc");if(e){this._teardownRender&&(this._teardownRender(),this._teardownRender=null);var t=this.$();t.empty();try{var o=a.render(e),d=o.result,n=o.teardown;t.append(d),this._teardownRender=n}catch(r){console.error(r);var d=document.createTextNode(r.message);t.append(d)}}}})}),define("mobiledoc-kit-demo/components/mobiledoc-editor",["exports","ember-mobiledoc-editor/components/mobiledoc-editor/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-html-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/html","mobiledoc-kit-demo/mobiledoc-atoms/html","ember-mobiledoc-html-renderer"],function(e,t,o,d,n){var a=new n["default"]({cards:o["default"],atoms:d["default"]});e["default"]=t["default"].Component.extend({didRender:function(){var e=this.get("mobiledoc");if(e){var t=this.$();t.empty();try{var o=a.render(e),d=o.result;t.text(d)}catch(n){console.error(n);var r=document.createTextNode(n.message);t.append(r)}}}})}),define("mobiledoc-kit-demo/components/mobiledoc-link-button",["exports","ember-mobiledoc-editor/components/mobiledoc-link-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-link-prompt",["exports","ember-mobiledoc-editor/components/mobiledoc-link-prompt/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-markup-button",["exports","ember-mobiledoc-editor/components/mobiledoc-markup-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-section-button",["exports","ember-mobiledoc-editor/components/mobiledoc-section-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-text-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/text","mobiledoc-kit-demo/mobiledoc-atoms/text","ember-mobiledoc-text-renderer"],function(e,t,o,d,n){var a=new n["default"]({cards:o["default"],atoms:d["default"]}),r=function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")};e["default"]=t["default"].Component.extend({didRender:function(){var e=this.get("mobiledoc");if(e){this._teardownRender&&(this._teardownRender(),this._teardownRender=null);var t=this.$();t.empty();try{var o=a.render(e),d=o.result,n=o.teardown;d=r(d),t.html(d),this._teardownRender=n}catch(i){console.error(i);var l=document.createTextNode(i.message);t.append(l)}}}})}),define("mobiledoc-kit-demo/components/mobiledoc-toolbar",["exports","ember-mobiledoc-editor/components/mobiledoc-toolbar/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/render-mobiledoc",["exports","ember-mobiledoc-dom-renderer/components/render-mobiledoc"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/tether-to-selection",["exports","ember-mobiledoc-editor/components/tether-to-selection/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("mobiledoc-kit-demo/controllers/index",["exports","ember","mobiledoc-kit-demo/mobiledocs/index"],function(e,t,o){var d=t["default"].$;e["default"]=t["default"].Controller.extend({init:function(){this._super.apply(this,arguments);var e=o["default"].mentionAtom;this.set("mobiledoc",e),this.set("editedMobiledoc",e),this.set("rendererName","dom")},actions:{changeMobiledoc:function(){var e=d("#select-mobiledoc"),t=e.val(),n=o["default"][t];this.set("mobiledoc",n),this.set("editedMobiledoc",n)},setRenderer:function(e){this.set("rendererName",e)},didEdit:function(e){this.set("editedMobiledoc",e)}}})}),define("mobiledoc-kit-demo/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("mobiledoc-kit-demo/helpers/format-object",["exports","ember"],function(e,t){function o(e){var t=d(e,1),o=t[0];return JSON.stringify(o,null,"  ")}e.formatObject=o;var d=function(){function e(e,t){var o=[],d=!0,n=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(d=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);d=!0);}catch(l){n=!0,a=l}finally{try{!d&&i["return"]&&i["return"]()}finally{if(n)throw a}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(o)}),define("mobiledoc-kit-demo/helpers/hash",["exports","ember-mobiledoc-editor/helpers/hash"],function(e,t){e["default"]=t["default"],e.hash=t.hash}),define("mobiledoc-kit-demo/helpers/in-array",["exports","ember-mobiledoc-editor/helpers/in-array"],function(e,t){e["default"]=t["default"],e.inArray=t.inArray}),define("mobiledoc-kit-demo/helpers/mobiledoc-atoms-list",["exports","ember","mobiledoc-kit-demo/mobiledoc-atoms/dom"],function(e,t,o){function d(){return o["default"]}e.mobiledocAtomsList=d,e["default"]=t["default"].Helper.helper(d)}),define("mobiledoc-kit-demo/helpers/mobiledoc-cards-list",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/dom"],function(e,t,o){function d(){return o["default"]}e.mobiledocCardsList=d,e["default"]=t["default"].Helper.helper(d)}),define("mobiledoc-kit-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=o["default"].APP,n=d.name,a=d.version;e["default"]={name:"App Version",initialize:t["default"](n,a)}}),define("mobiledoc-kit-demo/initializers/export-application-global",["exports","ember","mobiledoc-kit-demo/config/environment"],function(e,t,o){function d(){var e=arguments[1]||arguments[0];if(o["default"].exportApplicationGlobal!==!1){var d,n=o["default"].exportApplicationGlobal;d="string"==typeof n?n:t["default"].String.classify(o["default"].modulePrefix),window[d]||(window[d]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[d]}}))}}e.initialize=d,e["default"]={name:"export-application-global",initialize:d}}),define("mobiledoc-kit-demo/mobiledoc-atoms/dom/image",["exports"],function(e){e["default"]={name:"image-atom",type:"dom",render:function(){var e=document.createElement("img");return e.style.display="inline",e.src="http://placehold.it/30x20",e}}}),define("mobiledoc-kit-demo/mobiledoc-atoms/dom/mention",["exports"],function(e){e["default"]={name:"mention-atom",type:"dom",render:function(e){var t=e.value,o=document.createElement("span");return o.className="mention-atom",o.appendChild(document.createTextNode("Hello "+t)),o}}}),define("mobiledoc-kit-demo/mobiledoc-atoms/dom",["exports","mobiledoc-kit-demo/mobiledoc-atoms/dom/mention","mobiledoc-kit-demo/mobiledoc-atoms/dom/image"],function(e,t,o){e["default"]=[t["default"],o["default"]]}),define("mobiledoc-kit-demo/mobiledoc-atoms/html/image",["exports"],function(e){e["default"]={name:"image-atom",type:"html",render:function(e){var t=e.value;return'<img src="'+t+'">'}}}),define("mobiledoc-kit-demo/mobiledoc-atoms/html/mention",["exports"],function(e){e["default"]={name:"mention-atom",type:"html",render:function(e){var t=e.value;return'<span class="mention-atom">Hello '+t+"</span>"}}}),define("mobiledoc-kit-demo/mobiledoc-atoms/html",["exports","mobiledoc-kit-demo/mobiledoc-atoms/html/mention","mobiledoc-kit-demo/mobiledoc-atoms/html/image"],function(e,t,o){e["default"]=[t["default"],o["default"]]}),define("mobiledoc-kit-demo/mobiledoc-atoms/text/mention",["exports"],function(e){e["default"]={name:"mention-atom",type:"text",render:function(e){var t=e.value;return"Hello "+t}}}),define("mobiledoc-kit-demo/mobiledoc-atoms/text",["exports","mobiledoc-kit-demo/mobiledoc-atoms/text/mention"],function(e,t){e["default"]=[t["default"]]}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/codemirror",["exports"],function(e){function t(e,t){var o=arguments.length<=2||void 0===arguments[2]?!0:arguments[2],d=arguments.length<=3||void 0===arguments[3]?function(){}:arguments[3];setTimeout(function(){var n=$("<textarea>"+t+"</textarea>").appendTo(e),a={mode:"javascript"};o&&(a.readOnly="nocursor");var r=CodeMirror.fromTextArea(n[0],a);d(r)})}var o="let x = 3;";e["default"]={name:"codemirror-card",type:"dom",render:function(e){var d=e.env,n=(e.options,e.payload),a=$("<div></div>")[0],r=n.code||o;d.isInEditor&&$("<button>Edit</button>").appendTo(a).on("click",d.edit);var i=!0;return t(a,r,i),a},edit:function(e){var d=e.env,n=(e.options,e.payload),a=$("<div></div>")[0],r=n.code||o,i=$("<button>Save</button>").appendTo(a),l=!1,c=function(e){i.on("click",function(){return d.save({code:e.getValue()})})};return t(a,r,l,c),a}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/image",["exports"],function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?o:arguments[0];return $("<div></div>").append('<img src="'+e+'">')[0]}var o="http://placekitten.com/200/75";e["default"]={name:"image-card",type:"dom",render:function(e){var o=e.env,d=e.payload,n=t(d.src),a=o.isInEditor;return a&&$("<button>Change</button>").appendTo(n).on("click",o.edit),n},edit:function(e){function o(e){var t=new FileReader,o=e.target.files[0];t.onloadend=function(){d.save({src:t.result})},t.readAsDataURL(o)}var d=e.env,n=e.payload,a=t(n.src);return $('<input type="file">').appendTo(a).on("change",o),$("<button>Save</button>").appendTo(a).on("click",function(){d.save(n)}),a}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/input",["exports","ember"],function(e,t){var o=t["default"].$;e["default"]={name:"input-card",type:"dom",render:function(e){var t=e.env,d=e.payload,n="I am in display mode";d.name&&(n="Hello, "+d.name+"!");var a=o("<div>"+n+"</div>"),r=o("<button>Edit</button>");return r.on("click",t.edit),t.edit&&a.append(r),a[0]},edit:function(e){var t=e.env,d=o("<div>What is your name?</div>");d.innerHTML="What is your name?";var n=o('<input placeholder="Enter your name...">'),a=o("<button>Save</button>");return a.on("click",function(){var e=n.val();t.save({name:e})}),d.append(n),d.append(a),d[0]}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/selfie",["exports","ember"],function(e,t){var o=t["default"].$;e["default"]={name:"selfie-card",type:"dom",render:function(e){var t=e.env,d=e.payload,n=o("<div></div>")[0],a=t.isInEditor;return d.src?o('<div><img src="'+d.src+'"><br><div>You look nice today.</div>'+(a?"<div><button id='go-edit'>Take a better picture</button></div>":"")+"</div>").appendTo(n):o("<div>Hello there!"+(a?"<button id='go-edit'>Click here to take a picture</button>":"")+"</div>").appendTo(n),a&&setTimeout(function(){o("#go-edit").on("click",t.edit)}),n},edit:function(e){var t=e.env,d=o("<div></div>")[0];return o('<div><video id="video" width="400" height="300" autoplay></video><button id="snap">Snap Photo</button><canvas id="canvas" width="400" height="300"></canvas></div>').appendTo(d),setTimeout(function(){var e=document.getElementById("canvas"),d=e.getContext("2d"),n=document.getElementById("video"),a={video:!0},r=function(){return alert("error getting video feed")};navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getMedia(a,function(a){var r=void 0;navigator.mozGetUserMedia?n.mozSrcObject=a:(r=window.URL||window.webkitURL,n.src=r.createObjectURL(a),n.play()),o("#snap").click(function(){d.drawImage(n,0,0,400,300);var o=e.toDataURL("image/png");t.save({src:o})})},r)}),d}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/simple",["exports","ember"],function(e,t){var o=t["default"].$;e["default"]={name:"simple-card",type:"dom",render:function(e){var t=e.env,d=document.createElement("div"),n=document.createElement("span");n.innerHTML="Hello, world",d.appendChild(n);var a=o("<button>Remove card</button>");return a.on("click",t.remove),d}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom",["exports","mobiledoc-kit-demo/mobiledoc-cards/dom/input","mobiledoc-kit-demo/mobiledoc-cards/dom/simple","mobiledoc-kit-demo/mobiledoc-cards/dom/selfie","mobiledoc-kit-demo/mobiledoc-cards/dom/image","mobiledoc-kit-demo/mobiledoc-cards/dom/codemirror","ember-mobiledoc-editor/utils/create-component-card"],function(e,t,o,d,n,a,r){e["default"]=[t["default"],o["default"],d["default"],n["default"],a["default"],r["default"]("ember-card")]}),define("mobiledoc-kit-demo/mobiledoc-cards/html/codemirror",["exports"],function(e){e["default"]={name:"codemirror-card",type:"html",render:function(e){var t=e.payload;return t.code?"<code>"+t.code+"</code>":void 0}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/image",["exports"],function(e){var t="http://placekitten.com/200/75";e["default"]={name:"image-card",type:"html",render:function(e){var o=e.payload;return'<img src="'+(o.src||t)+'">'}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/input",["exports"],function(e){e["default"]={name:"input-card",type:"html",render:function(e){var t=e.payload;return"Hello, "+(t.name||"unknown")+"!"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/selfie",["exports"],function(e){e["default"]={name:"selfie-card",type:"html",render:function(e){var t=(e.env,e.payload);return'<img src="'+t.src+'">'}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/simple",["exports"],function(e){e["default"]={name:"simple-card",type:"html",render:function(){return"Hello, world"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html",["exports","mobiledoc-kit-demo/mobiledoc-cards/html/input","mobiledoc-kit-demo/mobiledoc-cards/html/selfie","mobiledoc-kit-demo/mobiledoc-cards/html/simple","mobiledoc-kit-demo/mobiledoc-cards/html/image","mobiledoc-kit-demo/mobiledoc-cards/html/codemirror"],function(e,t,o,d,n,a){e["default"]=[t["default"],o["default"],d["default"],n["default"],a["default"]]}),define("mobiledoc-kit-demo/mobiledoc-cards/text/codemirror",["exports"],function(e){e["default"]={name:"codemirror-card",type:"text",render:function(e){var t=e.payload;return t.code?"[code] "+t.code:void 0}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/image",["exports"],function(e){e["default"]={name:"image-card",type:"text",render:function(){return"[image]"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/input",["exports"],function(e){e["default"]={name:"input-card",type:"text",render:function(e){var t=e.payload;return"Hello, "+(t.name||"unknown")+"!"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/selfie",["exports"],function(e){e["default"]={name:"selfie-card",type:"text",render:function(){return"[ :) ]"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/simple",["exports"],function(e){e["default"]={name:"simple-card",type:"text",render:function(){return"Hello, world"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text",["exports","mobiledoc-kit-demo/mobiledoc-cards/text/codemirror","mobiledoc-kit-demo/mobiledoc-cards/text/simple","mobiledoc-kit-demo/mobiledoc-cards/text/input","mobiledoc-kit-demo/mobiledoc-cards/text/image","mobiledoc-kit-demo/mobiledoc-cards/text/selfie"],function(e,t,o,d,n,a){e["default"]=[t["default"],o["default"],d["default"],n["default"],a["default"]]}),define("mobiledoc-kit-demo/mobiledoc-titleize/helper",["exports","ember-mobiledoc-editor/helpers/mobiledoc-titleize"],function(e,t){e["default"]=t["default"],e.mobiledocTitleize=t.mobiledocTitleize}),define("mobiledoc-kit-demo/mobiledocs/index",["exports"],function(e){e["default"]={mentionAtom:{version:"0.3.0",atoms:[["mention-atom","Bob",{}],["mention-atom","Bob",{}],["mention-atom","Bob",{}],["mention-atom","Bob",{}],["mention-atom","Bob",{}],["mention-atom","Bob",{}],["mention-atom","Bob",{}],["image-atom","n/a",{}]],markups:[],cards:[],sections:[[1,"h2",[[0,[],0,"Mention Atom"]]],[1,"P",[[0,[],0,"Text before the atom. "],[1,[],0,0],[0,[],0," Text after the atom, before image: "],[1,[],0,7],[0,[],0," text after the image atom"]]],[1,"P",[[1,[],0,1],[0,[],0," atom at start"]]],[1,"P",[[0,[],0,"atom at end "],[1,[],0,2]]],[1,"P",[[1,[],0,3],[1,[],0,4],[0,[],0," multiple atoms at start and end "],[1,[],0,5],[1,[],0,6]]]]},codemirrorCard:{version:"0.3.0",atoms:[],markups:[],cards:[["codemirror-card"]],sections:[[1,"h2",[[0,[],0,"Codemirror"]]],[10,0]]},"null":null,blank:"",empty:{version:"0.3.0",atoms:[],markups:[],cards:[],sections:[]},inputCard:{version:"0.3.0",atoms:[],markups:[],cards:[["input-card"]],sections:[[1,"H2",[[0,[],0,"Input Card"]]],[10,0],[1,"P",[[0,[],0,"Text after the card."]]]]},imageCard:{version:"0.3.0",atoms:[],markups:[],cards:[["image-card"]],sections:[[1,"p",[[0,[],0,"before"]]],[10,0],[1,"p",[[0,[],0,"after"]]]]},selfieCard:{version:"0.3.0",atoms:[],markups:[],cards:[["selfie-card"]],sections:[[1,"H2",[[0,[],0,"Selfie Card"]]],[10,0]]},simpleCard:{version:"0.3.0",atoms:[],markups:[],cards:[["simple-card"]],sections:[[1,"p",[[0,[],0,"before"]]],[10,0],[1,"p",[[0,[],0,"after"]]]]},simpleList:{version:"0.3.0",atoms:[],markups:[],cards:[],sections:[[1,"H2",[[0,[],0,"To do today:"]]],[3,"ul",[[[0,[],0,"buy milk"]],[[0,[],0,"water plants"]],[[0,[],0,"world domination"]]]]]},simple:{version:"0.3.0",atoms:[],markups:[],cards:[],sections:[[1,"H2",[[0,[],0,"Hello World"]]],[1,"p",[[0,[],0,"This is Mobiledoc-kit."]]]]},emberCard:{version:"0.2.0",sections:[[],[[1,"p",[[[],0,"before"]]],[10,"ember-card"],[1,"p",[[[],0,"after"]]]]]}}}),define("mobiledoc-kit-demo/router",["exports","ember","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=t["default"].Router.extend({location:o["default"].locationType});d.map(function(){}),e["default"]=d}),define("mobiledoc-kit-demo/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"mobiledoc-kit-demo/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("h1"),n=e.createTextNode("Mobiledoc");e.appendChild(d,n);var n=e.createElement("span");e.setAttribute(n,"class","headline-note");var a=e.createTextNode("beta!");e.appendChild(n,a),e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p");e.setAttribute(d,"class","subheadline");var n=e.createTextNode("A web-friendly file format for WYSIWYG editors");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("hr");e.appendChild(t,o);var o=e.createTextNode("\n\n");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=new Array(1);return d[0]=e.createMorphAt(t,4,4,o),d},statements:[["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/components/ember-card-editor",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"mobiledoc-kit-demo/templates/components/ember-card-editor.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("p"),d=e.createTextNode("Neato! An Ember card in edit mode!");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n\n");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n\n");e.appendChild(t,o);var o=e.createElement("button"),d=e.createTextNode("Save");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("button"),d=e.createTextNode("Cancel");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[4]),n=e.childAt(t,[6]),a=new Array(3);return a[0]=e.createMorphAt(t,2,2,o),a[1]=e.createAttrMorph(d,"onclick"),a[2]=e.createAttrMorph(n,"onclick"),a},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","data.name",["loc",[null,[3,14],[3,23]]]]],[],[]]],["loc",[null,[3,0],[3,25]]]],["attribute","onclick",["subexpr","action",[["get","saveCard",["loc",[null,[5,25],[5,33]]]],["subexpr","hash",[],["name",["get","data.name",["loc",[null,[5,45],[5,54]]]]],["loc",[null,[5,34],[5,55]]]]],[],["loc",[null,[5,16],[5,57]]]]],["attribute","onclick",["get","cancelCard",["loc",[null,[6,18],[6,28]]]]]],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/components/ember-card",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:3,column:0},end:{line:5,column:0}},moduleName:"mobiledoc-kit-demo/templates/components/ember-card.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createTextNode("  ");e.appendChild(t,o);var o=e.createElement("p"),d=e.createTextNode("Name: ");e.appendChild(o,d);var d=e.createComment("");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=new Array(1);return d[0]=e.createMorphAt(e.childAt(t,[1]),1,1),d},statements:[["content","data.name",["loc",[null,[4,11],[4,24]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"mobiledoc-kit-demo/templates/components/ember-card.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("p"),d=e.createTextNode("Wowza, this card is rendered by Ember!");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n\n");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("button"),d=e.createTextNode("Edit");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[4]),n=new Array(2);return n[0]=e.createMorphAt(t,2,2,o),n[1]=e.createAttrMorph(d,"onclick"),n},statements:[["block","if",[["get","data.name",["loc",[null,[3,6],[3,15]]]]],[],0,null,["loc",[null,[3,0],[5,7]]]],["attribute","onclick",["get","editCard",["loc",[null,[7,18],[7,26]]]]]],locals:[],templates:[e]}}())}),define("mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","rendered-mobiledoc");var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:34,column:6},end:{line:43,column:6}},moduleName:"mobiledoc-kit-demo/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createTextNode("        ");e.appendChild(t,o);var o=e.createElement("button"),d=e.createTextNode("Add image");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n        ");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[1]),n=new Array(2);return n[0]=e.createElementMorph(d),n[1]=e.createMorphAt(t,3,3,o),n},statements:[["element","action",[["get","editor.addCardInEditMode",["loc",[null,[41,25],[41,49]]]],"image-card"],[],["loc",[null,[41,16],[41,64]]]],["inline","mobiledoc-toolbar",[],["editor",["subexpr","@mut",[["get","editor",["loc",[null,[42,35],[42,41]]]]],[],[]]],["loc",[null,[42,8],[42,43]]]]],locals:["editor"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:69,column:0}},moduleName:"mobiledoc-kit-demo/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p"),n=e.createTextNode("\n    Mobiledoc is a publishing solution designed for both text and\n    dynamically rendered cards. Posts are serialized into ");e.appendChild(d,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/bustlelabs/mobiledoc-kit/blob/master/MOBILEDOC.md");var a=e.createTextNode("Mobiledoc");e.appendChild(n,a),e.appendChild(d,n);var n=e.createTextNode(", and\n    rendered to DOM in a reader's browser.\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p"),n=e.createTextNode("\n    Read more on the ");e.appendChild(d,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/bustlelabs/mobiledoc-kit");var a=e.createTextNode("mobiledoc-kit");e.appendChild(n,a),e.appendChild(d,n);var n=e.createTextNode("\n    GitHub repo.\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("br");e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("h2"),n=e.createTextNode("Try a Demo");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("div");e.setAttribute(o,"class","container");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","output full-left");var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("select");e.setAttribute(a,"id","select-mobiledoc");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"disabled","");var i=e.createTextNode("Load a new Mobiledoc");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","simple");var i=e.createTextNode("Simple text content");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","empty");var i=e.createTextNode("Empty mobiledoc");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","null");var i=e.createTextNode("Null mobiledoc");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","blank");var i=e.createTextNode("Blank string");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","simpleList");var i=e.createTextNode("List example");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","simpleCard");var i=e.createTextNode("Simple Card");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","emberCard");var i=e.createTextNode("Ember Card");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","imageCard");var i=e.createTextNode("Image Card");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","inputCard");var i=e.createTextNode("Card with Input");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","selfieCard");var i=e.createTextNode("Selfie Card");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","codemirrorCard");var i=e.createTextNode("Codemirror Card");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("option");e.setAttribute(r,"value","mentionAtom");var i=e.createTextNode("Mention Atom");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("    ");e.appendChild(n,a),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","output");var a=e.createTextNode("\n      ");
e.appendChild(n,a);var a=e.createElement("h4"),r=e.createTextNode("Mobiledoc Output");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("pre");e.setAttribute(a,"class","serialized-mobiledoc-wrapper");var r=e.createElement("code");e.setAttribute(r,"id","serialized-mobiledoc");var i=e.createComment("");e.appendChild(r,i),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","output full-right");var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("h4"),r=e.createTextNode("Rendered with ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(" renderer");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("ul"),r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("li"),i=e.createTextNode("Use ");e.appendChild(r,i);var i=e.createElement("button"),l=e.createTextNode("DOM-Renderer");e.appendChild(i,l),e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("li"),i=e.createTextNode("Use ");e.appendChild(r,i);var i=e.createElement("button"),l=e.createTextNode("HTML Renderer");e.appendChild(i,l),e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("li"),i=e.createTextNode("Use ");e.appendChild(r,i);var i=e.createElement("button"),l=e.createTextNode("Text Renderer");e.appendChild(i,l),e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("hr");e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[4]),n=e.childAt(d,[1,1]),a=e.childAt(n,[1]),r=e.childAt(d,[5,1]),i=e.childAt(r,[3]),l=e.childAt(i,[1,1]),c=e.childAt(i,[3,1]),m=e.childAt(i,[5,1]),p=new Array(8);return p[0]=e.createElementMorph(a),p[1]=e.createMorphAt(n,3,3),p[2]=e.createMorphAt(e.childAt(d,[3,1,3,0]),0,0),p[3]=e.createMorphAt(e.childAt(r,[1]),1,1),p[4]=e.createElementMorph(l),p[5]=e.createElementMorph(c),p[6]=e.createElementMorph(m),p[7]=e.createMorphAt(r,7,7),p},statements:[["element","action",["changeMobiledoc"],["on","change"],["loc",[null,[19,36],[19,76]]]],["block","mobiledoc-editor",[],["class","post-editor__editor","mobiledoc",["subexpr","@mut",[["get","mobiledoc",["loc",[null,[36,20],[36,29]]]]],[],[]],"cards",["subexpr","mobiledoc-cards-list",[],[],["loc",[null,[37,16],[37,38]]]],"atoms",["subexpr","mobiledoc-atoms-list",[],[],["loc",[null,[38,16],[38,38]]]],"on-change",["subexpr","action",["didEdit"],[],["loc",[null,[39,20],[39,38]]]]],0,null,["loc",[null,[34,6],[43,27]]]],["inline","format-object",[["get","editedMobiledoc",["loc",[null,[51,24],[51,39]]]]],[],["loc",[null,[51,6],[51,43]]]],["content","rendererName",["loc",[null,[57,24],[57,40]]]],["element","action",["setRenderer","dom"],[],["loc",[null,[59,24],[59,54]]]],["element","action",["setRenderer","html"],[],["loc",[null,[60,24],[60,55]]]],["element","action",["setRenderer","text"],[],["loc",[null,[61,24],[61,55]]]],["inline","component",[["subexpr","concat",["mobiledoc-",["get","rendererName",["loc",[null,[64,39],[64,51]]]],"-renderer"],[],["loc",[null,[64,18],[64,64]]]]],["mobiledoc",["subexpr","@mut",[["get","editedMobiledoc",["loc",[null,[64,75],[64,90]]]]],[],[]]],["loc",[null,[64,6],[64,92]]]]],locals:[],templates:[e]}}())}),define("mobiledoc-kit-demo/config/environment",["ember"],function(e){var t="mobiledoc-kit-demo";try{var o=t+"/config/environment",d=e["default"].$('meta[name="'+o+'"]').attr("content"),n=JSON.parse(unescape(d));return{"default":n}}catch(a){throw new Error('Could not read config from meta tag with name "'+o+'".')}}),runningTests?require("mobiledoc-kit-demo/tests/test-helper"):require("mobiledoc-kit-demo/app")["default"].create({name:"mobiledoc-kit-demo",version:"0.0.0+35234813"});