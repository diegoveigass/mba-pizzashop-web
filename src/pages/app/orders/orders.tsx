import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilters } from './order-table-filters'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/get-orders'

export function Orders() {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <ScrollArea className="h-[40rem] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[64px]" />
                    <TableHead className="w-[140px]">Identificador</TableHead>
                    <TableHead className="w-[180px]">Realizado há</TableHead>
                    <TableHead className="w-[140px]">Status</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead className="w-[140px]">Total do pedido</TableHead>
                    <TableHead className="w-[164px]" />
                    <TableHead className="w-[132px]" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result?.orders.map(order => {
                    return <OrderTableRow order={order} key={order.orderId} />
                  })}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#0" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={true} href="#1">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#2">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  )
}
