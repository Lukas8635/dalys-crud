import React, { useState, useEffect } from "react";
import testas from "../../img/testas.png";

import SelectOptions from "./SelectOptions/SelectOptions";
import SelectUserInput from "../SelectUserInput/SelectUserInput.comp";

import {
  brands,
  CarCollectByBrand,
  OptionInterface,
  EngineType,
  conditionPart,
  positionPart,
  bodyType,
  steeringWheelPosition,
  steeringWheel,
  gearBox,
  colorPart,
  fuel,
  ModelType,
} from "../Data/Data";

import classes from "./Portal.module.scss";
import SelectComp from "./SelectComp/SelectComp";
import SelectInput from "./SelectInput/SelectInput";

const Portal = () => {
  const [models, setModelsOptions] = useState([
    { title: "----", id: "noneID" },
  ]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState<ModelType | never[]>([]);
  const [year, setYear] = useState("");

  console.log(brand);

  useEffect(() => {
    if (!!brand) {
      console.log(brands);
      let indexTest = 0;
      let value = brands.options.filter((item: any, index: number) =>
        item.id === brand ? index : null
      );
      let testA = brands.options[indexTest].models;
      // setModel();
      let testB = testA[0];
      // console.log(testB.model as ModelType);
    }
    // return () => {
    //   cleanup
    // }
  }, [brand]);

  // This method 'maybe' will be use to get value from inputs
  // const handleInput = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   key: string,
  //   value: string
  // ): { [key:string]: typeof value } => ({ [key]: value });

  // test method, to log values.

  const getModelOptions = (value: string, brands: CarCollectByBrand) => {
    brands.option.map((item: OptionInterface) =>
      item.title === value ? setModelsOptions(item.models) : null
    );
  };

  const getYearsModel = () => {
    const date = new Date();
    const option = date.getFullYear();
    let yearsArray = [];
    for (let i = 0; i < 71; i++) {
      // yearsArray.push(option - i);
      const value = option - i;
      yearsArray.push({ title: value.toString(), id: value.toString() });
    }
    return yearsArray;
  };

  // const handleInput = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   // key: string,
  //   value: string
  // ) => {
  //   switch (true) {
  //     case value === 'BMW':
  //       console.log(brands.option[1].models[1].title);
  //       getModelOptions(value, brands);
  //       break;
  //     case value === 'Audi':
  //       getModelOptions(value, brands);
  //       break;
  //     case value === brands.option[1].models[1].title:
  //       console.log(brands.option[1].models[1].title);
  //       // setModels(brands.option[1].models[1].title)
  //       break;
  //     default:
  //       console.log('Pasirinkite marke');
  //   }
  // };
  // const getValidation =() =>{
  //   if(String !== typeof Number){
  //     console.log('veikia');
  //   }
  // }

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

          <SelectComp
            options={brands.options}
            handler={setBrand}
            label={"Gamintojas"}
          />

          {/* <SelectComp /> */}

          {/* <SelectOptions
            // id={brands.id}
            onChange={handleInput}
            // keyDB={brands.id}
            // 'make' - the key in Model
            title={brands.title}
            options={brands.option}
          /> */}
          {/* <SelectComp options={brands.option} /> */}
          {/* <SelectUserInput
            // id={brands.id

            onChange={setModel}
            // keyDB={brands.id}
            // 'make' - the key in Model

            options={models}
          /> */}

          <SelectComp
            options={getYearsModel()}
            label={"Metai"}
            handler={setYear}
          />

          <SelectComp
            options={conditionPart.option}
            label={conditionPart.title}
          />

          <SelectComp
            options={positionPart.option}
            label={positionPart.title}
          />

          <SelectComp options={bodyType.option} label={bodyType.title} />

          <SelectComp
            options={steeringWheelPosition.option}
            label={steeringWheelPosition.title}
          />

          <SelectComp
            options={steeringWheel.option}
            label={steeringWheel.title}
          />
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
          <SelectComp options={gearBox.option} label={gearBox.title} />
          <SelectComp options={colorPart.option} label={colorPart.title} />
          <SelectInput title={"Rida"} onlyNumbers={false}/>
          <SelectComp options={fuel.option} label={fuel.title} />
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

          <SelectInput title={"Ilgis, cm"} />

          <SelectInput title={"Plotis, cm"} />

          <SelectInput title={"Aukštis, cm"} />

          <SelectInput title={"Svoris,kg"} />

          <SelectInput title={"Kaina"} />
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
