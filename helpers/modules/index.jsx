import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContentfulModules } from "../../redux/contentful/selectors";
import { reduceModules } from '../contentful';

export const withModules = (Component) => {
  const mapStateToProps = createStructuredSelector({
    contentModules: selectContentfulModules
  });

  return connect(mapStateToProps)((props) => {
    const { contentModules } = props;
    const modules = reduceModules(contentModules);
  return <Component {...props} modules={modules} />
  });
};

