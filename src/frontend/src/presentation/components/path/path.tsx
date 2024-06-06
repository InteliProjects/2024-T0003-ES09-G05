import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Path = {
  title: string,
  url: string
}

type Props = {
  path: Path[]
};

import Styles from "./path.module.scss";
import { useNavigate } from "react-router-dom";

const Header: React.FC<Props> = ({ path }: Props) => {
  const navigate = useNavigate()

  const last = path.length - 1;

  return (
    <div className={Styles.pathContainer}>
      {path.map((item, index) => {
        return (
          <button
            key={item.title}
            className={Styles.pathItem}
            onClick={() => navigate(item.url)}
            tabIndex={0}
            onKeyDown={() => navigate(item.url)}
          >
            {index == last ? <p className={Styles.pFocus}>{item.title}</p> : <p>{item.title}</p>}
            {index < last && <IoIosArrowForward size={20} />}
          </button>
        );
      })}
    </div>
  );
};

export default Header;
