import React from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../utils/widgetSlice";
import { RxCross2 } from "react-icons/rx";
import { toggleModal } from "../utils/addWidgetSlice";

const NewWidget = () => {
  const dispatch = useDispatch();

  const handleAddNewWidget = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const section = formData.get("sectionTitle");
    const name = formData.get("widgetName");
    const description = formData.get("widgetDesc");
    dispatch(
      addWidget({
        sectionTitle: section,
        widgetName: name,
        widgetDesc: description,
      })
    );
    dispatch(toggleModal(false));
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[600px] min-h-[300px] bg-slate-200 p-4 rounded-lg shadow-custom-black text-black">
      <div>
        <RxCross2
          size={25}
          className="cursor-pointer absolute top-2 right-3"
          onClick={() => dispatch(toggleModal(false))}
        />
      </div>
      <form
        onSubmit={handleAddNewWidget}
        className="flex flex-col items-center gap-4 mt-10"
      >
        <input
          type="text"
          name="sectionTitle"
          placeholder="Enter Category"
          className="w-full h-10 outline-none rounded-lg px-4"
        />
        <input
          type="text"
          name="widgetName"
          placeholder="Enter Widget Name"
          className="w-full h-10 outline-none rounded-lg px-4"
        />
        <textarea
          name="widgetDesc"
          rows={4}
          placeholder="Enter Details"
          className="w-full h-10 outline-none rounded-lg px-4 resize-none"
        />
        <button className="w-full py-2 rounded-lg bg-slate-400 font-semibold">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewWidget;
