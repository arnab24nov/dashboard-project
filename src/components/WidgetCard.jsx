import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget } from "../utils/widgetSlice";
import NewWidget from "./NewWidget";
import { toggleModal } from "../utils/addWidgetSlice";

const WidgetCard = ({ section, cardDetails }) => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((store) => store.addWidget.isModalVisible);
  const { name, description } = cardDetails;

  return (
    <>
      {name !== "dummy" ? (
        <div
          className={`relative p-4 shadow-custom-black rounded-lg bg-white min-w-[478px] h-60 ${
            isModalVisible && "opacity-50"
          }`}
        >
          <div className="font-semibold mb-4">{name}</div>
          <div>{description}</div>
          <RxCross2
            size={20}
            className="cursor-pointer absolute top-2 right-2"
            onClick={() =>
              dispatch(
                removeWidget({ sectionTitle: section, widgetName: name })
              )
            }
          />
        </div>
      ) : (
        <div
          className={`p-4 shadow-custom-black rounded-lg bg-white min-w-[478px] h-60 flex justify-center items-center ${
            isModalVisible && "opacity-50"
          }`}
        >
          <button
            className="px-2 py-1 border border-slate-500 rounded-lg"
            onClick={() => dispatch(toggleModal(true))}
          >
            + Add Widget
          </button>
        </div>
      )}
      {isModalVisible && <NewWidget />}
    </>
  );
};

export default WidgetCard;
