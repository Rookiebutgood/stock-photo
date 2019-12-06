import React from 'react';
import Photo from './Photo';

const PUBLIC_KEY = '56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780'

const imageListStyle ={
  columnCount: 4
}

class ImageList extends React.Component {

  state = {photoArr:null};

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?count=10&client_id='+PUBLIC_KEY,{method:'GET'})
    .then(res=>res.json())
    .then(res=>{
      let arr =[];
      res.forEach((el)=>{
        arr.push([el.id,el.urls.small])
        console.log(el)
      })
      this.setState({photoArr: arr})
    })
  }

  render() {
    if(this.state.photoArr!=null){
      return (
        <div className = 'gallery' style={imageListStyle}>
          {this.state.photoArr.map((el)=><Photo key ={el[0]}src={el[1]}/>)}
        </div>
      )
    }else{
      return (
        <div className = 'gallery'>
        nothing
        </div>
      )
    }
  }
}

export default ImageList;