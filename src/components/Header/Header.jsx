import css from "./Header.module.css";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo className={css.logo} />
      </div>
    </header>
  );
}
