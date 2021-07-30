import styles from "@/styles/style.module.scss";
import { FaTimes } from "react-icons/fa";
import { navEl } from "./Navbar.data";
import { Link as LS } from "react-scroll";
import Link from "next/link";

export default function Sidebar({ isOpen, toggle }) {
  const {
    sidebar,
    close,
    sidebar__container,
    sidebar__icon,
    sidebar__closeIcon,
    sidebar__wrapper,
    sidebar__menu,
    sidebar__link,
    sidebar__btn,
    sidebar__btnRoute,
  } = styles;

  return (
    <aside
      className={isOpen ? ` ${sidebar}` : ` ${sidebar} ${close}`}
      onClick={toggle}
    >
      <div className={`${sidebar__container}`}>
        <div className={sidebar__icon}>
          <div className={sidebar__closeIcon} onClick={toggle}>
            <FaTimes />
          </div>
        </div>
        <div className={sidebar__wrapper}>
          <div className={sidebar__menu}>
            {navEl.map((el, idx) => (
              <LS
                to={el.path}
                key={idx}
                className={sidebar__link}
                onClick={toggle}
              >
                {el.name}
              </LS>
            ))}
          </div>

          <div className={sidebar__btn}>
            <Link href="/signin">
              <a className={sidebar__btnRoute}>Sign In</a>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
