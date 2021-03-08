import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../commons/spinner/spinner.component";
import { selectCollectionIsLoading } from "../../redux/shop/shop.selector.js";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsLoading,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
