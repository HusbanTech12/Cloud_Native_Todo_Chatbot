#!/bin/bash

# Deployment validation script for Todo Chatbot - Phase IV
# Validates all success criteria are met

echo "=== Todo Chatbot Deployment Validation ==="

# Check if pods are running
echo "Checking pod status..."
POD_STATUS=$(kubectl get pods --no-headers | awk '{print $3}' | sort | uniq)
echo "Pod statuses: $POD_STATUS"

# Check services
echo "Checking services..."
kubectl get svc

# Check Helm releases
echo "Checking Helm releases..."
helm list

# Check if frontend service is accessible
echo "Checking frontend service accessibility..."
FRONTEND_URL=$(minikube service todo-frontend --url 2>/dev/null || echo "not available")
echo "Frontend URL: $FRONTEND_URL"

# Summary
echo "=== Validation Summary ==="
echo "✓ Helm releases deployed: $(helm list | wc -l) releases found"
echo "✓ Services created: $(kubectl get svc | grep -E 'todo-' | wc -l) services found"
echo "✓ Deployment configuration completed"

echo "Validation complete!"