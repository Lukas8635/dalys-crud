import React, { useState, useEffect } from 'react';

import SelectComp, { Option } from './SelectComp/SelectComp';
import SelectUserInput from '../SelectUserInput/SelectUserInput.comp';

import { mockState } from '../../store/categories';
import {
  brands,
  conditionPart,
  positionPart,
  bodyType,
  steeringWheelPosition,
  drivenWheel,
  gearBox,
  colorPart,
  fuel,
  Brand,
} from '../Data/Data';

import testas from '../../img/testas.png';
import classes from './Portal.module.scss';
import Search from '../search/search.comp';

const Portal = () => {
  const [modelsOptions, setModelsOptions] = useState<Option[] | never[]>([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [partContidion, setPartContidion] = useState('');
  const [carBodyType, setCarBodyType] = useState('');
  const [wheelPosition, setWheelPosition] = useState('');
  const [drivenWhl, setDrivenWhl] = useState('');
  const [gearBx, setGearBx] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (brand) {
      let indexTest = 0;
      brands.options.filter((item: Brand, index: number) =>
        item.id === brand ? (indexTest = index) : null
      );
      let options = brands.options[indexTest].models.map((item) => {
        const option = { title: item.model, id: item.id };
        return option;
      });
      setModelsOptions(options);
    }
  }, [brand]);

  const setYears = () => {
    const date = new Date();
    const year = date.getFullYear();
    const yearsArray = [];
    for (let i = 0; i < 71; i++) {
      const yearCount = year - i;
      yearsArray.push({
        title: yearCount.toString(),
        id: yearCount.toString(),
      });
    }
    return yearsArray;
  };

  return (
    <div className={classes.Div}>
      <div className={classes.SubDiv}>
        <h3>PRIDĖTI DETALĘ</h3>

        <ul className={classes.ListStyle}>
          <li className={classes.formGroup}>
            <label htmlFor='select auto'> Pasirinkti automobilį</label>
            <select name='' id=''>
              <option value=''>123</option>
            </select>

            <button>PRIDĖTI AUTOMOBILĮ</button>
          </li>
          <SelectComp
            options={brands.options}
            handler={setBrand}
            label={'Gamintojas'}
          />
          <SelectComp
            options={modelsOptions}
            label={'Modelis'}
            handler={setModel}
          />
          <SelectComp options={setYears()} label={'Metai'} handler={setYear} />
          <Search
            label={'Detalės pavadinimo paiešką'}
            setSearchQuery={setSearchQuery}
          />
          <SelectComp
            options={conditionPart.option}
            label={conditionPart.title}
            handler={setCondition}
          />
          <SelectComp
            options={positionPart.option}
            label={positionPart.title}
            handler={setPartContidion}
          />
          <SelectComp
            options={bodyType.option}
            label={bodyType.title}
            handler={setCarBodyType}
          />
          <SelectComp
            options={steeringWheelPosition.option}
            label={steeringWheelPosition.title}
            handler={setWheelPosition}
          />
          <SelectComp
            options={drivenWheel.option}
            label={drivenWheel.title}
            handler={setDrivenWhl}
          />
        </ul>
        <p>Detalės kodas</p>
        <input></input>
        <p>Pridėti papildomų kodų (click)</p>
      </div>
      <div className={classes.SubDiv}>
        <ul className={classes.ListStyle}>
          <SelectComp
            options={gearBox.option}
            label={gearBox.title}
            handler={setGearBx}
          />
          <SelectComp
            options={colorPart.option}
            label={colorPart.title}
            handler={setColor}
          />
          <li className={classes.formGroup}>
            <label htmlFor='odometer'>Rida </label>
            <input className={classes.input} type='text' />
          </li>
          <SelectComp
            options={fuel.option}
            label={fuel.title}
            handler={setFuelType}
          />
          <li className={classes.formGroup}>
            <label htmlFor='engine capacity'>Variklio talpa</label>
            <select name='' id=''>
              <option value=''>5</option>
            </select>
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='engine power'>Variklio galia</label>
            <select name='' id=''>
              <option value=''>6</option>
            </select>
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='lenght'>Ilgis ,cm</label>
            <input className={classes.input} type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='width'>Plotis, cm</label>
            <input className={classes.input} type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='height'>Aukštis, cm</label>
            <input className={classes.input} type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='weight'> Svoris, kg</label>
            <input className={classes.input} type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='price'>Kaina</label>
            <input className={classes.input} type='text' />
          </li>
        </ul>
        <p>Aprašymas</p>
        <textarea name=''></textarea>
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
