# Deployment Script Instructions

This repository contains a `deploy.sh` script to manage Docker-based deployments. Follow the instructions below to use the script effectively.

## Prerequisites

Ensure the following tools are installed and configured on your system:

1. **Docker**: Install Docker from [docker.com](https://www.docker.com/).
2. **Docker Compose**: Install Docker Compose as part of Docker Desktop or separately if needed.
3. **Git**: Install Git from [git-scm.com](https://git-scm.com/).

## Usage

The `deploy.sh` script provides the following options:

1. **Start**: Launch the Docker containers.
2. **Stop**: Shut down the Docker containers.
3. **Rebuild**: Rebuild the Docker images and launch the containers.
4. **Update**: Pull the latest changes from the repository, rebuild the images, and launch the containers.

### Running the Script

1. Make the script executable:
   ```bash
   chmod +x deploy.sh
   ```

2. Run the script:
   ```bash
   ./deploy.sh
   ```

3. Choose an option by entering the corresponding number:
   - `1`: Start
   - `2`: Stop
   - `3`: Rebuild
   - `4`: Update

### Option Descriptions

- **Start**:
  Starts the services in detached mode. After starting, the following URLs will be available:
  - Frontend: [http://localhost:3000](http://localhost:3000)
  - Backend: [http://localhost:8000](http://localhost:8000)
  - API Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)

- **Stop**:
  Stops and removes the running containers.

- **Rebuild**:
  Rebuilds the Docker images and then starts the services.

- **Update**:
  Ensures the `develop` branch is set to track `origin/develop`, pulls the latest code, rebuilds the Docker images, and starts the services.

## Troubleshooting

1. **Permission Denied**:
   If you encounter a permission error when running the script, ensure it is executable:
   ```bash
   chmod +x deploy.sh
   ```

2. **Docker Not Found**:
   Ensure Docker is installed and running. Verify with:
   ```bash
   docker --version
   ```

3. **Git Errors**:
   Make sure you have the correct access to the repository and are on the correct branch:
   ```bash
   git status
   ```

## Notes

- The script assumes the backend runs on port 8000 and the frontend runs on port 3000. If these ports are in use, update your Docker Compose file accordingly.
- For advanced configuration, edit the `docker-compose.yml` file in the repository.