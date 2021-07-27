import NavbarItems from "./NavbarItems";
import styles from "@/styles/style.module.scss";
import { Link as LS } from "react-scroll";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
export default function Navbar() {
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
        <div className={nav__mobileIcon}>
          <FaBars />
        </div>

        <ul className={nav__menu}>
          <li className={nav__item}>
            <LS to="about" className={nav__link}>
              About
            </LS>
          </li>
          <li className={nav__item}>
            <LS to="discover" className={nav__link}>
              Discover
            </LS>
          </li>
          <li className={nav__item}>
            <LS to="services" className={nav__link}>
              Services
            </LS>
          </li>
          <li className={nav__item}>
            <LS to="signup" className={nav__link}>
              Sign Up
            </LS>
          </li>
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
