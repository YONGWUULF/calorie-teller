import React from "react";
import { connect } from "react-redux";
import RecipeContent from './RecipeContent';

class RecipesLink extends React.Component {
  render() {
    return (
        <div id="mainNav" >
          <div className="main-nav">
            <div className="user"><h2>Calorie Fusion</h2></div>
          </div>
          <div className="content">
          <RecipeContent />
          </div>
        </div>
      );
    }
  }

const mapStateToProps = state => {
  return {
    macroChecker: state.macroChecker
  };
};
export default connect(mapStateToProps)(RecipesLink);
