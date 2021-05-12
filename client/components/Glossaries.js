import React, { Component } from "react";
import AddGlossary from "./AddGlossary";
import axios from "axios";

class Glossary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { glossaries, selectglossary, addglossary, deleteglossary } =
      this.props;
    return (
      <div id="glossaries">
        <AddGlossary addglossary={addglossary} />
        {glossaries.map((glossary) => (
          <div className="glossary" key={glossary.id}>
            <a
              onClick={() => {
                selectglossary(glossary);
              }}
            >
              {glossary.title}
            </a>
            <button onClick={() => deleteglossary(glossary.id)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Glossary;
