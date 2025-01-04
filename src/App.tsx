import React from "react";
import { useLocalStorageState } from "./useLocalStorageState";

interface Features {
  [key: string]: boolean;
}

const App: React.FC = () => {
  const [features, setFeatures] = useLocalStorageState<Features>(
    "apartmentFeatures",
    {
      Balcony: false,
      Parking: false,
      "Pet Friendly": false,
    }
  );

  const handleFeatureChange = (featureName: string) => {
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [featureName]: !prevFeatures[featureName],
    }));
  };

  return (
    <div>
      {Object.keys(features).map((featureName) => (
        <div key={featureName}>
          <label>
            {featureName}
            <input
              type="checkbox"
              checked={features[featureName]}
              onChange={() => handleFeatureChange(featureName)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;
