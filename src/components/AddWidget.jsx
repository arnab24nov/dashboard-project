import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { togglePage } from "../utils/addWidgetSlice";
import { removeWidget } from "../utils/widgetSlice";

const AddWidget = () => {
  const widgetStore = useSelector((store) => store.widgetDetails);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(widgetStore[0]);
  const [checkState, setCheckState] = useState({});

  useEffect(() => {
    if (widgetStore.length > 0) {
      setIsActive(widgetStore[0]);
    } else {
      setIsActive(null);
    }
  }, [widgetStore]);

  useEffect(() => {
    const initialCheckedItem = isActive?.widgets.reduce((acc, widget) => {
      acc[widget.name] = true;
      return acc;
    }, {});
    setCheckState(initialCheckedItem);
  }, [isActive]);

  const handleChangeCheckbox = (widgetName) => {
    setCheckState((prevState) => ({
      ...prevState,
      [widgetName]: !prevState[widgetName],
    }));
  };

  const updateStore = () => {
    const uncheckedItem = isActive?.widgets.filter(
      (item) => !checkState[item.name]
    );

    for (let i = 0; i < uncheckedItem.length; i++) {
      dispatch(
        removeWidget({
          sectionTitle: isActive.title,
          widgetName: uncheckedItem[i].name,
        })
      );
    }
  };

  return (
    <div
      className={`absolute right-0 top-0 w-[500px] h-[500px] bg-white z-50 rounder-lg shadow-custom-black`}
    >
      <div className="bg-teal-700 p-2 flex justify-between items-center text-white">
        <div>Add Widget</div>
        <RxCross2
          size={20}
          onClick={() => dispatch(togglePage(false))}
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-4 p-4">
        {widgetStore.map((el) => (
          <div
            key={el.title}
            className={`cursor-pointer ${
              isActive?.title === el.title && "border-b border-black"
            }`}
            onClick={() => setIsActive(el)}
          >
            {el.title}
          </div>
        ))}
      </div>
      <div>
        {isActive?.widgets.map((el) => (
          <div
            key={el.name}
            className="m-2 px-3 py-1 flex items-center gap-2 border border-slate-300 rounded-lg"
          >
            <input
              type="checkbox"
              checked={checkState[el.name] || false}
              onChange={() => handleChangeCheckbox(el.name)}
            />
            <div>{el.name}</div>
          </div>
        ))}
      </div>
      {isActive ? (
        <div className="absolute bottom-2 right-5 flex gap-4">
          <button
            className="px-2 py-1 rounded-lg border border-slate-300"
            onClick={() => dispatch(togglePage(false))}
          >
            Cancel
          </button>
          <button
            className="px-2 py-1 rounded-lg text-white bg-teal-700"
            onClick={updateStore}
          >
            Confirm
          </button>
        </div>
      ) : (
        <div className="absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-600 text-xl font-semibold">
          No widgets found.
        </div>
      )}
    </div>
  );
};

export default AddWidget;
