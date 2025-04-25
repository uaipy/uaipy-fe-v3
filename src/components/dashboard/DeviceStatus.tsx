import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface DeviceStatusProps {
  totalDevices: number;
  onlineDevices: number;
  offlineDevices: number;
  maintenanceDevices: number;
  cpuUsage: number;
  memoryUsage: number;
  storageUsage: number;
}

export function DeviceStatus({
  totalDevices,
  onlineDevices,
  offlineDevices,
  maintenanceDevices,
  cpuUsage,
  memoryUsage,
  storageUsage,
}: DeviceStatusProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Status dos Dispositivos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="h-2 w-2 rounded-full bg-green-500"
            />
            <span className="text-sm whitespace-nowrap">
              Online: {onlineDevices}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="h-2 w-2 rounded-full bg-red-500"
            />
            <span className="text-sm whitespace-nowrap">
              Offline: {offlineDevices}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="h-2 w-2 rounded-full bg-yellow-500"
            />
            <span className="text-sm whitespace-nowrap">
              Manutenção: {maintenanceDevices}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="h-2 w-2 rounded-full bg-blue-500"
            />
            <span className="text-sm whitespace-nowrap">
              Total: {totalDevices}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-medium whitespace-nowrap">CPU</span>
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {cpuUsage}%
              </span>
            </div>
            <Progress value={cpuUsage} className="h-2" />
          </div>
          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-medium whitespace-nowrap">
                Memória
              </span>
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {memoryUsage}%
              </span>
            </div>
            <Progress value={memoryUsage} className="h-2" />
          </div>
          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-medium whitespace-nowrap">
                Armazenamento
              </span>
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {storageUsage}%
              </span>
            </div>
            <Progress value={storageUsage} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
