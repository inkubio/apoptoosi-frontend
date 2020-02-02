import React, {useState} from 'react';
import strings from '../../utils/translations';

import './success.css';
import {Link} from 'react-router-dom';

const Success = (props)=> {

    return <div className={'Base'}>
            <p className={'Success-text'}>
                {strings.successInfo}
            </p>
    </div>
};

export default Success;