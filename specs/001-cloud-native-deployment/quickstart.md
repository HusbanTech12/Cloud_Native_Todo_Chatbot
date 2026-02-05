# Quickstart Guide: Cloud-Native Todo Chatbot - Phase IV

**Feature**: Cloud-Native Todo Chatbot - Phase IV
**Date**: 2026-02-06
**Author**: AI Assistant

## Overview

This quickstart guide provides instructions for deploying the Todo Chatbot application to a local Kubernetes cluster using AI-assisted DevOps tools. The deployment follows spec-driven development principles with AI-governed operations.

## Prerequisites

Before starting the deployment, ensure you have the following tools installed and configured:

### Required Tools
- Docker Desktop (with Gordon AI Agent enabled)
- Minikube
- Helm
- kubectl
- kubectl-ai
- kagent

### Verify Installation
```bash
# Check Docker and Gordon
docker ai "What can you do?"

# Check Minikube
minikube version

# Check Helm
helm version

# Check kubectl-ai
kubectl-ai --help

# Check kagent
kagent --help
```

## Step-by-Step Deployment

### Step 1: Environment Preparation

1. Enable Gordon AI Agent in Docker Desktop:
   - Open Docker Desktop Settings
   - Navigate to Features in Development
   - Enable "Docker AI Agent (Gordon)"

2. Start Minikube cluster:
   ```bash
   minikube start
   ```

3. Point Docker to Minikube daemon:
   ```bash
   eval $(minikube docker-env)
   ```

### Step 2: Application Containerization

1. Generate Dockerfiles using Gordon AI Agent:
   ```bash
   # Generate frontend Dockerfile
   docker ai "Create a production Dockerfile for the Next.js frontend application"

   # Generate backend Dockerfile
   docker ai "Create a production Dockerfile for the FastAPI backend application"
   ```

2. Build Docker images:
   ```bash
   docker build -t todo-frontend:latest -f Dockerfile.frontend .
   docker build -t todo-backend:latest -f Dockerfile.backend .
   ```

### Step 3: Helm Chart Generation (AI-Assisted)

1. Generate frontend Helm chart:
   ```bash
   kubectl-ai "create a helm chart for todo frontend with 2 replicas and NodePort service"
   ```

2. Generate backend Helm chart:
   ```bash
   kubectl-ai "create a helm chart for todo backend with ClusterIP service and 1 replica"
   ```

### Step 4: Deployment

1. Install backend service:
   ```bash
   helm install todo-backend ./helm/todo-backend --set image.tag=latest,replicaCount=1
   ```

2. Install frontend service:
   ```bash
   helm install todo-frontend ./helm/todo-frontend --set image.tag=latest,replicaCount=2
   ```

### Step 5: Service Exposure

1. Expose frontend service via Minikube:
   ```bash
   minikube service todo-frontend
   ```

2. Note the URL provided for accessing the frontend

## AI-Assisted Operations

### Scaling Operations
```bash
# Scale backend to handle more load
kubectl-ai "scale the backend deployment to 3 replicas"

# Check deployment status
kubectl-ai "show me the status of all deployments"
```

### Diagnostics and Health Checks
```bash
# Analyze cluster health
kagent "analyze the cluster health"

# Optimize resource allocation
kagent "optimize resource allocation"

# Diagnose any issues
kubectl-ai "check why the pods are failing"
```

## Validation

### Verify Deployment Status
```bash
# Check all pods
kubectl get pods

# Check all services
kubectl get svc

# Check Helm releases
helm list

# Check deployment details
kubectl get deployments
```

### Expected Results
- All pods should be in "Running" state
- Frontend service should be accessible via Minikube
- Backend service should be reachable internally
- Helm releases should show "deployed" status

## Troubleshooting

### Common Issues

1. **Pods in CrashLoopBackOff**:
   ```bash
   kubectl-ai "diagnose why pods are in CrashLoopBackOff"
   ```

2. **Service not accessible**:
   ```bash
   kubectl-ai "troubleshoot service connectivity issues"
   ```

3. **Resource constraints**:
   ```bash
   kagent "analyze resource allocation and identify constraints"
   ```

### Rollback Procedure
```bash
# Rollback frontend if needed
helm rollback todo-frontend

# Rollback backend if needed
helm rollback todo-backend
```

## Cleanup

To remove the deployment:
```bash
# Uninstall Helm releases
helm uninstall todo-frontend
helm uninstall todo-backend

# Stop Minikube
minikube stop
```

## Next Steps

After successful deployment:
1. Monitor application performance
2. Adjust resource allocations based on usage
3. Implement additional security measures
4. Set up automated CI/CD pipelines
5. Expand to multi-cluster or cloud environments

## Success Criteria

The deployment is successful when:
- ✅ Both frontend and backend services are running
- ✅ Frontend is accessible via Minikube service
- ✅ AI tools were used for Dockerfile generation, Helm chart creation, and operations
- ✅ All pods show as Running status
- ✅ Helm releases are healthy