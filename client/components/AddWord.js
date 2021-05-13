import React, { Component } from "react";
import { connect } from "react-redux";
import { createWord, editWord, fetchDefs } from "../store/thunks";

class CreateWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      definition: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.fetchDefinitions = this.fetchDefinitions.bind(this);
  }

  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  onSave(ev) {
    ev.preventDefault();
    this.props.addWord(
      this.state.term,
      this.state.definition,
      +this.props.glossaryId
    );
  }

  fetchDefinitions() {
    this.props.getDefs(this.state.term);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.render();
    }
  }
  render() {
    const { term, definition } = this.state;
    const { onChange, onSave } = this;
    const { defs } = this.props.wordReducer;
    return (
      <div>
        <form onSubmit={onSave}>
          <h2>add a word</h2>
          <div>
            <input
              name="term"
              value={term}
              onChange={onChange}
              placeholder="term"
            />
          </div>
          <p onClick={this.fetchDefinitions}>
            get definitions from merriam-webster (click me!)
          </p>
          <select
            name="definition"
            onChange={onChange}
            value={definition}
            placeholder="definition"
          >
            <option>--</option>
            {defs ? defs.map((def) => <option key={def}>{def}</option>) : ""}
          </select>
          <hr></hr>
          <div>OR</div>
          <hr></hr>
          <label>write your own definition</label>
          <br></br>
          <input
            onChange={onChange}
            value={definition}
            name="definition"
            placeholder="your definition"
          />
          <br></br>
          <button>submit new word</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wordReducer }) => ({
  wordReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (word, definition, glossaryId) =>
      dispatch(createWord(word, definition, glossaryId)),
    updateWord: (word) => dispatch(editWord(word)),
    getDefs: (word) => dispatch(fetchDefs(word)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateWord);
