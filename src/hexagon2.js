import React from 'react'
import {number, string, object, node, func, bool} from 'prop-types'



class Hex {
    constructor() {
        this.orientation = Hex.FLAT_TOP;
        this.length = Hex.DEFAULT_LENGTH;
        this.radius = Hex.DEFAULT_RADIUS;
        this.setColor(Hex.DEFAULT_COLOR);
        this.setShadow(Hex.DEFAULT_SHADOW);
        this.update();

    }
    getPath() {
        var height = this.height;
        var width = this.width;
        var a, b, c, d, e, f;

        a = new Vector(0, height / 2);
        b = new Vector(width / 4, 0);
        c = new Vector(50 + width * 3 / 4, 0);
        d = new Vector(50 + width, height / 2);
        e = new Vector(50 + width * 3 / 4, height);
        f = new Vector(width / 4, height);
      

        if (this.radius === 0) {
            return new Path([
                new Path.M(a),
                new Path.L(b),
                new Path.L(c),
                new Path.L(d),
                new Path.L(e),
                new Path.L(f),
                new Path.Z()
            ]);
        }

        var right = Vector.fromAngle(b.subtract(a).angle(), this.radius);
        var left = Vector.fromAngle(f.subtract(a).angle(), this.radius);
        var level = this.orientation === Hex.POINTY_TOP ?
            new Vector(0, this.radius) : new Vector(this.radius, 0);

        return new Path([
            new Path.M(a.add(left)),
            new Path.Q(a, a.add(right)),
            new Path.L(b.subtract(right)),
            new Path.Q(b, b.add(level)),
            new Path.L(c.subtract(level)),
            new Path.Q(c, c.add(left)),
            new Path.L(d.subtract(left)),
            new Path.Q(d, d.subtract(right)),
            new Path.L(e.add(right)),
            new Path.Q(e, e.subtract(level)),
            new Path.L(f.add(level)),
            new Path.Q(f, f.subtract(left)),
            new Path.Z()
        ]);
    }
    update() {
        this.width = this.length * 2;
        this.height = this.width * Math.sqrt(3) / 2;

        this.$svg.attr('width', Math.ceil(this.width + 50));
        this.$svg.attr('height', Math.ceil(this.height));
        this.$svg.attr('viewbox', '0 0 ' + this.width + ' ' + this.height);
        this.$path.attr('d', this.getPath().toString());

        showCode(this);
    }
}

Hex.DEFAULT_LENGTH = 100;
Hex.DEFAULT_RADIUS = 25;
Hex.DEFAULT_COLOR = '#fff';
Hex.DEFAULT_SHADOW = '0 0 10px rgba(255, 255, 255, 0.5)';
Hex.FLAT_TOP = 'flat';
Hex.POINTY_TOP = 'pointy';

let path = (
<path d={this.getPath().toString()}/>
)

let svg = (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={props.className}
    
      width={Math.ceil(this.width + 50)}
      height={Math.ceil(this.height)}
      viewbox= {'0 0 ' + this.width + ' ' + this.height}>

      {props.backgroundImage && <BackgroundDef id={bgId} {...props} />}
      {path}

      {props.children}
    </svg>
)





function Hexagon(props) {
  
  return (
    svg
  )

}
Hexagon.propTypes = {
  length: number,
  diagonal: number,
  className: string,
  onClick: func,
  href: string,
  target: string,
  flatTop: bool,
  backgroundImage: string,
  backgroundWidth: number,
  backgroundHeight: number,
  backgroundScale: number,
  backgroundSize: number,
  hexProps: object,
  style: object,
  children: node
}

Hexagon.defaultProps = {
  diagonal: 100,
  flatTop: false,
  style: {}
}

export default Hexagon