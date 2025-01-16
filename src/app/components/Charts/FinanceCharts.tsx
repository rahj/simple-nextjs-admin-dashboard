"use client";

import { Ellipsis } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { financeChartsData } from './FinanceChartsData';

const FinanceCharts = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-10">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-black font-semibold text-lg">Finance</h1>
                <Ellipsis className="text-gray-500 cursor-pointer" size={20}/>
            </div>

            {/* Finance Charts */}
            <div className="w-full h-[75%]">
                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={300}
                        data={financeChartsData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default FinanceCharts;