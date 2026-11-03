async function testOAuthEndpoint() {
  const res = await fetch('http://localhost:3000/api/auth/google', {
    redirect: 'manual'
  });
  console.log('HTTP Status:', res.status);
  const location = res.headers.get('location');
  console.log('Redirect Location:');
  if (location) {
    const url = new URL(location);
    console.log('Origin:', url.origin);
    console.log('Pathname:', url.pathname);
    console.log('Client ID present:', Boolean(url.searchParams.get('client_id')));
    console.log('Redirect URI:', url.searchParams.get('redirect_uri'));
    console.log('Scope:', url.searchParams.get('scope'));
  } else {
    console.log('No location header found.');
  }
}

testOAuthEndpoint().catch(console.error);
