import styled from 'styled-components'

export const Card = styled.div`
  padding: 10px;
  border: 5px solid black;
  font-size: 20px;
  line-height: 1.5;
  background: ${(props) => (props.active ? 'red' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
`
