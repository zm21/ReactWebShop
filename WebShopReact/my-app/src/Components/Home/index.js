import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export class Home extends Component {

    state = {
        datawheathers: []
    };

    componentDidMount() {
        let url = "/WeatherForecast";
        axios.get(url)
            .then(result => {
                console.log('----result----', result.data);
                this.setState(
                    {
                        datawheathers: result.data
                    });
            });
    }

    render() {
        const { datawheathers } = this.state; 
        const listItems = datawheathers.map((data, i) =>
            <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{data.date}</td>
                <td>{data.temperatureC}</td>
                <td>{data.summary}</td>
            </tr>
        );
        return (
            <div>
                <h1>Hello Home Page</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">TemperatureC</th>
                            <th scope="col">Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;