import type { Analytics, Asset, ImageGenerator, Publisher } from '../domain'
/** Browser-safe boundary. A future live adapter belongs behind a server API. */
export class HiggsfieldImportAdapter implements ImageGenerator {
  async importGeneration(input: Pick<Asset, 'sourceUrl' | 'thumbnailUrl' | 'generationId' | 'reusableElementId' | 'provider' | 'model' | 'prompt' | 'title' | 'pillar' | 'assetType'>): Promise<Asset> {
    return { id: `higgsfield-${input.generationId}`, generationId: input.generationId, reusableElementId: input.reusableElementId, assetType: input.assetType, title: input.title, pillar: input.pillar, prompt: input.prompt, provider: input.provider, model: input.model, sourceUrl: input.sourceUrl, thumbnailUrl: input.thumbnailUrl, createdAt: new Date().toISOString(), costUsd: null, status: 'awaiting_approval', publishState: 'not_published', caption: '', tags: ['#MilaVale'], scheduledAt: null, fanvuePostId: null, performance: { note: 'Imported locally; no live analytics sync is connected.' } }
  }
}
export class ApprovalRequiredPublisher implements Publisher { async schedule(): Promise<void> { throw new Error('Fanvue publishing is not configured. Scheduling must remain approval-gated.') } async publish(): Promise<void> { throw new Error('Fanvue publishing is not configured. Publishing must remain approval-gated.') } }
export class EmptyAnalyticsAdapter implements Analytics { async sync(): Promise<void> { throw new Error('Live analytics are not connected.') } }
