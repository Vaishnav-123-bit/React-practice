//single selectoin
import { useState } from "react";
import data from "./data";
import "./index.css";
export default function Accoridan() {
  const [singleSelection, setSingleSelection] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSingleSelection(getCurrentId === singleSelection ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    const cpyMultiple = [...multiple];
    const finIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(finIndexOfCurrentId);

    if (finIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(finIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  console.log(singleSelection, multiple);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="acc-wrapper"
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : singleSelection === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
