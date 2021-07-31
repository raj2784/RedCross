import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    const [volunteers, setVolunteer] = useState([]);

    useEffect(() => {
        getAllVolunteer();
    }, []);

    const getAllVolunteer = async () => {
        const result = await axios.get("https://localhost:44385/api/volunteer");
        setVolunteer(result.data.reverse());
    };
    const deleteVolunteer = async id => {
        const result = await axios.delete(`https://localhost:44385/api/volunteer/${id}`);
        getAllVolunteer();
    }
    return (
        <div className="container">
            <div className="py-4">

                <Link className="btn btn-primary mb-2" exact to="/volunteer/add" style={{ marginLeft: 1170 }}>AddVolunteer</Link>


                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th className="col">#</th>
                            <th className="col">Full-Name</th>
                            <th className="col">Email</th>
                            <th className="col">Mobile</th>
                            <th className="col">Age</th>
                            <th className="col">Blood-Group</th>
                            <th className="col">Address</th>
                            <th className="col">Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteers.map((volunteer, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{volunteer.fullName}</td>
                                    <td>{volunteer.email}</td>
                                    <td>{volunteer.mobile}</td>
                                    <td>{volunteer.age}</td>
                                    <td>{volunteer.bloodGroup}</td>
                                    <td>{volunteer.address}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm m-1">View</Link>
                                        <Link className="btn btn-primary btn-sm m-1" exact to={`/volunteer/edit/${volunteer.id}`}>Edit</Link>
                                        <Link className="btn btn-danger btn-sm m-1" onClick={() => deleteVolunteer(volunteer.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
