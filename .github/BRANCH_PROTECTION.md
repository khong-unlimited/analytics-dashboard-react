Branch protection recommendations for `main`
===========================================

Recommended GitHub branch protection settings to ensure `dev` → `main` merges only
after review and passing checks.

Suggested rules (apply to branch `main`):

- Require pull request reviews before merging
  - Require at least 1 approving review
  - Dismiss stale reviews when new commits are pushed: enabled
- Require status checks to pass before merging
  - Select your CI job checks (e.g., `build`, `lint`, `test`)
  - Require branches to be up to date before merging (strict)
- Enforce linear commit history (optional)
- Restrict who can push to matching branches (optional — typically none)
- Include administrators: enabled (recommended to enforce rules for admins)

How to apply (UI)
------------------
1. Go to your repository on GitHub → `Settings` → `Branches` → `Branch protection rules`.
2. Click `Add rule` and set `Branch name pattern` to `main`.
3. Toggle the options above (require pull request reviews, require status checks, enforce for administrators, etc.).
4. Save the rule.

Apply via `gh` (GitHub CLI) using the REST API
--------------------------------------------
Replace `OWNER` and `REPO` and set `GITHUB_TOKEN` in your env.

```bash
OWNER=your-org-or-username
REPO=analytics-dashboard-react
BRANCH=main

cat > protection.json <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["build", "test"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1,
    "dismiss_stale_reviews": true
  },
  "restrictions": null,
  "required_linear_history": true
}
JSON

gh api --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/$OWNER/$REPO/branches/$BRANCH/protection \
  --input ./protection.json
```

Apply via `curl` (REST)
-----------------------
```bash
curl -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/repos/OWNER/REPO/branches/main/protection \
  -d @protection.json
```

Notes
-----
- The `contexts` array under `required_status_checks` should list the names of your CI checks as they appear in the PR checks UI.
- If your repo uses branch patterns other than `main`, adjust `BRANCH` accordingly.
- These API calls require `repo` (admin) permissions for the token used.
- After creating a branch protection rule, confirm the rule in the GitHub UI.

If you want, I can:

- Generate a GitHub Actions workflow that enforces branch-protection via the API when run by an admin (requires a secret admin token).
- Create a PR template or README entry describing the release process.
