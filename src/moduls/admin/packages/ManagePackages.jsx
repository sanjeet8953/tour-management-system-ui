import { getAllPackages } from "../../../api/packageService";
import { useEffect, useState } from "react";

const ManagePackages = () => {

     const [packages, setPackages] = useState([]);

       useEffect(() => {
    loadData();
  }, []);

  
  const loadData = async () => {
    try {
      const response = await getAllPackages();
      setPackages(response.data);
    } catch (error) {
      console.log("Error fetching packages", error);
    }
  };
    return (
    <div>
      <h2>Manage Packages</h2>

      {packages.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};


export default ManagePackages;