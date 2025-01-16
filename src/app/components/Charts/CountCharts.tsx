"use client"

import { Ellipsis } from "lucide-react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";
import { countChartsData } from "./CountChartsData";

const CountCharts = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-black font-semibold text-lg">Patient Age</h1>
                <Ellipsis className="text-gray-500 cursor-pointer" size={20}/>
            </div>
            
            {/* Chart */}
            <div className="w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={30} data={countChartsData}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="uv"
                        />
                        {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            
            {/* Percentage */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-2 items-center">
                    <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
                    <h1 className="text-black text-lg">1,234</h1>
                    <h2 className="text-gray-500 text-xs">Male (55%)</h2>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="w-5 h-5 bg-yellow-300 rounded-full"></div>
                    <h1 className="text-black text-lg">734</h1>
                    <h2 className="text-gray-500 text-xs">Female (45%)</h2>
                </div>
            </div>
        </div>
    );
}

export default CountCharts;