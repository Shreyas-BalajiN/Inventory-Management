import React, { useState } from "react";
import ZoneList from "./../components/ZoneList";
import ItemsList from "./../components/ItemsList";
import "./../styles/Store.css";
function Store() {
  const [zone, setZone] = useState("");

  const zoneSetter = (z) => {
    console.log(`Zone set to ${z}`);
    setZone(z);
  };
  return (
    <div className="store">
      <ZoneList zoneSetter={zoneSetter} />
      <ItemsList selectedZone={zone} />
    </div>
  );
}

export default Store;
