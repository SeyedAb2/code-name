const fs = require("node:fs");
const path = require("node:path");

const file = path.join(process.cwd(), "public", "app-version.json");
const version = `${new Date().toISOString()}-${process.env.GIT_COMMIT?.slice(0, 8) || "build"}`;
fs.writeFileSync(file, `${JSON.stringify({ version })}\n`, "utf8");
console.log(`PWA version: ${version}`);
