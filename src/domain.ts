export const pillars = ['Gaming & Tech', 'Lifestyle', 'Fitness & Wellness', 'Fashion', 'Travel', 'Pool & Swimwear'] as const
export type Pillar = typeof pillars[number]
export type AssetStatus = 'awaiting_approval' | 'approved' | 'rejected' | 'scheduled' | 'draft'
export type Provider = 'Higgsfield' | 'Hugging Face' | 'Manual import'
export type AssetType = 'canonical_anchor' | 'reference' | 'launch_content' | 'image' | 'video'
export type PublishState = 'not_published' | 'scheduled' | 'published'
export type AnalyticsPlaceholder = { views?: number | null; likes?: number | null; revenueUsd?: number | null; note: string }
export type Asset = {
  id: string; generationId: string; reusableElementId: string | null; assetType: AssetType; title: string; pillar: Pillar; prompt: string | null
  provider: Provider; model: string | null; sourceUrl: string; thumbnailUrl: string | null; createdAt: string | null; costUsd: number | null
  status: AssetStatus; publishState: PublishState; caption: string; tags: string[]; scheduledAt: string | null; fanvuePostId: string | null
  performance: AnalyticsPlaceholder; regenerationRequestedAt?: string | null
}
export type ProviderConnection = { name: string; role: string; state: 'not_connected' | 'ready'; detail: string }
export interface ImageGenerator { importGeneration(input: Pick<Asset, 'sourceUrl' | 'thumbnailUrl' | 'generationId' | 'reusableElementId' | 'provider' | 'model' | 'prompt' | 'title' | 'pillar' | 'assetType'>): Promise<Asset> }
export interface Publisher { schedule(assetId: string, isoDate: string): Promise<void>; publish(assetId: string): Promise<void> }
export interface Analytics { sync(): Promise<void> }
