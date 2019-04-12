import React, { Component } from 'react';
import Home from './components/Home';
import Primary from './components/Primary';
import Secondary from './components/Secondary';
import Lateral from './components/core/Lateral';
import styled from 'styled-components';


const ContainerGlobal = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
`

const Container = styled.div`
  width: 100%;
  padding: 40px;
  position: relative;
`

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      window: 0,
      styleW1: {
        backgroundColor: "#ffbac1",
        position: 'absolute',
        height: '90%',
        opacity: 0.9,
        zIndex: 100,
        width: '80%',
        left: '10%',
        transform: 'scale(0)',
      },
      styleW2: {
        backgroundColor: "#ceffd3",
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        height: '100%',
        transform: 'scale(0)',
        filter: 'blur(1px)'
      },
      styleW3: {
        backgroundColor: "#cee5ff",
        position: 'absolute',
        height: '100%',
        left: '60%',
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        transform: 'scale(0)',
        filter: 'blur(1px)'
      },
    }

    this.onClickW1 = this.onClickW1.bind(this);
    this.onClickW2 = this.onClickW2.bind(this);
    this.onClickW3 = this.onClickW3.bind(this);
  }


  onClickW1() {
    this.setState({
      window: 1,
      styleW1: {
        backgroundColor: "#ffbac1",
        position: 'absolute',
        height: '90%',
        opacity: 0.9,
        zIndex: 100,
        width: '80%',
        left: '10%',
      },
      styleW2: {
        backgroundColor: "#ceffd3",
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        height: '100%',
        transform: 'scale(0.8)',
        filter: 'blur(1px)'
      },
      styleW3: {
        backgroundColor: "#cee5ff",
        position: 'absolute',
        height: '100%',
        left: '60%',
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        transform: 'scale(0.8)',
        filter: 'blur(1px)'
      },
    });
  }

  onClickW2() {
    this.setState({
      window: 2,
      styleW1: {
        backgroundColor: "#ffbac1",
        position: 'absolute',
        height: '100%',
        left: '60%',
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        transform: 'scale(0.8)',
        filter: 'blur(1px)'
        },
        styleW2: {
          backgroundColor: "#ceffd3",
          position: 'absolute',
          height: '90%',
          opacity: 0.9,
          zIndex: 100,
          width: '80%',
          left: '10%',
        },
        styleW3: {
          backgroundColor: "#cee5ff",
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          width: '40%',
          opacity: 0.4,
          height: '100%',
          transform: 'scale(0.8)',
          filter: 'blur(1px)'
        },
    });
  }

  onClickW3() {

    this.setState({
      window: 3,
      styleW1: {
        backgroundColor: "#ffbac1",
        position: 'absolute',
        height: '100%',
        left: '0',
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        transform: 'scale(0.8)',
        filter: 'blur(1px)'
      },
      styleW2: {
        backgroundColor: "#ceffd3",
        position: 'absolute',
        height: '100%',
        left: '60%',
        top: 0,
        zIndex: 1,
        width: '40%',
        opacity: 0.4,
        transform: 'scale(0.8)',
        filter: 'blur(1px)'
      },
      styleW3: {
        backgroundColor: "#cee5ff",
        position: 'absolute',
        height: '90%',
        opacity: 0.9,
        zIndex: 100,
        width: '80%',
        left: '10%',
      },
    });
  }

  render() {
    return (
      <ContainerGlobal>
        <Lateral onClickW1={this.onClickW1} onClickW2={this.onClickW2} onClickW3={this.onClickW3} />

        <Container >

          <Home  windowDisplay={this.state.window} style={this.state.styleW1}/>
          <Primary  windowDisplay={this.state.window} style={this.state.styleW2}/>
          <Secondary  windowDisplay={this.state.window} style={this.state.styleW3}/>
        </Container>
      </ContainerGlobal>
    );
  }
}

export default App;
