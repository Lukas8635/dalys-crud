export interface CarCollectByBrand {
  id: string;
  title: string;
  option: OptionInterface[];
}

export interface OptionInterface {
  id: string;
  title: string;
  models: ModelInterface[];
}

export interface ModelInterface {
  title: string;
  id: string;
}

export interface EngineType {
  title: string;
  engPower: string;
  engCapacity: number;
  fuel: string;
  year: number[] | number;
}

export interface ModelType {
  model: string;
  engines: EngineType[];
}

export const category = {
  title: "Kategorija",
  id: "category1",
  option: [
    {
      title: "Apšvietimo sistema",
      id: "1231",
    },
    {
      title: "Kėbulas",
      id: "body1",
    },
    {
      title: "Išmetamūjų dujų sistema",
      id: "exhaush gasses system1",
    },
    {
      title: "Stiklai",
      id: "glass1",
    },
  ],
};

export const subCategory = {
  title: "SubKategorija",
  id: "subCategory1",
  option: [
    {
      title: "Galinis žibintas",
      id: "rear light 1",
    },
    {
      title: "Priekinis žibintas",
      id: "front light1",
    },
    {
      title: "Posūkio žibintas",
      id: "turn ligth1",
    },
    {
      title: "Priešrūkinis žibintas",
      id: "fog light1",
    },
  ],
};

export const condition = {
  title: "Būklė",
  id: "conditonory1",
  option: [
    {
      title: "Nauja",
      id: "new 1",
    },
    {
      title: "Naudota",
      id: "second hand1",
    },
  ],
};

export const position = {
  title: "Pozicija",
  id: "position1",
  option: [
    {
      title: "Priekis",
      id: "front1",
    },
    {
      title: "Galas",
      id: "rear1",
    },
    {
      title: "Kairė",
      id: "left1",
    },
    {
      title: "Dešinė",
      id: "right1",
    },
  ],
};

export const partNameSearch = {
  title: "Detalės titleadinimo paieška",
};

export const partName = {
  title: "Detalės titleadinimas",
};

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<< Engine >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const bmwX5Engines: ModelType = {
  model: "X5",
  engines: [
    {
      title: "xDrive 3.0d 180kW",
      engPower: "180 kW",
      engCapacity: 3000,
      fuel: "Diesel",
      year: [2013, 2014, 2015],
    },
    {
      title: "xDrive 3.5i 235kW",
      engPower: "235 kW",
      engCapacity: 3500,
      fuel: "Gasoline",
      year: [2013, 2014, 2015],
    },
    {
      title: "xDrive 5.0i 300kW",
      engPower: "300 kW",
      engCapacity: 5000,
      fuel: "Gasoline",
      year: [2013, 2014, 2015],
    },
  ],
};

const bmwX3Engines: ModelType = {
  model: "X3",
  engines: [
    {
      title: "xDrive 1.8d 100kW",
      engPower: "100 kW",
      engCapacity: 1800,
      fuel: "Diesel",
      year: 2013,
    },
    {
      title: "xDrive 3.0i 200kW",
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
      title: "1.8i 55kW",
      engPower: "55 kW",
      engCapacity: 1800,
      fuel: "Gasoline",
      year: 1983,
    },
    {
      title: "2.0d 51kW",
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
      title: "1.5i 45kW",
      engPower: "45 kW",
      engCapacity: 1500,
      fuel: "Gasoline",
      year: 1989,
    },
    {
      title: "2.0i 69kW",
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
      title: "4.2 FSI quattro 316kW",
      engPower: "316 kW",
      engCapacity: 4200,
      fuel: "Gasoline",
      year: 2015,
    },
    {
      title: "5.2 FSI quattro 412kW",
      engPower: "412 kW",
      engCapacity: 5200,
      fuel: "Gasoline",
      year: 2013,
    },
  ],
};

