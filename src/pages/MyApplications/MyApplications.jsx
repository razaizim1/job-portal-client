import React, { Suspense } from 'react';
import ApplicationList from '../../components/ApplicationList';
import { applicatonsData } from '../../api/applicatoinsApi';
import UseAuth from '../../hooks/useAuth';


const MyApplications = () => {
    const {userInfo} =  UseAuth();
    console.log(userInfo.email);
    return (
        <div>
            <Suspense fallback={'Applications data loading...'}>
                <ApplicationList applicatonsData={applicatonsData(userInfo.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;