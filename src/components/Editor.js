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
            width: '68%',
            height: '60%',
            borderRadius: 40,
          }}
        ></div>

        <div
          style={{
            borderRadius: 10,
            width: '30%',
            height: '40%',
            backgroundColor: '#ceffd3',
            border: '2px solid lightgrey',
          }}
        ></div>
      </div>
    );
  }
};

export default Editor;