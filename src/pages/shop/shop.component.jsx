import React from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import WithSpinner from "../../components/commons/spinner/spinner.component";

import { updateCollections } from "../../redux/shop/shop.action.js";
import CategoryPage from "../category/category-page.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.component.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true,
  };
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionref = firestore.collection("collections");
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/ecommerce-db-1446a/databases/(default)/documents/collections`
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data, "data"));

    collectionref.get().then(async (snapshot) => {
      const collectionsMap = convertSnapshotToMap(snapshot);
      await updateCollections(collectionsMap);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
