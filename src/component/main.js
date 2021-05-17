import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json'
import { CardColumns } from 'react-bootstrap';
class Main extends React.Component {
    render() {
        return (
            <>
                <CardColumns>
                    {data.map((element,index) => {
                        return <HornedBeasts
                            title={element.title}
                            src={element.image_url}
                            discreption={element.description}
                            key={index}
                        />
                    })}
                </CardColumns>
            </>
            // <div>
            //     <HornedBeasts title={'the first horned beast'} src={'https://image.shutterstock.com/image-vector/cute-funny-bull-huge-head-260nw-158018219.jpg'} alt={'horned beast'} discreption={'funny horned beast'}/>
            //     <HornedBeasts title={'the second horned beast'} src={'https://cdn5.vectorstock.com/i/1000x1000/47/99/funny-bulls-vector-44799.jpg'} alt={'horned beast'} discreption={'another funny horned beast'}/>
            // </div>
        )
    }
}


export default Main;