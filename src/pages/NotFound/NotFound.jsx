import css from "./NotFound.module.css";
import cat1x from "../../assets/404cat.png";
import cat2x from "../../assets/404cat@2x.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <p className={css.textNotFound}>
          4
          <img
            src={cat1x}
            alt="Cat"
            srcSet={`${cat1x} 1x, ${cat2x} 2x`}
            className={css.img}
          />
          4
        </p>
        <div className={css.toHomeContainer}>
          <p className={css.text}>Ooops! This page not found :(</p>
          <Link className={css.link} to="/home">
            To home page
          </Link>
        </div>
      </div>
    </section>
  );
}
