import React from 'react';;

class Editor extends React.Component {
  render() {
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
            margin: '30px auto',
            width: '60%',
            height: '55vh',
            borderRadius: 40,
            position: 'relative',
          }}
        >
          <div
          id="save"><span role='img' aria-label="save">💾</span></div>
        </div>

      </div>
    );
  }
};

export default Editor;