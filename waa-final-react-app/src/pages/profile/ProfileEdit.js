const  ProfileEdit= () => {

    const [user, setUser] = useState( {} );
    const [loading, setLoading] = useState( false );
    const currentUser = useSelector( state => state.user );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = ( e ) => {
        const { name, value } = e.target;

        if (name === 'firstName' || name === 'lastName') {
            setUser((prevState => {
                const newUser = { ...prevState };
                newUser[name] = value;
                return newUser;
            }));
        } 
        if (name === 'state' || name === 'city') {
            if (user.address) {
                setUser((prevState => {
                    const newAddress = { ...prevState };
                    newAddress.address[name] = value;
                    return newAddress;
                }));
            } else {
                setUser((prevState => {
                    const newAddress = { ...prevState };
                    newAddress.address = { [name]: value };
                    return newAddress;
                }));
            }
        }
    }


    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Edit Profile</h1>
                    <form name="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                            {submitted && !user.firstName &&
                                <div className="invalid-feedback">First Name is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                            {submitted && !user.lastName &&
                                <div className="invalid-feedback">Last Name is required</div>
                            }
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" value={user.address} onChange={handleChange} className={'form-control' + (submitted && !user.address ? ' is-invalid' : '')} />
                            {submitted && !user.address &&
                                <div className="invalid-feedback">Address is required</div>
                            }   
                        </div>
                            
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" name="city" value={user.city} onChange={handleChange} className={'form-control' + (submitted && !user.city ? ' is-invalid' : '')} />
                            {submitted && !user.city &&
                                <div className="invalid-feedback">City is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input type="text" name="state" value={user.state} onChange={handleChange} className={'form-control' + (submitted && !user.state ? ' is-invalid' : '')} />
                            {submitted && !user.state &&
                                <div className="invalid-feedback">State is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Zip</label>
                            <input type="text" name="zip" value={user.zip} onChange={handleChange} className={'form-control' + (submitted && !user.zip ? ' is-invalid' : '')} />
                            {submitted && !user.zip &&
                                <div className="invalid-feedback">Zip is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Update
                            </button>
                            <Link to="/profile" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>


     );

}
 
export default ProfileEdit;