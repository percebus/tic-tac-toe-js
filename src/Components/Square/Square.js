import React from 'react';


class Square extends React.Component {
  do_something(value) {
    console.log('click')
    alert(value)
  }

  render() {
    return (
      <button className="square" onClick={() => {this.do_something(this.props.value)}}>
        {this.props.value}
      </button>
    );
  }

  // FIXME this feels like it should go directly in a parameterized constructor
  static render_i(i) {
    return <Square value={i} />
  }
}

export default Square
