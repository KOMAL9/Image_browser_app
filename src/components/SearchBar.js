import React from 'react';
/* it is nt the searchbar's job to make n/w request to find images , we need 
topass the search term back to the app component , app component will make api req*/
class SearchBar extends React.Component {
  state = { term: '' };


  onFormSubmit = e => {
    e.preventDefault();

   /* refernce to the f() callback passed in as prop ->this.props.onsubmit */
   /* any time user submits the form , search bar takes the callback given and calls
    that callback with search term.So , callback invoked inside app comp with 
    search term entered */
    this.props.onSubmit(this.state.term);
  };



  /* onSubmit : event handler  , onFormSubmit : callback */
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={ e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
