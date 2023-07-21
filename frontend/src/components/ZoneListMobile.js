import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./../styles/ZoneList.css";
import AddZoneModal from "./AddZoneModal";
import Swal from "sweetalert";
import Cookies from "js-cookie";
import axios from "axios";

function addZone(value) {
  // zones.push(value);
  //code to add zones
}

function ZoneListMobile(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [activeItem, setActiveItem] = useState(5000);

  const handleClick = (el, index) => {
    props.zoneSetter(el);
    setActiveItem(index);
  };

  const deleteZone = async (el) => {
    const name = Cookies.get("name");
    const email = Cookies.get("email");
    const payload = {
      name: name,
      email: email,
      zoneName: el,
    };
    // Ensure there is an active zone to delete
    if (activeItem !== null && activeItem !== 5000) {
      props.zones.splice(activeItem, 1); // Remove the zone from the array
      //delete api
      await axios
        .post(
          "https://custom-inventory-po3oww4fuq-wl.a.run.app/zone/delete",
          payload
        )
        .then((resp) => {
          if (resp.data.message === "OK") {
            console.log(resp.data.data);
            // setZones(resp.data.data.zones);
          }
        })
        .catch((error) => {
          Swal("Account doesn't exist");
        });
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
        {props.zones.map((el, index) => {
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
        <Button variant="danger" onClick={(el) => deleteZone(el)}>
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
