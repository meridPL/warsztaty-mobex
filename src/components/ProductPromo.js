import React from 'react';
import { inject, observer } from 'mobx-react';


const Root = ({name}) => (
    <span className="a">
        {name}
    </span>
)

export default Root;