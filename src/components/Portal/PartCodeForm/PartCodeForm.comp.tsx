import React from 'react';
import classes from './PartCodeForm.module.scss';

import { PartCode } from '../Portal';

interface Props {
  inputList: PartCode[];
  setInputList: Function;
  setCodes: Function;
}

interface State extends PartCode {}

const PartCodeForm: React.FC<Props> = ({ inputList, setInputList, setCodes }) => {
  const handleInputChange = (
    event: { target: { id: string; value: string } }
  ) => {
    const { id, value } = event.target;
    const list = [...inputList];
    list.forEach((item) => {
      if (item.id === id) {
        item.value = value;
      }
    });
    console.log(list);
    setInputList(list);
  };

  // handle click event of the 'Pridėti dar vieną kodą' button
  const handleAddClick = () => {
    setInputList((prevState: State[]) => {
      console.log(prevState);
      const date = new Date();
      const stateCopy = [...prevState];
      const newCodeItem = {
        value: '',
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
  };

  return (
    <div>
      
      {inputList.map((x, index) => {
        return (
          <div className={classes.formGroup} key={index}>
            <input
              className={classes.input}
              placeholder={'Detalės kodas (-ai)'}
              
              maxLength={40}
              id={x.id}
              name='partCode'
              value={x.value}
              onChange={(event) => handleInputChange(event)}
            ></input>
            <div>
              {inputList.length !== 1 && (
                <button
                  className={classes.partCodeButton}
                  onClick={() => handleRemoveClick(x.id)}
                >
                  - Pašalinti
                </button>
              )}
              <br />
              {inputList.length - 1 === index && (
                <button className={classes.partCodeButton} onClick={handleAddClick}>+ Pridėti papildomą kodą</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PartCodeForm;
