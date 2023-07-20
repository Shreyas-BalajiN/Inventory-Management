import React, { useState } from "react";
import ZoneList from "./../components/ZoneList";
import ItemsList from "./../components/ItemsList";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/Store.css";

import ZoneListMobile from "../components/ZoneListMobile";
function Store() {
  const [zone, setZone] = useState("All Zones");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const zoneSetter = (z) => {
    console.log(`Zone set to ${z}`);
    setZone(z);
  };
  return (
    <div className="store">
      <ZoneList zoneSetter={zoneSetter} />
      <div className="mobileView">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Zones List</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ZoneListMobile zoneSetter={zoneSetter} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <ItemsList handleShow={handleShow} selectedZone={zone} />
    </div>
  );
}

export default Store;
