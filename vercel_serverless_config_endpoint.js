/**
 * Vercel Serverless Function (/api/config)
 * Menyuntikkan Environment Variables Vercel (SUPABASE_URL & SUPABASE_ANON_KEY)
 * secara otomatis ke frontend EduKas saat di-deploy di Vercel.
 */
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  const scriptBody = `
    window.EDUKAS_SUPABASE_URL = ${JSON.stringify(supabaseUrl)};
    window.EDUKAS_SUPABASE_ANON_KEY = ${JSON.stringify(supabaseAnonKey)};
  `;

  res.status(200).send(scriptBody);
}