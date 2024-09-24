import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 50 },
    { name: 'Mar', value: 70 },
    { name: 'Apr', value: 65 },
    { name: 'May', value: 40 },
    { name: 'Jun', value: 25 },
    { name: 'Jul', value: 55 },
    { name: 'Aug', value: 80 }, 
    { name: 'Sep', value: 70 },
    { name: 'Oct', value: 60 },
    { name: 'Nov', value: 75 },
    { name: 'Dec', value: 50 },
];

const CustomBarChart = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
                    barSize={45}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ fill: '#5c5c5c', fontSize: '14px', dy: 10}}
                        axisLine={false} 
                        tickLine={false}
                    />
            
                    <Bar
                        dataKey="value"
                        radius={[10, 10, 10, 10]} // Rounded corners
                        background={{ fill: '#fff' }}
                        style={{ cursor: 'pointer' }}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.name === 'Aug' ? '#5b31ea' : '#f2efff'} 
                            />
                        ))}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;





//     );
// };

// export default CustomBarChart;
