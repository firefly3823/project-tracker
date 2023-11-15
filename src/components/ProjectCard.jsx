import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import project_thumb from './Project_thumb.png'
import { Link } from 'react-router-dom';

function ProjectCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='shadow btn' onClick={handleShow}>
        <Card.Img variant="top" src={project_thumb} />
        <Card.Body>
          <Card.Title>Project Fair</Card.Title>
        </Card.Body>
      </Card>
      <Modal size={'lg'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
              <Col md={6} >
                <img src={project_thumb} className='img-fluid' alt="" />
              </Col>
            <Col md={6} >
              <h2>Project Title</h2>
              <p>Project OverView: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt alias quod adipisci quasi, nesciunt consequuntur, provident distinctio dignissimos dolor vitae placeat a amet! Repellat et fugiat voluptatem iusto non!</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='justify-content-start'>
          <Link className='me-5' to={'/home'}><i class="fa-solid fa-link fa-2xl"></i></Link>
          <Link to={'/home'}><i class="fa-brands fa-github-alt fa-2xl"></i></Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard