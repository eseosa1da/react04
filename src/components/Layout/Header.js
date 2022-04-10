
import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {

    return (
        <>
        <header className={style.header}>
            <h1>PerkMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
            
            </header>

        <div className={style['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />

        </div>
    
        </>
        
    );

};


export default Header;