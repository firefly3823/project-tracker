import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';


function EditProject({ project }) {
    const [projectDetails, setProjectDetails] = useState({
        title: "", languages: "", overview: "", github: "", website: "", projectThumb: ""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}> <i class="fa-regular fa-pen-to-square fa-xl" style={{ color: "#04eb00" }}></i></button>
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
                                <input type="file" style={{ display: "none" }} />
                                <img className='img-fluid' src={`${BASE_URL}/uploads/${project.projectThumb}`} alt="thumb" />
                            </label>
                        </Col>
                        <Col className='ps-4 d-flex flex-column justify-content-center' sm={12} md={6} lg={6}>
                            <div className='mb-4'><input type="text" className='form-control' placeholder='Project title' value={project.title} id="" /></div>
                            <div className='mb-4'><input type="text" className='form-control' placeholder='Language used' value={project.language} id="" /></div>
                            <div className='mb-4'><input type="text" className='form-control' placeholder='Github Link' value={project.github} id="" /></div>
                            <div className='mb-4'><input type="text" className='form-control' value={project.website} placeholder='Website Link' name="" id="" /></div>
                        </Col>
                    </Row>
                    <div className='mt-4'><input type="text" className='form-control' placeholder='Project OverView' value={project.overview} id="" /></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button onClick={handleClose} variant="primary">Apply Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditProject