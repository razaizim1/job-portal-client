import React from 'react';
import FeaturedJobs from '../../components/FeaturedJobs';
import { useLoaderData } from 'react-router';

const Home = () => {
const jobs = useLoaderData();
    return (
        
        <div>
            <h2>This is home</h2>
            <FeaturedJobs jobs={jobs} ></FeaturedJobs>
        </div>
    );
};

export default Home;