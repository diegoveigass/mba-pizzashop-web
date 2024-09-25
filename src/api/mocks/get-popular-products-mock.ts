import { http, HttpResponse } from 'msw'
import type { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza teste', amount: 23 },
    { product: 'Pizza mussarela', amount: 123 },
    { product: 'Pizza 3', amount: 4 },
    { product: 'Pizza 4', amount: 6 },
    { product: 'Pizza 6', amount: 12 },
  ])
})
