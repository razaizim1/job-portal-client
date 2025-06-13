import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const UseAuth = () => {
    const authInfo = useContext(AuthContext);
    return authInfo
};

export default UseAuth;