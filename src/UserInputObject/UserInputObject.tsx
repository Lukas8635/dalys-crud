import React from 'react';

const UserInputObject = {
  //automobilio markė
  brand: 'BMW',
  //automobilio modelis
  model: 'X5',
  //automobilio pagaminimmo metai
  carProductionYear: '2015',
  //detalės pavadinimo paieška
  partNameSearch: 'input',
  //detalės kategorija
  category: {
    name: 'Variklio skyrius',
    iconURL: 'string',
  },
  //detalės subkategorija
  subCategory: {
    name: 'Variklis',
    iconURL: 'string',
  },
  //detalės pavadinimas
  name: 'BMW variklis x5',
  //detalės būklė
  condition: {
    enum: ['new'],
  },
  //detalės pozicija
  position: {
    enum: ['front'],
  },
  //variklio tipas
  engine: 'V8',
  //kėbulo tipas
  bodyType: {
    enum: ['suv'],
  },
  //vairo padėtis
  steeringWheelPosition: {
    enum: ['left'],
  },
  //varomieji ratai
  drivingWheels: {
    enum: ['all'],
  },
  // detalės gamintojo kodų masyvas
  codes: ['string'],
  //pavarų dežė
  transmission: {
    enum: ['automatic'],
  },
  //kėbulo spalva
  carColor: {
    enum: ['black'],
  },
  //rida
  odometer: 50100,
  //kuras
  fuel: {
    enum: ['gasoline'],
  },
  //variklio tūris cm3
  engineCapacity: 5000,
  //variklio galingumas kW
  enginePower: {
    kW: 260,
    hp: 349,
  },
  //ilgis cm
  length: 220,
  //plotis cm
  width: 120,
  //aukštis cm
  height: 120,
  //svoris kg
  weight: 400,
  //kaina
  price: 6000,
};

export default UserInputObject;

const UserInputObject002 = {
  // detalės unikalus kodas (SKU)
  productCode: '',
  // partNameSearch: 'input',
  category: {
    name: 'Variklio skyrius',
    iconURL: 'string',
  },
  subCategory: {
    name: 'Variklis',
    iconURL: 'string',
  },
  codes: ['string'],
  car: {
    make: 'BMW',
    model: 'X5',
    engine: 'V8',
    engineCapacity: 5000,
    enginePower: {
      kW: 260,
      hp: 349,
    },
    fuel: 'gasoline',
    carProductionYear: '2015',
    steeringWheelPosition: 'left',
    transmission: 'automatic',
    bodyType: 'suv',
    drivingWheels: 'all',
    carColor: 'black',
  },

  name: 'BMW variklis x5',
  position: 'front',
  description: 'string',
  priceWithoutVAT: 100,
  price: 121,
  photoUrls: [],
  condition: 'new',
  status: 'available',
  odometer: 50100,
  dimensions: {
    length: 220,
    width: 120,
    height: 120,
    weight: 400,
    price: 6000,
  },
};
