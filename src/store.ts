import type { Asset, AssetStatus } from './domain'
const key = 'mila-vale-assets-v2'
export const loadAssets = (): Asset[] => { try { const saved = localStorage.getItem(key); return saved ? JSON.parse(saved) as Asset[] : [] } catch { return [] } }
export const saveAssets = (assets: Asset[]) => localStorage.setItem(key, JSON.stringify(assets))
export const updateAsset = (assets: Asset[], id: string, update: Partial<Asset>) => assets.map(a => a.id === id ? { ...a, ...update } : a)
export const statusLabel = (status: AssetStatus) => status.replace('_', ' ')
