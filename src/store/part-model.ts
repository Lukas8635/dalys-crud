import React from 'react'


export const stateBluePrints = {
  // detalės unikalus kodas (SKU)
  productCode: 'string',

  // detalės kategorija
  category: {
    name: 'string',
    iconURL: 'string',
  },

  // detalės subkategorija
  subCategory: {
    name: 'string',
    iconURL: 'string',
  },

  // detalės gamintojo kodų masyvas
  codes: ['string'],

  // automobilis, iš kurio paimta detalė
  car: {
    // jeigu detalė yra iš pardavėjo įvesto ardomo automobilio - to automobilio ID
    // tokiu atveju likusieji laukai užpildomi iš to automobilio
    // LATER
    // carId: {
    //   type: carSchema,
    //   required: false,
    //   unique: true,
    // },

    // automobilio markė
    make: 'string',

    // automobilio modelis
    model: 'string',

    // automobilio variklio modelio ID, jei žinomas
    // LATER
    // engine: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Engine',
    // },

    // automobilio variklio tūris (kubiniais centimetrais - cm3)
    engineCapacity: 2999,

    // automobilio variklio galingumas
    enginePower: {
      kWh: 190,
      hp: 250,
    },

    // automobilio kuro tipas, pasirenkamas iš sąrašo
    fuel: {
      type: String,
      enum: [
        'diesel',
        'gasoline',
        'gasoline_gas',
        'gasoline_electricity',
        'electricity',
        'diesel_electricity',
        'diesel_gas',
        'bioethanol',
        'other',
      ],
      required: false,
    },

    // automobilio pagaminimo metai
    carProductionYear: 'string',

    // automobilio vairo padėtis, pasirenkama iš sąrašo
    steeringWheelPosition: {
      type: String,
      enum: ['left', 'right'],
      required: false,
    },

    // automobilio pavarų dėžės tipas, pasirenkamas iš sąrašo
    transmission: {
      type: String,
      enum: ['manual', 'automatic'],
      required: false,
    },

    // automobilio kėbulo tipas, pasirenkamas iš sąrašo
    bodyType: {
      type: String,
      enum: [
        'other',
        'sedan',
        'hatchback',
        'caravan',
        'minivan',
        'suv',
        'coupe',
        'commercial',
        'cabriolet',
        'roadster',
        'limousine',
        'pickup',
      ],
      required: false,
    },

    // automobilio varomieji ratai, pasirenkama iš sąrašo
    drivingWheels: {
      type: String,
      enum: ['front', 'rear', 'all'],
      required: false,
    },

    // automobilio kėbulo spalva, pasirenkama iš sąrašo
    carColor: {
      type: String,
      enum: [
        'black',
        'grey',
        'white',
        'violet',
        'blue',
        'green',
        'yellow',
        'orange',
        'red',
        'brown',
        'mixed',
        'other',
      ],
      required: false,
    },
  },

  // detalės pavadinimas
  name: 'string',

  // detalės pozicija, pasirenkama iš sąrašo
  position: {
    type: String,
    enum: [
      'front',
      'rear',
      'left',
      'right',
      'front_left',
      'front_right',
      'rear_left',
      'rear_right',
    ],
    required: false,
  },

  // detalės aprašymas, kurį įveda pardavėjas
  description: 'string',

  // detalės kaina be PVM, kuri paskaičiuojama iš pardavėjo įvestos kainos
  priceWithoutVAT: 'This will be counted automatically',

  // detalės kaina, kurią įveda pardavėjas
  price: 'string',

  // detalės nuotraukų, kurias įkelia pardavėjas, nuorodų masyvas
  photoUrls: [
    'string'
  ],

  // detalės būklė, pasirenkama iš sąrašo
  condition: {
    type: String,
    enum: ['new', 'used', 'refurbished'],
    required: true,
  },

  // detalės prieinamumo pirkėjui tipas, pasirenkamas iš sąrašo
  status: {
    type: String,
    enum: ['unavailable', 'available', 'reserved', 'sold'],
    required: true,
  },

  // detalės matmenų objektas
  dimensions: {
    // detalės plotis
    width: 45,

    // detalės ilgis
    length: 45,

    // detalės aukštis
    height: 45,
  },

  // detalės svoris
  weight: 45,
};