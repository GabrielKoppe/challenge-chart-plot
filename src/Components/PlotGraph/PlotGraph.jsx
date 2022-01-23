import React from 'react';
import './PlotGraph.scss'
import { AjustData } from '../../Tools/AjustData';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function PlotGraph({ data }) {
    const options = {
        responsive: true,
        animation: true,
        elements: {
            point: {
                radius: 7
            },
        },
        layout: {
            padding: {
                left: 80,
                right: 80,
                top: 20,
                bottom: 20
            }
        },
        scales: {
            y:
                {
                    ticks: {
                        display: false
                    }
                }
        },
        plugins: {
            legend: {
                position: 'right',
                align: 'start',
                labels: {
                    boxWidth: 14,
                    padding: 30,
                    usePointStyle: true,
                    font: { 
                        family: 'Source Sans Pro',
                        size: 17,
                    }
                }
            },
            title: {
                display: false,
            },
        },
    };
    
    return ( 
        <div className="chart__container">
          <Line
            options={options} 
            data={AjustData(data)}
            width={ 180 }
            height={ 45 }
          />
        </div>
    );
}

export default PlotGraph;