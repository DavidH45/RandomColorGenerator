import Head from 'next/head'
var tinycolor = require("tinycolor2");

export default function Home() {

  function changeColor() {
    // Change background color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const darkColor = tinycolor("#"+randomColor).darken(35).toString();
    document.body.style.backgroundColor = "#"+randomColor;

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
      alert("Press the generate color button first.");
    }else{
    navigator.clipboard.writeText(copyColor.innerHTML.toString());
    alert("Copied the color: " + copyColor.innerHTML.toString());
    }
  }

  
  return (
    <div className="container">
      <Head>
        <title>Random Color Generator</title>
        <link id="favicon" rel="icon" href="https://singlecolorimage.com/get/ffffff/1x1" />
      </Head>

      <main>
        <h1 className="title" id="title" onClick={() => copy()} >
          Random Color Generator
        </h1>
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

