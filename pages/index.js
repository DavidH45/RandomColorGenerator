import Head from 'next/head'
var tinycolor = require("tinycolor2");

export default function Home() {

  function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const darkColor = tinycolor("#"+randomColor).darken(35).toString();
    document.body.style.backgroundColor = "#"+randomColor;

    const title = document.getElementById('title');
    document.getElementById("title").innerHTML = "#"+randomColor;
    title.style.color = darkColor;

    const button = document.getElementById('button');
    button.style.boxShadow = "inset 0 0 0 2px "+darkColor;
    button.style.color = darkColor;

    console.log("Color="+randomColor);
    console.log("DarkColor="+darkColor);
  }
  
  return (
    <div className="container">
      <Head>
        <title>Random Color Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title" id="title">
          Random Color Generator
        </h1>
        <p className="button">
        <button onClick={() => changeColor()} id="button">Generate Color</button>
        </p>
      </main>

      <footer>
        <a>Created by David Hendershot</a>
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
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
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
          cursor: pointer
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    
  )
  
}

