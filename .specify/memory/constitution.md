<!-- SYNC IMPACT REPORT:
Version change: 1.0.0 → 2.0.0
Modified principles: I-VI (replaced with cloud-native principles)
Added sections: Containerization, Kubernetes, Helm, AI Agent Responsibilities, Deployment Rules, Observability, Security principles
Removed sections: Authentication, API, Database principles from previous version
Templates requiring updates: ✅ Updated plan-template.md, spec-template.md, tasks-template.md
Follow-up TODOs: None
-->
# Cloud-Native Todo Chatbot — Phase IV Constitution

## Core Principles

### I. Cloud-Native First
All services MUST be containerized. No service may run directly on the host OS. Kubernetes is the single orchestration authority. Applications must be designed for containerized deployment with stateless components and externalized configuration.

### II. Spec-Driven Development Authority
Infrastructure MUST be generated from specifications, not manual YAML. AI agents interpret specs and produce deployable artifacts. Specs act as the source of truth. All infrastructure changes must originate from spec updates, not ad-hoc modifications.

### III. AI-Governed Operations
AI tools assist, but humans retain final control. AI agents MUST NOT make destructive changes without explicit intent. Every AI action should be explainable and auditable. All infrastructure decisions must be traceable and reversible.

### IV. Containerization Mandate
Frontend and backend MUST have separate Docker images. Images MUST be optimized for production. Dockerfiles must follow security best practices with non-root users and minimal attack surface. Gordon AI Agent SHOULD be used for Dockerfile creation and optimization when available.

### V. Kubernetes Orchestration Authority
All workloads MUST run inside Minikube. No direct docker run is allowed for final deployment. Pods MUST be managed via Deployments, not standalone Pods. Services must use proper selectors and labels for service discovery. No bare pods allowed in production deployments.

### VI. Helm-First Packaging
Each service MUST have its own Helm chart. Configuration MUST be externalized via values.yaml. AI tools MAY generate Helm templates. Helm is the ONLY accepted deployment mechanism. All configuration must be parameterizable through values files.

## Technology Governance

### Containerization Layer
Docker and Docker Desktop are required tools. Frontend and backend MUST have separate Docker images. Images MUST be optimized for production with multi-stage builds. Gordon AI Agent SHOULD be used for Dockerfile creation and optimization. If Gordon is unavailable, standard Docker CLI is allowed.

### Kubernetes Layer
Minikube, kubectl, kubectl-ai, and kagent are required tools. All workloads MUST run inside Minikube. No direct docker run is allowed for final deployment. Pods MUST be managed via Deployments, not standalone Pods. Network policies and RBAC must follow principle of least privilege.

### Helm Packaging
Each service MUST have its own Helm chart. Configuration MUST be externalized via values.yaml. AI tools MAY generate Helm templates. Helm is the ONLY accepted deployment mechanism. Values files must separate environment-specific configurations from common templates.

## AI Agent Responsibilities

### Docker AI Agent (Gordon)
Allowed responsibilities: Generate Dockerfiles, optimize image layers, suggest best practices, assist in image debugging. Constraints: Must not publish images externally without permission, must not expose secrets.

### kubectl-ai
Allowed responsibilities: Generate Kubernetes manifests, create Helm charts, scale deployments, diagnose pod failures, assist in rollout strategies. Constraints: Must operate within Minikube, must respect defined specs.

### kagent
Allowed responsibilities: Cluster health analysis, resource optimization, deployment insights, AIOps recommendations. Constraints: Advisory by default, no autonomous destructive actions.

## Deployment Rules

### Frontend Deployment
Must run with at least 2 replicas for high availability. Must be exposed via Kubernetes Service with proper load balancing. Must communicate with backend via service DNS names. Must implement proper health checks and readiness probes.

### Backend Deployment
Must run as a scalable Deployment with horizontal pod autoscaling enabled. Must expose API internally via ClusterIP service. Must be horizontally scalable based on CPU/memory metrics. Must implement proper liveness and readiness probes.

## Observability & Validation

Required validations: kubectl get pods shows healthy status, Services are reachable inside cluster, Frontend is accessible via Minikube service, AI diagnostics show no critical issues. AI tools SHOULD be used to diagnose failures, suggest improvements, and optimize resources.

All deployments must include proper logging, metrics collection, and distributed tracing. Monitoring dashboards must be available for all services. Alerting rules must be defined for critical metrics.

## Security & Safety Principles

No hard-coded secrets in images. Environment variables managed via Helm values and Kubernetes Secrets. No cluster-admin privileges unless required. AI agents must not override security boundaries. All containers must run as non-root users. Image scanning must be performed for security vulnerabilities.

Network policies must restrict traffic between services. TLS encryption must be enforced for all inter-service communication. Pod security standards must be enforced to prevent privilege escalation.

## Spec-Driven Infrastructure Blueprint

This project adopts Blueprint-Driven Infrastructure Automation:

```
sp.constitution.md
        ↓
sp.specify.md
        ↓
AI Agents (Claude Code / kubectl-ai / kagent)
        ↓
Helm Charts
        ↓
Minikube Kubernetes Cluster
```

This ensures repeatability, governance, scalability, and AI safety.

## Governance

This constitution and written specs always override code, prompts, informal instructions, or other specifications. All implementation violating this document is invalid regardless of functionality. Amendments require explicit documentation and approval process. All pull requests and reviews must verify compliance with these principles. Deviations must be resolved via spec updates.

AI agents must operate within defined boundaries and cannot make autonomous changes to production infrastructure without explicit human approval. All infrastructure changes must be reviewed and approved by human operators.

**Version**: 2.0.0 | **Ratified**: 2026-02-05 | **Last Amended**: 2026-02-05