/**
 * Created by Administrator on 2016/7/4.
 */

import React, {
	PropTypes
} from 'react';
const HelloUser = ({
	adduser,
	minususer
}) => (
	<div>
        Hello, {adduser} : {minususer} !
    </div>
)

HelloUser.propTypes = {
	adduser: PropTypes.number.isRequired,
	minususer: PropTypes.number.isRequired
}

export default HelloUser;