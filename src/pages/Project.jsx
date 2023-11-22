import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../services/allAPI'

function Project() {
  const [allProjects, setAllProjects] = useState([])
  const getAllProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json","Authorization":`bearer ${token}`
      }
      const result = await allProjectsAPI(reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      
      }
    }
  }
  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()
  },[])

  return (
    <>
      <Header/>
      <div className='w-100 text-center'>

        <h3>All Projects</h3>
        <Form className='w-100 mt-5 d-flex justify-content-center'>
          <Form.Group className="mb-3 w-50 d-flex " controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Search project by techonoloy" />
            <Button className='btn btn-light ms-3'><i class="fa-solid fa-magnifying-glass fa-2xl"></i></Button>
          </Form.Group>
          </Form>

          <Row style={{width:"100%"}} className='container m-5'>
            {
              allProjects.length>0?allProjects.map((project,index)=>(
                <Col key={index} sm={12} md={6} lg={4}>
                  <ProjectCard project={project} />
                </Col>
              )):null
            }
          </Row>
      </div>
    </>
  )
}

export default Project