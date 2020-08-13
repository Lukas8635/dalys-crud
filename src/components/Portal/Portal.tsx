import React from "react";
import testas from "../../img/testas.png";
import classes from "./Portal.module.scss";
import SelectComponent from "./SelectComponent/SelectComponent";
import {
  brand,
  model,
  category,
  subCategory,
  condition,
  position,
  partNameSearch,
  partName,
} from "../Data/Data";
import SelectInput from "./SelectInput/SelectInput";

const Portal = () => {
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
          <SelectComponent
            id={brand.id}
            title={brand.title}
            option={brand.option}
          />
          <SelectComponent
            id={model.id}
            title={model.title}
            option={model.option}
          />

          <li>
            <label htmlFor="build year">Pagaminimo metai</label>
            <select name="" id="">
              <option value=""> 3</option>
            </select>
          </li>
          <SelectInput title={partNameSearch.title}/>
          <SelectComponent
            id={category.id}
            title={category.title}
            option={category.option}
          />
          <SelectComponent
            id={subCategory.id}
            title={subCategory.title}
            option={subCategory.option}
          />
          <SelectInput title={partName.title}/>
          <SelectComponent
            id={condition.id}
            title={condition.title}
            option={condition.option}
          />
          <SelectComponent
            id={position.id}
            title={position.title}
            option={position.option}
          />
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
