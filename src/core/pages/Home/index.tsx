import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/Button';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">Desafio do Capítulo 3, <br /> Bootcamp DevSuperior</h1>
        <p className="home-text">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
            Favor observar as instruções passadas no capítulo sobre a elaboração <br />
            deste projeto. <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki: <span className="email">antforfigma@gmail.com</span>
        </p>
        <Link to="/Search">
            <Button text="Começar" />
        </Link>
    </div>
);

export default Home;