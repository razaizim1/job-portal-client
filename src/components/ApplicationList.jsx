import React, { use } from 'react';

const ApplicationList = ({applicatonsData}) => {
    const applications = use(applicatonsData);
    return (
        <div>
            <h1>Total application : {applications.length}</h1>
        </div>
    );
};

export default ApplicationList;