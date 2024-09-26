import { http, HttpResponse } from 'msw'
import type {
  GetOrdersDetailsParams,
  GetOrdersDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  GetOrdersDetailsParams,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com',
      phone: '15910293524',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1450,
        product: { name: 'Pizza peperoniz' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 4450,
        product: { name: 'Pizza peperoniz' },
        quantity: 1,
      },
    ],
    totalInCents: 5900,
  })
})
