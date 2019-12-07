import React from 'react';
const PUBLIC_KEY = '56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780'

class PhotoPage extends React.Component {

  state = {imageObj:null};
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
      {console.log(this.state)}
      return(
        <div className='photoPage'>
          <div className='photoPage__group-left'>
            <img src={this.state.imageObj.urls.regular}></img>
          </div>
          <div className='photoPage__group-right'>
           <img src={this.state.imageObj.user.profile_image.medium}></img><h2>{this.state.imageObj.user.name}</h2>
           <p>{this.state.imageObj.description}</p>
           <button className='photoPage__group-right__download-button'>download</button>
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