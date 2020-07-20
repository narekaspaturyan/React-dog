import React, { Component } from "react";
let log = console.log;

class Counter extends Component {
  //   componentDidUpdate(prevProps, prevState) {
  //     log("prevProps", prevProps);
  //     log("prevState", prevState);
  //   }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={this.props.onDelete}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  //   clickIncrement = (arg) => {
  //     log(arg);
  //     this.setState({ count: (this.state.count += 1) });
  //   };

  //   clickDecrement = (arg) => {
  //     log(arg);
  //     this.setState({ count: (this.state.count -= 1) });
  //   };

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //   conditionalRender() {
  //     if (this.state.tags.length === 0) return <h3>Enter tags</h3>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag, i) => (
  //           <li key={tag + i}>{tag}</li>
  //         ))}
  //       </ul>
  //     );co
  //   }
}

export default Counter;
