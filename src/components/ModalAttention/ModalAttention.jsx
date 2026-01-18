import css from "./ModalAttention.module.css";

export default function ModalAttention({ className }) {
  return (
    <div className={`${css.modal} ${className}`}>
      <div className={css.petAvatar}>"🐶"</div>
      <h3 className={css.title}>Attention</h3>
      <p className={css.text}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={css.btnsCont}>
        <div className={css.btnsCont}>
          <NavLink to="login" end className={() => `${css.link} ${css.login}}`}>
            Log In
          </NavLink>

          <NavLink
            to="/register"
            end
            className={() => `${css.link} ${css.register} }`}
          >
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
}
