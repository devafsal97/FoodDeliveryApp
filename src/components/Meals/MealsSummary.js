import react from "react"
import classes from "./MealsSummary.module.css"
const MealSummary = () =>{
    return <react.Fragment>
        <div className={classes['summary-card']}>
            <h1 className={classes['summary-heading']}>Delicious Food Delivered To You</h1>
            <p className={classes['summary-content']}>Choose your favorite meal from over broad 
                collection of 
                available meals and enjoy a delicious lunch or dinner at your home</p>
                <p className={classes['summary-content']}>All our meals are cooked with high quality ingredients, justin-in-time and of
                     course by experienced chefs!</p>
        </div>
    </react.Fragment>
}
export default MealSummary;