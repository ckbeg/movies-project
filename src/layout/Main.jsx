import { Component } from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(resp => resp.json())
            .then(data => this.setState( {movies: data.Search,loading: false} ))
    }

    searchMovies = (searchText, movieType = 'all') => {
        this.setState({loading: false} )
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}${movieType !== 'all' ? `&type=${movieType}` : ''}`
        // if (movieType != '' && movieType != 'all'){
        //     url = url + `&type=${movieType}`
        // }
        console.log(url)
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState( {movies: data.Search,loading: false}))
    }

    render(){
        const {movies, loading} = this.state

        return (
            <main className="container content">
                <Search searchMovies = {this.searchMovies}/>
                {
                    loading ? <Preloader /> : <Movies movies={movies} />
                }
                
            </main>
        )
    }
}

export {Main}