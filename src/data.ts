import type { ProviderConnection } from './domain'
export const connections: ProviderConnection[] = [
  { name: 'Fanvue', role: 'Publishing, account and performance sync', state: 'not_connected', detail: 'Awaiting verified application credentials and capability review.' },
  { name: 'Higgsfield', role: 'Reference and launch-media ingestion', state: 'ready', detail: 'Local manifest sync is ready. Live API access is not configured.' },
  { name: 'Hugging Face', role: 'Secondary modular generation provider', state: 'not_connected', detail: 'No application token configured.' },
]
