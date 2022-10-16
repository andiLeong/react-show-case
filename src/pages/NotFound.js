import React, {useEffect} from 'react';

function NotFound(props) {
    useEffect(() => {
        console.log('not found')
    },[])
    return (
        <div>Not found here</div>
    );
}

export default NotFound;