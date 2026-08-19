---
title: "kunchenguid/dotfiles"
type: tool
date_added: 2026-07-29
source: "https://github.com/kunchenguid/dotfiles"
tags: [dotfiles, nix-darwin, home-manager, macos, agents, reproducibility]
via: "Twitter bookmark from @kunchenguid"
---

Kun Chen's public Mac setup, managed with nix-darwin and home-manager, shared as the reproducibility half of why he disables every agent permission prompt. One repo and one command rebuild a wiped machine: system defaults, Homebrew casks/CLI, Nix user packages, zsh/starship, Neovim and WezTerm (rose-pine moon), and a single `AGENTS.md` installed for Claude, Codex, and opencode. The tweet's other two legs — treat the laptop as an employee's device you are willing to wipe, and keep production secrets behind AutomicVault so agents still need a human gate for credentialed commands — live outside the repo.

`bootstrap.sh` installs Determinate Nix, symlinks the clone to `~/.dotfiles`, checks the flake `user` against the macOS username, and runs the first `darwin-rebuild switch`. Daily changes are `./rebuild.sh`. Cloners should edit username, host label (`mac`), and `hostPlatform` first; `homebrew.onActivation.cleanup = "zap"` will uninstall anything not listed in `brews`/`casks`. Personal repo: PRs are auto-closed, bugs go through the issue template. ~500 stars.

## Key Features

- Full-machine reproducibility via nix-darwin + home-manager
- Fresh-Mac path: `./bootstrap.sh`; daily apply: `./rebuild.sh`
- Shared agent policy (`home/AGENTS.md`) for Claude, Codex, and opencode
- Homebrew + Nix package lists, zsh/starship, Neovim, WezTerm
- `nix flake check --no-build` / dry-run build to validate without applying
- Explicitly does not set git name/email (avoids shipping the author's identity)

## Quick Start

```sh
git clone https://github.com/kunchenguid/dotfiles.git
cd dotfiles
# review user / host / hostPlatform and the Homebrew zap list first
./bootstrap.sh
```

## Links

- [GitHub](https://github.com/kunchenguid/dotfiles)
- [Walkthrough](https://youtu.be/5N-okeDdIuI)
- [Original Tweet](https://x.com/kunchenguid/status/2082316720086405524)
