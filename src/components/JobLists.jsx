import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({ jobCreatedByPromise }) => {
    const jobs = use(jobCreatedByPromise);

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">
                Jobs Created by You: {jobs.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Company</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Posted Date</th>
                            <th className="border px-4 py-2">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job.id || index}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{job.title}</td>
                                <td className="border px-4 py-2">{job.company}</td>
                                <td className="border px-4 py-2">{job.location}</td>
                                <td className="border px-4 py-2">{job.deadline}</td>
                                <td className="border px-4 py-2"><Link to={`/applications/${job._id}`} >View Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobLists;
