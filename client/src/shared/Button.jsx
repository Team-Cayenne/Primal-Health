import React from 'react';
import Styled from 'styled-components'

const Button = (props) => {

  if (props.type === 'getStarted') {
    return (
      <div>
        <GetStarted>Get started</GetStarted>
      </div>
    )
  }

  return (
    <div>
      <button>test</button>
    </div>
  )

}

const GetStarted = Styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  background: rgba(38, 191, 0, .25);
  border-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  color: #26BF00;
  height: 50px;
  width: 130px;
  font-size: 18px;
  font-family: 'Lato';
  font-weight: semi-bold;
`

export default Button