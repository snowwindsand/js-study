/**
 * Created by Administrator on 2016/7/4.
 */

import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    addUser,
    minusUser
} from '../actions';
import HelloUser from '../components/HelloUser'


/*let UserList = ({
    dispatch,
    user
}) => {
    return (
        <div>
            <button onClick={()=>dispatch(Actions.addUser())} value="+"/>
            <span>|</span>
            <button onclick={()=>dispatch(Actions.minusUser())} value="-"/>
            <HelloUser user={user}/>
        </div>
    )
}*/
class UserList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            dispatch,
            adduser,
            minususer
        } = this.props;
        return (
            <div>
            <button onClick={()=>dispatch(addUser())}>+</button>
            <span>|</span>
            <button onClick={()=>dispatch(minusUser())}>-</button>
        <HelloUser adduser={adduser} minususer={minususer}/>
        </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        adduser: state.ausers,
        minususer: state.musers
    }
}

export default connect(mapStateToProps)(UserList);