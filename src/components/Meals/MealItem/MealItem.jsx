import classes from './MealItem.module.css'
import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import { foodContext } from '../../../store/Store';

export default function MealItem(props)
{

  const cartContext = useContext(foodContext);
  const price = `$ ${props.price.toFixed(2)}`


  const addToCartHandeler = (amount) =>
  {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price:props.price

      
    })
  }
  return (
    <>
    
      <li className={classes.meal}>
        <div >
          <h3>{props.name}</h3>
           <div className={classes.description}> {props.description}</div>
           <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={ addToCartHandeler} />    

        </div>

    </li>
    
    </>
  )
}
