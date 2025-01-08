import React, { useState, useEffect } from "react";

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [isLoaidng, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <ul>
        {DataDisplay.map((item, index) => {
          <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

// Enhance the DataDisplay component with the HOC
export default withLoading(DataDisplay);
