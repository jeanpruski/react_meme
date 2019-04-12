import React from 'react';
import Editor from './Editor';

class Secondary extends React.Component {
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
            <span role='img' aria-label="pepe" style={{paddingRight: '10px', fontSize: '1.3rem'}}>🐸</span>
          </div>

          <div
            style={{
              padding: 20,
            }}
          >
            <h1>Pepe Window</h1>
          </div>


          <div
          className="scrollgreen"
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
            >Passons maintenant à l'édition de notre image.</h3>

            <h5
              style= {{
                color: 'grey',
                textAlign: 'justify',
              }}
            >Ajoutez, redimentionnez ou supprimez du texte puis passez à la fenêtre 
              <em
                style={{
                  fontStyle: 'normal',
                  color: '#369fd8',
                }}
              > Dino  </em> 🦕.
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
                <Editor 
                  meme={this.props.memes} />
          {/* Fin de l'affichage des memes */}

          </div>


          <div
          style={{
            height: '100%',
            backgroundColor: 'white',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            boxShadow: '0 -2px 0px darkgrey',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            
          </div>

      </div>
    );
  }
};

export default Secondary;
