# Rollback Procedures for Todo Chatbot Services

## Frontend Service Rollback

To rollback the frontend service:

```bash
helm rollback todo-frontend
```

## Backend Service Rollback

To rollback the backend service:

```bash
helm rollback todo-backend
```

## Complete Deployment Rollback

To rollback both services:

```bash
helm rollback todo-frontend
helm rollback todo-backend
```

## Verification

After rollback, verify the deployment status:

```bash
helm list
kubectl get pods
kubectl get svc
```