import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  let { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div>
      <div>
        <h4 className="center">{displayName}</h4>
      </div>
      <div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "material",
          }}
        />
      </div>
    </div>
  );
}
