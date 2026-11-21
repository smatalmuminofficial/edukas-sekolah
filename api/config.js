/**
 * Vercel Serverless Function (/api/config)
 * Menyuntikkan Environment Variable EDUKAS_WEBHOOK_URL ke frontend.
 * Variabel Supabase tetap dinonaktifkan hingga audit RPC/RLS selesai.
 */
export default function handler(req, res) {
  if (req && req.method && req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  const rawWebhook = (typeof process !== 'undefined' && process.env && process.env.EDUKAS_WEBHOOK_URL) || '';
  const webhookUrl = String(rawWebhook).trim();
  const scriptBody = [
    'window.SUPABASE_URL = "";',
    'window.SUPABASE_ANON_KEY = "";',
    `window.EDUKAS_WEBHOOK_URL = ${JSON.stringify(webhookUrl)};`
  ].join('\n');
  if (req && req.method === 'HEAD') return res.status(200).end();
  return res.status(200).send(scriptBody);
}
