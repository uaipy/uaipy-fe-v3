import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: MetricCardProps) {
  return (
    <Card
      className={cn('transition-all duration-300 hover:shadow-md', className)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-muted-foreground mt-1 text-xs">{description}</p>
        )}
        {trend && (
          <div
            className={cn(
              'mt-2 flex items-center text-xs',
              trend.isPositive ? 'text-green-500' : 'text-red-500',
            )}
          >
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            <span className="text-muted-foreground ml-1">vs. mês anterior</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
