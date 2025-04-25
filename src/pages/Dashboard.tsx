import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { DeviceStatus } from '@/components/dashboard/DeviceStatus';
import { ActivityChart } from '@/components/dashboard/ActivityChart';

import { Wifi, ZapIcon, ThermometerIcon, Signal } from 'lucide-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="pb-1 text-3xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Bem-vindo de volta! Aqui está uma visão geral do seu Ecossistema IoT.
        </p>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Dispositivos Conectados"
          value="12/15"
          icon={Wifi}
          description="Dispositivos conectados à rede"
          trend={{ value: 4, isPositive: true }}
        />
        <MetricCard
          title="Uso de Energia"
          value="3.8 kWh"
          icon={ZapIcon}
          description="Consumo total de energia hoje"
          trend={{ value: 2.5, isPositive: false }}
        />
        <MetricCard
          title="Temp. Média"
          value="22.5°C"
          icon={ThermometerIcon}
          description="Entre todos os dispositivos"
          trend={{ value: 1.2, isPositive: true }}
        />
        <MetricCard
          title="Confiabilidade da Rede"
          value="92%"
          icon={Signal}
          description="Consistencia da rede nos últimos 30 dias"
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <div>
          <DeviceStatus
            totalDevices={12}
            onlineDevices={8}
            offlineDevices={2}
            maintenanceDevices={1}
            cpuUsage={30}
            memoryUsage={50}
            storageUsage={75}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="glass rounded-lg p-5">
          <h3 className="mb-2 text-lg font-medium">Alertas recentes</h3>
          <div className="text-muted-foreground text-sm">
            <p className="border-border border-b py-2">
              {' '}
              Alta variação de umidade (10:15 AM)
            </p>
            <p className="border-border border-b py-2">
              Alta variação de temperatura (09:30 AM)
            </p>
            <p className="py-2">Temperatura acima do limite (08:45 AM)</p>
          </div>
        </div>
        <div className="glass rounded-lg p-5">
          <h3 className="mb-2 text-lg font-medium">Saúde do sistema</h3>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm">Armazenamento na nuvem</span>
                <span className="text-sm">75%</span>
              </div>
              <div className="bg-secondary h-2 w-full rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm">Uso de CPU</span>
                <span className="text-sm">30%</span>
              </div>
              <div className="bg-secondary h-2 w-full rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: '30%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm">Memória</span>
                <span className="text-sm">50%</span>
              </div>
              <div className="bg-secondary h-2 w-full rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
