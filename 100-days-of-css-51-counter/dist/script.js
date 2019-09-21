function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Counter extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "startTimer",




















    () => {
      this.interval = setInterval(() => this.tick(), 1000);
      this.setState({ paused: false });
    });_defineProperty(this, "stopTimer",

    () => {
      clearInterval(this.interval);
      this.setState({ paused: true });
    });this.state = { seconds: 0, paused: false };}tick() {this.setState(state => ({ seconds: state.seconds + 1 }));}componentDidMount() {this.startTimer();}componentWillUnmount() {this.stopTimer();}

  render() {
    let seconds = this.state.seconds;
    let pre = "";
    switch (true) {
      case seconds < 10:
        pre = "000";
        break;
      case seconds < 100:
        pre = "00";
        break;
      case seconds < 1000:
        pre = "0";
        break;
      default:
        pre = "";
        break;}

    let time = pre + seconds;

    return (
      React.createElement(React.Fragment, null,
      React.createElement("div", { className: "timer" }, time),

      this.state.paused &&
      React.createElement("button", { onClick: () => this.startTimer(), className: "timerBtn" },
      React.createElement("i", { class: "material-icons" }, "play_arrow")),


      !this.state.paused &&

      React.createElement("button", { onClick: () => this.stopTimer(), className: "timerBtn" },
      React.createElement("i", { class: "material-icons" }, "pause"))));







  }}


ReactDOM.render(
React.createElement(Counter, null),
document.getElementById('counter'));