import React, { useCallback } from "react";
import "./InputTask.css";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
// import { inputTitleState } from "../states/InputTitleState";
import { inputTitleState } from "../states/inputTitleState";
import { addTitleState } from "../states/AddTitleState";
// import { v4 as uuidv4 } from 'uuid'

const InputTask = () => {
  // const inputTitle = useRecoilValue(inputTitleState)
  // const setInputTitle = useSetRecoilState(inputTitleState)
  // 下記の1行が上記の2行のワンライナー
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const getKey = () => Math.random().toString(32).substring(2);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      console.log(inputTitle);
    },
    [inputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("");
    console.log(inputTitle);
  };

  return (
    <div className="inputField">
      <input
        type="text"
        className="inputTitle"
        onChange={onChange}
        value={inputTitle}
      />
      <button type="button" className="addButton" onClick={handleClick}>
        追加
      </button>
    </div>
  );
};

export default InputTask;
