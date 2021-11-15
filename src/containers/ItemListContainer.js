import React from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

const resultList = [
  {
    id: 1,
    title: "Libro",
    price: 500,
    pictureUrl: "https://placeimg.com/640/480/any",
  },
  {
    id: 2,
    title: "Libro2",
    price: 550,
    pictureUrl: "https://placeimg.com/640/480/any",
  },
  {
    id: 3,
    title: "Libro3",
    price: 600,
    pictureUrl: "https://placeimg.com/640/480/any",
  },
];

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: 5,
      list: [],
    };
  }

  componentDidMount() {
    const itemListPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resultList);
      }, 2000);
    });

    itemListPromise.then((result) => {
      this.setState({
        list: result,
      });
    });
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

        {this.state.list.length === 0 && <p>Loading...</p>}
        {this.state.list.length > 0 && <ItemList list={this.state.list} />}
      </div>
    );
  }
}

export default ItemListContainer;
