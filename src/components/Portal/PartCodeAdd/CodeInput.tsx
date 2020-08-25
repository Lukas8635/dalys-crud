import React, { useState } from "react";
import classes from "./CodeInput.module.scss";

interface InitialStateInterface {
  partCode: string;
  name: string;
  id: string;
  value: string;
}

const CodeInput = () => {
  const initianState: InitialStateInterface = {
    partCode: "",
    name: "pirmas",
    id: "1",
    value: "",
  };
  const [inputList, setInputList] = useState<InitialStateInterface[]>([
    initianState,
  ]);
  // handle input change
  const handleInputChange = (
    event: { target: { id: string; value: string } },
    index: React.Key
  ) => {
    const { id, value } = event.target;
    const list = [...inputList];
    list.forEach((item) => {
      if (item.id === id) {
        item.value = value;
      }
    });
    setInputList(list);
  };

  const checkValid = () => {
    if (initianState.value == ''){
      console.log('irasyti koda');
    }
  }

  // handle click event of the 'Pridėti dar vieną kodą' button
  const handleAddClick = () => {
    setInputList((prevState) => {
      const date = new Date();
      const stateCopy = [...prevState];
      const newCodeItem = {
        ...initianState,
        id: date.getTime().toString(),
      };
      stateCopy.push(newCodeItem);
      return stateCopy;
    });
  };
  // handle click event of the 'Pašalinti' button
  const handleRemoveClick = (id: string) => {
    const updatedCodePart = inputList.filter((item) => {
      return item.id !== id;
    });
    setInputList(updatedCodePart);
    console.log(updatedCodePart);
  };
  return (
    <div>
      <label htmlFor="">Detalės kodas *</label>
      {inputList.map((x, id) => {
        return (
          <div className={classes.formGroup} key={id}>
            <input
            onClick={checkValid}
              className={classes.input}
              maxLength={40}
              id={x.id}
              name="partCode"
              value={x.value}
              onChange={(event) => handleInputChange(event, id)}
            ></input>
            <div>
              {inputList.length !== 1 && (
                <button
                  className={classes.button}
                  onClick={() => handleRemoveClick(x.id)}
                >
                  Pašalinti
                </button>
              )}
              <br />
              {inputList.length - 1 === id && (
                <button onClick={handleAddClick}>Pridėti dar vieną kodą</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CodeInput;
