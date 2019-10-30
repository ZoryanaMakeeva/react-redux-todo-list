import React from 'react';
import PropTypes from 'prop-types';

const List = ({items, clickItemHandler, clickButtonHandler}) => (
    <ul>
        {
            items.map((item, index) => (
                <div>
                    <li
                        onClick={clickItemHandler && clickItemHandler(index)}
                        style={item.done ? {textDecoration: "line-through"} : null}
                        key={index}
                    >
                        {item.title}
                    </li>
                    {
                        clickButtonHandler &&
                        <button
                            onClick={clickButtonHandler && clickButtonHandler(index)}
                        >x</button>
                    }
                </div>
            ))
        }
    </ul>
);

List.propTypes = {
    items: PropTypes.array.isRequired,
    clickItemHandler: PropTypes.func,
    clickButtonHandler: PropTypes.func
};

export default List;