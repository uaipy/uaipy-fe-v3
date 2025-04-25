export interface DeviceData {
  name: string;
  value: number;
}

export interface ClimateData {
  name: string;
  value: number;
  prevValue: number;
}

export interface AnalyticsData {
  devices: {
    total: number;
    activityRate: number;
    totalChange: string;
    activityChange: string;
  };
  climate: {
    temperature: ClimateData[];
    humidity: ClimateData[];
  };
  deviceTypes: DeviceData[];
} 