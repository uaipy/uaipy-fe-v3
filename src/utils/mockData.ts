
import { faker } from '@faker-js/faker';

// Define device types and statuses for consistency
export const deviceTypes = ['Sensor', 'Gateway', 'Controller', 'Camera', 'Thermostat'] as const;
export const deviceStatuses = ['Online', 'Offline', 'Maintenance', 'Warning'] as const;

export type DeviceType = typeof deviceTypes[number];
export type DeviceStatus = typeof deviceStatuses[number];

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  status: DeviceStatus;
  batteryLevel: number;
  lastActive: Date;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  readings: {
    temperature?: number;
    humidity?: number;
    pressure?: number;
    light?: number;
    co2?: number;
  };
}

// Generate a list of fake devices
export const generateDevices = (count: number = 50): Device[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(2),
    type: faker.helpers.arrayElement(deviceTypes),
    status: faker.helpers.arrayElement(deviceStatuses),
    batteryLevel: faker.number.int({ min: 0, max: 100 }),
    lastActive: faker.date.recent({ days: 7 }),
    location: {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
      address: faker.location.streetAddress(),
    },
    readings: {
      temperature: faker.helpers.maybe(() => faker.number.float({ min: 15, max: 35, precision: 0.1 })),
      humidity: faker.helpers.maybe(() => faker.number.float({ min: 20, max: 80, precision: 0.1 })),
      pressure: faker.helpers.maybe(() => faker.number.float({ min: 980, max: 1030, precision: 0.1 })),
      light: faker.helpers.maybe(() => faker.number.float({ min: 0, max: 1000, precision: 0.1 })),
      co2: faker.helpers.maybe(() => faker.number.float({ min: 300, max: 1500, precision: 0.1 })),
    },
  }));
};

// Generate sample time series data for charts
export const generateTimeSeriesData = (days: number = 7, interval: number = 3) => {
  const data = [];
  const now = new Date();
  
  for (let i = days * 24; i >= 0; i -= interval) {
    const time = new Date(now.getTime() - i * 3600000);
    
    data.push({
      time,
      temperature: faker.number.float({ min: 20, max: 30, precision: 0.1 }),
      humidity: faker.number.float({ min: 30, max: 70, precision: 0.1 }),
      energy: faker.number.float({ min: 0.1, max: 5, precision: 0.01 }),
      network: faker.number.float({ min: 20, max: 100, precision: 0.1 }),
    });
  }
  
  return data;
};

// Generate alerts
export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  acknowledged: boolean;
}

export const generateAlerts = (devices: Device[], count: number = 10): Alert[] => {
  return Array.from({ length: count }, () => {
    const device = faker.helpers.arrayElement(devices);
    return {
      id: faker.string.uuid(),
      deviceId: device.id,
      deviceName: device.name,
      message: faker.helpers.arrayElement([
        'Battery level critical',
        'Connection lost',
        'Temperature exceeds threshold',
        'Firmware update required',
        'Unusual activity detected',
        'Sensor calibration needed'
      ]),
      severity: faker.helpers.arrayElement(['low', 'medium', 'high', 'critical']),
      timestamp: faker.date.recent({ days: 3 }),
      acknowledged: faker.datatype.boolean(),
    };
  }).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// Dashboard statistics
export interface DashboardStats {
  totalDevices: number;
  activeDevices: number;
  alertsToday: number;
  batteryWarnings: number;
  energyUsage: number;
  networkStrength: number;
}

export const generateDashboardStats = (devices: Device[], alerts: Alert[]): DashboardStats => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return {
    totalDevices: devices.length,
    activeDevices: devices.filter(d => d.status === 'Online').length,
    alertsToday: alerts.filter(a => a.timestamp >= today).length,
    batteryWarnings: devices.filter(d => d.batteryLevel < 20).length,
    energyUsage: faker.number.float({ min: 240, max: 380, precision: 0.1 }),
    networkStrength: faker.number.float({ min: 75, max: 99, precision: 0.1 }),
  };
};
