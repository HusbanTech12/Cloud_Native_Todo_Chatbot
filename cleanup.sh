#!/bin/bash

# Cleanup script to remove Todo Chatbot deployment

echo "Removing Todo Chatbot deployment..."

# Uninstall Helm releases
helm uninstall todo-frontend
helm uninstall todo-backend

echo "Services and deployments removed."

# Optional: Stop Minikube
read -p "Do you want to stop Minikube cluster? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    minikube stop
    echo "Minikube stopped."
fi

echo "Cleanup completed!"