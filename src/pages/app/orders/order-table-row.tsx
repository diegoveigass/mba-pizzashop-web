import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Search, ArrowRight, X } from 'lucide-react'

// type OrderTableRowProps = {}

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant={'outline'} size="xs">
          <Search className="size-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        e092u1039u01ru0f21
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Diego Veiga</TableCell>
      <TableCell className="font-medium">R$ 149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="size-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="size-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
