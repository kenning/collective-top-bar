import n from"react";var t=function(){return n.createElement("style",{dangerouslySetInnerHTML:{__html:"\n    .button-test {\n      position: relative;\n      background-color: #4caf50;\n      border: none;\n      font-size: 28px;\n      color: #ffffff;\n      padding: 20px;\n      width: 200px;\n      text-align: center;\n      -webkit-transition-duration: 0.4s; /* Safari */\n      transition-duration: 0.4s;\n      text-decoration: none;\n      overflow: hidden;\n      cursor: pointer;\n      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    }\n\n    .button-test:after {\n      content: '';\n      background: #f1f1f1;\n      display: block;\n      position: absolute;\n      padding-top: 300%;\n      padding-left: 350%;\n      margin-left: -20px !important;\n      margin-top: -120%;\n      opacity: 0;\n      transition: all 0.8s;\n    }\n\n    .button-test:active:after {\n      padding: 0;\n      margin: 0;\n      opacity: 1;\n      transition: 0s;\n    }\n"}})},e=function(e){var o=e.onClick,a=e.disabled,i=e.className,r=e.text;return n.createElement(n.Fragment,null,n.createElement("button",{type:"button",className:"button-test ".concat(i),onClick:o,disabled:a},r),n.createElement(t,null))};e.defaultProps={onClick:function(){},disabled:!1,className:null,text:"Click Me"};export{e as Button};
//# sourceMappingURL=index.es.js.map
