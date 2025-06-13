import React from 'react';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaLocationDot, FaMoneyBillWave } from "react-icons/fa6";
import { Link } from 'react-router';

const FeatureJob = ({ job }) => {

    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        company_logo
    } = job;

    return (
        <div className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">
            <div className="p-4 justify-start items-start">
                <img
                    src={company_logo}
                    alt={title}
                    className=""
                />
            </div>
            <div className="card-body px-6 pb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>

                <div className="mb-3">
                    <span className="badge bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>

                <p className="text-base text-gray-700 mb-2">{jobType}</p>

                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <BsCalendar2DateFill className="text-green-600" />
                        <span>{applicationDeadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-green-600" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMoneyBillWave className="text-green-600" />
                        <span>${salaryRange?.min} - ${salaryRange?.max}</span>
                    </div>
                </div>

                <Link to={`/jobdetails/${job._id}`}>
                    <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeatureJob;
