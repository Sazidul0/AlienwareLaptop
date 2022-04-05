import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const MyLineChart = () => {

    const [chartData] = useData()

    return (
        <LineChart width={600} height={350} data={chartData}>
            <Line type="monotone" dataKey={'sell'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;