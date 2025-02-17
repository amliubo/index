import React from 'react';
import './Copyright.css';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="copyright-container">
            <p>&copy; {currentYear} DeepCraft. All Rights Reserved.</p>
        </div>
    );
};

export default Copyright;
