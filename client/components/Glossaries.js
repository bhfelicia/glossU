import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGlossaries, destroyGlossary } from "../store/thunks";

import axios from "axios";

class AllGlossaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: {
        fullName: "",
        id: 0,
        isAdmin: false,
        role: "",
        first: "",
        last: "",
        password: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
    };
    this.deleteGlossaryHandler = this.deleteGlossaryHandler.bind(this);
  }
  componentDidMount() {
    this.props.getGlossaries();
  }
  // async componentDidMount() {
  //   this.props.getGlossaries();
  //   const { data: loggedInUser } = await axios.get("/api/auth", {
  //     headers: { authorization: window.localStorage.getItem("token") },
  //   });
  //   this.setState({ loggedInUser });
  // }

  deleteGlossaryHandler(glossaryToDelete) {
    this.props.deleteGlossary(glossaryToDelete);
  }

  render() {
    const { glossaries } = this.props.glossaryReducer;
    // let showAddGlossary = null;
    // if (this.state.loggedInUser.isAdmin) {
    //   showAddGlossary = (
    //     <button>
    //       <Link to={"/createGlossary"}>add</Link>
    //     </button>
    //   );
    // }
    return (
      <div id="all-glossaries">
        {glossaries.map((glossary) => {
          //         if (this.state.loggedInUser.isAdmin) {
          return (
            <div key={glossary.id}>
              <div>
                <Link to={`/glossaries/${glossary.id}`}>
                  <h2>{glossary.title}</h2>
                </Link>
              </div>

              <button>
                <Link to={`/glossaries/${glossary.id}/edit`}>edit</Link>
              </button>

              <button
                onClick={() => this.deleteGlossaryHandler(glossary)}
                value={glossary}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ glossaryReducer, userReducer }) => ({
  glossaryReducer,
  userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getGlossaries: () => dispatch(fetchGlossaries()),
  deleteGlossary: (glossary) => dispatch(destroyGlossary(glossary)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllGlossaries);
// import React, { Component } from "react";
// import AddGlossary from "./AddGlossary";
// import axios from "axios";

// class Glossaries extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { glossaries, selectglossary, addglossary, deleteglossary } =
//       this.props;
//     return (
//       <div id="glossaries">
//         <AddGlossary addglossary={addglossary} />
//         {glossaries.map((glossary) => (
//           <div className="glossary" key={glossary.id}>
//             <a
//               onClick={() => {
//                 selectglossary(glossary);
//               }}
//             >
//               {glossary.title}
//             </a>
//             <button onClick={() => deleteglossary(glossary.id)}>x</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Glossaries;
