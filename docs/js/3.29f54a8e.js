webpackJsonp([3],{30:function(e,n,o){e.exports=o(36)},36:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0,!1,!1)},t=[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("p",[e._v('{\n"title": "Sphinx",\n"tags": ["javascript"],\n"date": "2016-07-15",\n"desc": "A very light JS library which could encode a string to an image, or decode an image to a string",\n"cover": "sphinx.png"\n}')]),e._v(" "),o("h1",[e._v("SphinxJS")]),e._v(" "),o("p",[e._v("A very light JS library which could encode a string to an image, or decode an image to a string.")]),e._v(" "),o("h2",[e._v("Usage")]),e._v(" "),o("p",[e._v("Install SphinxJS from npm")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("npm install sphinx.js\n")])]),e._v(" "),o("p",[e._v("Use "),o("code",{pre:!0},[e._v("<script><\/script>")]),e._v(" tags")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v('<script src="sphinx.js"><\/script>\n')])]),e._v(" "),o("blockquote",[o("p",[e._v("Mind that "),o("code",{pre:!0},[e._v("SphinxJS")]),e._v(" uses ES2015 "),o("code",{pre:!0},[e._v("Promise")]),e._v(" and other amazing features, which means that it requires your browser's support.\nIf not, you might use 'Babel' or something else to build your code.")])]),e._v(" "),o("blockquote",[o("p",[o("code",{pre:!0},[e._v("SphinxJS")]),e._v(" also supports "),o("code",{pre:!0},[e._v("AMD")]),e._v(", "),o("code",{pre:!0},[e._v("CommonJS")]),e._v(" and "),o("code",{pre:!0},[e._v("ES6 Modules")])])]),e._v(" "),o("h2",[e._v("Encode")]),e._v(" "),o("p",[e._v("Defined a string as "),o("code",{pre:!0},[e._v("Hello Sphinx!")]),e._v(", and we're going to encode it.")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("let base64URL = new Sphinx().encode('Hello Sphinx!')\n")])]),e._v(" "),o("p",[e._v("Then the "),o("code",{pre:!0},[e._v("base64URL")]),e._v(" is equal to")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=\n")])]),e._v(" "),o("p",[e._v(", the string information has encoded to an image successfully.")]),e._v(" "),o("p",[e._v("As you see, the "),o("code",{pre:!0},[e._v("encode()")]),e._v(" function returns a base64 url of an image.")]),e._v(" "),o("h2",[e._v("Decode")]),e._v(" "),o("p",[e._v("Defined an image url")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("let url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=`\n")])]),e._v(" "),o("p",[e._v("Now decode it!")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("new Sphinx().decode(url)\n\t.then((info) => {\n\t\tconsole.log(info) // Hello Sphinx!\n\t})\n")])]),e._v(" "),o("p",[e._v("The "),o("code",{pre:!0},[e._v("decode()")]),e._v(" function returns a "),o("code",{pre:!0},[e._v("Promise")]),e._v(", which includes the string information decoded from the image.")]),e._v(" "),o("h2",[e._v("Config")]),e._v(" "),o("p",[e._v("The "),o("code",{pre:!0},[e._v("new Sphinx()")]),e._v(" could recieve a config object to select the type of the image it created.")]),e._v(" "),o("ul",[o("li",[e._v("config {Object} "),o("code",{pre:!0},[e._v("optional")]),e._v(" "),o("code",{pre:!0},[e._v("default: {img: 'png'}")])])]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("new Sphinx({img: 'bmp'})\n")])]),e._v(" "),o("h2",[e._v("License")]),e._v(" "),o("p",[e._v("MIT")])])}],v={render:r,staticRenderFns:t},i=v,_=o(2),p=_(null,i,!1,null,null,null);n.default=p.exports}});