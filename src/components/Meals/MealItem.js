import classes from './MealItem.module.css'
const MealItem = (props) => {
    return<li className={classes['meal-item']}>
        <div>
          <h3>{props.name}</h3>
            <div className={classes['description']}>{props.description}
            </div>
            <div className={classes['price']}>{props.price}
            </div>
        </div>
    </li>
}
export default MealItem