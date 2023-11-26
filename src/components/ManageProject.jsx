import { useState, React, useEffect, useContext } from 'react'
import { Card } from 'react-bootstrap'
import AddProject from './AddProject'
import { userProjectAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext } from '../contexts/ContextShare'


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
                        userProjects?.length > 0 ? userProjects.map((project, index) => (<Card.Text className='mt-5 border p-3 rounded border-success d-flex justify-content-between'>
                            <h6>{project?.title}</h6>
                            <div>
                                <a href={`${project.github}`} rel="noreffer" target="_blank"><i className="fa-brands fa-github fa-xl pe-4" style={{ color: "#04eb00" }}></i></a>
                                <i class="fa-regular fa-pen-to-square fa-xl pe-4" style={{ color: "#04eb00" }}></i>
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