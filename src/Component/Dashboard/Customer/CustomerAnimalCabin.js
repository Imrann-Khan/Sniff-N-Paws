import React, { useEffect, useState } from "react";
import CustomerAnimalCabinRow from "./CustomerAnimalCabinRow";

const CustomerAnimalCabin = () => {
  const [customerAnimalCabins, setCustomerAnimalCabins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/customer_animal_cabin")
      .then((res) => res.json())
      .then((datam) => {
        setCustomerAnimalCabins(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total animal cabin: {customerAnimalCabins.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  customer_id
                </th>
                <td className="uppercase text-xs font-extrabold text-left">
                  name
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Coming-release date
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Cabin_no
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Total daycare services
                </td>
              </tr>
            </thead>
            <tbody>
              {customerAnimalCabins.map((customerAnimalCabin) => (
                <CustomerAnimalCabinRow
                  key={customerAnimalCabin.customerAnimalCabin_id}
                  customerAnimalCabin={customerAnimalCabin}
                ></CustomerAnimalCabinRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerAnimalCabin;
