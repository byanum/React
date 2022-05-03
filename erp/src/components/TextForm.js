import React, { useState } from "react";

// Hooks/ State: let us use class features without using the class.
// use state: set Text to
// keep it inside function
// useState => array
// whenever we want to update text: => use 'setText'

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    // console.log("uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("on change clicked");
    setText(event.target.value);
  };

  // text = "new text"; // wrong way to change the text.
  // setText("new text"); //correct way to change the text.
  const [text, setText] = useState("");

  return (
    <div>
      <h4>{props.heading}</h4>

      {/* using onchange because 'value={text]' making it to not input any text, so we use onChange event, so we can
        input values in the box and render it on the screen  (event.target.value*/}
      <div className="form-group">
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="btn btn-primary" onClick={handleUpperCaseClick}>
        Uppercase
      </div>
    </div>
  );
}
