import React, { useState } from "react";

const FiltersContent = () => {
  // Dummy filter state
  const [selectedFilters, setSelectedFilters] = useState({});

  const filtersData = {
    Flavor: [
      "Original",
      "Mango Loco",
      "Ultra Sunrise",
      "Zero Sugar",
      "Watermelon",
    ],
    Type: ["Regular", "Zero Sugar", "Ultra", "Juice", "Rehab", "Hydro"],
    "Pack Size": ["Single can", "Pack of 4", "Pack of 12"],
    Price: ["₹50-₹99", "₹100-₹199", "₹200-₹299", "₹300+"],
  };

  // Update filter state
  const updateFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const prevValues = prev[category] || [];

      // For Price (radio button)
      if (category === "Price") {
        return { ...prev, [category]: [value] };
      }

      // For checkboxes (toggle values)
      const newValues = prevValues.includes(value)
        ? prevValues.filter((v) => v !== value)
        : [...prevValues, value];

      return { ...prev, [category]: newValues };
    });
  };

  // Reset category
  const resetFilterCategory = (category) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[category];
      return newFilters;
    });
  };

  return (
    <>
      {Object.entries(filtersData).map(([filterName, options]) => {
        const isPrice = filterName === "Price";

        return (
          <div
            key={filterName}
            className="bg-[#151311] rounded-lg px-4 py-3 lg:p-4 mb-4"
          >
            {/* Header with Reset */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-white">{filterName}</h2>
              <button
                onClick={() => resetFilterCategory(filterName)}
                className="text-xs hover:cursor-pointer text-gray-300 underline hover:text-white transition"
              >
                Reset
              </button>
            </div>

            {/* Price Radio Buttons */}
            {isPrice ? (
              <div className="grid grid-cols-2 gap-2">
                {options.map((option) => {
                  const id = `${filterName}-${option}`;
                  const isChecked =
                    selectedFilters[filterName]?.includes(option) || false;

                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className={`cursor-pointer px-3 py-1.5 text-sm rounded font-semibold text-center transition ${
                        isChecked
                          ? "bg-lime-500 text-black"
                          : "bg-lime-400 text-black hover:bg-lime-500"
                      }`}
                    >
                      <input
                        type="radio"
                        id={id}
                        name="price"
                        className="hidden"
                        checked={isChecked}
                        onChange={() => updateFilter(filterName, option)}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            ) : (
              // Other checkboxes
              <div className="flex flex-wrap gap-3 lg:flex-col">
                {options.map((option) => {
                  const id = `${filterName}-${option}`;
                  const isChecked =
                    selectedFilters[filterName]?.includes(option) || false;

                  return (
                    <label
                      htmlFor={id}
                      key={id}
                      className={`flex items-center w-28 md:w-fit justify-between cursor-pointer text-[0.6rem] md:text-sm px-2 py-1 rounded transition ${
                        isChecked
                          ? "bg-lime-500 text-black"
                          : "bg-black/80 md:bg-transparent hover:bg-[#1f1d1a] text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={id}
                          className="accent-lime-400 w-4 h-4"
                          checked={isChecked}
                          onChange={() => updateFilter(filterName, option)}
                        />
                        <span>{option}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FiltersContent;
