# Deployment Models

Anchor handles deployment flexibility to meet various security and operational requirements.

## 1. Cloud SaaS (Standard)
- **Host**: Managed by Anchor on AWS (US-East-1).
- **Setup**: Instant.
- **Updates**: Automatic rolling updates.
- **Best For**: fast-moving SaaS companies, startups.

## 2. Private Cloud (Enterprise)
- **Host**: Dedicated VPC in your region of choice (AWS, GCP, Azure).
- **Setup**: 3-5 business days.
- **Data**: Complete isolation of storage and compute.
- **Best For**: Regulated industries (FinTech, HealthTech).

## 3. On-Premise / Air-Gapped (Gov)
- **Host**: Deployed via Helm charts to your Kubernetes cluster.
- **Setup**: Custom engagement.
- **Connectivity**: Can run with local LLMs (Llama 3, Mistral) for full offline capability.
- **Best For**: Government, Defense, critical infrastructure.

## Environment Compatibility
Anchor's widget is a lightweight, framework-agnostic JavaScript snippet.
- **React/Vue/Angular**: Native components available.
- **Static Sites**: Simple `<script>` tag injection.
- **Mobile**: iOS and Android SDKs (React Native support available).
