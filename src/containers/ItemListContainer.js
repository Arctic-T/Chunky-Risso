import React from "react";
import ItemCount from "../components/ItemCount";

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: 5,
    };
  }

  onAdd = (items) => {
    if (this.state.stock > 0) {
      this.setState({ stock: this.state.stock - items });
    }
  };

  render() {
    return (
      <div>
        <h1
          className="border border-2 border-danger text-white-50 bg-dark mt-3"
          style={{ width: "50%", margin: "auto" }}
        >
          {this.props.greeting}
        </h1>
        <ItemCount stock={this.state.stock} initial="1" onAdd={this.onAdd} />
        {this.state.stock}
      </div>
    );
  }
}

export default ItemListContainer;
