import milaManifest from '../../character/mila-vale.json'
import type { Asset, AssetType, Pillar } from '../domain'

type Source = { job?: string; job_id?: string; url: string }
const element = milaManifest.provider.element_id
export const higgsfieldElement = { id: element, name: milaManifest.provider.element_name, status: milaManifest.provider.element_status }
const labels: Record<string, { title: string; pillar: Pillar }> = {
  canonical_anchor: { title: 'Mila Vale v1 — canonical anchor', pillar: 'Lifestyle' },
  front_portrait: { title: 'Reference — front portrait', pillar: 'Lifestyle' }, three_quarter: { title: 'Reference — three-quarter portrait', pillar: 'Lifestyle' }, profile: { title: 'Reference — profile portrait', pillar: 'Lifestyle' }, full_body: { title: 'Reference — full body', pillar: 'Lifestyle' }, seated: { title: 'Reference — seated', pillar: 'Lifestyle' }, smiling: { title: 'Reference — smiling', pillar: 'Lifestyle' }, neutral: { title: 'Reference — neutral', pillar: 'Lifestyle' }, gaming: { title: 'Reference — gaming', pillar: 'Gaming & Tech' }, fitness: { title: 'Reference — fitness', pillar: 'Fitness & Wellness' }, coffee: { title: 'Reference — coffee shop', pillar: 'Lifestyle' }, evening: { title: 'Reference — evening fashion', pillar: 'Fashion' },
  gaming_launch: { title: 'Launch — gaming hero', pillar: 'Gaming & Tech' }, lifestyle_launch: { title: 'Launch — coffee-shop lifestyle', pillar: 'Lifestyle' }, fitness_launch: { title: 'Launch — fitness', pillar: 'Fitness & Wellness' }, fashion_launch: { title: 'Launch — fashion night', pillar: 'Fashion' }, travel_launch: { title: 'Launch — travel hotel', pillar: 'Travel' }, glamorous_non_explicit_swimwear_launch: { title: 'Launch — pool swimwear', pillar: 'Pool & Swimwear' },
}
function dateFromUrl(url: string): string | null {
  const match = /hf_(\d{8})_(\d{6})_/.exec(url)
  if (!match) return null
  const [, date, time] = match
  return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}T${time.slice(0, 2)}:${time.slice(2, 4)}:${time.slice(4, 6)}Z`
}
function makeAsset(source: Source, key: string, assetType: AssetType): Asset {
  const definition = labels[key]
  const generationId = source.job ?? source.job_id
  if (!generationId) throw new Error(`Higgsfield manifest entry ${key} has no generation ID.`)
  return { id: `higgsfield-${generationId}`, generationId, reusableElementId: element, assetType, title: definition.title, pillar: definition.pillar, prompt: null, provider: 'Higgsfield', model: null, sourceUrl: source.url, thumbnailUrl: source.url, createdAt: dateFromUrl(source.url), costUsd: null, status: 'awaiting_approval', publishState: 'not_published', caption: '', tags: ['#MilaVale'], scheduledAt: null, fanvuePostId: null, performance: { note: 'No live Fanvue analytics are connected.' } }
}
export function knownHiggsfieldAssets(): Asset[] {
  const anchor = makeAsset({ job_id: milaManifest.canonical.job_id, url: milaManifest.canonical.url }, 'canonical_anchor', 'canonical_anchor')
  anchor.title = 'Mila Vale v1 — canonical anchor'; anchor.pillar = 'Lifestyle'
  const references = Object.entries(milaManifest.reference_pack).map(([key, source]) => makeAsset(source, key, 'reference'))
  const launch = Object.entries(milaManifest.launch_assets).map(([key, source]) => makeAsset(source, `${key}_launch`, 'launch_content'))
  return [anchor, ...references, ...launch]
}
export function syncHiggsfieldManifest(current: Asset[]): { assets: Asset[]; imported: number } {
  const ids = new Set(current.map(asset => asset.generationId))
  const additions = knownHiggsfieldAssets().filter(asset => !ids.has(asset.generationId))
  return { assets: [...additions, ...current], imported: additions.length }
}
