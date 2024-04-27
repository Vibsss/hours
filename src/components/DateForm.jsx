import { useState } from "react";

export default function DateForm(props) {
  const [inputString, setInputString] = useState("");
  const [totalDaysTillNow, setTotalDaysTillNow] = useState();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [laggingHours, setLaggingHours] = useState(0);
  const [laggingMinutes, setLaggingMinutes] = useState(0);
  const [isAhead, setIsAhead] = useState(true);
  const [dateImage, setDateImage] = useState("");
  const [text1, setText1] = useState("");
  const calculateHandler = () => {
    if (!inputString || !totalDaysTillNow) {
      alert("Insert value in all inputs");
      return;
    }
    let arr = inputString.replaceAll(" ", "").replaceAll("\t", "").split("min");
    let hours = 0;
    let minutes = 0;
    let hoursLagging = 0;
    let minutesLagging = 0;

    arr.forEach((el) => {
      let tempString = el.split("hrs,");
      hours += +tempString[0];
      if (tempString[1]) minutes += +tempString[1];
    });

    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;

    setHours(hours);
    setMinutes(minutes);
    let totalExpectedHours = totalDaysTillNow * 8;
    if (hours >= totalExpectedHours) {
      hoursLagging = hours - totalExpectedHours;
      minutesLagging = minutes;
      document.body.style.backgroundColor = "#063806";
      setIsAhead(true);
      setText1("Ahead");
      setDateImage(
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDExbjQ2Z2E1anoydnVkcTJ6a3B6OTJ6cTJ6N2ZieGd6eHJoZ28yMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif"
      );
    } else {
      hoursLagging = totalExpectedHours - hours - 1;
      minutesLagging = 60 - minutes;
      setIsAhead(false);
      document.body.style.backgroundColor = "#650808";
      setText1("Lagging");
      setDateImage(
        "https://media1.tenor.com/m/RFZsuBVxm3QAAAAC/bh187-minions.gif"
      );
    }

    setLaggingHours(hoursLagging);
    setLaggingMinutes(minutesLagging);
  };
  return (
    <>
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <div className="my-container-new">
          <h2
            style={{
              color: props.mode === "light" ? "#777777" : "#ffcd39",
              marginTop: "10px",
            }}
          >
            {props.title2}
          </h2>
          <div className="my-form">
            <div className="my-form-group">
              <textarea
                className="my-input form-control"
                type="text"
                name="inputString"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                rows="5"
                width="80%"
              />
            </div>
            <div className="my-form-group">
              <label
                className="my-input-label"
                style={{
                  padding: "10px 0px",
                }}
              >
                Total Working Days
              </label>
              <input
                className="my-input form-control"
                type="text"
                name="totalDaysTillNow"
                value={totalDaysTillNow}
                onChange={(e) => setTotalDaysTillNow(e.target.value)}
              />
            </div>
            <div className="my-form-actions">
              <button className="button-82-pushable" onClick={calculateHandler}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Calculate</span>
              </button>
            </div>
          </div>
          <img src={dateImage} alt="" />
          <h2 style={{ color: props.mode === "light" ? "#777777" : "#ffcd39" }}>
            Hours Summary
          </h2>
          <div>
            <p style={{ color: "#777777" }}>
              Total hours till yesterday: {hours} Hrs : {minutes} mins
            </p>
            <p style={{ color: "#777777" }}>
              {text1}
              <span className={isAhead ? "ahead" : "lagging"}>
                {laggingHours !== 0 ? `${laggingHours} Hrs` : null}
                {laggingHours !== 0 && laggingMinutes !== 0 ? `:` : ""}
                {laggingMinutes !== 0 ? `${laggingMinutes} mins` : null}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
