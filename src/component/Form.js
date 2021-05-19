import Form from 'react-bootstrap/Form';
import React from 'react';


class FormInfo extends React.Component {
    updateState=(event)=>{
        let value = event.target.value;
        this.props.updateState(value);
    }
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Custom select</Form.Label>
                        <Form.Control as="select" custom onChange={this.updateState}>
                            <option value='all'>all</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default FormInfo;