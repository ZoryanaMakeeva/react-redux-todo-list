import React, {Component} from 'react';
import {connect} from "react-redux";
import {addItem, removeItem, completeItem} from "../../actions";
import ItemInput from "../../components/ItemInput";
import List from "../../components/List";

class AllItems extends Component {
    state = {
        data: {
            title: "",
            done: false
        }
    };

    removeItem = index => () => {
        this.props.deleteItem(index);
    };

    completeItem = index => () => {
        this.props.closeItem(index)
    };

    addItem = () => {
        this.props.addToList({...this.state.data})
    };

    setItemTitle = e => {
        const value = e.target.value;
        this.setState({
            data: {
                title: value
            }
        });
    };

    render() {
        const {title} = this.state.data,
            {items} = this.props,
            {addItem, setItemTitle, removeItem, completeItem} = this;

        return (
            <>
                <ItemInput
                    changeHandler={setItemTitle}
                    inputValue={title}
                    clickHandler={addItem}
                />
                <List
                    items={items}
                    clickItemHandler={completeItem}
                    clickButtonHandler={removeItem}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    addToList: item => (dispatch(addItem(item))),
    deleteItem: index => (dispatch(removeItem(index))),
    closeItem: index => (dispatch(completeItem(index)))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);
