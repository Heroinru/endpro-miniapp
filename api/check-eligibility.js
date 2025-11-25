export default async function handler(req, res) {
  // CORS headers для Farcaster
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fid } = req.body;

  if (!fid) {
    return res.status(400).json({ error: 'FID required' });
  }

  try {
    const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
    
    if (!NEYNAR_API_KEY) {
      console.error('❌ NEYNAR_API_KEY not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    console.log('🔍 Checking PRO for FID:', fid);

    const response = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}`, {
      headers: {
        'accept': 'application/json',
        'api_key': NEYNAR_API_KEY
      }
    });

    if (!response.ok) {
      console.error('❌ Neynar API error:', response.status);
      return res.status(500).json({ error: 'Failed to fetch user data' });
    }

    const data = await response.json();
    const user = data.users?.[0];
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Проверяем наличие PRO подписки
    const hasPro = user.active_status === 'active' && user.power_badge === true;
    
    console.log('✅ FID:', fid, 'Username:', user.username, 'Has PRO:', hasPro);
    
    return res.status(200).json({ 
      hasPro,
      fid,
      username: user.username,
      displayName: user.display_name
    });

  } catch (error) {
    console.error('❌ Eligibility check error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
