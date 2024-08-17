import React from "react";
import WidgetCard from "./WidgetCard";

const WidgetCategory = ({ details }) => {
  const { title, widgets } = details;

  let checkWidgets = [...widgets].filter((widget) => widget.name !== "dummy");

  checkWidgets.push({ name: "dummy" });

  return (
    <div className="mx-6 mb-4 text-slate-600 ">
      <div className="font-semibold mb-2">{title}</div>
      <div className="flex items-center gap-4 py-2 px-1 overflow-x-auto custom-scrollbar">
        {checkWidgets.map((el) => (
          <WidgetCard key={el.name} section={title} cardDetails={el} />
        ))}
      </div>
    </div>
  );
};

export default WidgetCategory;
