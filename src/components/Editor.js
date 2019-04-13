import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';




class Editor extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      value: '',
      quoteArray: [],
      minX: 0,
      minY: 0,
      maxX: 100,
      maxY: 100,
      valueX: 50,
      valueY: 50,
      fontSize: 40,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewQuote = this.addNewQuote.bind(this);
    this.removeQuote = this.removeQuote.bind(this);
    this.onSliderChangeX = this.onSliderChangeX.bind(this);
    this.onSliderChangeY = this.onSliderChangeY.bind(this);
    this.onSliderChangeS = this.onSliderChangeS.bind(this);
  }

  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addNewQuote(quote) {
    const newQuote = this.state.quoteArray;
    newQuote.push(quote);
    this.setState({
      quoteArray : newQuote,
    })
  };

  removeQuote(quote) {
    let newQuote = this.state.quoteArray.slice();
    newQuote.splice(quote, 1);
    this.setState({
      quoteArray : newQuote,
    });
  }

  onSliderChangeX = (value) => {
    console.log(value);
    this.setState({
      valueX: value,
    });
  };

  onSliderChangeY = (value) => {
    console.log(value);
    this.setState({
      valueY: value,
    });
  };

  onSliderChangeS = (value) => {
    console.log(value);
    this.setState({
      fontSize: value,
    });
  };

  render() {
    // console.log(this.state);

    const quoteList = this.state.quoteArray.map((quote, index) => 
      <div
        onClick={() => this.removeQuote(index)}
        className="quoteAbsolute"
        style={{
          top: `calc(${this.state.valueY}% - 20px)`,
          left: `calc(${this.state.valueX}% - 40px`,
          fontSize: this.state.fontSize,
        }}
        key={index}>
      {quote.value}</div>
    )

    return(
      <div
        style={{
          marginTop: 30,
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div
          className="canvas"
          style={{
            width: '68%',
            height: '60%',
            borderRadius: 40,
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'scroll',
            position: 'relative',
          }}
        >
          { quoteList }
          <img 
            style={{
              borderRadius: 30,
              // width: '100%',
              height: '94%',
              boxShadow: '2px 2px 50px grey',
            }}
            src={this.props.selectedMeme}
            alt="selected meme"
          />
        </div>

        <div
          style={{
            borderRadius: 10,
            width: '30%',
            height: '50%',
            backgroundColor: '#ceffd3',
            border: '2px solid lightgrey',
            display: 'flex',
            flexDirection: 'column',
          }}
        >


          <form >
          <p
            style={{
              color: 'grey',
              fontSize: '1rem',
              padding: '20px 10px 0px 13px',
            }}
          >Entrez du texte</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />


            <p
            style={{
              color: 'grey',
              fontSize: '1rem',
              padding: '20px 10px 0px 13px',
            }}
          >Repositionnez le texte</p>
            X: <Slider style={{width: '80%', margin: 'auto'}} step="2" onChange={this.onSliderChangeX} value={this.state.valueX} min={this.state.minX} max={this.state.maxX}/>
            Y: <Slider style={{width: '80%', margin: 'auto'}} step="2" onChange={this.onSliderChangeY} value={this.state.valueY} min={this.state.minY} max={this.state.maxY}/>
            Size: <Slider style={{width: '80%', margin: 'auto'}} step="4" onChange={this.onSliderChangeS} value={this.state.fontSize} min={this.state.minY} max={this.state.maxY}/>
           
            <p
            style={{
              color: 'grey',
              fontSize: '3rem',
              padding: '25px 10px 0px 13px',
            }}
          >🔥</p>
            <input 
              type="button" 
              value="🌈" 
              onClick={() => this.addNewQuote({
                value: this.state.value
              })}/>
          </form>
        
        </div>
      </div>
    );
  }
};

export default Editor;