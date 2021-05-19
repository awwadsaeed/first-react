import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }
  setVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    })
  }
  sendInfo = () => {
    this.props.showStuffFromMain(this.props.title);
  }
  render() {
    return (
      <Card style={{ width: '18rem' }} onClick={this.sendInfo}>
        <Card.Img variant="top" src={this.props.src} alt={this.props.title} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.discreption}
          </Card.Text>
          <Button onClick={this.setVotes} variant="primary">❤️ {this.state.votes}</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeasts;