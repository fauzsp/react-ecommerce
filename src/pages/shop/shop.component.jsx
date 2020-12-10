import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import "./shop.component.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
    console.log(props);
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
