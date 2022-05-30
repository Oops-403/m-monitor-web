import { post } from '@/api/http'

export const toLogin = (param: { username: string; password: string; }): Promise<any> => post('/login', param)
