import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WithSpinner from "../../components/commons/spinner/spinner.component";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action.js";
import CategoryPage from "../category/category-page.component";
import CategoryPageContainer from "../../pages/category/category-page-container";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview-container";
import "./shop.component.scss";

class ShopPage extends React.Component {
  componentDidMount() {
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/ecommerce-db-1446a/databases/(default)/documents/collections`
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data, "data"));
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
