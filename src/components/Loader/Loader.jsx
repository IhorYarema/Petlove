import Icon from "../Icon/Icon";
import css from "./Loader.module.css";

export default function Loader({ progress = 0 }) {
  return (
    <div className={css.wrapper}>
      <div className={css.loader}>
        <Icon className={css.spinner} name="ellips" size={270} />
        <span className={css.percent}>{progress}%</span>
      </div>
    </div>
  );
}
