function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Counter extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "increment",







    () => {
      this.setState(prevState => {
        return { counter: prevState.counter + 1 };
      });
    });_defineProperty(this, "decrement",
    () => {
      this.setState(prevState => {
        return { counter: prevState.counter - 1 };
      });
    });this.state = { counter: 0 };this.increment = this.increment.bind(this);}
  render() {
    return (
      React.createElement("div", { className: "center" },
      React.createElement("button", { onClick: this.decrement.bind(this), className: "button button-decrement" },
      React.createElement("div", { class: "sign" }, "-")),
      React.createElement("div", { class: "counter" }, this.state.counter),
      React.createElement("button", { onClick: this.increment.bind(this), className: "button button-increment" }, React.createElement("div", { class: "sign" }, "+"))));


  }}



ReactDOM.render(
React.createElement(Counter, null),
document.getElementById('root'));