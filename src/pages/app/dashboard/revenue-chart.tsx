import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts'

export function RevenueChart() {
  const chartData = [
    { date: '10/12', revenue: 1235 },
    { date: '11/12', revenue: 22456 },
    { date: '12/12', revenue: 2341 },
    { date: '13/12', revenue: 623 },
    { date: '14/12', revenue: 445 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={12} />
            <YAxis
              dataKey="revenue"
              tickLine={false}
              axisLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="revenue"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: '#fff',
              }}
              activeDot={{
                fill: 'var(--color-desktop)',
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
