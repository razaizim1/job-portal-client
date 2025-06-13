import React from 'react';
import { Link } from 'react-router';
import FeatureJob from './FeatureJob';

const FeaturedJobs = ({ jobs }) => {

    return (
        <div>
            <div className="mb-10 text-center">
                <h2 className="text-2xl font-semibold sm:text-4xl dark:text-white">Popular Ongoing Groups</h2>
                <p className="mt-4 mb-8 dark:text-gray-600 dark:text-white">Discover a selection of our most active and engaging groups. Join like-minded individuals and dive into meaningful discussions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {jobs.map(job => <FeatureJob key={job._id} job={job}></FeatureJob>)}
            </div>
        </div>


    );
};

export default FeaturedJobs;