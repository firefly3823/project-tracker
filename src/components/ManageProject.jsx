import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import AddProject from './AddProject'


function ManageProject() {
    return (
        <>
            <Card>
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{fontSize:"30px"}} className='fw-bolder'> MY PROJECT</Card.Title>
                        <div variant="success"><AddProject/></div>
                    </div>
                    <Card.Text className='mt-5 border p-3 rounded border-success d-flex justify-content-between'>
                        <h5>PROJECT TITLE</h5>
                        <div>
                            <i class="fa-brands fa-github fa-2xl pe-4" style={{color: "#04eb00"}}></i>
                            <i class="fa-solid fa-eye fa-2xl pe-4" style={{ color: "#04eb00" }}></i>
                            <i class="fa-solid fa-trash fa-2xl" style={{ color: "#ff1a3c" }}></i>
                        </div>
                    </Card.Text>
                    
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default ManageProject