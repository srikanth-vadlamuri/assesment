import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';
import CartTotal from './CartTotal';

function CartPage({ items, onAddOne, onRemoveOne }) {

    if (items.length == 0){

        return (
            <div className="cartMessage"><p>Your Cart is empty!</p><br></br>
            <p>Why not add some expensive products to it?</p></div>
        )
    }
    return (
        <div>
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button
                                className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}>&ndash;</button>
                            <span className="CartItem-count">{item.count}</span>
                            <button
                                className="CartItem-addOne"
                                onClick={() => onAddOne(item)}>+</button>
                        </div>
                        
                    </Item>
                </li>
                
            )}
            
        </ul>
        <div>
          <CartTotal items={items}></CartTotal>
          </div>
        </div>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};
export default CartPage;