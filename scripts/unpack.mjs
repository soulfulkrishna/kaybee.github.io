import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const encoded = readFileSync('kb91-src.tar.gz.b64', 'utf8').trim();
writeFileSync('/tmp/kb91-src.tar.gz', Buffer.from(encoded, 'base64'));
execFileSync('tar', ['-xzf', '/tmp/kb91-src.tar.gz', '-C', process.cwd()], { stdio: 'inherit' });
