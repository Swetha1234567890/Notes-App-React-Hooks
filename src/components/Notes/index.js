// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'

import {
  Container,
  Heading,
  CardContainer,
  Title,
  TextArea,
  Button,
  ListContainer,
  NoListContainer,
  NoNotesHeading,
  NoNotesPara,
  Image,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [notesList, setList] = useState('')
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeTextArea = event => setNotes(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newNotes = {
      id: v4(),
      title,
      notes,
    }
    setList(prevState => [...prevState, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <CardContainer onSubmit={onSubmitForm}>
        <Title
          type="text"
          onChange={onChangeTitle}
          value={title}
          placeholder="Title"
        />
        <TextArea
          rows="5"
          cols="50"
          onChange={onChangeTextArea}
          value={notes}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </CardContainer>

      <ListContainer>
        {notesList.length > 0 ? (
          notesList.map(each => (
            <NoteItem key={each.id} noteListDetails={each} />
          ))
        ) : (
          <NoListContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <NoNotesPara>Notes you add will appear here</NoNotesPara>
          </NoListContainer>
        )}
      </ListContainer>
    </Container>
  )
}

export default Notes
