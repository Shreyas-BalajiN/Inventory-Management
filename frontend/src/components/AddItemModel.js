import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function AddItemModel(props) {
  const[zoneName,setZoneName] = useState(props.zoneName);
  const [itemName, setItemName] = useState("");
  const [quantity,setQuantity] = useState("");

  const handleAddItems = () => {

    console.log("Item name:", itemName);
    props.itemAdder({
        zone:zoneName,
        name:itemName,
        quantity
    });

    setItemName("");
    props.onHide();

    alert(`Item: ${itemName} added Successfully!`);
  };

  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Item Name
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Group controlId="formZoneName" className="mb-3">
        <Form.Label>Zone Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Zone Name"
          value={zoneName}
          onChange={(e) => setZoneName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formItemName" className="mb-3">
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formQuantity" className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>

      <Button variant="outline-secondary" onClick={handleAddItems}>
        Add
      </Button>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default AddItemModel;
