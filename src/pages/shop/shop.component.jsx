import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WithSpinner from "../../components/commons/spinner/spinner.component";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action.js";
import CategoryPage from "../category/category-page.component";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionIsLoading,
  selectCollectionIsRendered,
} from "../../redux/shop/shop.selector.js";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.component.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionRendered } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionRendered}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionIsLoading,
  isCollectionRendered: selectCollectionIsRendered,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
