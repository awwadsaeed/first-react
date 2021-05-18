import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from './data.json'
import { CardColumns } from 'react-bootstrap';
class Main extends React.Component {
    render() {
        return (
            <>
                <CardColumns>
                    {this.props.beastInfo.map((element,index) => {
                        return <HornedBeasts
                            title={element.title}
                            src={element.image_url}
                            discreption={element.description}
                            key={index}
                            showStuffFromMain={this.props.showStuffFromApp}
                        />
                    })}
                </CardColumns>
            </>
        )
    }
}


export default Main;