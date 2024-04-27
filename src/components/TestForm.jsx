import React, { useState } from "react";

export default function TestForm(props) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [image, setImage] = useState("");
  const handleOnChange1 = (event) => {
    setText1(event.target.value);
    let val = event.target.value;
    let str = val.replace(/\s*,\s*/g, ",");
    str = str.replace(/\s+/g, "");
    str = str.split("min").join("min ");
    const myArray = str.split(" ");
    var hours = 0;
    var minutes = 0;
    var remminutes = 0;
    myArray.map((cell, i) => {
      if (cell !== "0min") {
        if (cell !== "") {
          remminutes += 8;
          var arr = cell.split(",");
          var split = arr[0].replace("hrs", "");
          hours += parseInt(split);
          console.log(`split: ${split}`);
          var split1 = arr[1].replace("min", "");
          minutes += parseInt(split1);
          console.log(`split1: ${split1}`);
        }
      }
    });
    var minHours = Math.floor(minutes / 60);
    var minminutes = minutes % 60;
    var newHours = minHours + hours;
    var remHours = newHours - remminutes;
    if (remHours < 0) {
      console.log("condition");
      let negremHours = Math.abs(remHours);
      let negremMinutes = 60 - minminutes;
      negremHours -= 1;
      document.body.style.backgroundColor = "#650808";
      setText2(
        `Lagging Behind => ${negremHours} Hours : ${negremMinutes} minutes`
      );
      setImage("https://media1.tenor.com/m/RFZsuBVxm3QAAAAC/bh187-minions.gif");
    } else {
      document.body.style.backgroundColor = "#063806";
      setText2(`Ahead By => ${remHours} Hours : ${minminutes} minutes`);
      setImage(
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDExbjQ2Z2E1anoydnVkcTJ6a3B6OTJ6cTJ6N2ZieGd6eHJoZ28yMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif"
      );
    }
  };
  return (
    <>
      <div className="secondBox">
        <h2
          style={{
            color: props.mode === "light" ? "#777777" : "#ffcd39",
            marginTop: "10px",
          }}
        >
          {props.title2}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange1}
            value={text1}
            id="mybox1"
            rows="8"
          ></textarea>
        </div>
        <img src={image} alt="" />
        <h2 style={{ color: props.mode === "light" ? "#777777" : "#ffcd39" }}>
          Hours Summary
        </h2>
        <p style={{ color: props.mode === "light" ? "white" : "white" }}>
          {text2}
        </p>
      </div>
    </>
  );
}
