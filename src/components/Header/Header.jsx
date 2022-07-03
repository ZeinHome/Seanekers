import basket from '../images/header/basket.svg';
import heart from '../images/header/heart.svg';
import user from '../images/header/user.svg';
import logo from '../images/header/logo.svg';

function Header() {
  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="logo" />
          <div>
            <h1>REACT SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul>
          <li onClick={() => console.log(12)}>
            <div>
              <img width={18} height={18} src={basket} alt="basket" />
              <p> 1205 грн.</p>
            </div>
          </li>

          <li>
            <img width={20} height={20} src={heart} alt="heart" />
          </li>

          <li>
            <img width={20} height={20} src={user} alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
