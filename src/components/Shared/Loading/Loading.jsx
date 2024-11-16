import React from 'react';
import loading from '../../../assets/loading.gif'
const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <img className="w-72 h-72" src={loading} alt="" />
        </div>
    );
};

export default Loading;