const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const jwt = require('jsonwebtoken');

async function testSession() {
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

  // 1. GET /api/growth-os/business
  const bizRes = await fetch('http://localhost:3000/api/growth-os/business', { headers });
  const bizData = await bizRes.json();
  console.log('=== BUSINESS PROFILE RESPONSE ===');
  console.log({
    success: bizData.success,
    name: bizData.activeBusiness?.name,
    category: bizData.activeBusiness?.category,
    phone: bizData.activeBusiness?.phone,
    address: bizData.activeBusiness?.address,
    googleConnected: bizData.activeBusiness?.googleConnected,
    googlePlaceId: bizData.activeBusiness?.googlePlaceId,
    googleMapsUrl: bizData.activeBusiness?.googleMapsUrl
  });

  // 2. GET /api/growth-os/reviews
  const revRes = await fetch('http://localhost:3000/api/growth-os/reviews', { headers });
  const revData = await revRes.json();
  console.log('\n=== REVIEWS RESPONSE ===');
  console.log({
    success: revData.success,
    reviewsCount: revData.reviews?.length,
    reviews: revData.reviews
  });

  // 3. GET /api/growth-os/audit
  const auditRes = await fetch('http://localhost:3000/api/growth-os/audit', { headers });
  const auditData = await auditRes.json();
  console.log('\n=== AUDIT RESPONSE ===');
  console.log({
    success: auditData.success,
    score: auditData.audit?.overallScore || auditData.audit?.score,
    summary: auditData.audit?.summary
  });
}

testSession().catch(console.error);
