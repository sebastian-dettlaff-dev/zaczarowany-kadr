import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // useCdn - turn off catch in browser so you get the most fresh data on page instantly.
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
