import React from 'react';
import notFound from '../../Assets/Image/21_404-error.webp';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" width="100%" height='100%' />
        </div>
    );
};

export default NotFound;