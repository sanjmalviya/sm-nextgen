const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../src/lib/growth_os/db').default;
const { runProfileAudit } = require('../src/lib/growth_os/auditEngine');

async function main() {
  const biz = await db.businesses.findOne({ id: 'bus_1793207928402_mblud' });
  console.log('Auditing business:', biz.name);
  const audit = await runProfileAudit(biz);
  console.log('Audit Score:', audit.score);
  console.log('Summary:', audit.auditRecord.summary);
  console.log('Total factors passed:', audit.factors.filter(f => f.status === 'PASS').length, 'of', audit.factors.length);
  console.log('\nTop Opportunities:');
  for (const opp of audit.opportunities) {
    console.log(`- [${opp.priority}] ${opp.title}: ${opp.recommendedAction}`);
  }
}

main().catch(console.error);
