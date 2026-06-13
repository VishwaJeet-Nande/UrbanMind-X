# UrbanMindX Database Design

Version: 1.0

Author: Vishwajeet Nande

Database: PostgreSQL

Architecture Type: Relational + AI Intelligence Layer

---

# 1. Database Philosophy

The UrbanMindX database is designed to support:

- Citizen Issue Reporting
- AI Complaint Intelligence
- Digital Twin Visualization
- Decision Intelligence
- Urban AI Assistant
- Future Predictive Models

The database must remain scalable and extensible.

---

# 2. Core Database Domains

The database is divided into six domains:

1. Identity Domain
2. Complaint Domain
3. Geographic Domain
4. Intelligence Domain
5. Analytics Domain
6. Assistant Domain

---

# 3. Entity Relationship Overview

text Users   │   └──── Complaints              │              ├──── ComplaintImages              │              ├──── AIAnalysis              │              └──── Wards  Wards   │   ├──── RiskScores   │   └──── AIInsights  AssistantLogs 

---

# 4. users Table

Purpose:

Store user accounts.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| full_name | VARCHAR |
| email | VARCHAR |
| password_hash | VARCHAR |
| role | VARCHAR |
| is_active | BOOLEAN |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

Roles:

text citizen admin super_admin 

---

# 5. wards Table

Purpose:

Store city administrative divisions.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| ward_number | INTEGER |
| ward_name | VARCHAR |
| geojson_data | JSONB |
| population | INTEGER |
| area_sq_km | FLOAT |
| created_at | TIMESTAMP |

Example:

text Ward 1 Ward 2 Ward 3 

---

# 6. complaints Table

Purpose:

Store citizen-reported issues.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| user_id | UUID |
| ward_id | UUID |
| title | VARCHAR |
| description | TEXT |
| category | VARCHAR |
| status | VARCHAR |
| latitude | FLOAT |
| longitude | FLOAT |
| address | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

Status Values:

text reported under_review in_progress resolved closed 

---

# 7. complaint_images Table

Purpose:

Store complaint image references.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| complaint_id | UUID |
| image_url | TEXT |
| uploaded_at | TIMESTAMP |

Storage Provider:

Cloudinary

---

# 8. ai_analysis Table

Purpose:

Store AI-generated complaint analysis.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| complaint_id | UUID |
| predicted_category | VARCHAR |
| severity_score | FLOAT |
| priority_level | VARCHAR |
| confidence_score | FLOAT |
| recommended_department | VARCHAR |
| recommendation | TEXT |
| analyzed_at | TIMESTAMP |

Priority Levels:

text low medium high critical 

---

# 9. risk_scores Table

Purpose:

Store ward-level intelligence metrics.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| ward_id | UUID |
| risk_score | FLOAT |
| complaint_density | FLOAT |
| severity_index | FLOAT |
| trend_score | FLOAT |
| generated_at | TIMESTAMP |

Range:

text 0-100 

---

# 10. ai_insights Table

Purpose:

Store generated city insights.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| ward_id | UUID |
| insight_type | VARCHAR |
| title | VARCHAR |
| description | TEXT |
| confidence_score | FLOAT |
| created_at | TIMESTAMP |

Example Types:

text risk_alert recommendation trend forecast 

---

# 11. assistant_logs Table

Purpose:

Store Urban AI Assistant conversations.

Columns:

| Column | Type |
|----------|----------|
| id | UUID |
| user_id | UUID |
| query | TEXT |
| response | TEXT |
| created_at | TIMESTAMP |

Purpose:

- Conversation History
- Auditing
- Prompt Evaluation

---

# 12. Future Prediction Tables

These tables are reserved for future expansion.

---

## flood_predictions

| Column | Type |
|----------|----------|
| id | UUID |
| ward_id | UUID |
| flood_probability | FLOAT |
| risk_level | VARCHAR |
| prediction_date | DATE |

---

## traffic_predictions

| Column | Type |
|----------|----------|
| id | UUID |
| ward_id | UUID |
| congestion_score | FLOAT |
| prediction_date | DATE |

---

## waste_predictions

| Column | Type |
|----------|----------|
| id | UUID |
| ward_id | UUID |
| overflow_probability | FLOAT |
| prediction_date | DATE |

---

## pollution_predictions

| Column | Type |
|----------|----------|
| id | UUID |
| ward_id | UUID |
| pollution_index | FLOAT |
| prediction_date | DATE |

---

# 13. Relationship Definitions

users → complaints

text One User Many Complaints 

---

wards → complaints

text One Ward Many Complaints 

---

complaints → complaint_images

text One Complaint Many Images 

---

complaints → ai_analysis

text One Complaint One AI Analysis 

---

wards → risk_scores

text One Ward Many Risk Records 

---

wards → ai_insights

text One Ward Many Insights 

---

# 14. Indexing Strategy

Create indexes on:

sql email ward_id complaint_id created_at status risk_score 

Reason:

Improve dashboard and AI query performance.

---

# 15. MVP Tables

Required for V1:

text users  wards  complaints  complaint_images  ai_analysis  risk_scores  ai_insights  assistant_logs 

---

# 16. Post-MVP Tables

Future:

text flood_predictions  traffic_predictions  waste_predictions  pollution_predictions 

These tables will support predictive analytics modules.

---

# 17. Database Design Goals

The UrbanMindX database must:

- Support AI-first workflows
- Support Digital Twin visualization
- Support future predictive analytics
- Support natural language querying
- Support city-scale intelligence generation

The schema should remain extensible while keeping the MVP implementation simple.

---

End of Document