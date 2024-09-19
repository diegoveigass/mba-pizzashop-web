import { getPopularProducts } from '@/api/get-popular-products'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useQuery } from '@tanstack/react-query'
import { BarChart } from 'lucide-react'
import { Pie, PieChart } from 'recharts'

const COLORS = [
  'var(--color-first)',
  'var(--color-second)',
  'var(--color-third)',
  'var(--color-fourth)',
  'var(--color-fifth)',
] as const

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryFn: getPopularProducts,
    queryKey: ['metrics', 'popular-products'],
  })

  if (!popularProducts) return

  const popularProductsWithColors = popularProducts.map((product, index) => {
    return {
      ...product,
      fill: COLORS[index],
    }
  })

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
              data={popularProductsWithColors}
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
