export interface CarCollectByBrand {
  id: string;
  title: string;
  option: OptionInterface[];
}

export interface OptionInterface {
  id: string;
  pav: string;
  models: ModelInterface[];
}

export interface ModelInterface {
  pav: string;
  id: string;
}

export const brand1 = {
  id: "brand1",
  title: "Gamintojas",
  option: [
    {
      id: "noneID",
      pav: "-",
      models: [],
    },
    {
      id: "bmwId",
      pav: "BMW",
      models: [
        { pav: "---", id: "nodeID" },
        { pav: "X5", id: "x5Id" },
        { pav: "X3", id: "x3Id" },
        { pav: "530", id: "530Id" },
      ],
    },
    {
      id: "audiId",
      pav: "Audi",
      models: [
        { pav: "---", id: "nodeID" },
        { pav: "100", id: "100Id" },
        { pav: "80", id: "80Id" },
        { pav: "R8", id: "r8Id" },
      ],
    },
  ],
};

export const category = {
  title: "Kategorija",
  id: "category1",
  option: [
    {
      pav: "Apšvietimo sistema",
      id: "1231",
    },
    {
      pav: "Kėbulas",
      id: "body1",
    },
    {
      pav: "Išmetamūjų dujų sistema",
      id: "exhaush gasses system1",
    },
    {
      pav: "Stiklai",
      id: "glass1",
    },
  ],
};

export const subCategory = {
  title: "SubKategorija",
  id: "subCategory1",
  option: [
    {
      pav: "Galinis žibintas",
      id: "rear light 1",
    },
    {
      pav: "Priekinis žibintas",
      id: "front light1",
    },
    {
      pav: "Posūkio žibintas",
      id: "turn ligth1",
    },
    {
      pav: "Priešrūkinis žibintas",
      id: "fog light1",
    },
  ],
};

export const condition = {
  title: "Būklė",
  id: "conditonory1",
  option: [
    {
      pav: "Nauja",
      id: "new 1",
    },
    {
      pav: "Naudota",
      id: "second hand1",
    },
  ],
};

export const position = {
  title: "Pozicija",
  id: "position1",
  option: [
    {
      pav: "Priekis",
      id: "front1",
    },
    {
      pav: "Galas",
      id: "rear1",
    },
    {
      pav: "Kairė",
      id: "left1",
    },
    {
      pav: "Dešinė",
      id: "right1",
    },
  ],
};

export const partNameSearch = {
  title: "Detalės pavadinimo paieška",
};

export const partName = {
  title: "Detalės pavadinimas",
};

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<< Engine >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const bmwX5Engines = {
  model: "X5",
  engines: [
    {
      pav: "xDrive 3.0d 180kW",
      engPower: "180 kW",
      engCapacity: 3000,
      fuel: "Diesel",
      year: [2013, 2014, 2015],
    },
    {
      pav: "xDrive 3.5i 235kW",
      engPower: "235 kW",
      engCapacity: 3500,
      fuel: "Gasoline",
      year: [2013, 2014, 2015],
    },
    {
      pav: "xDrive 5.0i 300kW",
      engPower: "300 kW",
      engCapacity: 5000,
      fuel: "Gasoline",
      year: [2013, 2014, 2015],
    },
  ],
};

const bmwX3Engines = {
  model: "X3",
  engines: [
    {
      pav: "xDrive 1.8d 100kW",
      engPower: "100 kW",
      engCapacity: 1800,
      fuel: "Diesel",
      year: 2013,
    },
    {
      pav: "xDrive 3.0i 200kW",
      engPower: "200 kW",
      engCapacity: 3000,
      fuel: "Gasoline",
      year: 2010,
    },
  ],
};

const audi100Engines = {
  model: "100",
  engines: [
    {
      pav: "1.8i 55kW",
      engPower: "55 kW",
      engCapacity: 1800,
      fuel: "Gasoline",
      year: 1983,
    },
    {
      pav: "2.0d 51kW",
      engPower: "51 kW",
      engCapacity: 2000,
      fuel: "Diesel",
      year: 1983,
    },
  ],
};

const audi80Engines = {
  model: "80",
  engines: [
    {
      pav: "1.5i 45kW",
      engPower: "45 kW",
      engCapacity: 1500,
      fuel: "Gasoline",
      year: 1989,
    },
    {
      pav: "2.0i 69kW",
      engPower: "69 kW",
      engCapacity: 2000,
      fuel: "Gasoline",
      year: 1991,
    },
  ],
};

const audiR8Engines = {
  model: "R8",
  engines: [
    {
      pav: "4.2 FSI quattro 316kW",
      engPower: "316 kW",
      engCapacity: 4200,
      fuel: "Gasoline",
      year: 2015,
    },
    {
      pav: "5.2 FSI quattro 412kW",
      engPower: "412 kW",
      engCapacity: 5200,
      fuel: "Gasoline",
      year: 2013,
    },
  ],
};



export const conditionPart = {
  title: "Būklė",
  option: ["Nauja", "Naudota", "Restauruota"],
};

export const positionPart = {
  title: "Pozicija",
  option: [
    "Priekyje",
    "Gale",
    "Kairėje",
    "Dešinėje",
    "Kairėje,priekyje",
    "Dešinėje,priekyje",
    "Kairėje,gale",
    "Dešinėje,gale",
  ],
};

export const bodyType = {
  title: "Kėbulo tipas",
  option: [
    {title:"Sedanas", id: "sedan"},
    "Universalas",
    "Hečbekas",
    "Vienatūris",
    "Visureigis",
    "Kupė(Coupe)",
    "Komercinis",
    "Kabrioletas",
    "Limuzinas",
    "Pikapas",
    { title: "Kita", id:'other'},
  ],
};

export const steeringWheelPosition = {
  title: "Vairo padėtis",
  option: ["Kairė", "dešinė"],
};

export const steeringWheel = {
  title: "Varomieji ratai",
  option: ["Priekiniai", "Galiniai", "Visi"],
};

export const gearBox = {
  title: "Pavarų dežė",
  option: ["Automatine", "Mechaninė"],
};

export const colorPart = {
  title: "Spalva",
  option: [
    "Juoda",
    "Pilka",
    "Balta",
    "Violetinė",
    "Mėlyna",
    "Žalia",
    "Geltona",
    "Oranžinė",
    "Raudona",
    "Ruda",
    "Maišyta",
    "Kita",
  ],
};

export const fuel={
  title:"Kuro tipas",
  option:[
    "Dyzelinas",
    "Benzinas",
    "Benzinas/Dujos",
    "Benzinas/Elektra",
    "Elektra",
    "Dyzelinas/Elektra",
    "Bioetanolis",
    "Kita",
  ]
}