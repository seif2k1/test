import React from "react";
import { info } from "./info";

const Nav = ({ isActive, setNewItem, setIsActive }) => {
  const handle = (txt) => {
    txt === 0 && (setNewItem(true), setIsActive(null));
  };
  return (
    <ul className="w-full flex items-center px-3 justify-between border-t-[2px] border-[#F8F8F8] py-3">
      {info.map((data, i) => {
        return (
          <li
            key={i}
            onClick={() => handle(i)}
            className="flex flex-col justify-between items-center "
          >
            <img
              src={data.logo}
              alt={data.name}
              className="fill-[blue] stroke-[red]"
            />
            <h1 className="text-[7px] text-[#7B7B7B] my-[3px]">{data.name}</h1>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
