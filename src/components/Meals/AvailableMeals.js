import style from './AvailableMeals.module.css';
import Card from '../UI/Card';
import Mealitem from './MealItem/Mealitem';
const AvailableMeals=()=>{
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
    return(
      <section className={style.meals}>
        <ul>
        <Card>
            {DUMMY_MEALS.map((meals=>
                <Mealitem key={meals.id}
                 id={meals.id}
                 price={meals.price} 
                 description={meals.description}
                 name={meals.name}
                ></Mealitem>
            )

            )}</Card>
        </ul>
      </section>

    )
}
export default AvailableMeals;