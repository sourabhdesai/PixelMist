(this["webpackJsonppixel-mist"]=this["webpackJsonppixel-mist"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"filename":"warp.jpg","r":"Math.sqrt(Math.abs(x * y)) % (Math.hypot(x-w/2, y-h/2) + 1) % (255 * Math.tan(x ^ y) + 1) % (Math.abs(x - y) + 1) % 256","g":"Math.sqrt(Math.abs(x * y)) % (Math.hypot(x-w/2, y-h/2) + 1) % (255 * Math.tan(x ^ y) + 1) % (Math.abs(x - y) + 1) % 171","b":"Math.sqrt(Math.abs(x * y)) % (Math.hypot(x-w/2, y-h/2) + 1) % (255 * Math.tan(x ^ y) + 1) % (Math.abs(x - y) + 1) % 86","w":1000,"h":1000},{"filename":"hotspot.jpg","r":"Math.hypot(x, y)","g":"(255 * Math.tan(x ^ y) + 1) % 256","b":"(255 * Math.tan(x ^ y) + 1) % 256","w":1000,"h":1000},{"filename":"sierpinski.jpg","r":"Math.tanh(x & y)","g":"Math.tanh(x & y)","b":"Math.tanh(x & y)","w":1000,"h":1000},{"filename":"circus.jpg","r":"Math.cos(Math.hypot(x, y) / Math.hypot(w / 2.5, h / 2.5)) * Math.tanh(x + y)","g":"Math.cos(Math.hypot(x, y) / Math.hypot(w / 2.5, h / 2.5)) * Math.tanh(x * y)","b":"Math.cos(Math.hypot(x, y) / Math.hypot(w / 2.5, h / 2.5)) * Math.tanh(x - y)","w":1000,"h":1000},{"filename":"rainbow.jpg","r":"x + y","g":"x * y","b":"x - y","w":1000,"h":1000}]')},18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ExpressionPixelGenerator}));var _Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);function clamp(e,t,a){return Math.min(Math.max(e,t),a)}function linearInterpolate(e,t,a,n,r){return clamp(n+(e-t)/(a-t)*(r-n),n,r)}var PixelGeneratorResult=function(){function e(t,a,n){Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,e),this.pixelGrid=t,this.min=a,this.max=n}return Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(e,[{key:"convertResultToRgbScale",value:function(){var e=this;return this.pixelGrid.map((function(t){return t.map((function(t){return clamp(Math.round(linearInterpolate(t,e.min,e.max,0,255)),0,255)}))}))}}]),e}(),PixelGenerator=function(){function e(){Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,e)}return Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(e,[{key:"generatePixels",value:function(e,t,a){var n=this;a=a||1;var r=1/0,l=-1/0,s=lodash__WEBPACK_IMPORTED_MODULE_4___default.a.times(e,(function(s){return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.times(t,(function(i){var o=t-1-i,_=linearInterpolate(s,0,e,-a,a),c=linearInterpolate(o,0,t,-a,a),u=n.generate(_,c,e,t);return u=lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isNaN(u)?0:u,r=Math.min(u,r),l=Math.max(u,l),u}))}));return new PixelGeneratorResult(s,r,l)}},{key:"generate",value:function(e,t,a,n){throw new Error("Must Implement")}}]),e}(),ExpressionPixelGenerator=function(_PixelGenerator){Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.a)(ExpressionPixelGenerator,_PixelGenerator);var _super=Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_0__.a)(ExpressionPixelGenerator);function ExpressionPixelGenerator(expressionString){var _this3;return Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,ExpressionPixelGenerator),_this3=_super.call(this),_this3.expressionFunc=eval("((x, y, w, h) => ".concat(expressionString,")")),_this3}return Object(_Users_sourabhdesai_Documents_Web_Projects_pixel_mist_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(ExpressionPixelGenerator,[{key:"generate",value:function(e,t,a,n){return this.expressionFunc(e,t,a,n)}}]),ExpressionPixelGenerator}(PixelGenerator)},20:function(e,t,a){},32:function(e,t,a){e.exports=a(51)},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),s=a.n(l),i=a(14),o=a(5),_=(a(39),a(10)),c=a(31);a(41),a(20),a(42);function u(){return r.a.createElement("h1",{className:"pixel-mist-title"},r.a.createElement(o.b,{to:"/"},"PIXEL MIST"))}var h=a(7),m=a.n(h),p=a(30);function b(e){var t=window.screen.width/1440;return Math.round(e*t)}var d=a(15),E=(a(47),a(48),a(29)),x=a(18);function f(e,t,a){return e<<16|t<<8|a}function g(e){var t=e.width,a=e.height,n=e.red,l=e.green,s=e.blue,i=new x.a(n),o=new x.a(l),_=new x.a(s);console.log({width:t,height:a,rGenerator:i,gGenerator:o,bGenerator:_});var c=function(e,t,a,n,r){var l=new E.BitMap;l.create(e,t,0);for(var s=a.generatePixels(e,t,1e3).convertResultToRgbScale(),i=n.generatePixels(e,t,1e3).convertResultToRgbScale(),o=r.generatePixels(e,t,1e3).convertResultToRgbScale(),_=0;_<e;_++)for(var c=0;c<t;c++){var u=s[_][c],h=i[_][c],m=o[_][c];l.setPixel(_,c,f(u,h,m))}return l.toBase64()}(t,a,i,o,_);return r.a.createElement("img",{width:"".concat(t,"px"),height:"".concat(a,"px"),src:c,className:"main-canvas"})}var y=Math.min(1e3,b(1e3)),M={r:"(Math.hypot(Math.abs(x), Math.abs(y)) + (Math.abs(x) & Math.abs(y))) / 2",g:"Math.tanh(Math.abs(x) & Math.abs(y))",b:"Math.abs(x) ^ Math.abs(y)",h:y,w:y};function w(){console.log("Called ExpressionBasedPixelGen");var e=Object(_.g)(),t=Object(_.h)(),a=Object(p.a)(),n=a.register,l=a.handleSubmit,s=new URLSearchParams(t.search),i=s.get("example")||null,c=i&&function(e){var t=m.a.find(d,{filename:e});return t&&(t.w=Math.min(t.w,b(t.w)),t.h=Math.min(t.h,b(t.h))),t?m.a.pick(t,["r","g","b","w","h"]):null}(i)||{},u=Object.fromEntries(s.entries()),h=m.a.defaults(m.a.cloneDeep(u),c,M),E=m.a.pick(h,Object.keys(M));if(!m.a.isEqual(E,u))return e.push({pathname:t.pathname,search:new URLSearchParams(E).toString()}),null;var x=h.r,f=h.g,y=h.b,w=h.w,P=h.h;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(g,{width:Number(w),height:Number(P),red:x,green:f,blue:y}),r.a.createElement("form",{className:"expression-form",onSubmit:l((function(a){var n=m.a.pick(a,Object.keys(M));e.push({pathname:t.pathname,search:new URLSearchParams(n).toString()})}))},r.a.createElement("input",{type:"number",name:"w",min:"1",placeholder:"Width in pixels",defaultValue:Number(w),ref:n({required:!0})}),r.a.createElement("input",{type:"number",name:"h",min:"1",placeholder:"Height in pixels",defaultValue:Number(P),ref:n({required:!0})}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"r",placeholder:"Red Expression",defaultValue:x,ref:n({required:!0}),className:"red"}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"g",placeholder:"Green Expression",defaultValue:f,ref:n({required:!0}),className:"green"}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"b",placeholder:"Blue Expression",defaultValue:y,ref:n({required:!0}),className:"blue"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",{className:"footer"},r.a.createElement(o.b,{to:"/about"},r.a.createElement("h2",{className:"footer-link"},"About")),r.a.createElement(o.b,{to:"/examples"},r.a.createElement("h2",{className:"footer-link"},"Examples")))))}a(49);function P(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",null,"What is this?"),r.a.createElement("p",null,"Pixel Mist is a tool that gives you a new way to visualize mathematical expressions. It's kind of like a pixel shader but a lot simpler and more approachable. You can use it to create custom gradients, generate interesting patterns, and get a better understanding of mathematics."),r.a.createElement("h1",null,"How does it work?"),r.a.createElement("p",null,"I'm gonna assume you know about the ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/RGB_color_model"},"RGB color model"),".",r.a.createElement("br",null),r.a.createElement("br",null),"You are given five form fields to fill out:",r.a.createElement("ul",null,r.a.createElement("li",null,"Width"),r.a.createElement("li",null,"Height"),r.a.createElement("li",null,"Red Expression"),r.a.createElement("li",null,"Green Expression"),r.a.createElement("li",null,"Blue Expression")),"Width & height are used to specify dimensions of the generated image in number of pixels.",r.a.createElement("br",null),r.a.createElement("br",null),"The RGB expressions are used to dictate what the color of each individual pixel should be at each XY coordinate in the image. This uses a cartesian coordinate system where the origin (0,0) is at the center of the image. Both the X & Y axis have a maximum absolute value of 1000.",r.a.createElement("br",null),r.a.createElement("br",null),"You're really specifying ",r.a.createElement("code",null,"R(x, y), G(x, y), B(x, y)"),". Those values are calculated for the entire dimensions of the image.",r.a.createElement("br",null),r.a.createElement("br",null),"The min & max values generated by your expression are mapped to 0 and 255 respectively with every other value in between being linearly interpolated. The outputs for the individual R, G, & B channels are then coalesced to create the resulting image.",r.a.createElement("br",null),r.a.createElement("br",null),"The expressions you write can do anything you can do in vanilla Javascript. That means you have full access to the ",r.a.createElement("a",{target:"_blank",href:"https://www.w3schools.com/js/js_math.asp"},"Math")," object. Also, in addition to being able to use the dynamic variables x & y which represent a pixel's coordinate position, you can also reference static variables w & h which represent the width & height of the output image.",r.a.createElement("br",null),r.a.createElement("br",null),"P.S. All the computation is happening in the browser on ",r.a.createElement("i",null,"your computer"),". There's no backend for this website at all because I'm not paying for that \ud83d\ude1b"),r.a.createElement("h1",null,"Who made it?"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/sourabhdesai/"},"I did")),r.a.createElement("h1",null,"Where can I report a bug or submit a feature request?"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/sourabhdesai/PixelMist/issues/new"},"Here")),r.a.createElement("h1",null,"Why does this exist?"),r.a.createElement("p",null,"It was the summer after freshman year of my Computer Science undergrad and the world of programming was consuming me. I was playing around with a homework assignment I had gotten during the school year that involved editing images pixel-by-pixel. I decided to see what would happen if I generated an entire image from code by specifying mathematical equations for each RGB color channel.",r.a.createElement("br",null),r.a.createElement("br",null),"I quickly realized that I could make images with fascinating patterns using this method. For example, I found that using the expression Math.tanh(x & y) would result in a ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle"},"Sierpi\u0144ski triangle"),"pattern (",r.a.createElement(o.b,{to:"/PixelMist/?r=Math.tanh%28x+%26+y%29&g=Math.tanh%28x+%26+y%29&b=Math.tanh%28x+%26+y%29&h=".concat(b(500),"&w=").concat(b(500))},"try for yourself"),"). I could utilize my mathematical knowledge to adjust images to match my aesthetic preferences.",r.a.createElement("br",null),r.a.createElement("br",null),"Besides being a way to keep my coding skills sharp over the summer, I found myself spending hours just creating new interesting patterns with this tool. I'm pretty certain I'm not the only one that would find this interesting to play with.",r.a.createElement("br",null),r.a.createElement("br",null),"Fast forward 8 years and the world is undergoing a global pandemic which leaves me with a lot of free time being at home in quarantine. Enough free time to dust off the old side project from all those years ago and turn it into a website so everyone can be as captivated by it as I was.")))}a(50);function v(e){var t=e.filename,a=new URLSearchParams({example:t});return r.a.createElement("a",{href:"/PixelMist?".concat(a.toString()),key:t},r.a.createElement("img",{alt:t,id:t,className:"example-img",src:"/PixelMist/images/examples/".concat(t)}))}function k(){return r.a.createElement("div",null,r.a.createElement("p",null,"A few examples to get you started",r.a.createElement("br",null),"Click image to open in editor"),d.map(v))}var O=function(){return function(e){i.a.set({page:e.pathname}),i.a.pageview(e.pathname)}(Object(_.h)()),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(_.d,null,r.a.createElement(_.b,{exact:!0,path:"/PixelMist"},r.a.createElement(w,null)),r.a.createElement(_.b,{exact:!0,path:"/PixelMist/about"},r.a.createElement(P,null)),r.a.createElement(_.b,{exact:!0,path:"/PixelMist/examples"},r.a.createElement(k,null)),r.a.createElement(_.a,{to:"/PixelMist"})),r.a.createElement("div",{className:"footer"},r.a.createElement(o.b,{to:"/PixelMist/about"},r.a.createElement("h2",{className:"footer-link"},"About")),r.a.createElement(o.b,{to:"/PixelMist/examples"},r.a.createElement("h2",{className:"footer-link"},"Examples")),r.a.createElement("div",{className:"github-btn"},r.a.createElement(c.a,{href:"https://github.com/sourabhdesai/PixelMist","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-star","aria-label":"Star sourabhdesai/PixelMist on GitHub"},"Star"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.initialize("UA-68475136-3"),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f7eb33ca.chunk.js.map