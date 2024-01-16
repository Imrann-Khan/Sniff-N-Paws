import React from "react";

const CustomerAnimalCabinRow = ({ customerAnimalCabin }) => {
  return (
    <tr>
      <th>{customerAnimalCabin[0]}</th>
      <td>{customerAnimalCabin[1]}</td>
      <td>{customerAnimalCabin[2]}</td>
      <td>{customerAnimalCabin[3]}</td>
      <td>{customerAnimalCabin[4]}</td>
    </tr>
  );
};

export default CustomerAnimalCabinRow;
