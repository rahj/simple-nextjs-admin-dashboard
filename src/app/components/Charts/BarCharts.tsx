"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { barChartsData } from './BarChartsData';
import { Ellipsis } from 'lucide-react';

const BarCharts = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-14">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-black font-semibold text-lg">Patient Admission</h1>
                <Ellipsis className="text-gray-500 cursor-pointer" size={20}/>
            </div>
            
            {/* Chart */}
            <div className="w-full h-[75%]">
                <ResponsiveContainer>
                    <BarChart
                        width={500}
                        height={300}
                        data={barChartsData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Male" fill="#8884d8" legendType='circle'/>
                        <Bar dataKey="Female" fill="#82ca9d" legendType='circle'/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    );
}

export default BarCharts;