import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from './data.json'
import { CardColumns } from 'react-bootstrap';
import FormInfo from './Form'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changedArr: this.props.beastInfo
        }
    }
    updateState = (value) => {
        let result=[];
        if (value!='all') {
        result = this.props.beastInfo.filter((item) => {
                if (item.horns == value) {
                    return item;
                }
            })
            } else{
                console.log(this.state.changedArr, "another text");
               result = this.props.beastInfo;
            }
        this.setState({
            changedArr: result,
        })
        console.log(this.state.changedArr);
        console.log('some text');

    }

    render() {
        return (
            <>
                <FormInfo
                    updateState={this.updateState}
                />
                <CardColumns>
                    {this.state.changedArr.map((element, index) => {
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