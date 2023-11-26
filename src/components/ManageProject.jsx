import { useState, React, useEffect, useContext } from 'react'
import { Alert, Card } from 'react-bootstrap'
import AddProject from './AddProject'
import { userProjectAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext } from '../contexts/ContextShare'
import EditProject from './EditProject'


function ManageProject() {
    const { addProjectResponse } = useContext(addProjectResponseContext)
    const [userProjects, setUserProjects] = useState([])
    const getUserProject = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`
            }
            const result = await userProjectAPI(reqHeader)
            if (result.status === 200) {
                setUserProjects(result.data)
            } else {
                console.log(result);
                toast.warning(result.response.data)
            }
        }

    }
    useEffect(() => {
        getUserProject()
    }, [addProjectResponse])
    return (
        <>
            <Card>
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ fontSize: "30px" }} className='fw-bolder'> MY PROJECT</Card.Title>
                        <div variant="success"><AddProject /></div>
                    </div>
                    {
                        addProjectResponse.title? <Alert className='bg-primary' dismissible><span className='fw-bolder'>{addProjectResponse.title}</span>  Added successfully</Alert>:null
                    }
                    {
                        userProjects?.length > 0 ? userProjects.map((project, index) => (
                        <Card.Text className='mt-1 border p-2 rounded border-success d-flex justify-content-between align-items-center'>
                            <h6>{project?.title}</h6>
                            <div className='d-flex align-items-center'>
                                <a href={`${project.github}`} rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-xl" style={{ color: "#04eb00" }}></i></a>
                                <div><EditProject project={project}/></div>
                                <i className="fa-solid fa-trash fa-xl" style={{ color: "#ff1a3c" }}></i>
                            </div>
                        </Card.Text>)):
                            <Card.Text className='mt-5 border p-3 rounded border-success d-flex justify-content-between'>
                                <h5>No Project Uploaded</h5>
                            </Card.Text>
                    }
                </Card.Body>
            </Card>
            <ToastContainer position='top-right' autoClose={2000} theme='colored' />
        </>
    )
}

export default ManageProject