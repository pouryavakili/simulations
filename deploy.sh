#!/bin/bash

# Function to display the menu and get the user's choice
echo "Please choose an option:"
echo "1) Start"
echo "2) Stop"
echo "3) Rebuild"
echo "4) Update"

function display_service_info() {
    echo "Frontend is listening at http://localhost:3000"
    echo "Backend is listening on http://localhost:8000"
    echo "To access backend API documentation, use http://localhost:8000/docs"
}

read -p "Enter your choice (1/2/3/4): " choice

case $choice in
  1)
    echo "Starting services..."
    docker compose up -d
    display_service_info
    ;;
  2)
    echo "Stopping services..."
    docker compose down
    ;;
  3)
    echo "Rebuilding and starting services..."
    docker compose build
    docker compose up -d
    display_service_info
    ;;
  4)
    echo "Updating code, rebuilding, and starting services..."
    if ! git rev-parse --abbrev-ref @{u} &>/dev/null; then
      echo "Setting upstream branch for develop..."
      git branch --set-upstream-to=origin/develop develop
    fi
    git pull
    docker compose build
    docker compose up -d
    display_service_info
    ;;
  *)
    echo "Invalid choice. Please run the script again and select a valid option."
    exit 1
    ;;
esac
