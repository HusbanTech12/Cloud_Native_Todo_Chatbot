# Troubleshooting Guide for Todo Chatbot Deployment

## Common Issues and Solutions

### Pods in CrashLoopBackOff
- Check logs: `kubectl logs <pod-name>`
- Verify Docker image exists: `docker images`
- Check resource limits in values.yaml

### Service not accessible
- Verify service is running: `kubectl get svc`
- Check pod status: `kubectl get pods`
- Verify service type and ports

### Helm installation failures
- Check values.yaml for syntax errors
- Verify image repository and tag
- Ensure sufficient cluster resources

### Scaling issues
- Check resource quotas
- Verify Horizontal Pod Autoscaler configuration
- Monitor cluster capacity

## Diagnostic Commands

### Check all resources
```bash
kubectl get all
```

### Check specific deployment
```bash
kubectl describe deployment <deployment-name>
```

### Check logs
```bash
kubectl logs deployment/<deployment-name>
```

## AI Tool Usage for Troubleshooting

### Use kubectl-ai for diagnosis
```bash
kubectl-ai "diagnose why pods are in CrashLoopBackOff"
kubectl-ai "troubleshoot service connectivity issues"
kubectl-ai "check why the pods are failing"
```

### Use kagent for analysis
```bash
kagent "analyze the cluster health"
kagent "optimize resource allocation"
```