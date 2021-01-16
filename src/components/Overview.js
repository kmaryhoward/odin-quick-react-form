import React from "react";

const Overview = (props) => {
    const { items, handleDelete } = props;
  
    return (
        <div>
            <ul>
            {items.map((item, index) =>
                <li key={index}>{item}
                    <button onClick={() => handleDelete(item)}>Delete</button>
                </li>
            )}  
            </ul>
        </div>
    );
};

export default Overview;
