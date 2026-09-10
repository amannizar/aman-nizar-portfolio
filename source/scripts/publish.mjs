/**
 * Publishes the built site from source/dist to the repository root,
 * so the root of the repo is always a deployable, production-ready site.
 *
 * Usage: npm run build:site   (from inside source/)
 */
import { cpSync, rmSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const dist = resolve(here, '../dist')
const siteRoot = resolve(here, '../..')

if (!existsSync(dist)) {
  console.error('dist/ not found — run "npm run build" first.')
  process.exit(1)
}

// Remove stale hashed build assets at the root, then copy the fresh build.
rmSync(resolve(siteRoot, 'assets'), { recursive: true, force: true })
cpSync(dist, siteRoot, { recursive: true })

console.log('✔ Published source/dist → repository root (deployable site).')
