import Link from "next/link";
import { useFetchUser } from "../utils/user";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { user, loading } = useFetchUser();
  return (
    <div className={styles.navLinks}>
      <div key="/">
        <Link href="/">
          <a className={styles.navSpacing}>Home</a>
        </Link>
      </div>
      {user && !loading
        ? [
            <div key="/api/logout">
              <Link href="/api/logout">
                <a className={styles.navSpacing}>Logout</a>
              </Link>
            </div>,
          ]
        : null}
      {!user && !loading ? (
        <div key="/api/login">
          <Link href="/api/login">
            <a className={styles.navSpacing}>Login</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
