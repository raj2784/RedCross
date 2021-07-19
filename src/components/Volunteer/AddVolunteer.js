import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

export const AddVolunteer = () => {
    let history = useHistory();
    const [volunteer, setVolunteer] = useState({
        fullName: "",
        email: "",
        mobile: "",
        age: "",
        bloodGroup: "",
        address: ""
    });
    const { fullName, email, mobile, age, bloodGroup, address } = volunteer;
    const onInputChange = e => {
        setVolunteer({ ...volunteer, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (volunteer.fullName === "") {
            alert("Name fields are required!!");
            return;
        }
        await axios.post("https://localhost:44385/api/volunteer", volunteer);
        history.push("/");

    }
    return (
        <div className="container" style={{ marginTop: 50 }}>
            <div className="w-75 mx-auto shadow p-5">
                <h3 >Add Volunteer</h3>
                <form onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Full Name"
                            name="fullName"
                            value={fullName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Mobile"
                            name="mobile"
                            maxlength="10"
                            value={mobile}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Age"
                            name="age"
                            value={age}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Blood-Group"
                            name="bloodGroup"
                            value={bloodGroup}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block mt-2">Add</button>
                </form>
            </div>
        </div >
    )
}

export default AddVolunteer;