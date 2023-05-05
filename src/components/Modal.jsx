/* eslint-disable react/prop-types */
import data from '../assets/data/data.json';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Modal = ({ currentSong, show }) => {
    const [showDialog, setShowDialog] = useState(show);

    const song = {
        labels: ['Unique Views', 'Total Views'],
        datasets: [
            {
                label: 'Views',
                data: [data[currentSong].unique_plays, data[currentSong].total_plays],
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'black',
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Views Statistics for data[currentSong].title"
            }
        }
    }
    return (
        <div className="modal" style={showDialog ? { 'z-index': "1" } : { 'z-index': "-1" }}>
            <div className="title"><h1>{data[currentSong].title}</h1></div>
            <div className="chart-container"><label>Stats for {data[currentSong].title} </label><Bar className="chart" data={song} options={options} /></div>
            <div className="progress-container"><label>Completion Rate</label><progress max="100" value={data[currentSong].completion_rate} data-label={`${data[currentSong].completion_rate}` + '%'} className="progressbar"></progress></div>
            <div className="btn-container"><button className="btn close-btn" onClick={() => { setShowDialog(!showDialog) }}>Close</button></div>
        </div>
    )
}

export default Modal