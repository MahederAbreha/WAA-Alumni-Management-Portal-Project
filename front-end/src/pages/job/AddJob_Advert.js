import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import Job from '../../service/job';


const AddJobadvert = () => {
    const [jobAdverts, setJobAdverts] = useState([])
    const [errorMessage, setErrorMessage] = useState()
    const [jobAdvert, setJobAdvert] = useState({
        jobPosition: '',
        jobDescription: '',
        city: '',
        minSalary: '',
        employer: '',
        jobType: '',
        releaseDate: '',
        applicationDeadline: '',
        jobAdvertStatus: ''
    })

    const ref = useRef();



  

    const onSubmit = (e) => {
        e.preventDefault();
        const advertData = {
            jobPosition: jobAdvert.jobPosition,
            jobDescription: jobAdvert.jobDescription,
            city: jobAdvert.city,
            minSalary: jobAdvert.minSalary,
            employer: jobAdvert.employer,
            jobType: jobAdvert.jobType,
            releaseDate: jobAdvert.releaseDate,
            applicationDeadline: jobAdvert.applicationDeadline,
            jobAdvertStatus: jobAdvert.jobAdvertStatus
        }
        Job.addAll(advertData).then(resp => {
            console.log(resp.data);
        }
        ).catch((err) => {
            setErrorMessage('Unexpected error!')
            console.log(err);
        }
        )
    }


    return ( 
        <div className="container mt-5">
            <button className="btn btn-primary" onClick={() => setJobAdverts([...jobAdverts, {id: jobAdverts.length, name: ''}])} style={{ backgroundColor: 'cadetblue' }}>Add</button>
            <Form ref = {ref} >
                {jobAdverts.map((jobAdvert, index) => (
                    <div key={index}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Job Position</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Position" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Min Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Min Salary" />
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Employer</Form.Label>
                            <Form.Control type="text" placeholder="Enter Employer" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Job Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Type" />
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter Release Date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Application Deadline</Form.Label>
                            <Form.Control type="date" placeholder="Enter Application Deadline" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Job Advert Status</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Advert Status" />
                        </Form.Group>
                    
                        </div>
                ))}
                <br/>
                <Button variant="primary" type="submit" onSubmit={ onSubmit } style={{ backgroundColor: 'cadetblue' }}>
                    Submit
                </Button>
            </Form>

        </div>
     );
}
 
export default AddJobadvert;