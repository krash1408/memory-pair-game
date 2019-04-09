export default class Component {
  constructor (host, props = {}) {
    
  }
  _render() {
    let render = this.render();
    const element = document.createElement(this.props.tag);
    element.setAttribute(this.props.id, this.props.idValue);
    element.setAttribute(this.props.backGround, this.props.backGroundValue)
  }
  render() {

  }
}
