import React, { useCallback } from "react";
import "./InputTask.css";
import { inputTitleState } from "../states/inputTitleState";
import { useRecoilState } from "recoil";
import { addTitleState } from "../states/addTitleState";

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [inputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("");
  };

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} value={inputTitle}/>
      <button type="button" className="addButton" onClick={handleClick}>
        追加
      </button>
    </div>
  );
};

export default InputTask;