export const conditionPart = {
  title: "Būklė",
  option: [
    { title: "Nauja", id: "new" },
    { title: "Naudota", id: "used" },
    { title: "Restauruota", id: "refurbished" },
  ],
};

export const positionPart = {
  title: "Pozicija",
  option: [
    { title: "Priekyje", id: "front" },
    { title: "Gale", id: "rear" },
    { title: "Kairėje", id: "left" },
    { title: "Dešinėje", id: "right" },
    { title: "Priekyje,kairėje", id: "front_left" },
    { title: "Priekyje,dešinėje", id: "front_right" },
    { title: "Gale,kairėje", id: "rear_left" },
    { title: "Gale,dešinėje", id: "rear_right" },
  ],
};

export const bodyType = {
  title: "Kėbulo tipas",
  option: [
    { title: "Sedanas", id: "sedan" },
    { title: "Universalas", id: "caravan" },
    { title: "Hečbekas", id: "hatchback" },
    { title: "Vienatūris", id: "minivan" },
    { title: "Visureigis", id: "suv" },
    { title: "Kupė(Coupe)", id: "coupe" },
    { title: "Komercinis", id: "comemrtial" },
    { title: "Kabrioletas", id: "cabriolet" },
    { title: "Limuzinas", id: "limousine" },
    { title: "Pikapas", id: "pickup" },
    { title: "Kita", id: "other" },
  ],
};

export const steeringWheelPosition = {
  title: "Vairo padėtis",
  option: [
    { title: "Kairė", id: "left" },
    { title: "dešinė", id: "right" },
  ],
};

export const steeringWheel = {
  title: "Varomieji ratai",
  option: [
    { title: "Priekiniai", id: "front" },
    { title: "Galiniai", id: "rear" },
    { title: "Visi", id: "all" },
  ],
};

export const gearBox = {
  title: "titlearų dežė",
  option: [
    { title: "Automatine", id: "automatic" },
    { title: "Mechaninė", id: "manual" },
  ],
};

export const colorPart = {
  title: "Spalva",
  option: [
    { title: "Juoda", id: "black" },
    { title: "Pilka", id: "grey" },
    { title: "Balta", id: "white" },
    { title: "Violetinė", id: "violet" },
    { title: "Mėlyna", id: "blue" },
    { title: "Žalia", id: "green" },
    { title: "Geltona", id: "yellow" },
    { title: "Oranžinė", id: "orange" },
    { title: "Raudona", id: "red" },
    { title: "Ruda", id: "brown" },
    { title: "Maišyta", id: "mixed" },
    { title: "Kita", id: "other" },
  ],
};

export const fuel = {
  title: "Kuro tipas",
  option: [
    { title: "Dyzelinas", id: "diesel" },
    { title: "Benzinas", id: "gasonile" },
    { title: "Benzinas/Dujos", id: "gasoline_gas" },
    { title: "Benzinas/Elektra", id: "gasoline_electricity" },
    { title: "Elektra", id: "electriciry" },
    { title: "Dyzelinas/Elektra", id: "diesel_electricity" },
    { title: "Bioetanolis", id: "bioethanol" },
    { title: "Kita", id: "other" },
  ],
};

export const brands = {
  id: "brands",
  title: "Gamintojas",
  options: [
    // {
    //   id: 'noneID',
    //   title: '-',
    //   models: [],
    // },
    {
      id: "bmwId",
      title: "BMW",
      models: [
        // { title: '---', id: 'nodeID' },
        // { title: 'X5', id: 'x5Id' },
        // { title: 'X3', id: 'x3Id' },
        // { title: '530', id: '530Id' },
        bmwX3Engines,
        bmwX5Engines,
      ],
    },
    {
      id: "audiId",
      title: "Audi",
      models: [
        { title: "---", id: "nodeID" },
        { title: "100", id: "100Id" },
        { title: "80", id: "80Id" },
        { title: "R8", id: "r8Id" },
      ],
    },
  ],
};


