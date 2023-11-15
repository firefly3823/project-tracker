import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';


function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="" className='btn-outline-success' onClick={handleShow}>
        ADD PROJECT
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>PROJECT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6} lg={6} >
             <label> 
              <input type="file" style={{display:"none"}} />
              <img src="https://placehold.co/400x350" alt="" srcset="" />
              </label>
            </Col>
            <Col className='ps-4 d-flex flex-column justify-content-center' sm={12} md={6} lg={6}>
                <div className='mb-4'><input type="text" className='form-control' placeholder='Project title' name="" id="" /></div>
              <div className='mb-4'><input type="text" className='form-control' placeholder='Language used' name="" id="" /></div>
              <div className='mb-4'><input type="text" className='form-control' placeholder='Github Link' name="" id="" /></div>
              <div className='mb-4'><input type="text" className='form-control' placeholder='Website Link' name="" id="" /></div>
            </Col>
          </Row>
          <div className='mt-4'><input type="text" className='form-control' placeholder='Project OverView' name="" id="" /></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject