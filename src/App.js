import React, { useState, useEffect } from "react";
import Editor from "./Editor";

export default function App() {
  const [html, setHtml] = useState(`<center>
  <img src="https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <h1>This Is Car</h1>
  <h2>Hello Car</h2>
</center>`);

  const [css, setCss] = useState(`h1 {
    font-family: sans-serif,
    color: blue
}
h2 {
    color: red
}
img {
    width: 200px;
    height: auto;
    border-radius: 20px;
}`);

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}<body>
          <style>${css}<style>
        <html>
      `);
    }, 250);
    return () => clearTimeout(timeOut);
  }, [html, css]);

  return (
    <>
      <main>
        <h1 className="center">Code Editor</h1>
        <h2 className="center">You can <b><big>write </big></b>and preview HTML and CSS!</h2>
        <section className="flex">
          <div className="flex-40">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
          </div>
          <div className="flex-40">
            <div>
              <h4 className="center">Output</h4>
            </div>
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="550rem"
            />
          </div>
        </section>
      </main>
    </>
  );
}
