import React from 'react';
import Form from 'react-bootstrap/Form'

const HornFilter = (props) => {
    return (
        <div className='hornFilter'>
        <Form>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    as='select'
                    onChange={(event) => props.handleFilterHorns(event.target.value)}
                    >
                        <option value=''>All Horned Beasts</option>
                        <option value='1'>1 Horn</option> 
                        <option value='2'>2 Horns</option> 
                        <option value='3'>3 Horns</option>
                        <option value='100'>100 Horns</option>   
                </Form.Control>
            </Form.Group>
        </Form>
        </div>
    );
};

export default HornFilter;