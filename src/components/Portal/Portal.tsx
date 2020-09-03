import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addValue,
  addDimensions,
  addCarDetails,
  setPartCodesAction,
} from '../../store/actions/addPartActions';

import SelectComp, { Option } from './SelectComp/SelectComp';
import Input from './Input/Input.comp';
import PartCodeForm from './PartCodeForm/PartCodeForm.comp';
import Button from '../Button/Button';
import Search from '../Search/Search.comp';
import Upload from '../Upload/Upload.comp';

import { mockState, DataModal } from '../../store/categories';
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
  ModelType,
  dismantleCar,
} from '../Data/Data';

import classes from './Portal.module.scss';

export type PartCode = { id: string; value: string };

const Portal = () => {
  // Regular expression used to check user input validation. It is passed to Input component at prop
  const regEx = /^[0-9\b]+$/;

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log(state);

  const [dismantleCars, setDismantleCars] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('');
  const [mileage, setMileage] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [enginePower, setEnginePower] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLenght] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');

  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [position, setPosition] = useState('');
  const [carBodyType, setCarBodyType] = useState('');
  const [wheelPosition, setWheelPosition] = useState('');
  const [drivenWhl, setDrivenWhl] = useState('');
  const [transmission, setTransmission] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [description, setDescription] = useState('');

  // State to manage user selection in Select elements and to render options in Select elements by user selected Options
  // Brand and Models
  const [brand, setBrand] = useState('');
  // Models - Options for Models. Added when use selects Car Brand
  const [modelsOptions, setModelsOptions] = useState<Option[] | never[]>([]);
  const [model, setModel] = useState('');

  // Selected Category
  const [selectedCat, setSelectedCat] = useState('');
  // subCategories - Options for SubCatagories. Added when user select Category
  const [subCategories, setSubCategories] = useState<DataModal[] | never[]>([]);
  // Selected SubCategory
  const [slctSubCateg, setSlctSubCateg] = useState('');
  // Part Names Options - Options for partName. Added when user selects SubCategory
  const [partNamesOptions, setPartNamesOptions] = useState<
    DataModal[] | never[]
  >([]);
  const [selectedPartName, setSelectedPart] = useState('');

  // Part Codes - used to store Part Codes and to render input elements in PartCodeForm component.
  const [partCodes, setPartCodes] = useState<PartCode[]>([
    { id: '1', value: '' },
  ]);

  // Uploaded images
  const [files, setFiles] = useState<string[]>([]);

  /**
   *  Checks if items in PartCodes value properties are not empty, returns value to new Array
   */
  const getPartCodes = (): string[] =>
    partCodes.filter((item) => item.value !== '').map((item) => item.value);

  const createData = () => {
    const partCodes = getPartCodes();
    return {
      // category: selectedCat,
      // subCategory: slctSubCateg,
      partName: selectedPartName,
      codes: [...partCodes],
      car: {
        make: brand,
        model: model,
        engine: 'V8',
        engineCapacity: engineCapacity,
        enginePower: {
          kWh: 260,
          hp: 349,
        },
        fuel: fuelType,
        carProductionYear: year,
        steeringWheelPosition: wheelPosition,
        transmission: transmission,
        bodyTape: carBodyType,
        drivingWheels: drivenWhl,
        carColor: color,
      },
      name: name,
      position: position,
      description: description,
      price: price,
      photoUrls: [...files],
      condition: condition,
      status: 'available',
      odometer: mileage,
      dimensions: {
        width: width,
        length: length,
        height: height,
      },
      weight: weight,
    };
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const data = createData();
    fetch('http://localhost:8000/part', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  /**
    sets options with selected brand models
  */
  useEffect(() => {
    if (brand && brand !== '0') {
      let index = 0;
      // finds selected brand
      brands.options.filter((item: Brand, i: number) =>
        item.id === brand ? (index = i) : null
      );
      // gets selected brands models and creates array of options
      const options: Option[] = brands.options[index].models.map(
        (item: ModelType) => ({
          title: item.model,
          id: item.id,
        })
      );
      setModelsOptions(options);
    } else {
      // if none brand selected (----) sets models options to empty array
      setModelsOptions([]);
    }
  }, [brand]);
  /**
    sets SubCategory options when Category is selected
  */
  useEffect(() => {
    if (selectedCat) {
      let subCat: DataModal[] = mockState.filter(
        (item: DataModal) => item.id === selectedCat
      );
      if (subCat.length) {
        setSubCategories(subCat[0].subOptions);
        setPartNamesOptions([]);
      } else {
        // clears options for SubCategory and Part Names
        setSubCategories([]);
        setPartNamesOptions([]);
      }
    }
  }, [selectedCat]);
  /**
     sets Part name options when SubCategory is selected
   */
  useEffect(() => {
    if (slctSubCateg) {
      let partName: DataModal[] = subCategories.filter(
        (item: DataModal) => item.id === slctSubCateg
      );
      return partName.length
        ? setPartNamesOptions(partName[0].subOptions)
        : setPartNamesOptions([]);
    }
  }, [slctSubCateg]);

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

  const handleImgUpload = (file: FileList) => {
    if (!file?.length) {
      return;
    }
    const newState = [...files];
    newState.push(URL.createObjectURL(file[0]));
    setFiles(newState);
  };

  return (
    <div className={classes.portal}>
      <div className={classes.subDiv}>
        <h3>PRIDĖTI DETALĘ</h3>

        <form className={classes.listStyle}>
          <div className={classes.formGroup}>
            <SelectComp
              options={dismantleCar.options}
              label={dismantleCar.title}
              handler={setDismantleCars}
            />

            <Button>PRIDĖTI AUTOMOBILĮ</Button>
          </div>
          <Input
            title={'Detalės pavadinimas'}
            keyName={'partName'}
            setValue={(name: string, value: string) =>
              dispatch(addValue({ key: name, value: value }))
            }
            isRequired={true}
          />
          <SelectComp
            options={brands.options}
            label={'Gamintojas'}
            keyName={'make'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <SelectComp
            options={modelsOptions}
            label={'Modelis'}
            keyName={'model'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <SelectComp
            options={setYears()}
            label={'Metai'}
            keyName={'carProductionYear'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <Search
            label={'Detalės pavadinimo paieška'}
            setSearchQuery={setSearchQuery}
          />
          <SelectComp
            required={true}
            options={mockState}
            label={'Kategorija *'}
            handler={setSelectedCat}
          />
          <SelectComp
            required={true}
            options={subCategories}
            label={'Subkategorija *'}
            handler={setSlctSubCateg}
          />
          <SelectComp
            required={true}
            options={partNamesOptions}
            label={'Pavadinimas *'}
            handler={setSelectedPart}
          />
          <SelectComp
            required={true}
            options={conditionPart.option}
            label={conditionPart.title}
            keyName={'condition'}
            handler={(name: string, value: string) =>
              dispatch(addValue({ key: name, value: value }))
            }
          />
          <SelectComp
            options={positionPart.option}
            label={positionPart.title}
            keyName={'position'}
            handler={(name: string, value: string) =>
              dispatch(addValue({ key: name, value: value }))
            }
          />
          <SelectComp
            options={bodyType.option}
            label={bodyType.title}
            keyName={'bodyTape'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <SelectComp
            options={steeringWheelPosition.option}
            label={steeringWheelPosition.title}
            keyName={'steeringWheelPosition'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <SelectComp
            options={drivenWheel.option}
            label={drivenWheel.title}
            keyName={'drivenWheel'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
        </form>
        <PartCodeForm
          inputList={partCodes}
          setCodes={(value: []) => dispatch(setPartCodesAction(value))}
          setInputList={setPartCodes}
        />
      </div>
      <div className={classes.subDiv}>
        <div className={classes.listStyle}>
          <SelectComp
            options={gearBox.option}
            label={gearBox.title}
            keyName={'transmission'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <SelectComp
            options={colorPart.option}
            label={colorPart.title}
            keyName={'carColor'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <div className={classes.formGroup}>
            <Input
              title={'Rida'}
              regExp={regEx}
              keyName={'odometer'}
              setValue={(name: string, value: string) =>
                dispatch(addValue({ key: name, value: value }))
              }
            />
          </div>
          <SelectComp
            options={fuel.option}
            label={fuel.title}
            keyName={'fuel'}
            handler={(name: string, value: string) =>
              dispatch(addCarDetails({ key: name, value: value }))
            }
          />
          <div className={classes.formGroup}>
            <Input
              title={'Variklio talpa'}
              regExp={regEx}
              maxLength={7}
              keyName={'engineCapacity'}
              setValue={(name: string, value: string) =>
                dispatch(addCarDetails({ key: name, value: value }))
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              title={'Variklio galia'}
              regExp={regEx}
              maxLength={7}
              keyName={'enginePower'}
              setValue={(name: string, value: string) =>
                dispatch(addCarDetails({ key: name, value: value }))
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              title={'Ilgis cm *'}
              isRequired={true}
              regExp={regEx}
              maxLength={7}
              keyName={'length'}
              setValue={(name: string, value: string) =>
                dispatch(addDimensions({ key: name, value: value }))
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              title={'Plotins cm *'}
              isRequired={true}
              regExp={regEx}
              maxLength={7}
              keyName={'width'}
              setValue={(name: string, value: string) =>
                dispatch(addDimensions({ key: name, value: value }))
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              title={'Aukštis, cm *'}
              isRequired={true}
              regExp={regEx}
              maxLength={7}
              keyName={'height'}
              setValue={(name: string, value: string) =>
                dispatch(addDimensions({ key: name, value: value }))
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              title={'Svoris, kg *'}
              isRequired={true}
              regExp={regEx}
              maxLength={7}
              keyName={'weight'}
              setValue={(name: string, value: string) =>
                dispatch(addValue({ key: name, value: value }))
              }
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              title={'Kaina *'}
              isRequired={true}
              regExp={regEx}
              maxLength={7}
              keyName={'price'}
              setValue={(name: string, value: string) =>
                dispatch(addValue({ key: name, value: value }))
              }
            />
          </div>
        </div>
        <p>Aprašymas *</p>
        <textarea
          name=''
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(
              addValue({ key: 'description', value: event.target.value })
            )
          }
        ></textarea>
      </div>

      {/* Image */}

      <Upload files={files} handler={handleImgUpload} />

      <Button id={1} type='submit' onClick={handleSubmit}>
        Pridėti
      </Button>
    </div>
  );
};

export default Portal;
