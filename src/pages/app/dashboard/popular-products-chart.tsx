import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { BarChart } from 'lucide-react'
import { Pie, PieChart } from 'recharts'

const chartData = [
  { product: 'Pepperoni', amount: 45, fill: 'var(--color-first)' },
  { product: '5 queijos', amount: 22, fill: 'var(--color-second)' },
  { product: 'Calabresa', amount: 49, fill: 'var(--color-third)' },
  { product: 'Portuguesa', amount: 41, fill: 'var(--color-fourth)' },
  { product: 'Marguerita', amount: 25, fill: 'var(--color-fifth)' },
]

export function PopularProductsChart() {
  const chartConfig = {
    first: {
      label: 'first',
      color: 'hsl(var(--chart-1))',
    },
    second: {
      label: 'second',
      color: 'hsl(var(--chart-2))',
    },
    third: {
      label: 'third',
      color: 'hsl(var(--chart-3))',
    },
    fourth: {
      label: 'fourth',
      color: 'hsl(var(--chart-4))',
    },
    fifth: {
      label: 'fifth',
      color: 'hsl(var(--chart-5))',
    },
  } satisfies ChartConfig

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="size-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full max-h-[240px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="product"
              innerRadius={64}
              outerRadius={86}
              strokeWidth={8}
              cy="50%"
              cx="50%"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {`${payload.product} (${payload.amount})`}
                  </text>
                )
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
