import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import AllGlossaries from "./Glossaries";
import SingleGlossary from "./SingleGlossary";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={AllGlossaries} />
            <Route exact path="/glossaries/:id" component={SingleGlossary} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       glossaries: [],
//       selectedglossary: {},
//       glossaryDetail: false,
//     };
//     this.selectglossary = this.selectglossary.bind(this);
//     this.deselectglossary = this.deselectglossary.bind(this);
//     this.addglossary = this.addglossary.bind(this);
//     this.deleteglossary = this.deleteglossary.bind(this);
//   }

//   async componentDidMount() {
//     try {
//       const glossaries = (await axios.get("/api/glossaries")).data;
//       this.setState({ glossaries: glossaries });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async deleteglossary(glossaryId) {
//     try {
//       await axios.delete(`/api/glossaries/${glossaryId}`);
//       const { data } = await axios.get("/api/glossaries");
//       this.setState({ glossaries: data });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   selectglossary(glossary) {
//     this.setState({
//       glossaryDetail: !this.state.glossaryDetail,
//       selectedglossary: glossary,
//     });
//   }
//   deselectglossary() {
//     this.setState({
//       glossaryDetail: !this.state.glossaryDetail,
//       selectedglossary: {},
//     });
//   }
//   async addglossary(title) {
//     const newglossary = await axios.post("/api/glossaries", {
//       title: title,
//     });
//     const { data } = await axios.get("/api/glossaries");
//     this.setState({ glossaries: data });
//   }
//   render() {
//     const { glossaries, selectedglossary, glossaryDetail } = this.state;
//     const { selectglossary, deselectglossary, addglossary, deleteglossary } =
//       this;
//     return (
//       <div id="app">
//         <h1>My Glossary</h1>
//         <Navbar deselectglossary={deselectglossary} />
//         {!glossaryDetail ? (
//           <Glossaries
//             glossaries={glossaries}
//             selectglossary={selectglossary}
//             addglossary={addglossary}
//             deleteglossary={deleteglossary}
//           />
//         ) : (
//           <SingleGlossary selectedglossary={selectedglossary} />
//         )}
//       </div>
//     );
//   }
// }

export default connect()(App);
