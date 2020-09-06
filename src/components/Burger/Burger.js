import React from 'react';
// import PropTypes from 'prop-types';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingKey) => [...Array(props.ingredients[ingKey])].map((_, i) => <BurgerIngredient key={ingKey + (i + 1)} type={ingKey} />))
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Start adding ingredients!</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// burger.propTypes = {}

export default burger;
