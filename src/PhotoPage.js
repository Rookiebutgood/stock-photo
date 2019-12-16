import React from 'react';
import  {Link} from 'react-router-dom'
const PUBLIC_KEY = '56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780'

class PhotoPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {imageObj:null}
  }

  componentDidMount() {
    let a =this.props.location.pathname.split('/')
    a = a[a.length-1]
    {
      fetch(`https://api.unsplash.com/photos/${a}?client_id=${PUBLIC_KEY}`,{method:'GET'})
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
                 searchValue: 'cats'
               }
             }}>
               <p className='inline-block bg-gray-400 m-2 px-2 py-1 rounded-lg'>{el.title}</p>
             </Link>
             )}
            </div>

            <div className='photoPage__group-right__numbers border-solid border border-gray-600 rounded-lg'>
              <span>Downloads:{this.state.imageObj.downloads}</span>
              <span>Views:{this.state.imageObj.views}</span>
            </div>

            <div className='photoPage__group-right__description border-solid border border-gray-600 rounded-lg'>
             <p>{this.state.imageObj.description}</p>
             <p>{this.state.imageObj.alt_description}</p>
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