import React, { useState } from "react";

interface Test123 {
  partCode: string;
  name: string;
  id: string;
  value: string;
}

const CodeInput = () => {
  const test123: Test123 = {
    partCode: "",
    name: "pirmas",
    id: "1",
    value: "first",
  };
  const [inputList, setInputList] = useState<Test123[]>([test123]);

  // handle input change
  const handleInputChange = (
    e: { target: { name: any; value: any } },
    index: React.Key
  ) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[name] = value;
    setInputList(list);
  };

  // handle click event of the 'Pridėti dar vieną kodą' button
  const handleAddClick = () => {
    setInputList((prevState) => {
      const date = new Date();
      const stateCopy = [...prevState];

      const newCodeItem = {
        ...test123,
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
      <label htmlFor="">Detalės kodas</label>
      {inputList.map((x, id) => {
        return (
          <div className="box" key={id}>
            <input
              id={x.id}
              name="partCode"
              placeholder="Enter Code "
              onChange={(e) => handleInputChange(e, id)}
            ></input>

            <div>
              {/* <button onClick={() => handleRemoveClick(x.id)}>Pašalinti</button> */}
              {inputList.length !== 1 && (
                <button
                  className="mr10"
                  onClick={() => handleRemoveClick(x.id)}
                >
                  Remove
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
