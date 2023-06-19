import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS =[
    {
        id:'m1',
        name:'Dabeli',
        description:'Finest bread and stuffings',
        price: 20,
    },
    {
        id:'m2',
        name:'HotDog',
        description:'Splendid taste of ketchup and cheez',
        price: 60,
    },
    {
        id:'m3',
        name:'Pizza',
        description:'stuffed with tomatoes, tomato sauce, mozzarella, and basil.',
        price: 90,
    },
    {
        id:'m4',
        name:'Burger',
        description:'Aloo tiki with loving taste of cabbage.',
        price: 70,
    },
    {
        id:'m5',
        name:'Sandwich',
        description:'Stuffed with potato and veggies.',
        price: 60,
    },

    
];



const AvailableMeals =()=>{
    const mealsList = DUMMY_MEALS.map((meal)=>(
        <MealItem 
            key={meal.id} 
            id={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
        />
    ));
     
    
    
    return <section className={classes.meals }>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals;