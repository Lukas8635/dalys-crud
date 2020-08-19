import React, { useState } from 'react';
import testas from '../../img/testas.png';

import SelectOptions from './SelectOptions/SelectOptions';
import SelectUserInput from '../SelectUserInput/SelectUserInput.comp';

import {
  brands,
  CarCollectByBrand,
  OptionInterface,
  conditionPart,
  positionPart,
  bodyType,
  steeringWheelPosition,
  steeringWheel,
  gearBox,
  colorPart,
  fuel,
} from '../Data/Data';

import classes from './Portal.module.scss';
import SelectComp from './SelectComp/SelectComp';

const Portal = () => {
  const [models, setModelsOptions] = useState([
    { title: '----', id: 'noneID' },
  ]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  console.log(brand);

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

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement>,
    // key: string,
    value: string
  ) => {
    switch (true) {
      case value === 'BMW':
        console.log(brands.option[1].models[1].title);
        getModelOptions(value, brands);
        break;
      case value === 'Audi':
        getModelOptions(value, brands);
        break;
      case value === brands.option[1].models[1].title:
        console.log(brands.option[1].models[1].title);
        // setModels(brands.option[1].models[1].title)
        break;
      default:
        console.log('Pasirinkite marke');
    }
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
          {/* Markė */}

          <SelectComp
            optionsArray={brands.option}
            handler={setBrand}
            label={'Gamintojas'}
          />

          <SelectComp 
            
          
          />

          {/* <SelectOptions
            // id={brands.id}
            onChange={handleInput}
            // keyDB={brands.id}
            // 'make' - the key in Model
            title={brands.title}
            options={brands.option}
          /> */}
          {/* <SelectComp optionsArray={brands.option} /> */}
          <SelectUserInput
            // id={brands.id

            onChange={setModel}
            // keyDB={brands.id}
            // 'make' - the key in Model

            options={models}
          />

          <SelectComp
            optionsArray={getYearsModel()}
            label={'Metai'}
            handler={setYear}
          />

          <SelectComp
            optionsArray={conditionPart.option}
            label={conditionPart.title}
          />

          <SelectComp
            optionsArray={positionPart.option}
            label={positionPart.title}
          />

          <SelectComp optionsArray={bodyType.option} label={bodyType.title} />

          <SelectComp
            optionsArray={steeringWheelPosition.option}
            label={steeringWheelPosition.title}
          />

          <SelectComp
            optionsArray={steeringWheel.option}
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
          <SelectComp optionsArray={gearBox.option} label={gearBox.title} />
          <SelectComp optionsArray={colorPart.option} label={colorPart.title} />
          <li className={classes.formGroup}>
            <label htmlFor='odometer'>Rida </label>
            <input type='text' />
          </li>
          <SelectComp optionsArray={fuel.option} label={fuel.title} />
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
            <input type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='width'>Plotis, cm</label>
            <input type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='height'>Aukštis, cm</label>
            <input type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='weight'> Svoris, kg</label>
            <input type='text' />
          </li>
          <li className={classes.formGroup}>
            <label htmlFor='price'>Kaina</label>
            <input type='text' />
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
