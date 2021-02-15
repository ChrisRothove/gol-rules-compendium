import React from "react";

function Form({ updateFromSearch, handleDisplay }) {
  return (
    <form id="displayForm">
      <fieldset id="inputType">
        <legend>DISPLAY FULL RULESET</legend>
        <div className="hidden">
          <input
            type="radio"
            id="???"
            name="formState"
            value="???"
            //onChange={handleDisplay}
          ></input>
          <label htmlFor="???">???</label>
        </div>
        <div>
          <input
            type="radio"
            id="templates"
            name="formState"
            value="templates"
            onChange={handleDisplay}
          ></input>
          <label htmlFor="templates">Templates</label>
        </div>
        <div>
          <input
            type="radio"
            id="phb"
            name="formState"
            value="phb"
            onChange={handleDisplay}
          ></input>
          <label htmlFor="phb">Handbook</label>
        </div>
        <div>
          <input
            type="radio"
            id="dmg"
            name="formState"
            value="dmg"
            onChange={handleDisplay}
          ></input>
          <label htmlFor="dmg">DM's Guide</label>
        </div>
        <div>
          <input
            type="radio"
            id="abg"
            name="formState"
            value="abg"
            onChange={handleDisplay}
          ></input>
          <label htmlFor="abg">Ability Guide</label>
        </div>
        <div className="hidden">
          <input
            type="radio"
            id="samples"
            name="formState"
            value="samples"
            onChange={handleDisplay}
          ></input>
          <label htmlFor="samples">Sample Abilities</label>
        </div>
      </fieldset>
      <div id="searchBox">
        <label htmlFor="search">Search all rules:</label>
        <input
          type="text"
          name="searchBar"
          id="searchbar"
          onChange={updateFromSearch}
        ></input>
      </div>
    </form>
  );
}

export default Form;
