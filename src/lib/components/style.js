import React from 'react'

const InlineStyle = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
    .button-test {
      position: relative;
      background-color: #4caf50;
      border: none;
      font-size: 28px;
      color: #ffffff;
      padding: 20px;
      width: 200px;
      text-align: center;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      text-decoration: none;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .button-test:after {
      content: '';
      background: #f1f1f1;
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    .button-test:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }
`,
      }}
    />
  )
}

export default InlineStyle
