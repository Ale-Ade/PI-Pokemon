//Aqui configure las rutas e importe todos los componentes
import React from 'react';
import { Route } from 'react-router-dom';
import Initial from './component/Landing-Page/Initial';
import Footer from './component/Footers/Footer';
import NavInitial from './component/Navbars/NavInitial';
import Navbar from './component/Navbars/Navbar';
import NavbarSimple from './component/Navbars/NavbarSimple';
import Home from './component/Home/Home';
import PokemonDetails from './component/Pokemon-Details/PokemonDetails';
import Spinner from './component/Spinner/Spinner';
import AddPokemon from './component/AddPoke/AddPokemon';

function App() {
    return (
        <React.StrictMode>
            <Route exact path='/' component={NavInitial} />
            <Route exact path='/home' component={Navbar} />
            <Route path='/pokemon' component={Navbar} />
            <Route exact path='/home/add' component={NavbarSimple} />
            <Route path='/aboutme' component={NavbarSimple} />
            <Route exact path='/' component={Initial} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/pokemon/:id' component={PokemonDetails} />
            <Route path='/home/add' component={AddPokemon} />
            <Route exact path='/spinner' component={Spinner} />
            <Route path='/' component={Footer} />
        </React.StrictMode>
    );
}

export default App;
