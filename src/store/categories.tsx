export interface DataModal {
  title: string;
  id: string;
  subOptions: DataModal[] | never[];
}

const mockData = {
  title: 'Galiniai žibintai',
  id: 'rear-0100',
  subOptions: [
    {
      title: 'Atbulinės eigos žibintas',
      id: 'rear-0101',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto apdaila (juostelė)',
      id: 'rear-0102',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto dangtelis (lizdas)',
      id: 'rear-0103',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto detalė',
      id: 'rear-0104',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto stiklas (dangtyje)',
      id: 'rear-0105',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto stiklas (kėbule)',
      id: 'rear-0106',
      subOptions: [],
    },
    {
      title: 'Galinis atšvaitas',
      id: 'rear-0107',
      subOptions: [],
    },
    {
      title: 'Galinis žibintas bamperyje',
      id: 'rear-0108',
      subOptions: [],
    },
  ],
};

const mockData2 = {
  title: 'Degalų mišinio uždegimo sistema',
  id: 'ignition-2',
  subOptions: [
    {
      title: 'Aukštos įtampos ritė "babyna"',
      id: 'ignition-3',
      subOptions: [],
    },
    {
      title: 'Aukštos įtampos uždegimo lizdas (žvaklaidis)',
      id: 'ignition-4',
      subOptions: [],
    },
    {
      title: 'Dangtelis kibirkšties paskirstytojo (tramplioriaus)',
      id: 'ignition-5',
      subOptions: [],
    },
    {
      title: 'Degimo modulis "Komutatorius"',
      id: 'ignition-6',
      subOptions: [],
    },
    {
      title: 'Kibirkšties paskirstytojas (trampliorius)',
      id: 'ignition-7',
      subOptions: [],
    },
    {
      title: 'Pakaitinimo žvakė (-ės)',
      id: 'ignition-8',
      subOptions: [],
    },
    {
      title: 'Skriejikas (bėgunokas)',
      id: 'ignition-9',
      subOptions: [],
    },
  ],
};

const turnLamp = {
  title: 'Posūkio žibintai',
  id: 'rear-0200',
  subOptions: [
    {
      title: 'Posūkio žibintas veidrodėlyje',
      id: 'rear-0201',
      subOptions: [],
    },
    {
      title: 'Priekinis posūkio žibintas',
      id: 'rear-0202',
      subOptions: [],
    },
    {
      title: 'Sparno posūkio žibintas',
      id: 'rear-0203',
      subOptions: [],
    },
    {
      title: 'Visos kategorijos',
      id: 'rear-0204',
      subOptions: [],
    },
  ],
};

export const mockState: DataModal[] = [
  {
    title: 'Apšvietimo sistemos',
    id: 'lights-1',
    subOptions: [mockData, turnLamp],
  },
  {
    title: 'Degalų mišinio sistema',
    id: 'ignition-1',
    subOptions: [mockData2],
  },
  {
    title: 'Dujų išmetimo sistema',
    id: 'exhaust_gass-1',
    subOptions: [mockData2],
  },
  {
    title: 'Durys',
    id: 'doors-1',
    subOptions: [mockData2],
  },
  {
    title: 'Galinė ašis',
    id: 'rear_axis-1',
    subOptions: [mockData2],
  },
  {
    title: 'Galinės išorės detalės',
    id: 'rear_out_parts-1',
    subOptions: [mockData2],
  },
  {
    title: 'Kėbulas/ kėbulo dalys ',
    id: 'body-1',
    subOptions: [mockData2],
  },
  {
    title: 'Kitos detalės ',
    id: 'other_parts-1',
    subOptions: [mockData2],
  },
  {
    title: 'Oro kondicionavimo- šildymo sistema/ radiatoriai ',
    id: 'air_condition-1',
    subOptions: [mockData2],
  },
  {
    title: 'Pavarų dėžė/ sankaba/ transmisija ',
    id: 'gear_box-1',
    subOptions: [mockData2],
  },
  {
    title: 'Priekinė ašis',
    id: 'front_axis-1',
    subOptions: [mockData2],
  },
  {
    title: 'Priekinės išorės detalės',
    id: 'fron_part-1',
    subOptions: [mockData2],
  },
  {
    title: 'Prietaisai/ jungikliai/ el. sistema ',
    id: 'el_system-1',
    subOptions: [mockData2],
  },
  {
    title: 'Ratai/ padangos/ gaubtai ',
    id: 'wheels-1',
    subOptions: [mockData2],
  },
  {
    title: 'Salonas/ interjeras ',
    id: 'saloon-1',
    subOptions: [mockData2],
  },
  {
    title: 'Stabdžių sistema',
    id: 'brake_system-1',
    subOptions: [mockData2],
  },
  {
    title: 'Stiklai',
    id: 'glasses-1',
    subOptions: [mockData2],
  },
  {
    title: 'Stiklų žibintų apiplovimo/ valymo sistema',
    id: 'headlight_washing_system-1',
    subOptions: [mockData2],
  },
  {
    title: 'Variklis',
    id: 'engine-1',
    subOptions: [mockData2],
  },
];
