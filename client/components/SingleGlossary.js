import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddWord from "./AddWord";
import { fetchGlossary } from "../store/thunks";

class SingleGlossary extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getGlossary(Number(this.props.match.params.id));
  }

  render() {
    console.log(this.props);
    const { selectedGlossary } = this.props.glossaryReducer;
    if (selectedGlossary.words) {
      return (
        <div>
          <h1>{selectedGlossary.title}</h1>
          {selectedGlossary.words.map((word) => (
            <div key={`${word.id}`}>
              <Link to={`/words/${word.id}`}> </Link>
              <h2>{word.term}</h2>
              <p>{word.definition}</p>
            </div>
          ))}
          <AddWord glossaryId={selectedGlossary.id} />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ glossaryReducer }) => ({
  glossaryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getGlossary: (id) => dispatch(fetchGlossary(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleGlossary);
