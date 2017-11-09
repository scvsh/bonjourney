import React, { Component } from "react";

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    subtract(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    multiply(s) {
        return new Vector(this.x * s, this.y * s);
    }
    divide(s) {
        return new Vector(this.x / s, this.y / s);
    }
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    unit() {
        return this.divide(this.magnitude());
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
    toString() {
        return '(' + x + ', ' + y + ')';
    }
}

Vector.fromAngle = function(angle, magnitude) {
        if (typeof magnitude !== 'number') {
            magnitude = 1;
        }
        return new Vector(
            magnitude * Math.cos(angle),
            magnitude * Math.sin(angle)
        );
}

function Path(commands) {
	this.commands = commands;
}

Path.prototype.toString = function() {
	return this.commands.join('');
}
// Initialise path
Path.M = function(point) {
	this.point = point;
}

Path.M.prototype.toString = function() {
	return 'M' + this.point.x + ' ' + this.point.y;
}
// Move to point
Path.L = function(to) {
	this.to = to;
}

Path.L.prototype.toString = function() {
	return 'L' + this.to.x + ' ' + this.to.y;
};
// Qubic bezier
Path.Q = function(control, to) {
	this.control = control;
	this.to = to;
}

Path.Q.prototype.toString = function() {
	return 'Q' + this.control.x + ' ' + this.control.y
		+ ' ' + this.to.x + ' ' + this.to.y;
}
// End line
Path.Z = function() { };

Path.Z.prototype.toString = function() {
	return 'Z';
}


export default class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.getPath=this.getPath.bind(this);
        this.width = 100 / (Math.sqrt(3)/2);
        this.height = this.width * (Math.sqrt(3)/2);
        this.radius = this.props.radius;
        this.size = this.props.size;
      
        this.state = {
          path: this.getPath().toString()
        }
      
    }

    getPath() {
        var width = this.width;
        var height =  this.height;
        var a, b, c, d, e, f;
        
        a = new Vector(0, height / 2);
        b = new Vector(width / 4, 0);
        c = new Vector(this.props.size + width * 3 / 4, 0);
        d = new Vector(this.props.size + width, height / 2);
        e = new Vector(this.props.size + width * 3 / 4, height);
        f = new Vector(width / 4, height);


        var right = Vector.fromAngle(b.subtract(a).angle(), this.radius);
        var left = Vector.fromAngle(f.subtract(a).angle(), this.radius);
        var level = new Vector(this.radius, 0);
      

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

    render() {
        return (
             <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={this.props.className ? this.props.className : ''}
    
      width={Math.ceil(this.width + this.props.size)}
      height={Math.ceil(this.height)}
      viewBox={'0 0 ' + (this.width + this.props.size) + ' ' + this.height}
      fill={'#c5c5c5'}>
      
      <path d={this.getPath().toString()}/>

      {this.props.children}
  </svg>
        )
    } 
}
