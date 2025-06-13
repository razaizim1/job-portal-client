import React, { Suspense } from 'react';
import ApplicationList from '../../components/ApplicationList';
import { applicatonsData } from '../../api/applicatoinsApi';
import UseAuth from '../../hooks/useAuth';


const MyApplications = () => {
    const {userInfo} =  UseAuth();
    console.log(userInfo.accessToken);
    return (
        <div>
            <Suspense fallback={'Applications data loading...'}>
                <ApplicationList applicatonsData={applicatonsData(userInfo.email, userInfo.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;