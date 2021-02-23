import React from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action.js";
import CategoryPage from "../category/category-page.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.component.scss";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionref = firestore.collection("collections");
    collectionref.onSnapshot(async (snapshot) => {
      const collectionsMap = convertSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
