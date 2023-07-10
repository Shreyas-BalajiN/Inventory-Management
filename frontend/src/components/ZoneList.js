import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./../styles/ZoneList.css";
import AddZoneModal from "./AddZoneModal";
const zones = ["Zone 1", "Zone 2", "Zone 3"];

function addZone(value) {
  zones.push(value);
}

function ZoneList() {
  const [modalShow, setModalShow] = React.useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  // const alertClicked = (clickedItem) => {
  //   alert(`You clicked ${clickedItem}`);
  // };

  return (
    <div className="zoneSection">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Zones
      </Button>
      <ListGroup defaultActiveKey="#link1" className="zonesList">
        {zones.map((el, index) => {
          return (
            <ListGroup.Item
              key={index}
              action
              onClick={() => handleClick(index)}
              className={activeItem === index ? "active" : ""}
            >
              {el}
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <AddZoneModal
        show={modalShow}
        zoneAdder={addZone}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ZoneList;
