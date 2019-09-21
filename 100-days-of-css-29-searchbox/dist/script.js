function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Item extends React.Component {
  render() {
    let item = this.props.item;
    let value = this.props.value;
    let output = item.replace(value, "<span style='color:#3498db; font-weight:bold;'>" + value + "</span>");
    return (
      React.createElement("div", { onClick: () => this.props.search(item), className: "selectItem", dangerouslySetInnerHTML: { __html: output } }));

  }}


class Search extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "search",












    fruit => {
      this.setState({
        value: "",
        fruit: "You picked: " + fruit });

    });this.state = { value: "", list: ["apple", "mangoes", "bananas", "oranges"], fruit: "" };}handleChange(event) {this.setState({ value: event.target.value });}

  render() {
    let list = this.state.list;
    let value = this.state.value;
    return (
      React.createElement("div", { className: "center" },
      React.createElement("div", { className: "result" }, this.state.fruit),
      React.createElement("div", { class: "searchWrapper" },
      React.createElement("input", { type: "text", className: "search", value: this.state.value, onChange: this.handleChange.bind(this), placeholder: "Start tying fruits..." })),


      React.createElement("div", { className: value === "" ? "list" : "list active" },
      React.createElement("ul", null,
      list.map((item) =>
      item.indexOf(value) !== -1 ?
      React.createElement("li", null,
      React.createElement(Item, { item: item, value: value, search: this.search.bind(this) })) :
      "")))));






  }}


ReactDOM.render(
React.createElement(Search, null),
document.getElementById('root'));