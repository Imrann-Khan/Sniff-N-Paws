// import React, { useEffect, useState } from "react";
// import AnimalRow from "./AnimalRow";

// const Animal = () => {
//   const [animals, setAnimals] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/animal")
//       .then((res) => res.json())
//       .then((datam) => {
//         setAnimals(datam);
//       });
//   }, []);
//   return (
//     <div className="pt-40 pb-56">
//       <div className="overflow-x-auto">
//         <h1 className="font-semibold text-2xl text-pink-400">
//           Total Animals: {animals.length}
//         </h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>index</th>
//               <td>AGE</td>
//               <td>BREED</td>
//               <td>WEIGHT</td>
//               <td>RATE</td>
//               <td>TYPE</td>
//               <td>COMING_DATE</td>
//               <td>RELEASE_DATE</td>
//               <td>customer_id</td>
//               <td>DELETE</td>
//             </tr>
//           </thead>
//           <tbody>
//             {animals.map((animal) => (
//               <AnimalRow key={animal.index} animal={animal}></AnimalRow>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Animal;
