# Nodejs-Prom-Project-CICD-Pipelines

---

## Project Overview

This project is a complete end-to-end DevOps CI/CD implementation for a Node.js application, designed to simulate a real-world production deployment workflow using modern DevOps and Cloud technologies.

The project automates the entire software delivery lifecycle starting from source code integration to containerized deployment and monitoring on Kubernetes.

### What I Implemented
- Built a CI/CD pipeline using GitHub Actions
- Automated Node.js application build and testing
- Integrated SonarQube for static code quality analysis
- Containerized the application using Docker
- Pushed Docker images to DockerHub
- Implemented container vulnerability scanning using Trivy
- Configured AWS authentication for CI/CD pipeline
- Connected GitHub Actions with Amazon EKS cluster
- Deployed the application on Kubernetes using Helm charts
- Configured Prometheus for metrics collection
- Integrated Grafana for monitoring and visualization dashboards

---

## Tech Stack

| Category | Tools Used |
|---|---|
| Application | Node.js |
| CI/CD | GitHub Actions |
| Code Quality | SonarQube |
| Containerization | Docker |
| Security Scanning | Trivy |
| Container Registry | DockerHub |
| Kubernetes | Amazon EKS |
| Monitoring | Prometheus |
| Visualization | Grafana |
| Cloud Provider | AWS |

---

## CI/CD Workflow

The GitHub Actions pipeline performs the following steps:

1. Checkout source code
2. Setup Node.js environment
3. Install dependencies
4. Run application tests
5. Perform SonarQube code scan
6. Build Docker image
7. Push image to DockerHub
8. Scan Docker image using Trivy
9. Configure AWS credentials
10. Connect to Amazon EKS cluster
11. Verify Kubernetes cluster access

---

## Project Structure

```bash
.
├── .github/workflows/
│   └── cicd.yaml
├── app/
│   ├── Dockerfile
│   ├── package.json
│   └── source-code
├── monitoring/
├── kubernetes/
└── README.md
```

---

## GitHub Actions Workflow

Main workflow file:

```bash
.github/workflows/
```

Pipeline automates:

- Build
- Scan
- Push
- Kubernetes authentication
- Monitoring integration

---

## Docker Build

Build image locally:

```bash
docker build -t <dockerhub-username>/node-prom-app .
```

Run container:

```bash
docker run -p 3000:3000 <dockerhub-username>/node-prom-app
```

---

## SonarQube Integration

The project uses SonarQube for static code analysis.

Configured through:

- SONAR_TOKEN
- SONAR_HOST_URL

stored securely in GitHub Secrets.

---

## Trivy Security Scan

Container images are scanned for:

- Critical vulnerabilities
- High severity vulnerabilities

using Trivy inside the CI/CD pipeline.

---

## Amazon EKS Integration

GitHub Actions authenticates with AWS and connects to the EKS cluster using IAM credentials.

Cluster access is verified using:

```bash
kubectl get nodes
```

---

## Helm Deployment

The application is deployed to Amazon EKS using Helm charts.

Deploy using:

```bash
helm upgrade --install node-prom-app ./helm-chart -n node-app
```

### Benefits of using Helm:

- Reusable Kubernetes manifests
- Easier configuration management
- Simplified upgrades and rollbacks
- Production-style Kubernetes deployments

---

## Monitoring Setup

### Prometheus

Prometheus is used for metrics collection and application monitoring.

### Grafana

Grafana is integrated for visualization and dashboard creation.

---

## GitHub Secrets Used

The following GitHub Secrets are required:

```text
SONARQUBE_TOKEN
SONARQUBE_HOST
DOCKER_USERNAME
DOCKER_PASSWORD
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

---

## Future Improvements

- ArgoCD GitOps integration
- Slack/Email notifications
- Ingress controller setup
- HTTPS using cert-manager
- Blue-Green / Canary deployments

---

## Learning Outcomes

Through this project, I learned:

- Designing and troubleshooting CI/CD pipelines
- Kubernetes deployment automation
- Helm-based application deployment and upgrades
- Container security scanning practices
- EKS authentication and Kubernetes RBAC concepts
- Monitoring and observability setup
- Real-world DevOps debugging and production-style issue resolution
- Integrating multiple DevOps tools into a unified workflow
  

---

## Author

Lokesh Acharya

GitHub:
https://github.com/Lokeshacharya352
