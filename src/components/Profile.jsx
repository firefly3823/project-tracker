import React, { useState } from 'react'
import { Button, Card, Collapse, Form } from 'react-bootstrap'
import avatar from './avatar.svg'


function Profile() {

    const [open, setOpen] = useState(false);

    return (
        <Card className='p-4'>
            <div className="d-flex justify-content-between">
                <h5>PROFILE</h5>
                <Button onClick={() => setOpen(!open)} variant="success" className="btn-outline-success"><i class="fa-solid fa-check" style={{ color: "#ffff" }}></i></Button>
            </div>
            {/* <Collapse in={open}> */}
                <label className='text-center'>
                    <input style={{ display: "none" }} type="file" name="" id="" />
                    <img src={avatar} className="img-fluid" width={'300px'} alt="" />
                </label>
                <Form className='mt-4'>
                    <Form.Group>
                        <Form.Control type="text" placeholder="GitHub" />
                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <Form.Control required type="text" placeholder="LinkedIn" />
                    </Form.Group>
                </Form>
            {/* </Collapse> */}
        </Card>
    )
}

export default Profile