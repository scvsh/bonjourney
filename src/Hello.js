import React from 'react'
import Rnd from 'react-rnd'
import Hexagon from './hex.js'
//import Hexagon2 from './hexagon2.js'




class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 100, height: 100, x: 0, y: 0
    };
  }
  // Calculate position inside grid
  grid(posy, gridsize) {
    if (posy % gridsize >= gridsize / 2) {
      posy = posy + gridsize - posy % gridsize;
      return posy
    } else if (posy % gridsize < gridsize / 2){
      posy = posy - posy % gridsize;
      return posy
    }
  }
  render() {
    return (
        <Rnd className="test"
  size={{ width: this.state.width,  height: this.state.height }}
  position={{ x: this.state.x, y: this.grid(this.state.y, 50) }}
  onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
  onResize={(e, direction, ref, delta, position) => {
    this.setState({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
      ...position
    });
  }}
>
<Hexagon
  size = {this.state.width-100/(Math.sqrt(3)/2)}
  height = {100}
  length = {50}
  radius = {5}
  color = {'#FFFFFF'}
  />

    
</Rnd>
      
 
    );
  }
}

export default Hello