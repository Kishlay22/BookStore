import style from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealImage from '../../assets/meals.jpg'
const Header=props=>{

return(
    <>
      <header className={style.header}>
        <h1>RamaMeals</h1>
        <HeaderCartButton onShow={props.onShow}/>
      </header>
      <div className={style['main-image']}>
        <img src={mealImage} alt='Meal on the table'/>
      </div>
    </>
)
};

export default Header;