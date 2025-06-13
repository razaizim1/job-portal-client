import React, { Suspense } from 'react';
import UseAuth from '../../hooks/useAuth';
import JobLists from '../../components/JobLists';
import { jobCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {userInfo} = UseAuth();


    return (
        <div>
            <h2>My Posted Jobs</h2>

            <Suspense fallback={'Jobs data loading...'}>
            <JobLists jobCreatedByPromise={jobCreatedByPromise(userInfo.email)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;