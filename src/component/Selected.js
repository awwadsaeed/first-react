import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component{
 
    render(){
        return(
            <>
            <Modal show={this.props.show}
            // onHide={handleClose}
            >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.ajga.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.props.ajga.image_url}/></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" 
              onClick={this.props.hideStuff}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
            </>
        )
    }
}
export default SelectedBeast;