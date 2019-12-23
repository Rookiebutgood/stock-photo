import React from 'react';
import Photo from './Photo';
import PUBLIC_KEY  from './keys'

class ImageList extends React.Component {
  state = {photoArr:null};


changeValue = (event) => {
  this.search(event.target.value);
}

search = (key) => {
  if(key){
    fetch('https://api.unsplash.com/search/photos?query='+key+'&client_id='+PUBLIC_KEY,{method:'GET'})
    .then(res=>res.json())
    .then(res=>{
      let arr = [];
      res.results.map((el)=>{
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
}

  componentDidMount() {
    if(this.props.searchValue){
      this.setState({searchValue: this.props.searchValue})
      this.search(this.props.searchValue);
    }else{
      fetch('https://api.unsplash.com/photos/random?count=20&client_id=' + PUBLIC_KEY,{method:'GET'})
      .then(res=>res.json())
      .then(res=>{
        let arr = [];
        res.map((el)=>{
          let obj = {};
          obj.id = el.id 
          obj.url = el.urls.small
          obj.download = el.links.download
          obj.description = el.description
          obj.userLink = el.user.links.html
          arr.push(obj)
        })
        this.setState({photoArr: arr})
      })
    }
  }

  render() {
    if(this.state.photoArr!=null){
      return (
        <div className='w-full px-3'>
          <input 
          className='shadow appearance-none border rounded w-1/2 h-12 py-2 px-3 mb-4 my-auto text-gray-700 text-2xl leading-tight focus:outline-none focus:shadow-outline'
          onChange = {this.changeValue} />
          <div className = 'gallery'>
          {this.state.photoArr.map((el)=>
            <Photo 
              key ={el.id} 
              id={el.id} 
              src={el.url} 
              download = {el.download}
              userLink = {el.userLink}
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