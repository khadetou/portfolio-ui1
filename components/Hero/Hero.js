import styles from "@/styles/style.module.scss";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function HeroSection() {
  const {
    hero__container,
    hero,
    hero__bg,
    hero__video,
    hero__content,
    hero__h1,
    hero__p,
    hero__btnWrapper,
    hero__btn,
    hero__arrowF,
    hero__arrowR,
    button,
  } = styles;

  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(!hover);
  };
  return (
    <section className={hero}>
      <div className={hero__container}>
        <div className={hero__bg}>
          <video
            src="/videos/video.mp4"
            autoPlay
            muted
            loop
            className={hero__video}
            type="video/mp4"
          />
        </div>
        <div className={hero__content}>
          <h1 className={hero__h1}>Virtual Banking Made Easy</h1>
          <p className={hero__p}>
            Sign up for a new account today and receive $250 in credits towards
            your next payment.
          </p>
          <div className={hero__btnWrapper}>
            <button
              className={`${hero__btn} ${button}`}
              to="signUp"
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverHandler}
            >
              Get started
              {hover ? (
                <MdArrowForward className={hero__arrowF} />
              ) : (
                <MdKeyboardArrowRight className={hero__arrowR} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
