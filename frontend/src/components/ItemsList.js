import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./../styles/ItemsList.css";
import Table from "react-bootstrap/Table";

function ItemsList() {
  const [searchItem, setSearchItem] = useState("");
  const dataList = [
    { name: "Item 1", quantity: "30", zone: "Zone1" },
    { name: "Item 2", quantity: "15", zone: "Zone2" },
    { name: "Item 3", quantity: "50", zone: "Zone1" },
    { name: "Item 4", quantity: "10", zone: "Zone3" },
    { name: "Item 5", quantity: "20", zone: "Zone2" },
    { name: "Item 6", quantity: "5", zone: "Zone3" },
  ];
  const [items, setItems] = useState(dataList);

  function handleSearch() {
    if (!(searchItem === "")) {
      const newItemsList = items.filter((el) => el.name === searchItem);
      if (newItemsList.length === 0) {
      }
      setItems(newItemsList);
    }
  }
  function deleteItem(zone, item) {
    alert("Are you sure you want to delete this data?");
    const newItemsList = items.filter(
      (el) => !(el.name === item && el.zone === zone)
    );
    console.log(`Deleting ${item} in zone ${zone}`);
    setItems(newItemsList);
  }

  return (
    <div className="itemsList">
      <h1 className="storeHeading">Store Name</h1>
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
              return (
                <tr>
                  <td>{el.zone}</td>
                  <td>{el.name}</td>
                  <td>{el.quantity}</td>
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
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ItemsList;
