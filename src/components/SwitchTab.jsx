import PropTypes from "prop-types";
import { useState } from "react";

function SwitchTab({ data, onTabSelect }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(tab, index) {
    onTabSelect(tab);
    setActiveTab(index);
  }

  return (
    <div className="bg-white rounded-3xl h-[38px] flex items-center p-1 relative">
      {data.map((tab, index) => (
        <span
          key={index}
          className={`${
            activeTab === index
              ? "bg-gradient text-white"
              : "text-[var(--black)]"
          } px-8 py-2 rounded-3xl cursor-pointer`}
          onClick={() => handleClick(tab, index)}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}

SwitchTab.propTypes = {
  data: PropTypes.array.isRequired,
  onTabSelect: PropTypes.func.isRequired,
};

export default SwitchTab;
