import React from 'react';
import Gallery from '../components/Gallery';
// import styled from 'styled-components';

class Home extends React.Component {
  render() {
    return(
      <div
        className="containerHome"
        style={this.props.style}
      >
        <div
          style={{
            height: 40,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            boxShadow: '0 2px 0px darkgrey',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            <span role='img' aria-label="astro" style={{paddingRight: '10px', fontSize: '1.3rem'}}>🚀</span>
          </div>

          <div
            style={{
              padding: 20,
            }}
          >
            <h1
              style={{
                letterSpacing: '6px',
              }}
            >Rocket Window</h1>
          </div>

          <div
          className="scrollpink"
          style={{
            height: '100%',
            backgroundColor: 'white',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            boxShadow: '0 -2px 0px darkgrey',
            padding: 20,
            overflow: 'scroll',
            // display: 'flex',
            // justifyContent: 'flex-end',
            // alignItems: 'center',
          }}>

          <h3
              style= {{
                color: 'grey',
                textAlign: 'justify',
                marginBottom: 10,
              }}
            >Bienvenue à vous dans cet éditeur de meme.</h3>

            <h5
              style= {{
                color: 'grey',
                textAlign: 'justify',
              }}
            >Sélectionnez ici un meme pour pouvoir ensuite l'éditer dans la fenêtre 
              <em
                style={{
                  fontStyle: 'normal',
                  color: '#50C450',
                }}
              > Pepe the frog  </em> 🐸.
          </h5>

          <hr
            style={{
              marginTop: 20,
              opacity: 0.5,
              height:1,
              backgroundColor: 'lightgrey',
            }}
          />

          {/* Début de l'affichage des memes */}
                <Gallery 
                  meme={this.props.memes} />
          {/* Fin de l'affichage des memes */}

          </div>

      </div>
    );
  }
};

export default Home;
