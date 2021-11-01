import React from "react";

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1
        className="border border-2 border-danger text-white-50 bg-dark mt-3"
        style={{ width: "50%", margin: "auto" }}
      >
        {this.props.greeting}
      </h1>
    );
  }
}

export default ItemListContainer;
