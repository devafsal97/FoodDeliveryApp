import Card from '../UI/Card'
import MealItem from './MealItem'
const Dummy_Meals = [{
    id:1,
    name:"jumbo burger",
    description:"burger with three layers",
    price:"$199"
},{
    id:2,
    name:"suchi",
    description:"finest fish and vegies",
    price:"$99"
},
{
    id:3,
    name:"Alfam",
    description:"Arabian Special",
    price:"$299"
},{
    id:4,
    name:"Noodles",
    description:"Chineese special",
    price:"$99"
}]

const AvailabaleMeals = () =>{
    const meals = Dummy_Meals.map(meal => <MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description}></MealItem>) 
    return <section style={{marginTop:"160px",width:"70%",margin:"auto"}}>
        <Card>
        {meals}
        </Card>
    </section>

}

export default AvailabaleMeals;