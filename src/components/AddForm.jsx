import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/theme.context';

function AddForm() {

  const { theme } = useContext(ThemeContext)

  return (
    <Form className='m-3'>
      
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" name="title" data-bs-theme={theme}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control type="text" name="description" data-bs-theme={theme}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control type="text" name="content" data-bs-theme={theme}/>
      </Form.Group>

      <Button className={`${theme}-btn`}>Add new Book</Button>

    </Form>
  )
}

export default AddForm