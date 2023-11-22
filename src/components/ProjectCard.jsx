import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import project_thumb from './Project_thumb.png'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/baseUrl';

function ProjectCard({project}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='shadow btn' onClick={handleShow}>
        <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project?.projectThumb}`:project_thumb}/>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal size={'lg'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
              <Col md={5} >
                <img src={project_thumb} className='img-fluid' alt="" />
              </Col>
            <Col md={7} className='w-100' >
              <h2>{project.title}</h2>
              <p>{project.overview}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='justify-content-start'>
          <Link className='me-5' to={project?.website}><i class="fa-solid fa-link fa-2xl"></i></Link>
          <Link to={project?.github}><i class="fa-brands fa-github-alt fa-2xl"></i></Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard