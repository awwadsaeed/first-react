import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeasts title={'the first horned beast'} src={'https://image.shutterstock.com/image-vector/cute-funny-bull-huge-head-260nw-158018219.jpg'} alt={'horned beast'} discreption={'funny horned beast'}/>
                <HornedBeasts title={'the second horned beast'} src={'https://cdn5.vectorstock.com/i/1000x1000/47/99/funny-bulls-vector-44799.jpg'} alt={'horned beast'} discreption={'another funny horned beast'}/>
            </div>
        )
    }
}


export default Main;