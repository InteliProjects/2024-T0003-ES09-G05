import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import Header from '../../components/header/header'; // Ajuste o caminho conforme necessário

// Dados de amostra para os gráficos
const barData = [
  { name: 'Day 1', attendees: 11 },
  { name: 'Day 2', attendees: 12 },
  { name: 'Day 3', attendees: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a83d72', '#7ed957'];

const pieData = [
  { name: 'None', value: 5 },
  { name: 'Vegetarian', value: 4 },
  { name: 'Vegan', value: 2 },
  { name: 'Kosher', value: 2 },
  { name: 'Gluten-free', value: 1 },
  { name: 'Allergic to peanuts', value: 1 },
];

const AttendanceChart = () => (
  <div style={{ margin: '10px', padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}>
    <BarChart width={600} height={300} data={barData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="attendees" fill="#8884d8" />
    </BarChart>
    <p style={{ textAlign: 'center' }}>Informações adicionais aqui</p> {/* Texto abaixo do gráfico */}
  </div>
);

const DietaryRestrictionsChart = () => (
  <div style={{ margin: '10px', padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}>
    <h2 style={{ textAlign: 'center' }}>Título do Gráfico</h2> {/* Título no topo do gráfico */}
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={pieData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </div>
);

const ResearchResult = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <h1 style={{ marginLeft: '20px' }}>Resultado de Pesquisa</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <AttendanceChart />
          <DietaryRestrictionsChart />
        </div>
      </div>
    </div>
  );
};

export default ResearchResult;
