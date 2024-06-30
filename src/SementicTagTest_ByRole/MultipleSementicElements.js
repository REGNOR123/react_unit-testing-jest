import React from "react";

const MultipleSementicElements = () => {
  return (
    <>
      <h3>Handle multiple elements with same name</h3>
      
      <label htmlFor="input-1">First Name</label>
      <input type="text" id="input-1"/>

      <label htmlFor="input-2">Last Name</label>
      <input type="text" id="input-2"/>

      <button>Save</button>
      <button>Cancel</button>

      <div role="dummyData-1">Custom Role</div>
      <div role="dummyData-2">Custom Role</div>
    </>
  );
};

export default MultipleSementicElements;
