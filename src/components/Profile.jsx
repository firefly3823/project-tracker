import React, { useEffect, useState } from 'react'
import { Button, Card, Collapse, Form } from 'react-bootstrap'
import avatar from './avatar.svg'
import { BASE_URL } from '../services/baseUrl'


function Profile() {
    const [userProfile, setUserprofile] = useState({
        username: "", email: "", passwrd: "", profile: "", github: "", linkedin: ""
    })
    const [existImage, setExistImage] = useState("")
    const [preview, setPreview] = useState("")
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserprofile({ ...userProfile, username: user.username, email: user.email, passwrd: user.passwrd, profile: "", github: user.github, linkedin: user.linkedin })
        setExistImage(user.profile)
    }, [])

    useEffect(()=>{
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        }else{
            setPreview("")
        }
    },[userProfile.profile])

    const [open, setOpen] = useState(false);

    return (
        <Card className='p-4'>
            <div className="d-flex justify-content-between">
                <h5>PROFILE</h5>
                <Button onClick={() => setOpen(!open)} variant="success" className="btn-outline-success"><i className="fa-solid fa-check" style={{ color: "#ffff" }}></i></Button>
            </div>
            {/* <Collapse in={open}> */}
            <label className='text-center'>
                <input style={{ display: "none" }} type="file" onChange={(e) => setUserprofile({...userProfile, profile:e.target.files[0]})} name="" id="" />
                {
                    existImage!==""?
                        <img src={preview?preview:`${BASE_URL}/uploads/${existImage}`} className="img-fluid" width={'200px'} alt="" />:
                        <img src={preview?preview:avatar} alt="profile" className="img-fluid" width={'200px'} />
                }

                {/* <img src={avatar} className="img-fluid" width={'200px'} alt="" /> */}
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