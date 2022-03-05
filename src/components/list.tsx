import React, {useEffect, useState} from 'react';
import axios from "axios";

interface postProps {
    userId: number,
    id: number,
    title: string,
}

function List() {
    const [posts, setPosts] = useState<postProps[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
            setPosts(result.data);
        })
    }, [])

    return (
        <div className="App">
            { posts.map((post) => (<div key={ post.id }> { post.title }</div>)) }
        </div>
    );
}

export default List;
