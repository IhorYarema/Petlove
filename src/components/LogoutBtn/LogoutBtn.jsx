import css from "./LogoutBtn.module.css";

export default function LogoutBtn({ onLogout, className }) {
  return (
    <>
      <button className={`${css.btn} ${className}`} onClick={() => onLogout()}>
        Log out
      </button>
    </>
  );
}
