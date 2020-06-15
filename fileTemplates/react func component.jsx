// @flow
import React from 'react';
import {block, element} from '@redneckz/react-bem-helper';

import styles from './${NAME}.scss';

export default block('${NAME}', {styles});

function ${NAME}({className}) {
    return (<div className={className}>
        bla-bla
    </div>);
}