import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DeviceStatus } from "@/components/dashboard/DeviceStatus";
import { ActivityChart } from "@/components/dashboard/ActivityChart";

import {  
  Wifi, 
  ZapIcon, 
  ThermometerIcon, 
  Signal
} from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight pb-1">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo de volta! Aqui está uma visão geral do seu Ecossistema IoT.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-5 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Alertas recentes</h3>
          <div className="text-sm text-muted-foreground">
            <p className="py-2 border-b border-border"> Alta variação de umidade (10:15 AM)</p>
            <p className="py-2 border-b border-border">Alta variação de temperatura (09:30 AM)</p>
            <p className="py-2">Temperatura acima do limite (08:45 AM)</p>
          </div>
        </div>
        <div className="glass p-5 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Saúde do sistema</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Armazenamento na nuvem</span>
                <span className="text-sm">75%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Uso de CPU</span>
                <span className="text-sm">30%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Memória</span>
                <span className="text-sm">50%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
