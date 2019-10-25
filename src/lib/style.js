import React from 'react'

const InlineStyle = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        /* STyleguidist shit, ignore! */
        footer {
          display: none;
        }
        
        /**
         * Boilerplate from example 
         */
        
        /* Boilerplate from example */
        .top-navbar-mobile-preview button,
        .top-navbar-button {
          position: relative;
          border: none;
          width: 200px;
          transition-duration: 0.4s;
          overflow: hidden;
        }
        
        /* Example wonky click animation */
        .top-navbar-mobile-preview button:after,
        .top-navbar-button:after {
          pointer-events: none;
          content: '';
          background: var(--top-navbar-button-anim-color);
          display: block;
          position: absolute;
          padding-top: 300%;
          padding-left: 350%;
          margin-left: -20px !important;
          margin-top: -120%;
          opacity: 0;
          transition: all 0.8s;
          border-radius: 100px;
        }
        .top-navbar-mobile-preview button:active:after,
        .top-navbar-button:active:after {
          padding: 0;
          margin: 0;
          opacity: 1;
          transition: 0s;
        }
        
        /***********
         * New code
         **********/
        
        /**
         * Button 
         */
        :root {
          --top-navbar-sprite-size: 50px;
          --top-navbar-bg-color: black;
          --top-navbar-text-color: #ddd;
          --top-navbar-button-bg-color: #444;
          --top-navbar-button-anim-color: #888;
          /* --top-navbar-mobile-breakpoint: 800px; Defined separately in js and 
          inline at bottom!! */
          --top-navbar-interbutton-padding: 5px;
        }
        
        .top-navbar-button {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          background-color: var(--top-navbar-button-bg-color);
          padding: 10px;
        }
        .top-navbar-button:not(:first-child) {
          margin-left: var(--top-navbar-interbutton-padding);
        }
        
        .top-navbar-button-sprite {
          width: var(--top-navbar-sprite-size);
          height: var(--top-navbar-sprite-size);
        }
        
        .top-navbar-button-text {
          padding-left: 5px;
          font-size: 18px;
          text-align: center;
          text-decoration: none;
          color: var(--top-navbar-text-color);
        }
        
        /**
         * Top navbar 
         */
        
        .top-navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 4;
          width: 100vw;
          background-color: var(--top-navbar-bg-color);
          color: var(--top-navbar-text-color);
        }
        .top-navbar-buttons {
          display: flex;
        }
        .top-navbar-mobile-preview {
          padding-top: var(--top-navbar-interbutton-padding);
          display: none;
          width: 100%;
        }
        .top-navbar-mobile-preview .text,
        .top-navbar-mobile-preview button {
          color: var(--top-navbar-text-color);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 10px 14px;
        }
        .top-navbar-mobile-preview .text {
          margin-right: var(--top-navbar-interbutton-padding);
          width: 100%;
        }
        .top-navbar-mobile-preview button {
          width: 20%;
          background-color: var(--top-navbar-button-bg-color);
        }
        
        /* Responsiveness */
        
        /* Mobile */
        /* @media (max-width: --top-navbar-mobile-breakpoint) { */
        @media (max-width: 800px) {
          .top-navbar-mobile-preview {
            display: flex;
          }
          .top-navbar-button-text {
            display: none;
          }
        }
        `,
      }}
    />
  )
}

export default InlineStyle
