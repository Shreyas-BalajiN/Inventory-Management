import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./../styles/ItemsList.css";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
function ItemsList(props) {
  const [searchItem, setSearchItem] = useState("");
  const dataList = [
    { name: "Item 1", quantity: "1", zone: "Zone 1" },
    { name: "Item 2", quantity: "15", zone: "Zone 2" },
    { name: "Item 3", quantity: "50", zone: "Zone 1" },
    { name: "Item 4", quantity: "10", zone: "Zone 3" },
    { name: "Item 5", quantity: "20", zone: "Zone 2" },
    { name: "Item 6", quantity: "5", zone: "Zone 3" },
    { name: "Item 1", quantity: "30", zone: "Zone 1" },
    { name: "Item 2", quantity: "15", zone: "Zone 2" },
    { name: "Item 3", quantity: "50", zone: "Zone 1" },
    { name: "Item 4", quantity: "10", zone: "Zone 3" },
    { name: "Item 5", quantity: "20", zone: "Zone 2" },
    { name: "Item 6", quantity: "5", zone: "Zone 3" },
  ];
  const [items, setItems] = useState(dataList);

  function handleSearch() {
    if (!(searchItem === "")) {
      const newItemsList = items.filter((el) => el.name.includes(searchItem));
      if (newItemsList.length === 0) {
      }
      setItems(newItemsList);
    } else {
      setItems(dataList);
    }
  }
  function deleteItem(zone, item) {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(`Deleted ${item} from ${zone}`, "", "success");
        const newItemsList = items.filter(
          (el) => !(el.name === item && el.zone === zone)
        );
        console.log(`Deleting ${item} in zone ${zone}`);
        setItems(newItemsList);
      } else if (result.isDenied) {
      }
    });
  }

  return (
    <div className="itemsList">
      <h1 className="storeHeading">General Store</h1>

      <Button id="hide-on-mobile" onClick={() => props.handleShow()}>
        Zones
      </Button>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Item"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </Button>
      </InputGroup>

      {items.length === 0 ? (
        <h2 className="no-availability"> No items available for this zone.</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Zone Name</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((el) => {
              if (props.selectedZone === "All Zones") {
                return (
                  <tr>
                    <td>{el.zone}</td>
                    <td>{el.name}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {" "}
                        <Button
                          style={{
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "2em",
                            height: "2em",
                            textAlign: "center",
                          }}
                          variant="secondary"
                        >
                          -
                        </Button>
                        <div>{el.quantity}</div>
                        <div>
                          {el.quantity < 3 ? (
                            <BsFillArrowDownCircleFill title="Running low" />
                          ) : (
                            <></>
                          )}
                        </div>
                        <Button
                          variant="secondary"
                          style={{
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "2em",
                            height: "2em",
                            textAlign: "center",
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteItem(el.zone, el.name)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              }
              if (el.zone === props.selectedZone) {
                return (
                  <tr>
                    <td>{el.zone}</td>
                    <td>{el.name}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Button
                          style={{
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "2em",
                            height: "2em",
                            textAlign: "center",
                          }}
                          variant="secondary"
                        >
                          -
                        </Button>
                        <div>{el.quantity}</div>
                        <div>
                          {el.quantity < 3 ? (
                            <BsFillArrowDownCircleFill title="Running low" />
                          ) : (
                            <></>
                          )}
                        </div>
                        <Button
                          style={{
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "2em",
                            height: "2em",
                            textAlign: "center",
                          }}
                          variant="secondary"
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteItem(el.zone, el.name)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ItemsList;
