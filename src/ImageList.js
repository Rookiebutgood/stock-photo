import React from 'react';
import Photo from './Photo';

const PUBLIC_KEY = '56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780'

class ImageList extends React.Component {
constructor(props){
  super(props);

  this.state = {photoArr:null, searchValue:'123'};
  this.search = this.search.bind(this);
}

search(event){
    fetch('https://api.unsplash.com/search/photos?query='+event.target.value+'&client_id='+PUBLIC_KEY,{method:'GET'})
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      let arr = [];
      res.results.forEach((el)=>{
        let obj = {};
        obj.id = el.id 
        obj.url = el.urls.small
        obj.download = el.links.download
        obj.description = el.description
        arr.push(obj)
      })
      
      this.setState({photoArr: arr})
    })
}

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?count=20&client_id='+PUBLIC_KEY,{method:'GET'})
    .then(res=>res.json())
    .then(res=>{
      let arr = [];
      res.forEach((el)=>{
        let obj = {};
        obj.id = el.id 
        obj.url = el.urls.small
        obj.download = el.links.download
        obj.description = el.description
        arr.push(obj)
        console.log(el)
      })
      
      this.setState({photoArr: arr})
    })
  }

  render() {
    if(this.state.photoArr!=null){
      return (
        <div className='w-full px-3'>
          <input 
          className='shadow appearance-none border rounded w-1/2 h-12 py-2 px-3 mb-4 my-auto text-gray-700 text-2xl leading-tight focus:outline-none focus:shadow-outline'
          onChange = {this.search} />
          <div className = 'gallery'>
          {this.state.photoArr.map((el)=>
            <Photo 
              key ={el.id} 
              id={el.id} 
              src={el.url} 
              download={el.download}
              description = {el.description} />
          )}
          </div>
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