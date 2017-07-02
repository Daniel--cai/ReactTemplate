import * as React from 'react';

interface Prop {
}

interface State {
    name:string
}
export default class Home extends React.Component<Prop,State> {
    
    render() {
        var sdf: number = 234;
        return (
            <div className="hello">
                <p>sdfdsf</p>
                <button className="btn btn-default" type="submit">{sdf}sfdf</button>            
            </div>
        )
    }
}