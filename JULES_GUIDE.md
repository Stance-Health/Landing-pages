# Jules: Engineering Guide

This guide explains how Jules operates, how to optimize your workflow with the agent, and the tools at its disposal.

## 1. Performance & Architecture
- **Cloud Reasoning:** Jules' reasoning (LLM) runs in the cloud. Your local PC performance does not affect "thinking" speed.
- **Remote Execution:** Command execution (builds, tests, file operations) happens in a remote sandbox environment.
- **Local PC Role:** Your PC is primarily for viewing the results and previews via the browser.

## 2. Prompting Strategies
For multi-step complex tasks, use the **Architect-Builder** approach:
- **Define "Definition of Done":** Be specific about requirements (e.g., validation rules, CSS variables).
- **Structural Context:** Mention specific folders or patterns to follow.
- **Iterative Loop:** Refine plans before execution.
- **Explicit Constraints:** State what to avoid (e.g., "Don't install new libraries").

## 3. Usage & Quotas
- **Platform Billing:** Usage is typically governed by the platform's credits or message limits.
- **Context Window:** Large tasks should be broken into sub-tasks to ensure the agent maintains full context of the work.
- **Token Efficiency:** Jules is optimized to read only necessary files to conserve tokens.

## 4. MCP Tools (Superpowers)
- **Stitch:** UI/UX engine for generating designs, themes, and high-fidelity components.
- **Context7:** Real-time documentation librarian for fetching up-to-date library info and code snippets.
- **Bash/File System:** Core engineering tools for file manipulation, running scripts, and managing the environment.

## 5. Unique Selling Proposition (USP)
Jules is an **Agentic Engineer**, distinguishing it from general chat models:

| Feature | Claude / Kimi | Codex / Copilot | **Jules** |
| :--- | :--- | :--- | :--- |
| **Actionability** | Text only | Snippets only | **Executes code & tests** |
| **Verification** | None | None | **Terminal & UI verification** |
| **Context** | Paste-based | File-based | **Full Repo Access** |
| **Autonomy** | Responsive | Predictive | **Plan-driven Execution** |

Jules doesn't just provide answers; it delivers **verified results**.
