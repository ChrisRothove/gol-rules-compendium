import React from "react";
import { useState } from "react";
import Form from "./form";
import Textbody from "./text-body";
import {
  playerHandbook,
  dungeonMasterGuide,
  abilityGuide,
  sampleAbilities,
  templates,
} from "../data/main";

const allArticles = [
  ...playerHandbook,
  ...dungeonMasterGuide,
  ...abilityGuide,
  ...sampleAbilities,
  ...templates,
];

function Main() {
  //declare states for display components and formState
  const [displayComponents, setDisplayComponents] = useState(playerHandbook);

  //create function for handling changes to display
  const handleDisplay = ({ target }) => {
    console.log("target.value: ", target.value);
    switch (target.value) {
      case "phb":
        setDisplayComponents(playerHandbook);
        break;
      case "templates":
        setDisplayComponents(templates);
        break;
      case "dmg":
        setDisplayComponents(dungeonMasterGuide);
        break;
      case "abg":
        setDisplayComponents(abilityGuide);
        break;
      case "sample":
        setDisplayComponents(sampleAbilities);
        break;
      default:
        break;
    }
  };

  const displayFromSearch = ({ target }) => {
    const filteredArticles = allArticles.filter((article) => {
      return article.keywords.toString().includes(target.value.toLowerCase());
    });
    setDisplayComponents(filteredArticles);
  };

  //    REACT RETURN
  return (
    <main>
      <Form
        //formState={formState} //for lifting formstate
        updateFromSearch={displayFromSearch} //for updating search criteria
        handleDisplay={handleDisplay} //for handling display of full sections
        //handleFormState={handleFormState}
      />
      <Textbody display={displayComponents} />
    </main>
  );
}

export default Main;
