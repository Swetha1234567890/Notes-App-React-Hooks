// Write your code here

import {ListItemContainer, SubHeading, Para} from './styledComponents'

const NoteItem = props => {
  const {noteListDetails} = props
  const {title, notes} = noteListDetails

  return (
    <ListItemContainer>
      <SubHeading>{title}</SubHeading>
      <Para>{notes}</Para>
    </ListItemContainer>
  )
}

export default NoteItem
