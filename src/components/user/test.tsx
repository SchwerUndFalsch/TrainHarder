import React, {useEffect, useState} from 'react';

const Test: React.FC = () => {
    const [posts, setPosts] = useState();


    useEffect(() => {
        const axios = require('axios').default;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response: any) {
                // handle success
                setPosts(response.data);
            })
    }, [])

    return(
        <>
       </>
    );
};

export default Test;