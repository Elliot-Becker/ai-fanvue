import { initialAssets } from './data'
import type { Asset, AssetStatus } from './domain'
const key = 'mila-vale-assets-v1'
export const loadAssets = (): Asset[] => { try { return JSON.parse(localStorage.getItem(key) || '') as Asset[] } catch { return initialAssets } }
export const saveAssets = (assets: Asset[]) => localStorage.setItem(key, JSON.stringify(assets))
export const updateAsset = (assets: Asset[], id: string, update: Partial<Asset>) => assets.map(a => a.id === id ? { ...a, ...update } : a)
export const statusLabel = (status: AssetStatus) => status.replace('_', ' ')
