import React, { useState, useEffect } from "react";

import SelectComp, { Option } from "./SelectComp/SelectComp";

import Search from "../search/search.comp";
import Upload from "../Upload/Upload.comp";

import { mockState, DataModal } from "../../store/categories";
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
} from "../Data/Data";

import testas from "../../img/testas.png";
import classes from "./Portal.module.scss";
import SelectInput from "./SelectInput/SelectInput";
import CodeInput from "./PartCodeAdd/CodeInput";
import Button from "../Button/Button";

const Portal = () => {
  const [dismantleCars, setDismantleCars] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [modelsOptions, setModelsOptions] = useState<Option[] | never[]>([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [condition, setCondition] = useState("");
  const [partCondition, setPartCondition] = useState("");
  const [carBodyType, setCarBodyType] = useState("");
  const [wheelPosition, setWheelPosition] = useState("");
  const [drivenWhl, setDrivenWhl] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [subCategories, setSubCategories] = useState<DataModal[] | never[]>([]);
  const [slctSubCateg, setSlctSubCateg] = useState("");
  const [partNamesOptions, setPartNamesOptions] = useState<
    DataModal[] | never[]
  >([]);
  const [selectedPart, setSelectedPart] = useState("");
  // Uploaded images
  const [files, setFiles] = useState<string[]>([]);

  const createData = () => {
    //  SKU code. This code must be created dynamically
    const productCode = "gir458";
    return {
      productCode: productCode,
      category: selectedCat,
      subCategory: slctSubCateg,
      codes: ["TODO: test, change this"],
      car: {
        make: brand,
        model: model,
        engine: "V8",
        engineCapacity: 5000,
        enginePower: {
          kW: 260,
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
      name: "String",
      position: partCondition,
      priceWithoutVAT: 100,
      price: 121,
      photoUrls: [...files],
      condition: condition,
      status: "available",
      odometer: 50000,
      dimensions: {
        length: 220,
        width: 120,
        height: 120,
        weight: 400,
        price: 6000,
      },
    };
  };

  // sets options with selected brand models
  useEffect(() => {
    if (brand && brand !== "0") {
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

  // sets SubCategory options when Category is selected
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

  // sets Part name options when SubCategory is selected
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

  // add event listener for MAIN BUTTON PRIDETI
  const addEventListener = (required:boolean) =>{
    if (required !== true){
      console.log('veikia');
    }
  }

  // const addEvenrListener = (id:number, (event:any)=>{
  //   event.preventDefault()
  // });

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
          <SelectComp
            
            options={brands.options}
            handler={setBrand}
            label={"Gamintojas"}
          />
          <SelectComp
            options={modelsOptions}
            label={"Modelis"}
            handler={setModel}
          />
          <SelectComp options={setYears()} label={"Metai"} handler={setYear} />
          <Search
            label={"Detalės pavadinimo paieška"}
            setSearchQuery={setSearchQuery}
          />
          <SelectComp
          required={true}
            options={mockState}
            label={"Kategorija *"}
            handler={setSelectedCat}
          />
          <SelectComp
          required={true}
            options={subCategories}
            label={"Subkategorija *"}
            handler={setSlctSubCateg}
          />
          <SelectComp
          required={true}
            options={partNamesOptions}
            label={"Pavadinimas *"}
            handler={setSelectedPart}
          />
          <SelectComp
          required={true}
            options={conditionPart.option}
            label={conditionPart.title}
            handler={setCondition}
          />
          <SelectComp
            options={positionPart.option}
            label={positionPart.title}
            handler={setPartCondition}
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
        </form>
        <CodeInput />
      </div>
      <div className={classes.subDiv}>
        <div className={classes.listStyle}>
          <SelectComp
            options={gearBox.option}
            label={gearBox.title}
            handler={setTransmission}
          />
          <SelectComp
            options={colorPart.option}
            label={colorPart.title}
            handler={setColor}
          />
          <div className={classes.formGroup}>
            <SelectInput title={"Rida"} />
          </div>
          <SelectComp
            options={fuel.option}
            label={fuel.title}
            handler={setFuelType}
          />
          <div className={classes.formGroup}>
            <SelectInput title={"Variklio talpa"} />
          </div>
          <div className={classes.formGroup}>
            <SelectInput title={"Variklio galia"} />
          </div>
          <div className={classes.formGroup}>
            <SelectInput title={"Ilgis cm *"}
            required={true} />
          </div>
          <div className={classes.formGroup}>
            <SelectInput title={"Plotins cm *"}
            required={true} />
          </div>
          <div className={classes.formGroup}>
            <SelectInput title={"Aukštis, cm *"}
            required={true} />
          </div>
          <div className={classes.formGroup}>
            <SelectInput title={"Svoris, kg *"}
            required={true} />
          </div>
          <div className={classes.formGroup}>
            <SelectInput title={"Kaina *"}
            required={true} />
          </div>
        </div>
        <p>Aprašymas *</p>
        <textarea name=""></textarea>
      </div>

      {/* Image */}

      <Upload files={files} handler={handleImgUpload} />

      <Button id={1} type="submit" >
        Pridėti
      </Button>
    </div>
  );
};

export default Portal;
