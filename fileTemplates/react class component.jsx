import React from 'react';
import PropTypes from 'prop-types';
import {block, element} from '@redneckz/react-bem-helper';

import styles from './${NAME}.scss';

@block('${NAME}', {styles})
export default class ${NAME} extends React.PureComponent {
    static propTypes = {
    };

    static defaultProps = {
    };

    render() {
        const {
            className
        } = this.props;
        return (<div className={className}>
            bla-bla
        </div>);
    }
}
