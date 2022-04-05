import React from 'react';
import MyLineChart from '../LineChart/MyLineChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import './Dashboard.css'



const Dashboard = () => {



    return (
        <div className='dash-board'>
            <div>
                <div className='month-wise-sell'>
                    <h2>Month wise Sell</h2>
                </div>
                <MyLineChart></MyLineChart>
            </div>
            <div>
                <div className='investment-vs-revinue'>
                    <h2>Investment vs Revinue</h2>
                </div>
                <div>
                    <MyBarChart></MyBarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;