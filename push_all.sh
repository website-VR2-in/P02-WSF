#!/usr/bin/env bash
# Batch push of all P02-WSF site repos to GitHub.
# Usage: bash push_all.sh   (run after `gh auth login` succeeds)
set -u
cd /home/realmont/workspace/P02-WSF || exit 1

ok=0; fail=0
for d in 19*/; do
  d="${d%/}"
  [ -d "$d/.git" ] || { echo "SKIP  $d (no git repo)"; continue; }
  remote=$(git -C "$d" remote get-url origin 2>/dev/null)
  if [ -z "$remote" ]; then
    echo "CREATE $d"
    gh repo create "$d" --public --description "WSF site $d (P02-WSF pipeline)" >/dev/null 2>&1 || { echo "  FAIL create $d"; fail=$((fail+1)); continue; }
    git -C "$d" remote add origin "https://github.com/su1-hue/$d.git"
  fi
  if git -C "$d" push -u origin main >/dev/null 2>&1; then
    echo "PUSHED $d"
    ok=$((ok+1))
  else
    echo "FAIL   $d"
    fail=$((fail+1))
  fi
done
echo "=== done: $ok pushed, $fail failed"
