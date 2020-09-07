import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class orderSummary extends React.Component {
  // componentDidUpdate() {
  //   console.log('[OrderSummary] did update')
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((ingKey) => <li key={ingKey}><span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {this.props.ingredients[ingKey]}</li>);

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burder with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default orderSummary;
