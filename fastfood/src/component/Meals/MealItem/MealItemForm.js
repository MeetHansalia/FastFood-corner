import Input from '../../UI/Input';
import classes from './MealIteamForm.module.css';
 

const MealIteamForm=(props)=>{
    return(
        <form className={classes.form}>
            <Input label="Items" input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'0',
            }}/>
            <button>+Add</button>
        </form>
    )
}

export default MealIteamForm