import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ManageProject from '../components/ManageProject'
import Profile from '../components/Profile'


function Dashboard() {
  return (
    <>
      <Header insideDashboard/>
      <h3 className='m-4'>WELCOME <span className='text-success'>USER</span></h3>
      <Row className='m-3'>
        <h1></h1>
        <Col sm={12} md={8}>
          <ManageProject/>
        </Col>
        
        <Col sm={12} md={4}>
            <Profile/>
        </Col>

      </Row>

    </>
  )
}

export default Dashboard