import { AnalyticsData } from '@/types/analytics';

const mockData: AnalyticsData = {
  devices: {
    total: 10,
    activityRate: 100,
    totalChange: 'Se manteve o mesmo do mês passado',
    activityChange: 'Se manteve o mesmo do mês passado',
  },
  climate: {
    date: [
      '2024-01-01',
      '2024-01-02',
      '2024-01-03',
      '2024-01-04',
      '2024-01-05',
      '2024-01-06',
    ],
    temperature: [
      { time: '09:00', value: 25 },
      { time: '10:00', value: 27 },
      { time: '11:00', value: 28 },
      { time: '12:00', value: 31 },
      { time: '01:00', value: 31 },
      { time: '02:00', value: 28 },
    ],
    humidity: [
      { time: '09:00', value: 60 },
      { time: '10:00', value: 55 },
      { time: '11:00', value: 30 },
      { time: '12:00', value: 30 },
      { time: '01:00', value: 55 },
      { time: '02:00', value: 55 },
    ],
  },
  deviceTypes: [
    { name: 'ESP32', value: 1 },
    { name: 'ESP8266', value: 2 },
    { name: 'ESP32-C3', value: 3 },
    { name: 'ESP32-S2', value: 4 },
  ],
};

export const getAnalyticsData = async (): Promise<AnalyticsData> => {
  // Simula um delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockData;
};
