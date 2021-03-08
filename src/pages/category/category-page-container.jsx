import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsRendered } from "../../redux/shop/shop.selector.js";
import WithSpinner from "../../components/commons/spinner/spinner.component";
import CategoryPage from "./category-page.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsRendered,
});
const CategoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryPage);

export default CategoryPageContainer;
