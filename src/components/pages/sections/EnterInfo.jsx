import React from 'react';
import TextField from '@mui/material/TextField';

const EnterInfo = () => {
    return (
        <div style={{ justifyContent: 'center', display: 'grid' }}>
            <TextField id="standard-basic" label="Name" variant="standard" color="secondary" />
            <TextField id="standard-basic" label="Email" variant="standard" color="secondary" />
            <TextField id="standard-basic" label="Password" variant="standard" color="secondary" />
        </div>
    )
}

export default EnterInfo
