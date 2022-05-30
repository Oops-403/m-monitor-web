import { get, post } from '@/api/http'

export const getFarmAllWallet = (): Promise<any> => get('/farm-user/wallet')

export const getFarmAllIP = (): Promise<any> => get('/farm-user/ip')

export const getFarmUserByWallet = (wallet: string): Promise<any> => get(`/farm-user/wallet/${wallet}`)

export const getFarmUserByIP = (ip: string): Promise<any> => get(`/farm-user/ip/${ip}`)

export const getFarmsLogList = (wallet: string): Promise<any> => get(`/farm-log/list/${wallet}`)

export const setRiskWallet = (address: string): Promise<any> => post('/sync/risk/wallet', { address })

export const setdRiskIp = (ip: string): Promise<any> => post('/sync/risk/ip', { ip })
