import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ loading }) => {
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <ClipLoader size={50} loading={loading} />
        </div>
    )
}

export default Loading;
