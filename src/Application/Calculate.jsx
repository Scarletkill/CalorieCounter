import React, { useState } from "react";
import Navbar from "../Component/Navbar/Navbar";
import "../style/Calculate.css";

const ProgressBar = ({ nutrition, percentage, total, eaten, unit = "g" }) => {
  const progressBarColors = {
    protein: "protein",
    carbs: "carbs",
    fat: "fat",
  };

  const progressBarClass = `bg-${progressBarColors[nutrition] || "neutral"}`;
  const validatedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="nutritional-progress">
      <div className="progress-bar-label">
        <span className="text-capitalize">{nutrition}</span>
        <span>
          {Math.round(eaten)} {unit} / {total} {unit}
        </span>
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${progressBarClass}`}
          role="progressbar"
          style={{ width: `${validatedPercentage}%` }}
          aria-valuenow={validatedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

const Calculate = () => {
  const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const [foodLogs, setFoodLogs] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
  });

  // Example nutritional data for each meal (replace with dynamic calculations if needed)
  const nutritionalData = {
    Breakfast: { protein: 30, carbs: 40, fat: 10, total: 100 },
    Lunch: { protein: 50, carbs: 60, fat: 20, total: 130 },
    Dinner: { protein: 40, carbs: 50, fat: 15, total: 105 },
    Snacks: { protein: 10, carbs: 20, fat: 5, total: 35 },
  };

  const handleAddFood = (meal) => {
    const foodItem = prompt(`Add a food item to ${meal}:`);
    if (foodItem) {
      setFoodLogs({
        ...foodLogs,
        [meal]: [...foodLogs[meal], foodItem],
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="meal-logger">
        {meals.map((meal) => (
          <div key={meal} className="meal-section">
            <h2>{meal}</h2>
            {foodLogs[meal].length === 0 ? (
              <p>No foods logged.</p>
            ) : (
              <ul>
                {foodLogs[meal].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <button onClick={() => handleAddFood(meal)}>+</button>
            <div className="nutritional-progress">
              <h5>Nutritional Progress:</h5>
              <ProgressBar
                nutrition="protein"
                percentage={(nutritionalData[meal].protein / nutritionalData[meal].total) * 100}
                total={nutritionalData[meal].total}
                eaten={nutritionalData[meal].protein}
              />
              <ProgressBar
                nutrition="carbs"
                percentage={(nutritionalData[meal].carbs / nutritionalData[meal].total) * 100}
                total={nutritionalData[meal].total}
                eaten={nutritionalData[meal].carbs}
              />
              <ProgressBar
                nutrition="fat"
                percentage={(nutritionalData[meal].fat / nutritionalData[meal].total) * 100}
                total={nutritionalData[meal].total}
                eaten={nutritionalData[meal].fat}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Calculate;
