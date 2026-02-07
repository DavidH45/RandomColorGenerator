import Head from 'next/head'
import { useRef } from 'react';
var tinycolor = require("tinycolor2");

export default function Home() {
  const toastTimer = useRef(null);

  function changeColor() {
    // Change background color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const darkColor = tinycolor("#"+randomColor).darken(35).toString();
    document.body.style.backgroundColor = "#"+randomColor;

    // Set theme color variable for tooltip/toast
    document.documentElement.style.setProperty('--theme-color', darkColor);

    // Change title text and title color
    const title = document.getElementById('title');
    
    // Animate title
    title.classList.remove('pop-animation');
    void title.offsetWidth; // Trigger reflow
    title.classList.add('pop-animation');

    document.getElementById("title").innerHTML = "#"+randomColor;
    title.style.color = darkColor;

    // Change button shadow and color
    const button = document.getElementById('button');
    button.style.boxShadow = "inset 0 0 0 2px "+darkColor;
    button.style.color = darkColor;

    // Change title text and title color
    const footer = document.getElementById('footer');
    footer.style.color = darkColor;

    // Change page title
    document.title = "#"+randomColor;

    // Change page favicon
    const favicon = document.getElementById('favicon');
    favicon.href = "https://singlecolorimage.com/get/"+randomColor+"/1x1";

  }

  function copy() {
    var copyColor = document.getElementById("title");
    if(copyColor.innerHTML.toString() == "Random Color Generator"){
      showToast("Generate a color first!");
    }else{
    navigator.clipboard.writeText(copyColor.innerHTML.toString());
    showToast("Copied: " + copyColor.innerHTML.toString());
    }
  }

  function showToast(message) {
    var toast = document.getElementById("toast");
    var title = document.getElementById("title");
    
    // Clear existing timer
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    if(title.style.color) {
      toast.style.backgroundColor = title.style.color;
    }
    
    toast.innerHTML = message;
    
    // Reset animation if already showing to give feedback
    if (toast.classList.contains("show")) {
      toast.classList.remove("show");
      void toast.offsetWidth; // Trigger reflow
    }
    
    toast.classList.add("show");
    
    toastTimer.current = setTimeout(function(){ 
      toast.classList.remove("show"); 
    }, 3000);
  }

  
  return (
    <div className="container">
      <Head>
        <title>Random Color Generator</title>
        <link id="favicon" rel="icon" href="https://singlecolorimage.com/get/ffffff/1x1" />
      </Head>

      <main>
        <div className="title-container">
          <h1 className="title" id="title" onClick={() => copy()} >
            Random Color Generator
          </h1>
          <span className="tooltip">Click to copy</span>
        </div>
        <div id="toast" className="toast"></div>

        <p className="button">
        <button onClick={() => changeColor()} id="button">Generate Color</button>
        </p>
      </main>

      <footer>
        <a id="footer" href="https://github.com/DavidH45">Created by David Hendershot</a>
      </footer>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 1.15;
          color: #000;
          transition: color 0.5s ease;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          transition: color 0.5s ease;
          cursor: pointer;
        }

        .title-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tooltip {
          visibility: hidden;
          width: 120px;
          background-color: var(--theme-color, #555);
          color: #fff;
          text-align: center;
          padding: 5px 0;
          border-radius: 6px;
          position: absolute;
          z-index: 1;
          bottom: 100%;
          left: 50%;
          margin-left: -60px;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: var(--theme-color, #555) transparent transparent transparent;
        }

        .title-container:hover .tooltip {
          visibility: visible;
          opacity: 1;
        }

        .toast {
          visibility: hidden;
          opacity: 0;
          min-width: 250px;
          transform: translateX(-50%);
          background-color: #333;
          color: #fff;
          text-align: center;
          padding: 16px;
          position: fixed;
          z-index: 1000;
          left: 50%;
          top: 0;
          font-size: 17px;
          border-radius: 10px;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
          transition: all 0.5s ease-in-out;
        }

        .toast.show {
          visibility: visible;
          opacity: 1;
          top: 30px;
        }

        button {
          background: none;
          border: 0;
          box-sizing: border-box;
          margin: 1em;
          padding: 1em 2em;
          box-shadow: inset 0 0 0 2px #000;
          color: #000;
          font-size: inherit;
          font-weight: 700;
          position: relative;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 5px;
          transition: color 0.5s ease, box-shadow 0.5s ease, transform 0.1s ease;
        }

        button:active {
          transform: scale(0.95);
        }

        a:link { text-decoration: none; }
        a:visited { text-decoration: none; }
        a:hover { text-decoration: none; }
        a:active { text-decoration: none; }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          transition: background-color 0.5s ease;
        }

        .pop-animation {
          animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    
  )
  
}

