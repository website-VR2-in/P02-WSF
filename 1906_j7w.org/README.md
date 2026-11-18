# 1906 · j7w.org

**Decision: no rebuild — live production app.**

j7w.org hosts the login portal of an invite-only, multi-app congregation platform (PropertyScope + 2 other apps). See [RECON.md](RECON.md) for the full architecture analysis (auth flows, congregation model, backend topology) and [docs/hardening.md](docs/hardening.md) for the priority-ordered security recommendations.

WSF pipeline status: steps 1–2 verified live; steps 3–10 out of scope by design (private app) — see [docs/pipeline.md](docs/pipeline.md).
