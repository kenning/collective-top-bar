"use strict";function _interopDefault(n){return n&&"object"==typeof n&&"default"in n?n.default:n}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),InlineStyle=function(){return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n    .button-test {\n      position: relative;\n      background-color: #4caf50;\n      border: none;\n      font-size: 28px;\n      color: #ffffff;\n      padding: 20px;\n      width: 200px;\n      text-align: center;\n      -webkit-transition-duration: 0.4s; /* Safari */\n      transition-duration: 0.4s;\n      text-decoration: none;\n      overflow: hidden;\n      cursor: pointer;\n      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    }\n\n    .button-test:after {\n      content: '';\n      background: #f1f1f1;\n      display: block;\n      position: absolute;\n      padding-top: 300%;\n      padding-left: 350%;\n      margin-left: -20px !important;\n      margin-top: -120%;\n      opacity: 0;\n      transition: all 0.8s;\n    }\n\n    .button-test:active:after {\n      padding: 0;\n      margin: 0;\n      opacity: 1;\n      transition: 0s;\n    }\n"}})},Button=function(n){var t=n.onClick,e=n.disabled,a=n.className,o=n.text;return React.createElement(React.Fragment,null,React.createElement("button",{type:"button",className:"button-test ".concat(a),onClick:t,disabled:e},o),React.createElement(InlineStyle,null))};Button.defaultProps={onClick:function(){},disabled:!1,className:null,text:"Click Me"},exports.Button=Button;
//# sourceMappingURL=index.js.map
