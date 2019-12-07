import React from 'react';
import  {Link} from 'react-router-dom'

const photoStyle= {
  display: 'inline-block',
  margin: '0 0 1em',
  width: '100%'
}

class Photo extends React.Component {
  render(){
  return (
    <Link to={`/photo/${this.props.id}`}>
      <img className="photo" style={photoStyle} id={this.props.id} src={this.props.src}></img>
    </Link>
  );
  }
}

export default Photo;
