import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: [] };


  /* this method amkes a nw request and gets back all the data in form of response */
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    console.log(response);
    console.log(response.data.results);
    this.setState({ images: response.data.results });
    
  };


/* prop name culd have been runMeWhenUserSubmits , is now onSubmit  , passing  a prop 
to a component that we are creating-> any name*/

/* here the state is being passed as a prop to a child, which will inturn render the images */
/* callabck is passed from parent to child and child calls that callback */
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
         
        <SearchBar onSubmit={this.onSearchSubmit} />
        
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
