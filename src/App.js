import React, { createContext, useContext } from "react";
import ChildA from "./ChildA";

import Skills from "./skills.json";

//Create, Provide , context = useContext(contextValue);
let data1 = createContext();
let data2 = createContext();

function App() {
  const name = "Safiullah";
  const age = 21;

  return (
    <div className="App">
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <ChildA />
        </data2.Provider>
      </data1.Provider>
      <div>
        {iconsData.map((skill) => {
          return <div>
            <img src={skill.icon} alt={skill.title} />
            <h3>{skill.title}</h3>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
export { data1, data2 };
