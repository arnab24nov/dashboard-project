import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import WidgetCategory from "./components/WidgetCategory";
import AddWidget from "./components/AddWidget";
import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");
  let widgetStore = useSelector((store) => store.widgetDetails);
  const isSideBarVisible = useSelector(
    (store) => store.addWidget.isSideBarVisible
  );

  if (searchItem) {
    widgetStore = widgetStore
      .map((section) => ({
        ...section,
        widgets: section.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(searchItem.toLowerCase())
        ),
      }))
      .filter((section) => section.widgets.length > 0);
  }

  return (
    <div className="bg-teal-50 h-screen flex flex-col">
      <Header setSearchItem={setSearchItem} />
      {widgetStore.length !== 0 ? (
        <div
          className={`flex-1 overflow-y-auto custom-scrollbar ${
            isSideBarVisible ? "opacity-50" : ""
          }`}
        >
          {widgetStore.map((el) => (
            <WidgetCategory key={el.title} details={el} />
          ))}
        </div>
      ) : (
        <div className="absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-slate-600 font-bold">
          No Widgets found.
        </div>
      )}
      {isSideBarVisible && <AddWidget />}
    </div>
  );
}

export default App;
