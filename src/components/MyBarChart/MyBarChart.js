import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const MyBarChart = () => {

    const [chartData] = useData();

    return (
        <BarChart width={600} height={350} data={chartData}>
            <XAxis dataKey={'month'} ></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey={'investment'} barSize={30} fill={"#8884d8"} ></Bar>
            <Bar dataKey={'revenue'} barSize={30} fill={"#8884d8"} ></Bar>
        </BarChart>
    );
};

export default MyBarChart;