import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import project from './project.svg'
import ProjcetCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'

function Home() {
  const [login, setlogin] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setlogin(true)
    } else {
      setlogin(false)
    }
    getHomeProjects()
  }, [])
  const [homeProjects,setHomeProjects] = useState([])

  const getHomeProjects = async()=>{
    const result = await homeProjectAPI()
    // console.log(result.data);
    if (result.status === 200) {
      setHomeProjects(result.data)
    }else{
      // console.log(result);
      // console.log(result.responese.data);
      console.log(result);
    }
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col sm={12} md={6} className='p-5 align-items-center'>
            <h1 style={{ fontSize: "80px" }}><i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus quasi minima, nihil, optio facilis veritatis ipsam sit maxime doloribus quibusdam magnam amet voluptates laboriosam qui iusto, natus itaque provident.</p>

            {
              login?
              <Link to={'/dashboard'} className='btn btn-primary'> Manage Projects</Link>:
              <Link to={'/login'} className='btn btn-primary'> Explore More</Link>
            }

          </Col>
          <Col sm={12} md={6}>
            <img src={project} className='w-75' alt="illustation" />
          </Col>

        </Row>
      </div>
      <div className="all-project m-5" >
        <h1 className='text-center'>Explore our project</h1>
        <marquee>
          <Row>
            {
              homeProjects.length>0?homeProjects.map((project,index)=>(
                <Col key={index+1} sm={2} md={6} lg={4}>
                  <ProjcetCard project={project} />
                </Col>
              )):<div className='text-light'>LOGIN TO VIEW ALL PROJECTS</div>
            }
            
          </Row>
        </marquee>
      </div>
      <div className="text-center"><Link to={'/projects'}>View More Projects</Link></div>
    </>
  )
}

export default Home