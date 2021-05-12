import React, { Component } from "react";

class AddGlossary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleKey = this.handleKey.bind(this);
  }
  handleKey(evt) {
    if (evt.key === "Enter") {
      this.props.addglossary(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    const { addglossary } = this.props;
    return (
      <div id="add-glossary">
        <input
          type="text"
          value={this.state.input}
          onChange={(ev) => this.setState({ input: ev.target.value })}
          onKeyDown={this.handleKey}
        />{" "}
        <button
          onClick={() => {
            addglossary(this.state.input);
            this.setState({ input: "" });
          }}
        >
          Add a glossary
        </button>
      </div>
    );
  }
}

export default AddGlossary;
