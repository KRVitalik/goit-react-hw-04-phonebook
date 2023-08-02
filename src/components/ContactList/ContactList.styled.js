import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
padding:0;
`

export const Contact = styled.li`
display: flex;
justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 4px;
  `
export const ContactInfo = styled.div`
display:flex;
justify-content: space-around;
margin: 0;

`

export const Name = styled.p`
margin: 0;
`

export const Number = styled.p`
margin: 0;
`

export const ButtonDelete = styled.button`
  cursor: pointer;
    padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #D8D8D8;

    &:hover {
    background-color: #a756c5;
    color: white;
  }
  `