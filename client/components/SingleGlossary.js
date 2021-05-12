import React from "react";

const SingleGlossary = ({ selectedglossary, deselectglossary }) => {
  return (
    <div id="single-glossary">
      <h1>{selectedglossary.title}</h1>
      {selectedglossary.words.map((word, idx) => {
        return (
          <div className="word" key={idx}>
            <h3>{word.name} (noun):</h3>
            <p>{word.definition}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleGlossary;
