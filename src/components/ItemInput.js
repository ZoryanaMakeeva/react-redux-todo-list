import React from "react";

const ItemInput = ({changeHandler, inputValue, clickHandler}) => {
    const onSubmit = e => e.preventDefault();

    return (
        <form onSubmit={onSubmit}>
            <label>
                <div>New Item</div>
                <input
                    onChange={changeHandler}
                    type="text"
                    value={inputValue}
                />
                <button onClick={clickHandler}>Add Item</button>
            </label>
        </form>
)};

export default ItemInput;
