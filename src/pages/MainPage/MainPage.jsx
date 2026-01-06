import Logo from "../../components/Logo/Logo";
import css from "./MainPage.module.css";
import Loader from "../../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(intervalRef.current);
          setIsLoaded(true);
          return 100;
        }
        return p + 1;
      });
    }, 40);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className={css.section}>
      {!isLoaded && <Loader progress={progress} />}
      {isLoaded && <Logo className={css.logo} />}
    </section>
  );
}
