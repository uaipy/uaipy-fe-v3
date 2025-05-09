import { DashboardLayout } from '@/components/layout/DashboardLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import { useEffect, useState } from 'react';
import { getAnalyticsData } from '@/services/analyticsService';
import { AnalyticsData } from '@/types/analytics';
import { Loader2 } from 'lucide-react';

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnalyticsData();
        setData(response);
        setSelectedDate(response.climate.date[0]); // Inicializa com a primeira data
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <DashboardLayout>
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
          <p className="text-muted-foreground">
            Carregando dados de analytics...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active: boolean;
    payload: { name: string; value: number; color: string }[];
    label: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background rounded-lg border p-3 shadow-md">
          <p className="font-medium">{label}</p>
          {payload.map(
            (
              entry: { name: string; value: number; color: string },
              index: number,
            ) => (
              <p key={index} style={{ color: entry.color }}>
                {entry.name}: {entry.value}
                {entry.name.includes('Temperatura')
                  ? '°C'
                  : entry.name.includes('Umidade')
                    ? '%'
                    : ''}
              </p>
            ),
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="pb-1 text-3xl font-semibold tracking-tight">
          Dashboard de Analytics
        </h1>
        <p className="text-muted-foreground">
          Visualize e analise os dados do sistema em tempo real
        </p>
        <p className="font-bold text-amber-500">PAGINA EM DESENVOLVIMENTO</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Dispositivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data.devices.total.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">
              {data.devices.totalChange}
            </p>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Atividade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data.devices.activityRate}%
            </div>
            <p className="text-muted-foreground text-xs">
              {data.devices.activityChange}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Temperatura do Ar (°C)</CardTitle>
            <CardDescription>
              Amostras de temperatura do ar em{' '}
              <select
                className="inline-block rounded border px-2 py-1"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                }}
              >
                {data.climate.date.map((date) => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </option>
                ))}
              </select>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.climate.temperature}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    label={{
                      value: 'Temperatura (°C)',
                      angle: -90,
                      position: 'insideLeft',
                    }}
                  />
                  <Tooltip
                    content={
                      <CustomTooltip active={true} payload={[]} label={''} />
                    }
                  />
                  <Legend />
                  <Area
                    name="Temperatura"
                    type="monotone"
                    dataKey="value"
                    stroke="#555286"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Dispositivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.deviceTypes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    label={{
                      value: 'Quantidade',
                      angle: -90,
                      position: 'insideLeft',
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar name="Quantidade" dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Umidade do Ar (%)</CardTitle>
            <CardDescription>
              Amostras de umidade do ar em{' '}
              <select
                className="inline-block rounded border px-2 py-1"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                }}
              >
                {data.climate.date.map((date) => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </option>
                ))}
              </select>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.climate.humidity}>
                  <defs>
                    <linearGradient
                      id="colorValue3"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    label={{
                      value: 'Umidade (%)',
                      angle: -90,
                      position: 'insideLeft',
                    }}
                  />
                  <Tooltip
                    content={
                      <CustomTooltip active={true} payload={[]} label={''} />
                    }
                  />
                  <Legend />
                  <Area
                    name="Umidade"
                    type="monotone"
                    dataKey="value"
                    stroke="#4e795c"
                    fillOpacity={1}
                    fill="url(#colorValue3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumo de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-muted/50 flex items-center justify-between rounded-lg p-4">
                <div>
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Temperatura Média
                  </h3>
                  <p className="mt-1 text-2xl font-bold">
                    {(
                      data.climate.temperature.reduce(
                        (acc, curr) => acc + curr.value,
                        0,
                      ) / data.climate.temperature.length
                    ).toFixed(1)}
                    °C
                  </p>
                </div>
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"></path>
                  </svg>
                </div>
              </div>

              <div className="bg-muted/50 flex items-center justify-between rounded-lg p-4">
                <div>
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Umidade Média
                  </h3>
                  <p className="mt-1 text-2xl font-bold">
                    {(
                      data.climate.humidity.reduce(
                        (acc, curr) => acc + curr.value,
                        0,
                      ) / data.climate.humidity.length
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
              </div>

              <div className="bg-muted/50 flex items-center justify-between rounded-lg p-4">
                <div>
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Dispositivo Mais Comum
                  </h3>
                  <p className="mt-1 text-2xl font-bold">
                    {
                      data.deviceTypes.reduce((max, curr) =>
                        curr.value > max.value ? curr : max,
                      ).name
                    }
                  </p>
                </div>
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
