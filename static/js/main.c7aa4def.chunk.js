(this["webpackJsonppixel-mist"]=this["webpackJsonppixel-mist"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"filename":"warp.jpg","r":"Math.sqrt(Math.abs(x * y)) % (Math.hypot(x-w/2, y-h/2) + 1) % (255 * Math.tan(x ^ y) + 1) % (Math.abs(x - y) + 1) % 256","g":"Math.sqrt(Math.abs(x * y)) % (Math.hypot(x-w/2, y-h/2) + 1) % (255 * Math.tan(x ^ y) + 1) % (Math.abs(x - y) + 1) % 171","b":"Math.sqrt(Math.abs(x * y)) % (Math.hypot(x-w/2, y-h/2) + 1) % (255 * Math.tan(x ^ y) + 1) % (Math.abs(x - y) + 1) % 86","w":1000,"h":1000},{"filename":"hotspot.jpg","r":"Math.hypot(x, y)","g":"(255 * Math.tan(x ^ y) + 1) % 256","b":"(255 * Math.tan(x ^ y) + 1) % 256","w":1000,"h":1000},{"filename":"sierpinski.jpg","r":"Math.tanh(x & y)","g":"Math.tanh(x & y)","b":"Math.tanh(x & y)","w":1000,"h":1000},{"filename":"circus.jpg","r":"Math.cos(Math.hypot(x, y) / Math.hypot(w / 2.5, h / 2.5)) * Math.tanh(x + y)","g":"Math.cos(Math.hypot(x, y) / Math.hypot(w / 2.5, h / 2.5)) * Math.tanh(x * y)","b":"Math.cos(Math.hypot(x, y) / Math.hypot(w / 2.5, h / 2.5)) * Math.tanh(x - y)","w":1000,"h":1000},{"filename":"rainbow.jpg","r":"x + y","g":"x * y","b":"x - y","w":1000,"h":1000}]')},18:function(e,a,t){},27:function(e,a,t){var n=t(46),r=["clamp","linearInterpolate","PixelGeneratorResult","PixelGenerator","calculateBase64"];e.exports=function(){var e=new Worker(t.p+"c214a03baffd69a843cd.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},30:function(e,a,t){e.exports=t(50)},37:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),i=t.n(l),o=t(15),s=t(7),c=(t(37),t(11)),h=t(28);t(39),t(18),t(40);function m(){return r.a.createElement("h1",{className:"pixel-mist-title"},r.a.createElement(s.b,{to:"/"},"PIXEL MIST"))}var u=t(6),p=t.n(u),d=t(29);function b(e){var a=window.screen.width/1440;return Math.round(e*a)}var g=t(16),f=(t(45),t(4)),E=t(27),y=t.n(E),x=(t(47),y()()),w=!1;function M(e){var a=e.width,t=e.height,l=e.red,i=e.green,o=e.blue,s=Object(n.useState)(null),c=Object(f.a)(s,2),h=c[0],m=c[1],u=Object(n.useState)(w),d=Object(f.a)(u,2),b=d[0],g=d[1],E=Object(n.useState)(null),y=Object(f.a)(E,2),M=y[0],v=y[1],k=Object(n.useState)(null),j=Object(f.a)(k,2),P=j[0],S=j[1],N=Object(n.useState)(0),I=Object(f.a)(N,2),O=I[0],q=I[1],B={scale:1e3,width:a,height:t,red:l,green:i,blue:o},R=!p.a.isEqual(B,M),G=p.a.isEqual(B,P);return Object(n.useEffect)((function(){x.onmessage=function(e){if(p.a.isEqual(e.data,{type:"RPC",method:"ready"}))g(!0),w=!0;else if(e.data.imageSource)m(e.data.imageSource),v(e.data.renderedParams),S(null);else if(e.data.totalProgress){var a=Math.round(100*e.data.totalProgress);a%5===0&&q(a)}},b&&R&&!G&&(S(B),x.calculateBase64(B))})),p.a.isNil(h)||!b||R&&G?r.a.createElement("p",null,"Loading ","".concat(O,"%"),"..."):r.a.createElement("img",{width:"".concat(a,"px"),height:"".concat(t,"px"),src:h,className:"main-canvas"})}var v=Math.min(1e3,b(1e3)),k={r:"(Math.hypot(Math.abs(x), Math.abs(y)) + (Math.abs(x) & Math.abs(y))) / 2",g:"Math.tanh(Math.abs(x) & Math.abs(y))",b:"Math.abs(x) ^ Math.abs(y)",h:v,w:v};function j(){console.log("Called ExpressionBasedPixelGen");var e=Object(c.g)(),a=Object(c.h)(),t=Object(d.a)(),n=t.register,l=t.handleSubmit,i=new URLSearchParams(a.search),o=i.get("example")||null,h=o&&function(e){var a=p.a.find(g,{filename:e});return a&&(a.w=Math.min(a.w,b(a.w)),a.h=Math.min(a.h,b(a.h))),a?p.a.pick(a,["r","g","b","w","h"]):null}(o)||{},m=Object.fromEntries(i.entries()),u=p.a.defaults(p.a.cloneDeep(m),h,k),f=p.a.pick(u,Object.keys(k));if(!p.a.isEqual(f,m))return e.push({pathname:a.pathname,search:new URLSearchParams(f).toString()}),null;var E=u.r,y=u.g,x=u.b,w=u.w,v=u.h;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(M,{width:Number(w),height:Number(v),red:E,green:y,blue:x}),r.a.createElement("form",{className:"expression-form",onSubmit:l((function(t){var n=p.a.pick(t,Object.keys(k));e.push({pathname:a.pathname,search:new URLSearchParams(n).toString()})}))},r.a.createElement("input",{type:"number",name:"w",min:"1",placeholder:"Width in pixels",defaultValue:Number(w),ref:n({required:!0})}),r.a.createElement("input",{type:"number",name:"h",min:"1",placeholder:"Height in pixels",defaultValue:Number(v),ref:n({required:!0})}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"r",placeholder:"Red Expression",defaultValue:E,ref:n({required:!0}),className:"red"}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"g",placeholder:"Green Expression",defaultValue:y,ref:n({required:!0}),className:"green"}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"b",placeholder:"Blue Expression",defaultValue:x,ref:n({required:!0}),className:"blue"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",{className:"footer"},r.a.createElement(s.b,{to:"/about"},r.a.createElement("h2",{className:"footer-link"},"About")),r.a.createElement(s.b,{to:"/examples"},r.a.createElement("h2",{className:"footer-link"},"Examples")))))}t(48);function P(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",null,"What is this?"),r.a.createElement("p",null,"Pixel Mist is a tool that gives you a new way to visualize mathematical expressions. It's kind of like a pixel shader but a lot simpler and more approachable. You can use it to create custom gradients, generate interesting patterns, and get a better understanding of mathematics."),r.a.createElement("h1",null,"How does it work?"),r.a.createElement("p",null,"I'm gonna assume you know about the ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/RGB_color_model"},"RGB color model"),".",r.a.createElement("br",null),r.a.createElement("br",null),"You are given five form fields to fill out:",r.a.createElement("ul",null,r.a.createElement("li",null,"Width"),r.a.createElement("li",null,"Height"),r.a.createElement("li",null,"Red Expression"),r.a.createElement("li",null,"Green Expression"),r.a.createElement("li",null,"Blue Expression")),"Width & height are used to specify dimensions of the generated image in number of pixels.",r.a.createElement("br",null),r.a.createElement("br",null),"The RGB expressions are used to dictate what the color of each individual pixel should be at each XY coordinate in the image. This uses a cartesian coordinate system where the origin (0,0) is at the center of the image. Both the X & Y axis have a maximum absolute value of 1000.",r.a.createElement("br",null),r.a.createElement("br",null),"You're really specifying ",r.a.createElement("code",null,"R(x, y), G(x, y), B(x, y)"),". Those values are calculated for the entire dimensions of the image.",r.a.createElement("br",null),r.a.createElement("br",null),"The min & max values generated by your expression are mapped to 0 and 255 respectively with every other value in between being linearly interpolated. The outputs for the individual R, G, & B channels are then coalesced to create the resulting image.",r.a.createElement("br",null),r.a.createElement("br",null),"The expressions you write can do anything you can do in vanilla Javascript. That means you have full access to the ",r.a.createElement("a",{target:"_blank",href:"https://www.w3schools.com/js/js_math.asp"},"Math")," object. Also, in addition to being able to use the dynamic variables x & y which represent a pixel's coordinate position, you can also reference static variables w & h which represent the width & height of the output image.",r.a.createElement("br",null),r.a.createElement("br",null),"P.S. All the computation is happening in the browser on ",r.a.createElement("i",null,"your computer"),". There's no backend for this website at all because I'm not paying for that \ud83d\ude1b"),r.a.createElement("h1",null,"Who made it?"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/sourabhdesai/"},"I did")),r.a.createElement("h1",null,"Where can I report a bug or submit a feature request?"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/sourabhdesai/PixelMist/issues/new"},"Here")),r.a.createElement("h1",null,"Why does this exist?"),r.a.createElement("p",null,"It was the summer after freshman year of my Computer Science undergrad and the world of programming was consuming me. I was playing around with a homework assignment I had gotten during the school year that involved editing images pixel-by-pixel. I decided to see what would happen if I generated an entire image from code by specifying mathematical equations for each RGB color channel.",r.a.createElement("br",null),r.a.createElement("br",null),"I quickly realized that I could make images with fascinating patterns using this method. For example, I found that using the expression Math.tanh(x & y) would result in a ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle"},"Sierpi\u0144ski triangle"),"pattern (",r.a.createElement(s.b,{to:"/PixelMist/?r=Math.tanh%28x+%26+y%29&g=Math.tanh%28x+%26+y%29&b=Math.tanh%28x+%26+y%29&h=".concat(b(500),"&w=").concat(b(500))},"try for yourself"),"). I could utilize my mathematical knowledge to adjust images to match my aesthetic preferences.",r.a.createElement("br",null),r.a.createElement("br",null),"Besides being a way to keep my coding skills sharp over the summer, I found myself spending hours just creating new interesting patterns with this tool. I'm pretty certain I'm not the only one that would find this interesting to play with.",r.a.createElement("br",null),r.a.createElement("br",null),"Fast forward 8 years and the world is undergoing a global pandemic which leaves me with a lot of free time being at home in quarantine. Enough free time to dust off the old side project from all those years ago and turn it into a website so everyone can be as captivated by it as I was.")))}t(49);function S(e){var a=e.filename,t=new URLSearchParams({example:a});return r.a.createElement("a",{href:"/PixelMist?".concat(t.toString()),key:a},r.a.createElement("img",{alt:a,id:a,className:"example-img",src:"/PixelMist/images/examples/".concat(a)}))}function N(){return r.a.createElement("div",null,r.a.createElement("p",null,"A few examples to get you started",r.a.createElement("br",null),"Click image to open in editor"),g.map(S))}var I=function(){return function(e){o.a.set({page:e.pathname}),o.a.pageview(e.pathname)}(Object(c.h)()),r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/PixelMist"},r.a.createElement(j,null)),r.a.createElement(c.b,{exact:!0,path:"/PixelMist/about"},r.a.createElement(P,null)),r.a.createElement(c.b,{exact:!0,path:"/PixelMist/examples"},r.a.createElement(N,null)),r.a.createElement(c.a,{to:"/PixelMist"})),r.a.createElement("div",{className:"footer"},r.a.createElement(s.b,{to:"/PixelMist/about"},r.a.createElement("h2",{className:"footer-link"},"About")),r.a.createElement(s.b,{to:"/PixelMist/examples"},r.a.createElement("h2",{className:"footer-link"},"Examples")),r.a.createElement("div",{className:"github-btn"},r.a.createElement(h.a,{href:"https://github.com/sourabhdesai/PixelMist","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-star","aria-label":"Star sourabhdesai/PixelMist on GitHub"},"Star"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.initialize("UA-68475136-3"),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c7aa4def.chunk.js.map