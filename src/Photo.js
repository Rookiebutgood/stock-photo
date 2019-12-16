import React from 'react';
import  {Link} from 'react-router-dom'

// const photoStyle = {
//   display: 'inline-block',
//   margin: '0 0 1em',
//   width: '100%'
// }

const linkStyle = {
  textAlign: 'center',
  display: 'block',
  marginBottom: '20px',
  fontSize: '26px'
}

const imgStyle={
  width: '100%'
}

function Photo(props) {
  let spanWithTitle;

  if(props.description){
    spanWithTitle = <span className='absolute bottom-0 left-0 bg-black inline-block w-full text-white opacity-0 p-4 text-right'>{props.description}</span>
  }

  return  <div className='inline-block text-center w-full mb-4'>
    <div className='photoWrp relative'>
      <Link to={`/stock-photo/photo/${props.id}`}>
        <img className="photo" 
          style={imgStyle} 
          id={props.id} 
          src={props.src}></img>
      </Link>
      {spanWithTitle}
    </div>
    <a className='inline-block bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold mr-1 mt-3 py-2 px-4 rounded text-center' 
       href={props.userLink} 
       download target='_blank'>Посмотреть на автора</a>
    <a className='inline-block bg-green-500 hover:bg-green-700 text-white text-sm font-bold ml-5 mt-3 py-2 px-4 rounded text-center' 
       href={props.download} 
       download target='_blank'>Жми чтобы скачать</a>
  </div>
}

export default Photo;
