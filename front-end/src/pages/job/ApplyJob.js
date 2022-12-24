import { useNavigate } from "react-router-dom";

const ApplyJob = ()=>{
    const navigate = useNavigate();
    const submitMyForm = ()=>{
          navigate('/home');
    }
    return(
        <div>
            <form>
      <h2>Job Application Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" className="form-control" id="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="coverLetter">Cover Letter</label>
        <textarea className="form-control" id="coverLetter" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="resume">Resume</label>
        <input type="file" className="form-control-file" id="resume" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitMyForm}>Submit</button>
    </form>
        </div>

    );
}
export default ApplyJob;