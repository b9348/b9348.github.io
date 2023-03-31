import React from "react";
import { useState, useRef } from "react";
import "./click.css";

export default function Click() {
  const [state, setState] = useState(false);
  const ipt = useRef();
  const clicked = () => {
    if (ipt.current.value == "我已阅读本站所有说明并遇到了意料之外的问题") {
      setState(true);
    }
  };

  return (
    <div className="wrap">
      <p>
        为防止重复问题过多，请在下方<b>输入答案</b>，并<b>点击确认</b>按钮来获得群号。不要输入任何空格/标点符号。
        <br /> 
      </p>
      <input
        className="demo"
        onCopy={(e) => e.preventDefault()}
        value={
          "答案：我已阅读本站所有说明并遇到了意料之外的问题"
        }
      ></input>
      <p className="ppp">群号：{state ? 154428332 : "填入答案前不显示"}</p>
      <input
        ref={ipt}
        className="ipt"
        type="text"
        placeholder="请在此输入"
        onPaste={(e) => e.preventDefault()}
      /> 
      <input className="btn" type="button" onClick={clicked} value={"确认"} />
    </div>
  );
}
