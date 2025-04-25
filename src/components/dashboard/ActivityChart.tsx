import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400, prevValue: 350 },
  { name: "Fev", value: 300, prevValue: 400 },
  { name: "Mar", value: 600, prevValue: 300 },
  { name: "Abr", value: 800, prevValue: 600 },
  { name: "Mai", value: 700, prevValue: 800 },
  { name: "Jun", value: 900, prevValue: 700 },
];

export function ActivityChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Atividade do Sistema</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrevValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                stroke="#64748b"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#64748b"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                }}
                labelStyle={{ color: "#1e293b", fontWeight: 600 }}
                itemStyle={{ color: "#64748b" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                fill="url(#colorValue)"
                name="Atual"
              />
              <Area
                type="monotone"
                dataKey="prevValue"
                stroke="#64748b"
                fill="url(#colorPrevValue)"
                name="Anterior"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
