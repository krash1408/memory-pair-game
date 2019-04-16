export default class Component {
  constructor(host, props) {
    this.host = host;
    this.props = props;
    this._render();
  }
  _render() {
    typeof this.host === 'string' ? this.typeOfHostString() : null;
  }
  render() {

  }
  typeOfHostString() {
    const element = document.createElement('div');
    element.innerHTML = this.host;
    return element;
  }
  typeOfHostFunction() {
    console.log('ololo');
  }
  typeOfHostArray() {
    this.host.forEach(e => {
      typeof element === 'string' ? this.typeOfHostString() : this.typeOfHostFunction() //function for Function
    });
  }
}