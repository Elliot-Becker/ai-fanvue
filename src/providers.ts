import type { Analytics, Asset, ImageGenerator, Publisher } from './domain'

/**
 * Integration boundary: replace these safe adapters with server-side providers.
 * Browser UI never receives credentials and publishing is deliberately disabled.
 */
export class HiggsfieldImportAdapter implements ImageGenerator {
  async importGeneration(input: Pick<Asset, 'sourceUrl' | 'generationId' | 'provider' | 'model' | 'brief' | 'title' | 'pillar'>): Promise<Asset> {
    return {
      id: `import-${crypto.randomUUID()}`, title: input.title, brief: input.brief, pillar: input.pillar,
      provider: input.provider, model: input.model, sourceUrl: input.sourceUrl, generationId: input.generationId,
      status: 'awaiting_approval', costUsd: null, caption: '', tags: ['#MilaVale'],
      createdAt: new Date().toISOString(), publishState: 'not_published', mediaType: 'image',
      performance: { note: 'Imported locally; waiting for a verified analytics sync.' },
    }
  }
}

export class ApprovalRequiredPublisher implements Publisher {
  async schedule(): Promise<void> { throw new Error('Fanvue publishing is not configured. Scheduling must remain approval-gated.') }
  async publish(): Promise<void> { throw new Error('Fanvue publishing is not configured. Publishing must remain approval-gated.') }
}

export class EmptyAnalyticsAdapter implements Analytics {
  async sync(): Promise<void> { throw new Error('Live analytics are not connected.') }
}
