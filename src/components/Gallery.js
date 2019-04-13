import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10;
  margin-bottom: 20;
  color: Global.color.body;
  font-family: Global.font.primary;
`;

class Gallery extends React.Component {


  render() {

    const memeList = this.props.meme.map((meme, index) => 
      <div key={index}
        onClick = {() => this.props.onClickFn(meme.url)}
        className="mdr"
        style={{
          marginTop: 30,
          width: '32%',
          position: 'relative',
        }}
      >
        <div
          className="imgListHover"
          style={{
            height: 230,
            overflow: 'hidden',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img 
            alt="meme"
            src={meme.url}
            className="imgList"
            style={{
              borderRadius: 10,
              height: '100%',
              position: 'center',
            }}
          />
        </div>
        <p
          className="lolgradient"
          style={{
            textAlign: 'center',
            width: '100%',
            marginTop: 5,
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: 'white',
            textShadow: '0px 0px 10px black',
            position: 'absolute',
            bottom: 0,
            textTransform: 'uppercase',
            paddingBottom: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >{meme.name}</p>
      </div>
    )

// console.log(this.props.meme)
    return (
     <Container>
       <div
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              height: '1000px',
              justifyContent: 'space-between',
            }}
          >
        {memeList}
       </div>
    </Container>
    );
  }
};


export default Gallery;