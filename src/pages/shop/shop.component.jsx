import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selector";
import CategoryPage from "../category/category-page.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.component.scss";

const ShopPage = ({ match }) => {
  console.log(match.path, "match");
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
