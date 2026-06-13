# UrbanMindX System Architecture

Version: 1.0

Author: Vishwajeet Nande

Project: UrbanMindX

Tagline: Predict. Simulate. Optimize.

---

# 1. Architecture Overview

UrbanMindX is designed as a modular AI-powered Smart City Intelligence Platform.

The architecture follows a layered design pattern to ensure scalability, maintainability, and future expansion.

The system consists of five major layers:

1. Presentation Layer
2. Application Layer
3. Intelligence Layer
4. Data Layer
5. Infrastructure Layer

---

# 2. High-Level Architecture

text ┌──────────────────────────────┐ │         Frontend UI          │ │      Next.js + Tailwind      │ └──────────────┬───────────────┘                │                ▼  ┌──────────────────────────────┐ │         FastAPI APIs         │ │     Authentication Layer     │ │      Business Services       │ └──────────────┬───────────────┘                │       ┌────────┴────────┐       ▼                 ▼  ┌───────────────┐   ┌───────────────┐ │ PostgreSQL DB │   │ AI Engine     │ └───────┬───────┘   └───────┬───────┘         │                   │         ▼                   ▼  ┌──────────────────────────────┐ │     Urban AI Assistant       │ └──────────────────────────────┘ 

---

# 3. Architectural Principles

UrbanMindX follows the following principles:

### Separation of Concerns

Each layer performs a specific responsibility.

### API First Design

All business functionality must be accessible through APIs.

### Modular Development

Each module should be independently maintainable.

### AI-Driven Intelligence

AI capabilities are integrated as a dedicated layer rather than embedded directly into frontend logic.

### Scalable Foundation

The architecture should support future migration to cloud-native infrastructure.

---

# 4. Presentation Layer

## Technology Stack

Frontend Framework:

- Next.js 15

Language:

- TypeScript

Styling:

- TailwindCSS

UI Components:

- shadcn/ui

Maps:

- Mapbox GL JS

Charts:

- Recharts

State Management:

- Zustand

---

## Responsibilities

The frontend is responsible for:

- User interaction
- Data visualization
- Dashboard rendering
- Digital Twin visualization
- AI Assistant interface

The frontend must never contain business logic.

All processing should occur through APIs.

---

# 5. Application Layer

## Technology

- FastAPI
- Python 3.12

---

## Responsibilities

The Application Layer serves as the central orchestration system.

Responsibilities include:

- Authentication
- Authorization
- Complaint Management
- Dashboard APIs
- Risk Analysis APIs
- AI Integration
- Data Validation

---

## API Categories

### Authentication APIs

text /auth/register /auth/login /auth/me 

---

### Complaint APIs

text /complaints /complaints/{id} 

---

### Dashboard APIs

text /dashboard/summary /dashboard/wards 

---

### AI APIs

text /ai/classify /ai/recommend 

---

### Assistant APIs

text /assistant/query 

---

# 6. Intelligence Layer

The Intelligence Layer is the core differentiator of UrbanMindX.

This layer transforms raw data into actionable insights.

---

## Complaint Intelligence Engine

Purpose:

Automatically analyze citizen complaints.

Functions:

- Classification
- Severity Prediction
- Priority Assignment

Input:

text Garbage overflowing near central market. 

Output:

json {   "category": "Waste Management",   "priority": "High",   "severity": 0.82 } 

---

## Recommendation Engine

Purpose:

Provide action recommendations.

Example:

text Deploy sanitation vehicle within 24 hours. 

---

## Risk Scoring Engine

Purpose:

Calculate ward-level risk.

Factors:

- Complaint Density
- Complaint Severity
- Historical Trends

Output:

text Ward Risk Score 

Range:

text 0 - 100 

---

## Future Prediction Models

Planned Models:

- Flood Risk Prediction
- Traffic Prediction
- Waste Overflow Prediction
- Pollution Risk Prediction

These models are not required for MVP completion.

---

# 7. Urban AI Assistant

## Purpose

Provide natural language access to city intelligence.

Example Queries:

- Which ward has the highest risk score?
- Show recent complaints.
- Summarize city issues.
- Recommend priority actions.

---

## Workflow

text User Query        ↓  Assistant API        ↓  Database Retrieval        ↓  Context Generation        ↓  LLM Response        ↓  Frontend Display 

---

## LLM Providers

Primary:

- OpenAI

Secondary:

- Gemini

The system should support provider replacement without major architecture changes.

---

# 8. Data Layer

## Database Technology

PostgreSQL

---

## Core Entities

Users

Complaints

Complaint Images

Wards

Risk Scores

AI Insights

Assistant Logs

---

## Responsibilities

The database stores:

- User information
- Complaint records
- AI outputs
- Historical analytics
- Risk metrics

---

# 9. Digital Twin Layer

## Purpose

Create a visual representation of city conditions.

---

## Initial Layers

### Complaint Layer

Displays complaint locations.

### Ward Layer

Displays administrative boundaries.

### Risk Layer

Displays risk scores geographically.

---

## Future Layers

- Flood Layer
- Traffic Layer
- Waste Layer
- Pollution Layer

---

# 10. Infrastructure Layer

## MVP Deployment

Frontend:

Vercel

Backend:

Railway

Database:

PostgreSQL

Storage:

Cloudinary

---

## Future Deployment

AWS

Components:

- ECS
- RDS
- S3
- CloudFront
- API Gateway

---

# 11. Project Structure

text UrbanMindX/  frontend/  backend/ ├── app/ ├── api/ ├── services/ ├── database/ ├── models/ └── schemas/  ai/  data/  docs/  deployment/ 

---

# 12. Security Architecture

Authentication:

JWT Authentication

Password Security:

bcrypt

API Security:

Token-based authorization

Input Validation:

Pydantic

Environment Management:

.env files

---

# 13. Monitoring and Logging

Future Monitoring:

- Sentry
- Prometheus
- Grafana

MVP Logging:

- FastAPI Logging
- Railway Logs

---

# 14. MVP Architecture Scope

Included:

- Citizen Complaint Portal
- AI Complaint Intelligence
- Digital Twin Visualization
- Risk Scoring
- Urban AI Assistant

Excluded:

- IoT Integration
- Real-Time Streaming
- Kafka
- Microservices
- Kubernetes
- Multi-City Support

---

# 15. Long-Term Vision

UrbanMindX is designed to evolve from a Smart City MVP into a full-scale Urban Intelligence Operating System capable of:

- Predicting urban risks
- Simulating future scenarios
- Optimizing city operations
- Supporting data-driven governance

The MVP architecture establishes the foundation for that evolution.

---

End of Document