import React from 'react';

const photoStyle= {
  display: 'inline-block',
  margin: '0 0 1em',
  width: '100%'
}

class Photo extends React.Component {
  render(){
  return (
    <img className="photo" style={photoStyle} src={this.props.src}></img>
  );
  }
}

export default Photo;
