import React, { PureComponent, ReactNode } from "react";
import styles from "./nav.module.scss";

interface NavProps {
  onCilck?: (key: string) => void;
  defaultkey?: string;
  title?: string;
  readonly children?: ReactNode;
}

interface NavItemProps {
  keys?: string;
  children?: ReactNode;
}

const NavActive = React.createContext({});

class NavItem extends PureComponent<NavItemProps> {
  static contextType = NavActive;

  render() {
    const { key, setKey } = this.context;
    const { keys } = this.props;
    return (
      <li
        className={
          key === keys ? styles.r_nav_li_item_active : styles.r_nav_li_item
        }
        onClick={() => setKey(keys)}
      >
        {this.props.children}
      </li>
    );
  }
}

class Nav extends PureComponent<NavProps, {}> {
  state = {
    key: this.props.defaultkey,
  };

  setKey = (key: string) => {
    this.props.onCilck && this.props.onCilck(key);
    this.setState({ key });
  };

  static Item = NavItem;

  render() {
    const { title, children } = this.props;

    return (
      <NavActive.Provider value={{ key: this.state.key, setKey: this.setKey }}>
        <div className={styles.nav_warpper}>
          <p className={styles.nav_title}>{title}</p>
          <ul className={styles.nav_ul}>{children}</ul>
        </div>
      </NavActive.Provider>
    );
  }
}

// Nav.Item = NavItem;

export { NavItem };
export default Nav;
