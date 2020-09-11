import React, { useState } from "react";
import testas from "../../img/testas.png";

import SelectOptions from "./SelectOptions/SelectOptions";
import SelectUserInput from "../SelectUserInput/SelectUserInput.comp";

import {
  brand1,
  CarCollectByBrand,
  OptionInterface,
  getYearsmModel,
  conditionPart,
  positionPart,
  bodyType,
  steeringWheelPosition,
  steeringWheel,
  gearBox,
  colorPart,
  fuel,
} from "../Data/Data";

import classes from "./Portal.module.scss";
import SelectComp from "./SelectComp/SelectComp";

const Portal = () => {
  const [models, setModelsOptions] = useState([{ pav: "----", id: "noneID" }]);
  const [model, setModel] = useState("");
  // This method 'maybe' will be use to get value from inputs
  // const handleInput = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   key: string,
  //   value: string
  // ): { [key:string]: typeof value } => ({ [key]: value });

  // test method, to log values.

  console.log(model);

  const getModelOptions = (value: string, brands: CarCollectByBrand) => {
    brands.option.map((item: OptionInterface) =>
      item.pav === value ? setModelsOptions(item.models) : null
    );
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement>,
    // key: string,
    value: string
  ) => {
    switch (true) {
      case value === "BMW":
        console.log(brand1.option[1].models[1].pav);
        getModelOptions(value, brand1);
        break;
      case value === "Audi":
        getModelOptions(value, brand1);
        break;
      case value === brand1.option[1].models[1].pav:
        console.log(brand1.option[1].models[1].pav);
        // setModels(brand1.option[1].models[1].pav)
        break;
      default:
        console.log("Pasirinkite marke");
    }
  };

  return (
    <div className={classes.Div}>
      <div className={classes.SubDiv}>
        <h3>PRIDĖTI DETALĘ</h3>

        <ul className={classes.ListStyle}>
          <li className={classes.formGroup}>
            <label htmlFor="select auto"> Pasirinkti automobilį</label>
            <select name="" id="">
              <option value="">123</option>
            </select>

            <button>PRIDĖTI AUTOMOBILĮ</button>
          </li>
          {/* Markė */}

          <SelectOptions
            // id={brand1.id}
            onChange={handleInput}
            // keyDB={brand1.id}
            // 'make' - the key in Model
            title={brand1.title}
            option={brand1.option}
          />
          <SelectUserInput
            // id={brand1.id

            onChange={setModel}
            // keyDB={brand1.id}
            // 'make' - the key in Model

            option={models}
          />

          <SelectComp optionsArray={getYearsmModel()} />

          <SelectComp optionsArray={conditionPart.option} selectCompLabel={conditionPart.title}/>

          <SelectComp optionsArray={positionPart.option} selectCompLabel={positionPart.title}/>

          <SelectComp optionsArray={bodyType.option} selectCompLabel={bodyType.title}/>

          <SelectComp optionsArray={steeringWheelPosition.option} selectCompLabel={steeringWheelPosition.title}/>

          <SelectComp optionsArray={steeringWheel.option} selectCompLabel={steeringWheel.title}/>
          {/*
          <SelectInput title={partNameSearch.title}/>
          <SelectComponent
            id={category.id}
            onChange={handleInput}
            keyDB={category.title}
            title={category.title}
            option={category.option}
          />
          <SelectComponent
            id={subCategory.id}
            onChange={handleInput}
            keyDB={subCategory.title}
            title={subCategory.title}
            option={subCategory.option}
          />
          <SelectInput title={partName.title}/>
          <SelectComponent
            id={condition.id}
            onChange={handleInput}
            keyDB={condition.title}
            title={condition.title}
            option={condition.option}
          />
          <SelectComponent
            id={position.id}
            onChange={handleInput}
            keyDB={position.title}
            title={position.title}
            option={position.option}
          /> */}

         
        
        </ul>
        <p>Detalės kodas</p>
        <input></input>
        <p>Pridėti papildomų kodų (click)</p>
      </div>

      <div className={classes.SubDiv}>
        <ul className={classes.ListStyle}>
         <SelectComp optionsArray={gearBox.option} selectCompLabel={gearBox.title}/>
          <SelectComp optionsArray={colorPart.option} selectCompLabel={colorPart.title}/>
          <li className={classes.formGroup}>
            <label htmlFor="odometer">Rida </label>
            <input type="text" />
          </li>
          <SelectComp optionsArray={fuel.option} selectCompLabel={fuel.title}/>
          <li className={classes.formGroup}>
            <label htmlFor="engine capacity">Variklio talpa</label>
            <select name="" id="">
              <option value="">5</option>
            </select>
          </li>
          <li className={classes.formGroup}>
            <label htmlFor="engine power">Variklio galia</label>
            <select name="" id="">
              <option value="">6</option>
            </select>
          </li>
          <li className={classes.formGroup}>
            <label htmlFor="lenght">Ilgis ,cm</label>
            <input type="text" />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor="width">Plotis, cm</label>
            <input type="text" />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor="height">Aukštis, cm</label>
            <input type="text" />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor="weight"> Svoris, kg</label>
            <input type="text" />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor="price">Kaina</label>
            <input type="text" />
          </li>
        </ul>
        <p>Aprašymas</p>
        <textarea name=""></textarea>
      </div>

      {/* Image */}

      {/* <div className={classes.SubDiv}>
        <p>Pridėti nuotraukas:</p>
        <div>
          <img src={testas} alt='nuotrauka' />
        </div>
        <button>PRIDETI</button>
      </div> */}
    </div>
  );
};

export default Portal;
