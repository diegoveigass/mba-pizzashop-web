import { useMemo, useState } from 'react'
import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
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
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/label'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import type { DateRange } from 'react-day-picker'
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts'

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: dayjs(new Date()).subtract(7, 'day').startOf('day').toDate(),
    to: dayjs(new Date()).endOf('day').toDate(),
  })

  const { data: dailyRevenueInPeriodInCents } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({ from: dateRange?.from, to: dateRange?.to }),
  })

  const dailyRevenueInPeriod = useMemo(() => {
    return dailyRevenueInPeriodInCents?.map(dailyRevenue => {
      return {
        ...dailyRevenue,
        receipt: dailyRevenue.receipt / 100,
      }
    })
  }, [dailyRevenueInPeriodInCents])

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

        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod && (
          <ChartContainer config={chartConfig} className="h-60 w-full">
            <LineChart
              accessibilityLayer
              data={dailyRevenueInPeriod}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={12} />
              <YAxis
                dataKey="receipt"
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
                dataKey="receipt"
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
        )}
      </CardContent>
    </Card>
  )
}
