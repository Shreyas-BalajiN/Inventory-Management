import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./../styles/ZoneList.css";
import AddZoneModal from "./AddZoneModal";

const zones = ["Zone 1", "Zone 2", "Zone 3"];

function addZone(value) {
  zones.push(value);
}

function ZoneListMobile(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [activeItem, setActiveItem] = useState(5000);

  const handleClick = (el, index) => {
    props.zoneSetter(el);
    setActiveItem(index);
  };

  const deleteZone = () => {
    // Ensure there is an active zone to delete
    if (activeItem !== null && activeItem !== 5000) {
      zones.splice(activeItem, 1); // Remove the zone from the array
      setActiveItem(5000); // Reset activeItem to "All Zones"
    }
  };

  return (
    <div className="zoneSectionMobile">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Zones
      </Button>
      <ListGroup defaultActiveKey="#link1" className="zonesList">
        <ListGroup.Item
          key=""
          action
          onClick={() => handleClick("All Zones", 5000)}
          className={activeItem === 5000 ? "active" : ""}
        >
          All Zones
        </ListGroup.Item>
        {zones.map((el, index) => {
          return (
            <ListGroup.Item
              key={index}
              action
              onClick={() => handleClick(el, index)}
              className={activeItem === index ? "active" : ""}
            >
              {el}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {activeItem !== 5000 && (
        <Button variant="danger" onClick={deleteZone}>
          Delete Zone
        </Button>
      )}
      <AddZoneModal
        show={modalShow}
        zoneAdder={addZone}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ZoneListMobile;
