import React from 'react';

const TodoItem = () => {
  return (
    <div className="item-box">
        <h2 className="pull-left">
          Item title
          <input className="checkbox" type="checkbox" />
        </h2>
    </div>
  )
}

export default TodoItem;