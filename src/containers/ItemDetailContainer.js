import React from "react";
import Item from "../components/Item";

class ItemDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }

  componentDidMount() {
    const itemPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          title: "Libro",
          price: 500,
          pictureUrl: "https://placeimg.com/640/480/any",
        });
      }, 2000);
    });

    itemPromise.then((result) => {
      this.setState({
        item: result,
      });
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        {!this.state.item && <p>Buscando Item...</p>}
        {this.state.item && <Item item={this.state.item} />}
      </div>
    );
  }
}

export default ItemDetailContainer;
