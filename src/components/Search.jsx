import { Component } from "react";

class Search extends Component{
    state = {
        searchText: '',
    }

    constructor(){
        super()
        this.movieType = '';
    }
    
    handleChange = (event) =>{
        this.setState({searchText: event.target.value})
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.searchText, this.movieType);
        }
    }

    onChangeValue = (event) => {
        //this.props.searchMovies(event.target.value)
        this.movieType = event.target.value
    }
    
    render(){
        return (
            <div className="input-field col s6">
                <input 
                    id="search" 
                    type="text" 
                    className="validate" 
                    onChange={this.handleChange}
                    value={this.state.searchText}
                    onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.searchText, this.movieType)}>Search</button>
                    
                <div onChange={this.onChangeValue}>
                    <p>
                        <label>
                            <input name="movieType" type="radio" value='all'/>
                            <span>All</span>
                        </label>
                    {/* </p>
                    <p> */}
                        <label>
                            <input name="movieType" type="radio" value='movie'/>
                            <span>Movies only</span>
                        </label>
                    {/* </p>
                    <p> */}
                        <label>
                            <input name="movieType" type="radio" value='series'/>
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
                    
                {/* <label htmlFor="search">Search</label> */}
            </div>
        )
    }
}

export {Search}