import React, { useState } from "react";
//   const Test = ()=>{
//     //Paskelbiau naują būsenos kintamąjį, kurį   „skaičiuoti“
//     const [testas, setCount] = useState(10)

//   return(
//   <div>
//     <p>You clicked{testas} times</p>
//     <button onClick={()=> setCount(testas +1)}> click me</button>
//   </div>
//   );
// }

// interface carInterface {
//   id: number;
//   model: string[];
//   brand: string[];
// }

// const Testas = () => {
//   const Testas1: carInterface = {
//     id: 1,
//     model: ["x5", "x6"],
//     brand: ["BMW", "Audi"],
//   };
//   const [newState, setNewState] = useState<carInterface[]>([Testas1]);

//   const addCarModel = () => {
//     setCarModelItems((prevState)=>{
//       const date = new Date();
//       const updatedItems = [...prevState];

//       const newCarModelsItems ={
//         ...Testas1,
//         id:date.getTime(),
//       };
//       updatedItems.push(newCarModelsItems);
//       return updatedItems
//     })
//   }

//   return (
//     <div>
//       <p>test{newState}</p>
//     </div>
//   );
// };

// export default Testas;
