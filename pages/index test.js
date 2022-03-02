import React from 'react';


 
const countryList = [
  { name: 'USA', code: 'us' },
  { name: 'INDIA', code: 'in' },
  { name: 'UK', code: 'gb' }
]
 
function App() {
  return (
    <div>
      <h3>Get the country flag from the country code in React</h3>
      {countryList.map((x, i) => {
        return (
          <>
            <div key="{i}" classname="box">
              <span className={`flag-icon" flag-icon-${x.code}`}></span>
              <div className="title">{x.name}</div>
            </div>
          </>
        )
      })}
    </div>
  );
}
 
export default App;