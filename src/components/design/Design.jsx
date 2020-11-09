import React, {useState} from "react";

import "./Design.scss";

import Draggable from "react-draggable";
import {Button, FormControl, Modal} from "react-bootstrap";

const Design = () => {

    const [input, setInput] = useState("");
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const onStart = () => {
        setData({...data, activeDrags: data.activeDrags + 1});
    };

    const onStop = () => {
        setData({...data, activeDrags: data.activeDrags - 1});
    };

    const dragHandlers = {onStart: onStart, onStop: onStop};

    return (
        <>
            <div className="design">
                <div className="tshirt-container">
                    <img src={require("../../images/t-shirt.jpeg").default} alt=""/>
                    <div className="text-container">
                        {
                            text.length <= 0 && <Button onClick={handleShow} className="text-f-btn">+</Button>
                        }
                        {
                            text.length > 0 && <Draggable bounds="parent" {...dragHandlers}>
                                <div className="draggable-wrapper">
                                    <span onClick={() => {
                                        setText("");
                                        setInput("");
                                    }}>&times;</span>
                                    <h2>{text}</h2>
                                </div>
                            </Draggable>
                        }
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Write Text</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        placeholder="Text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        setText(input);
                        handleClose();
                    }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Design;
