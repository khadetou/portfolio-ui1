import styles from "@/styles/style.module.scss";
import { Link as LS } from "react-scroll";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { navEl } from "./Navbar.data";
export default function Navbar({ toggle }) {
  const {
    container,
    nav,
    nav__container,
    nav__logo,
    nav__mobileIcon,
    nav__menu,
    nav__item,
    nav__link,
    nav__btn,
    nav__btnLink,
  } = styles;

  return (
    <nav className={nav}>
      <div className={`${nav__container} ${container}`}>
        <Link href="/">
          <a className={nav__logo}>dolla</a>
        </Link>
        <div className={nav__mobileIcon} onClick={toggle}>
          <FaBars />
        </div>

        <ul className={nav__menu}>
          {navEl.map((el, idx) => (
            <li className={nav__item} key={idx}>
              <LS to={el.path} className={nav__link}>
                {el.name}
              </LS>
            </li>
          ))}
        </ul>
        <div className={nav__btn}>
          <Link href="/signIn">
            <a className={nav__btnLink}>Sign In</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
