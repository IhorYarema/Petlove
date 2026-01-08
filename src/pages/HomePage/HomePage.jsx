import css from "./HomePage.module.css";
import womanwithdog1x from "../../assets/womanwithdog.jpg";
import womanwithdog2x from "../../assets/womanwithdog@2x.jpg";

export default function HomePage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <div className={css.colorBg}>
          <h1 className={css.mainTitle}>
            Take good <span>care</span> of your small pets
          </h1>
          <p className={css.lowerText}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className={css.imgWrapper}>
          <img
            src={womanwithdog1x}
            alt="Woman with dog"
            srcSet={`${womanwithdog1x} 1x, ${womanwithdog2x} 2x`}
            className={css.img}
          />
        </div>
      </div>
    </section>
  );
}
