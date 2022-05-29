import React, { useState } from 'react'
import { InputNumber } from 'antd';

const Participants = () => {

const [participants, setParticipants] = useState(undefined);
const handleChange = (event) => {
    setParticipants(event)
}

    return (
        <InputNumber min={1} max={10} onChange={handleChange} />
    )
}

export default Participants