import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { togglePage } from "../utils/addWidgetSlice";

const Header = ({ setSearchItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items bg-center p-4">
      <div className="font-bold text-2xl text-teal-800">Dashboard</div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <IoSearch
            size="2rem"
            fill="#555"
            className="bg-slate-200 pl-2 rounded-s-lg"
          />
          <input
            type="text"
            placeholder="Search widget"
            className=" w-52 px-2 py-1 mr-1 outline-none rounded-e-lg bg-slate-200"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <button
          className="bg-teal-500 text-white rounded-lg px-2 py-1 font-semibold"
          onClick={() => dispatch(togglePage(true))}
        >
          Add Widget +
        </button>
      </div>
    </div>
  );
};

export default Header;
