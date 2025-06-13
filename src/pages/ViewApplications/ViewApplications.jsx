import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id);

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application status updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">
                Total Applications ({applications.length}) for Job ID: {job_id}
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Resume Link</th>
                            <th className="border px-4 py-2">Applied Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr key={app._id || index}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{app.userId || 'N/A'}</td>
                                <td className="border px-4 py-2">{app.email || 'N/A'}</td>
                                <td className="border px-4 py-2">
                                    <a href={app.resumeLink} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                                        View Resume
                                    </a>
                                </td>
                                <td>
                                    <select onChange={e => handleStatusChange(e, app._id)} defaultValue={app.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
