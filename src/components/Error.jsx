import styled from '@emotion/styled';
import React from 'react'

const Texto = styled.div`
    background-color: #b7322C;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'lato', sans-serif;
    font-weight: 800;
    text-align: center;
    border-radius: 10px;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
