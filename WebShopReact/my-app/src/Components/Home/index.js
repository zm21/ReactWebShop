import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'react-loader-spinner'

export class Home extends Component {

    state = {
        datawheathers: [],
        isLoading: false
    };

    componentDidMount() {
        let url = "/WeatherForecast";
        this.setState({
            isLoading: true
        })
        axios.get(url)
            .then(result => {
                console.log('----result----', result.data);
                this.setState(
                    {
                        datawheathers: result.data,
                        isLoading: false
                    });
            });
    }

    render() {
        const { datawheathers, isLoading } = this.state;
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
                {isLoading && <div style={{ width: '100%', height: "100", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </div> ||
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
                }
            </div>
        );
    }
}

export default Home;