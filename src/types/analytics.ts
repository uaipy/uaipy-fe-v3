export interface DeviceData {
  name: string;
  value: number;
}

export interface ClimateData {
  time: string;
  value: number;
}

export interface AnalyticsData {
  devices: {
    total: number;
    activityRate: number;
    totalChange: string;
    activityChange: string;
  };
  climate: {
    date: string[];
    temperature: ClimateData[];
    humidity: ClimateData[];
  };
  deviceTypes: DeviceData[];
} 