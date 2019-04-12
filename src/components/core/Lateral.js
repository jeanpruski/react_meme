import React from 'react';
import styled from 'styled-components';

const LateralContainer = styled.div`
  background-color: white;
`

class Lateral extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <LateralContainer
        onClick = {() => {
          this.setState({
            isClickedLateral: !this.state.isClickedLateral,
          })
        }}
        id="lateralContainer"
        style={{
          width: this.state.isClickedLateral ? '160px' : '30px',
          transition: 'all 0.5s',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >

        <i
          style={{
            transition: 'all 0.5s',
            opacity: this.state.isClickedLateral ? '0' : '0.4',
            position: 'absolute',
            right: this.state.isClickedLateral ? '10px' : '6px',
            top: '1vh',
          }}
          className="fas fa-angle-right fa-2x arrow">
        </i>

        <i
          style={{
            transition: 'all 0.5s',
            opacity: this.state.isClickedLateral ? '0.4' : '0',
            position: 'absolute',
            right: this.state.isClickedLateral ? '-8px' : '5px',
            top: '1vh',
          }}
          className="fas fa-angle-left fa-2x arrow">
        </i>

        <span
          role='img'
          aria-label="astro"
          onClick={this.props.onClickW1}
          style={{
            opacity: this.state.isClickedLateral ? '1' : '0',
            transform: this.state.isClickedLateral ? 'scale(1)' : 'scale(0)',
            transition: 'all 0.4s',
            margin: 'auto',
          }}
          className="lateralItem" >🚀
        </span>

        <span
          role='img'
          aria-label="pepe"
          onClick={this.props.onClickW2}
          style={{
            opacity: this.state.isClickedLateral ? '1' : '0',
            transform: this.state.isClickedLateral ? 'scale(1)' : 'scale(0)',
            transition: 'all 0.4s',
            margin: 'auto',
          }}
          className="lateralItem" >🐸
        </span>

        <span
          role='img'
          aria-label="dino"
          onClick={this.props.onClickW3}
          style={{
            opacity: this.state.isClickedLateral ? '1' : '0',
            transform: this.state.isClickedLateral ? 'scale(1)' : 'scale(0)',
            transition: 'all 0.4s',
            margin: 'auto',
          }}
          className="lateralItem" >🦕
        </span>



      </LateralContainer >
    );
  }
};

export default Lateral;