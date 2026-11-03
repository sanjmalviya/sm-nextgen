const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const jwt = require('jsonwebtoken');

async function testSession() {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({
    userId: 'use_1793726696098_mbo6y',
    email: 'sanjmalviya88243@gmail.com',
    role: 'USER',
    workspaceId: 'wor_1793726696332_d2kuq'
  }, secret, { expiresIn: '30d' });

  const headers = {
    'Cookie': `sm_growth_os_token=${token}`
  };

  // 1. GET /api/growth-os/business
  const bizRes = await fetch('http://localhost:3000/api/growth-os/business', { headers });
  const bizData = await bizRes.json();
  console.log('=== BUSINESS PROFILE RESPONSE FOR sanjmalviya88243 ===');
  console.log({
    success: bizData.success,
    name: bizData.activeBusiness?.name,
    category: bizData.activeBusiness?.category,
    phone: bizData.activeBusiness?.phone,
    address: bizData.activeBusiness?.address,
    googleConnected: bizData.activeBusiness?.googleConnected,
    googlePlaceId: bizData.activeBusiness?.googlePlaceId
  });

  // 2. GET /api/growth-os/reviews
  const revRes = await fetch('http://localhost:3000/api/growth-os/reviews', { headers });
  const revData = await revRes.json();
  console.log('\n=== REVIEWS RESPONSE ===');
  console.log(`Total reviews: ${revData.reviews?.length}`);
  for (const r of revData.reviews || []) {
    console.log(`- [${r.rating}★] ${r.author} (${r.date}): ${r.text.slice(0, 70)}...`);
  }
}

testSession().catch(console.error);
