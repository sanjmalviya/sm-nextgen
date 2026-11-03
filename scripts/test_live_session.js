const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const jwt = require('jsonwebtoken');

async function testLiveSession() {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({
    userId: 'use_1793207771824_g9ust',
    email: 'smnextgen.in@gmail.com',
    role: 'USER',
    workspaceId: 'wor_1793207772052_yzene'
  }, secret, { expiresIn: '30d' });

  const headers = {
    'Cookie': `sm_growth_os_token=${token}`
  };

  const LIVE_URL = 'https://www.smnextgen.com';

  console.log(`Testing LIVE PRODUCTION at ${LIVE_URL}...`);

  // 1. GET /api/growth-os/business
  const bizRes = await fetch(`${LIVE_URL}/api/growth-os/business`, { headers });
  const bizData = await bizRes.json();
  console.log('=== LIVE BUSINESS PROFILE RESPONSE ===');
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
  const revRes = await fetch(`${LIVE_URL}/api/growth-os/reviews`, { headers });
  const revData = await revRes.json();
  console.log('\n=== LIVE REVIEWS RESPONSE ===');
  console.log({
    success: revData.success,
    reviewsCount: revData.reviews?.length,
    reviews: revData.reviews
  });
}

testLiveSession().catch(console.error);
