import React, { useState } from "react";
import testas from "../../img/testas.png";
import classes from "./Portal.module.scss";
import SelectComponent from "./SelectComponent/SelectComponent";
import {
  category,
  subCategory,
  condition,
  position,
  partNameSearch,
  partName,
  brand1,
  CarCollectByBrand,
} from "../Data/Data";
import SelectInput from "./SelectInput/SelectInput";

const Portal = () => {
  // This method 'maybe' will be use to get value from inputs
  // const handleInput = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   key: string,
  //   value: string
  // ): { [key:string]: typeof value } => ({ [key]: value });

  // test method, to log values.
  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string,
    value: string
  ) => {
    // console.log({ [key]: value });
    switch (true) {
      case value === "BMW":
        console.log(brand1.option[1].models);
        break;
      case value === "Audi":
        console.log(brand1.option[2].models);
        break;
      default:
        console.log("Pasirinkite marke");
    }
  };
  //  const[brandsModel, setBrandsModel] = useState<CarCollectByBrand[]>([
  //    brand1.option
  //  ])
  //  const setModels = () =>{
  //    setBrandsModel((prevState))=>{
  //      if(brand1.option[1].id === "bmwId"){
  //        console.log(brand1.option[1].models);

  //      }
  //    }
  //  }

   
  //  const setCarModel= ()=>{
  //    setBrandsModel (=>{
       
  //      const newCarModel ={
  //        ...brand1.option
  //      };
       
  //      return newCarModel
  //    });
  //  }
   
  /* 
    Fetch to DB

    (state) => fetch(post-method, state) 


   */

  return (
    <div className={classes.Div}>
      <div className={classes.SubDiv}>
        <h3>PRIDĖTI DETALĘ</h3>

        <ul className={classes.ListStyle}>
          <li>
            <label htmlFor="select auto"> Pasirinkti automobilį</label>
            <select name="" id="">
              <option value="">123</option>
            </select>

            <button>PRIDĖTI AUTOMOBILĮ</button>
          </li>
          {/* Markė */}

          <SelectComponent
            id={brand1.id}
            onChange={handleInput}
            keyDB={brand1.id}
            // 'make' - the key in Model
            title={brand1.title}
            option={brand1.option}
          />
          <SelectComponent
            id={brand1.id}
            
            keyDB={brand1.id}
            // 'make' - the key in Model
            onChange={handleInput}
            option={brand1.option}
          />
          {/* <li>
            <label htmlFor="build year">Pagaminimo metai</label>
            <select name="" id="">
              <option value=""> 3</option>
            </select>
          </li>
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
          <li>
            <label htmlFor="engine">variklis</label>
            <select name="" id="">
              <option value="">10</option>
            </select>
          </li>
          <li>
            <label htmlFor="body type">Kėbulo tipas </label>
            <select name="" id="">
              <option value="">11</option>
            </select>
          </li>
          <li>
            <label htmlFor="steering wheel position">Vairo padėtis</label>
            <select name="" id="">
              <option value="">12</option>
            </select>
          </li>
          <li>
            <label htmlFor="driving wheel">Varomieji ratai</label>
            <select name="" id="">
              <option value="">13</option>
            </select>
          </li>
        </ul>
        <p>Detalės kodas</p>
        <input></input>
        <p>Pridėti papildomų kodų (click)</p>
      </div>

      <div className={classes.SubDiv}>
        <ul className={classes.ListStyle}>
          <li>
            <label htmlFor="gear box">Pavarų dežė</label>
            <select name="" id="">
              <option value="">1</option>
            </select>
          </li>
          <li>
            <label htmlFor="color">Spalva</label>
            <select name="" id="">
              <option value="">2</option>
            </select>
          </li>
          <li>
            <label htmlFor="odometer">Rida </label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="fuel">Kuras </label>
            <select name="" id="">
              <option value="">4</option>
            </select>
          </li>
          <li>
            <label htmlFor="engine capacity">Variklio talpa</label>
            <select name="" id="">
              <option value="">5</option>
            </select>
          </li>
          <li>
            <label htmlFor="engine power">Variklio galia</label>
            <select name="" id="">
              <option value="">6</option>
            </select>
          </li>
          <li>
            <label htmlFor="lenght">Ilgis ,cm</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="width">Plotis, cm</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="height">Aukštis, cm</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="weight"> Svoris, kg</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="price">Kaina</label>
            <input type="text" />
          </li>
        </ul>
        <p>Aprašymas</p>
        <textarea name=""></textarea>
      </div>

      <div className={classes.SubDiv}>
        <p>Pridėti nuotraukas:</p>
        <div>
          <img src={testas} alt="nuotrauka" />
        </div>
        <button>PRIDETI</button>
      </div>
    </div>
  );
};

export default Portal;
