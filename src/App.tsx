import { useState } from "react";
import data from "./data/data.json";
import { MockedData } from "./models/mockedData";

const mockedData: MockedData[] = data;

export default function App() {
  const [filteredMockedData, setFilteredMockedData] = useState(mockedData);

  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    // switch (value) {
    //   case "production":
    //     setFilteredMockedData(
    //       mockedData.filter((item) => item.category === "production")
    //     );
    //     break;
    //   case "staging":
    //     setFilteredMockedData(
    //       mockedData.filter((item) => item.category === "staging")
    //     );
    //     break;
    //   case "test":
    //     setFilteredMockedData(
    //       mockedData.filter((item) => item.category === "test")
    //     );
    //     break;
    //   default:
    //     return;
    // }

    console.log({ value });

    setFilteredMockedData(mockedData.filter((item) => item.category === value));
  };

  return (
    <>
      <input
        type="radio"
        name="category"
        id="production"
        value="production"
        onChange={radioChangeHandler}
      />
      <label htmlFor="production">Production</label>
      <input
        type="radio"
        name="category"
        id="staging"
        value="staging"
        onChange={radioChangeHandler}
      />
      <label htmlFor="staging">Staging</label>
      <input
        type="radio"
        name="category"
        id="test"
        value="test"
        onChange={radioChangeHandler}
      />
      <label htmlFor="test">Test</label>
      <ul>
        {filteredMockedData.map((item) => {
          return (
            <div key={item.uuid}>
              <p>{item.ownerDetails.firstName}</p>
              <p>{item.ownerDetails.lastName}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
}
