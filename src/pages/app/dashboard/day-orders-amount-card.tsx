import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">6</span>
        <p className="text-xd text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-2%</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
