import React from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/fr'

export default class Home extends React.Component {

    state = {
        weather: null
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toulouse, FR&appid=5cd381a8cc65c2e831bfe5c05ea1cc54').then(res => {
            const weather = res.data;
            this.setState({weather})
        })
    }

    getCurrentDate() {
        moment.locale('fr')
        return moment().format('dddd, hh:mm')
    }

    render() {
        const weather = this.state.weather;
        return (
            <section>
                <h1 className="title">Toulouse</h1>
                <h2 className="subtitle is-capitalize">{this.getCurrentDate()}</h2>    
                {weather ? 
                    <div className="card">
                        <ul></ul>
                        Température : {weather.main.temp}
                        {JSON.stringify(weather)}
                    </div>
                     : null}
            </section>
        )
    }
}