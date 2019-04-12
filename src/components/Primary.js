import React from 'react';

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
