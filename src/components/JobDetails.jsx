import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const JobDetails = () => {
    const { userInfo } = useContext(AuthContext)
    const job = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        company_logo,
        hr_name,
        description
    } = job;

    if (!userInfo) {
        <div className='w-full m-auto text-center flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="">
                    <img
                        src={company_logo}
                        alt={name}
                        className=""
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="badge bg-green-600 text-white text-lg">
                            {category}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{hr_name}</h1>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-lg mb-6">{description}</p>
                    <p className="text-lg mb-6">{jobType}</p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-lg">
                            <BsCalendar2DateFill className='text-green-600 text-xl' />
                            <span className="font-medium">Start Date:</span> {applicationDeadline}
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <FaLocationDot className='text-green-600 text-xl' />
                            <span className="font-medium">Location:</span> {location}
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <VscOrganization className='text-green-600 text-xl' />
                            <span className="font-medium">Organizer:</span> {salaryRange.min}
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center mt-8">
                <Link to={`/applyjobs/${_id}`} className="link link-primary text-lg">
                    <button className='btn'>Apply For This Job</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;