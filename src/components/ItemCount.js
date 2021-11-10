import React from "react";

class ItemCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(this.props.initial),
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stock != this.props.stock) {
      this.setState({ count: this.props.initial });
    }
  }

  addStock = () => {
    this.props.onAdd(this.state.count);
  };

  decreaseItem = () => {
    if (this.state.count > this.props.count) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  increaseItem = () => {
    if (this.state.count < this.props.stock) {
      this.setState({ count: parseInt(this.state.count) + 1 });
    }
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.decreaseItem}>
          -
        </button>
        <span>{this.state.count}</span>
        <button type="button" onClick={this.increaseItem}>
          +
        </button>
        <button
          type="button"
          onClick={() => this.props.onAdd(this.state.count)}
        >
          Agregar al Carrito
        </button>
      </div>
    );
  }
}

export default ItemCount;
