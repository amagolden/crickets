import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const QuestionForm = ({ handleAddQuestion }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddQuestion(value);
        setValue('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <Row className="align-items-center">
            <Col className="my-1">
                <Form.Group className="mb-0">
                    <Form.Control 
                        type='text' 
                        id='question-id' 
                        name='question' 
                        onChange={event => setValue(event.target.value)} 
                        value={value} 
                        placeholder='Enter question' />    
                </Form.Group>
            </Col>
            <Col xs="auto" className="my-1">
                <button 
                    className='form-button btn btn-info'
                    type='submit' 
                    value='Add Question' 
                    >Add
                </button>
            </Col>
        </Row>
    </form>
    );
}

export default QuestionForm;