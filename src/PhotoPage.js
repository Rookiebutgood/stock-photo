import React from 'react';
import  {Link} from 'react-router-dom'
import PUBLIC_KEY  from './keys'

class PhotoPage extends React.Component {

    state = {imageObj:null}

  componentDidMount() {
    let idFromPath =this.props.location.pathname.split('/')
    idFromPath = idFromPath[idFromPath.length-1]
    {
      fetch(`https://api.unsplash.com/photos/${idFromPath}?client_id=${PUBLIC_KEY}`,{method:'GET'})
      .then(res=>res.json())
      .then( res=>{ this.setState( {imageObj: res} ) } )
    }
  }

  render(){
    if(this.state.imageObj!=null){
      return(
        <div className='photoPage flex'>

          <div className='photoPage__group-left w-1/3'>
            <img className='w-full h-auto' src={this.state.imageObj.urls.regular}></img>
          </div>

          <div className='photoPage__group-right w-2/3 ml-4'>
            <img className='rounded-full' src={this.state.imageObj.user.profile_image.medium}></img>
            <h2>{this.state.imageObj.user.name}</h2>

            <div className='photoPage__group-right__tags'>
              <h2>Tags:</h2>
             {this.state.imageObj.tags.map((el)=>
             <Link to={{
               pathname: '/stock-photo',
               state: {
                 searchValue: el.title
               }
             }}>
               <p className='inline-block bg-gray-400 m-2 px-2 py-1 rounded-lg'>{el.title}</p>
             </Link>
             )}
            </div>
          </div>

        </div>
      )
    }else{
      return(
        <div>test</div>
      )
    }
  }
}

export default PhotoPage;