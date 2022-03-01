import React, { useState } from 'react';

interface Test2Props {
    input: string;
}

const Test2: React.FC<Test2Props> = (props) => {
    const { input } = props;

    return(
        <>
            { input }
       </>
    );
};

export default Test2;