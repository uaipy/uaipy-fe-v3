import { AnalyticsData } from "@/types/analytics";

const mockData: AnalyticsData = {
  devices: {
    total: 1234,
    activityRate: 98.5,
    totalChange: "+12% desde o mês passado",
    activityChange: "+2.3% desde o mês passado"
  },
  climate: {
    temperature: [
      { name: "Jan", value: 400, prevValue: 350 },
      { name: "Fev", value: 300, prevValue: 280 },
      { name: "Mar", value: 500, prevValue: 450 },
      { name: "Abr", value: 450, prevValue: 400 },
      { name: "Mai", value: 600, prevValue: 550 },
      { name: "Jun", value: 550, prevValue: 500 }
    ],
    humidity: [
      { name: "Jan", value: 400, prevValue: 350 },
      { name: "Fev", value: 300, prevValue: 280 },
      { name: "Mar", value: 500, prevValue: 450 },
      { name: "Abr", value: 450, prevValue: 400 },
      { name: "Mai", value: 600, prevValue: 550 }
    ]
  },
  deviceTypes: [
    { name: "Câmeras", value: 400 },
    { name: "Sensores", value: 300 },
    { name: "Controladores", value: 200 },
    { name: "Gateway", value: 100 }
  ]
};

export const getAnalyticsData = async (): Promise<AnalyticsData> => {
  // Simula um delay de rede
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockData;
}; 