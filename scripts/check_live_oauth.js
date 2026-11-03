async function checkLiveOAuth() {
  const res = await fetch('https://www.smnextgen.com/api/auth/google', {
    redirect: 'manual'
  });
  console.log('Live HTTP Status:', res.status);
  const location = res.headers.get('location');
  console.log('Redirect Location:', location);
  if (location && location.includes('accounts.google.com')) {
    console.log('✅ Google OAuth is LIVE & active on smnextgen.com!');
  } else if (location && location.includes('google_setup_needed')) {
    console.log('⚠️ GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET needs to be saved in Vercel Dashboard Environment Variables.');
  }
}

checkLiveOAuth().catch(console.error);
