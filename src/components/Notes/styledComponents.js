// Style your elements here

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 40px;
  width: 1000px;
  border-radius: 5px;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const Title = styled.input`
  border-style: none;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const TextArea = styled.textarea`
  border-style: none;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  border-style: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  height: 40px;
  width: 90px;
  border-radius: 5px;
`

export const ListContainer = styled.ul`
  display: flex;
  list-style-type: none;
`

export const NoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const Image = styled.img`
  height: 90px;
`

export const NoNotesHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
`

export const NoNotesPara = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
`
