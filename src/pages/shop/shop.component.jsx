import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WithSpinner from "../../components/commons/spinner/spinner.component";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action.js";
import CategoryPage from "../category/category-page.component";
import { createStructuredSelector } from "reselect";
import CategoryPageContainer from "../../pages/category/category-page-container";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview-container";
import { selectCollectionIsRendered } from "../../redux/shop/shop.selector.js";
import "./shop.component.scss";

const CollectionPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
