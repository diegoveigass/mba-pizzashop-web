import { http, HttpResponse } from 'msw'
import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com',
      phone: '40492180595',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  }
)
