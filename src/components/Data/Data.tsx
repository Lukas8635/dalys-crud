// export interface CarCollectByBrand {
//   id: string;
//   title: string;
//   option: ModelInterface[];
// }

// export interface ModelInterface {
//   id: string;
//   pav: string;
// }

// export interface OptionInterface{
//   id:string;
//   pav:string;
//   model:ModelInterface

// }

// export const brand: CarCollectByBrand[] =  [


export const brand1 = {
  id: "brand1",
  title: "Marke",
  option: [
    {
      id: "noneID",
      pav: "-",
    },
    {
      id: "bmwId",
      pav: "BMW",
      models: [
        { pav: "X5", id: "x5Id" },
        { pav: "X3", id: "x3Id" },
        { pav: "530", id: "530Id" },
      ],
    },
    {
      id: "audiId",
      pav: "Audi",
      models: [
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

// const bmwModel = {
//   modelId:brand.option[0],
//   option:[
//     {
//       title:'X5',
//       id:'bmwX5'
//     },
//     {
//       title:'M3',
//       id:'bmwM3'
//     },
//     {
//       title:'3 Serija',
//       id:'bmw3serija'
//     }
//   ]
// }

// console.log(brand.option[0]);
// console.log(bmwModel.brandId);
//   {
//     id: "bmwId",
//     title: "BMW",
//     option: [
//       { id: "x5Id", pav: "X5" },
//       { id: "x3Id", pav: "X3" },
//       { id: "530Id", pav: "530" },
//     ],
//   },
//   {
//     id: "audiId",
//     title: "AUDI",
//     option: [
//       { id: "100Id", pav: "100" },
//       { id: "80Id", pav: "80" },
//       { id: "r8Id", pav: "R8" },
//     ],
//   },
// ];

// if(brand[0].id !== brand[0].option[1].id){
//   console.log('kazkas eina');
// }