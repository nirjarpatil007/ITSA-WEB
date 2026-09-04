import { execSync } from "node:child_process";

async function main() {
  const creds = execSync("git credential fill", {
    input: "protocol=https\nhost=github.com\n",
  }).toString();

  const tokenMatch = creds.match(/password=(.*)/);
  const token = tokenMatch ? tokenMatch[1].trim() : null;

  if (!token) {
    throw new Error("Could not retrieve GitHub token from git credential manager");
  }

  console.log("Checking GitHub authentication...");
  const userRes = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "Node-GitHub-Deployer",
      Accept: "application/vnd.github.v3+json",
    },
  });

  const user = await userRes.json();
  if (!user.login) {
    console.error("User response error:", user);
    throw new Error("Failed to authenticate with GitHub API");
  }

  console.log(`Authenticated as GitHub user: ${user.login} (${user.name || ""})`);

  console.log("Creating repository 'ITSA-WEB' on GitHub...");
  const createRes = await fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "Node-GitHub-Deployer",
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "ITSA-WEB",
      description: "Official website of ITSA (Information Technology Students' Association) - PCCoE Pune",
      private: false,
      auto_init: false,
    }),
  });

  const repo = await createRes.json();

  if (createRes.status === 201) {
    console.log(`Repository created successfully: ${repo.html_url}`);
  } else if (createRes.status === 422 && repo.message?.includes("name already exists")) {
    console.log("Repository 'ITSA-WEB' already exists on your GitHub. Will push to it.");
  } else {
    console.error("Create repo response:", repo);
    throw new Error(`Failed to create repository: ${repo.message}`);
  }

  // Also enable GitHub Pages via GitHub Actions if possible
  try {
    console.log("Enabling GitHub Pages with GitHub Actions build type...");
    const pagesRes = await fetch(`https://api.github.com/repos/${user.login}/ITSA-WEB/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "Node-GitHub-Deployer",
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        build_type: "workflow",
      }),
    });
    const pagesData = await pagesRes.json();
    console.log("GitHub Pages status:", pagesData.status || pagesData.message || "Configured");
  } catch (err) {
    console.log("Note: GitHub Pages setup via API:", err.message);
  }

  console.log("Initializing local git and pushing to ITSA-WEB...");
  const repoUrl = `https://github.com/${user.login}/ITSA-WEB.git`;

  try {
    execSync("git init -b main", { stdio: "inherit" });
  } catch {
    execSync("git init", { stdio: "inherit" });
    execSync("git branch -M main", { stdio: "inherit" });
  }

  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Initial commit: ITSA-WEB with automated GitHub Pages deployment"', { stdio: "inherit" });

  try {
    execSync(`git remote remove origin`, { stdio: "ignore" });
  } catch {}

  execSync(`git remote add origin ${repoUrl}`, { stdio: "inherit" });

  console.log(`Pushing to ${repoUrl}...`);
  execSync(`git push -u origin main --force`, { stdio: "inherit" });

  console.log("\n==========================================");
  console.log("SUCCESS!");
  console.log(`Repository URL: https://github.com/${user.login}/ITSA-WEB`);
  console.log(`GitHub Pages URL: https://${user.login}.github.io/ITSA-WEB/`);
  console.log("==========================================");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
