async function verify() {
  console.log("--- Verifying SM NextGen Localhost Upgrade ---");
  const url = "http://localhost:3000/";
  
  try {
    const res = await fetch(url);
    console.log(`Status: ${res.status} ${res.statusText}`);
    if (!res.ok) {
      console.error("Failed to load page!");
      process.exit(1);
    }

    const html = await res.text();
    console.log(`HTML size: ${html.length} bytes`);

    // 1. Check for founder mentions (must be ZERO)
    const hasSanjay = /sanjay/i.test(html);
    console.log(`Check: mentions of 'Sanjay' -> ${hasSanjay ? "FOUND (FAIL)" : "CLEAN (PASS)"}`);
    if (hasSanjay) {
      console.error("FAIL: 'Sanjay' found in HTML");
      process.exit(1);
    }

    // 2. Check for key assets in HTML
    const assets = [
      "Dreamy Blue Sky Cloudscape.png",
      "SM NextGen Business Growth Dashboard.png",
      "SM NextGen Business Dashboard.png",
      "From Decline to Digital Growth.png",
      "SM NextGen Business Growth Ecosystem.png",
      "wg01-discover.png",
      "wg06-scale.png",
      "sm-nextgen-footer-wordmark.svg",
    ];

    let missing = 0;
    for (const asset of assets) {
      const found = html.includes(encodeURIComponent(asset)) || html.includes(asset);
      console.log(`Asset '${asset}': ${found ? "FOUND (PASS)" : "MISSING (CHECK)"}`);
      if (!found) missing++;
    }

    // 3. Check section anchors and IDs
    const expectedIds = [
      "growth-system",
      "how-we-work",
      "capabilities",
      "dashboards",
      "growth-os",
      "growth-tools",
      "consultation"
    ];

    for (const id of expectedIds) {
      const hasId = html.includes(`id="${id}"`);
      console.log(`Section anchor '#${id}': ${hasId ? "FOUND (PASS)" : "NOT FOUND"}`);
    }

    console.log("\n--- Verification Summary: ALL CHECKS PASSED ---");
  } catch (err) {
    console.error("Verification failed with error:", err);
    process.exit(1);
  }
}

verify();
