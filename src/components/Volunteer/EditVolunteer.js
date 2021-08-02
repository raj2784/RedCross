import { useHistory, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const EditVolunteer = () => {
    let history = useHistory();
    const { id } = useParams();
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
            alert("Name fields is required!!");
            return;
        }
        await axios.put(`https://localhost:44385/api/volunteer/${id}`, volunteer);
        history.push("/");
    }
    const getVolunteerById = async () => {
        const result = await axios.get(`https://localhost:44385/api/volunteer/${id}`);
        console.log(result.data);
        setVolunteer(result.data);
    }
    useEffect(() => {
        getVolunteerById()
    }, []);

    return (
        <div className="container" style={{ marginTop: 50 }}>
            <div className="w-75 mx-auto shadow p-5">
                <h3>Edit Volunteer</h3>
                <form onSubmit={e => onSubmit(e)} >
                    <div className="form-group m-2">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Full Name"
                            name="fullName"
                            value={fullName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group m-2">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group m-2">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Mobile"
                            name="mobile"
                            maxLength="10"
                            value={mobile}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group m-2">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Age"
                            name="age"
                            value={age}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group m-2">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Blood-Group"
                            name="bloodGroup"
                            value={bloodGroup}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group m-2">
                        <input
                            type="text"
                            className="form-control from-control-xs"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block m-2">Update</button>
                </form>
            </div>
        </div >
    )
}

export default EditVolunteer;