export const pillars = ['Gaming & Tech', 'Lifestyle', 'Fitness & Wellness', 'Fashion', 'Travel'] as const
export type Pillar = typeof pillars[number]
export type AssetStatus = 'awaiting_approval' | 'approved' | 'rejected' | 'scheduled' | 'draft'
export type Provider = 'Higgsfield' | 'Hugging Face' | 'Manual import'
export type Asset = {
  id: string; title: string; brief: string; pillar: Pillar; status: AssetStatus; provider: Provider; model: string
  costUsd: number | null; caption: string; tags: string[]; createdAt: string; scheduledAt?: string
  publishState: 'not_published' | 'scheduled' | 'published'; mediaType: 'image' | 'video'; sourceUrl?: string; generationId?: string
  performance: { views?: number; likes?: number; revenueUsd?: number; note: string }
}
export type ProviderConnection = { name: string; role: string; state: 'not_connected' | 'ready'; detail: string }

export interface ImageGenerator { importGeneration(input: Pick<Asset, 'sourceUrl' | 'generationId' | 'provider' | 'model' | 'brief' | 'title' | 'pillar'>): Promise<Asset> }
export interface Publisher { schedule(assetId: string, isoDate: string): Promise<void>; publish(assetId: string): Promise<void> }
export interface Analytics { sync(): Promise<void> }
