import React, { useEffect, useState } from "react";
import Traned from "./Traned";

const Tranding = () => {
  const [tranding, setTranding] = useState([]);
  useEffect(() => {
    fetch("blog-card-data.json")
      .then((res) => res.json())
      .then((data) => setTranding(data));
  }, []);
  return (
    <div>
      <div className="flex grid grid:cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        {tranding.map((traned) => (
          <Traned key={traned.id} traned={traned}></Traned>
        ))}
      </div>
    </div>
  );
};

export default Tranding;
