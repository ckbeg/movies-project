import { Component } from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

class Main extends Component{
    state = {
        movies: []
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=c84dd150&s=matrix')
            .then(resp => resp.json())
            .then(data => this.setState( {movies: data.Search} ))
    }

    searchMovies = (searchText, movieType) => {
        let url = `http://www.omdbapi.com/?apikey=c84dd150&s=${searchText}`
        if (movieType != ''){
            url = url + `&type=${movieType}`
        }
        console.log(url)
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState( {movies: data.Search}))
    }

    render(){
        const {movies} = this.state

        return (
            <main className="container content">
                <Search searchMovies = {this.searchMovies}/>
                {
                    movies && movies.length > 0 ? <Movies movies={movies} /> : <Preloader />
                }
                
            </main>
        )
    }
}

export {Main}