import React from 'react';
import {connect} from 'react-redux';

import List from "../../components/List"

const InProgress = ({items}) => {
    return (
        <List items={items}/>
    )
};

const mapStateToProps = state => ({
    items: state.items.filter(item => !item.done)
});

export default connect(mapStateToProps)(InProgress);