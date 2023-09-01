import React, { useState } from 'react';

const Goals = () => {
  const [monthlyGoal, setMonthlyGoal] = useState(0);
  const [dailyEmission, setDailyEmission] = useState(0);
  const [isExceedingGoal, setIsExceedingGoal] = useState(false);

  const handleGoalChange = (event) => {
    setMonthlyGoal(Number(event.target.value));
    setIsExceedingGoal(false);
  };

  const handleEmissionChange = (event) => {
    setDailyEmission(Number(event.target.value));
    setIsExceedingGoal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (dailyEmission > monthlyGoal) {
      setIsExceedingGoal(true);
      // You can add additional handling here, e.g., sending data to the server.
    } else {
      // Save the goals or perform other actions here.
      // Reset the form or show a success message.
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Monthly Goals and Emission Tracking</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium">Set Monthly Goal:</label>
          <input
            type="number"
            placeholder="Enter monthly goal"
            onChange={handleGoalChange}
            value={monthlyGoal}
            className="w-40 border rounded px-2 py-1"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Daily Emission:</label>
          <input
            type="number"
            placeholder="Enter daily emission"
            onChange={handleEmissionChange}
            value={dailyEmission}
            className="w-40 border rounded px-2 py-1"
          />
        </div>

        {isExceedingGoal && (
          <p className="text-red-500">Warning: Emission exceeds the monthly goal.</p>
        )}

        <button
          type="submit"
          className="bg-[#a845ff] text-white py-2 px-4 rounded hover:bg-[#ff87f9]"
        >
          Save Goals
        </button>
      </form>
    </div>
  );
};

export default Goals;
