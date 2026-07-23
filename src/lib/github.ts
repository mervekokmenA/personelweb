export const APK_WORKFLOW_FILE = "build-apk.yml";

export function githubConfig() {
  const token = process.env.GH_PAT;
  const repo = process.env.GH_REPO; // "owner/repo"
  if (!token || !repo) return null;
  return { token, repo };
}

export function getGithubReleaseInfo() {
  const cfg = githubConfig();
  const repo = cfg?.repo ?? null;
  return {
    configured: !!cfg,
    downloadUrl: repo ? `https://github.com/${repo}/releases/download/apk-latest/kisisel-panel.apk` : null,
    releaseUrl: repo ? `https://github.com/${repo}/releases/tag/apk-latest` : null,
    actionsUrl: repo ? `https://github.com/${repo}/actions/workflows/${APK_WORKFLOW_FILE}` : null,
  };
}
