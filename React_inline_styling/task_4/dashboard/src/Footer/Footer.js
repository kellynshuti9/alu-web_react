import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function Footer() {
    return (
        <div>
            <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
        </div>
    );
}

export default Footer;