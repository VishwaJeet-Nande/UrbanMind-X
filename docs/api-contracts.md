# UrbanMindX API Contracts

Version: 1.0

Author: Vishwajeet Nande

Backend Framework: FastAPI

API Standard: REST

Response Format: JSON

---

# 1. API Design Principles

All APIs must follow:

- RESTful design
- JSON request/response
- JWT Authentication
- Consistent error handling
- Version-ready architecture

Base URL:

text /api/v1 

---

# 2. Standard Success Response

json {   "success": true,   "message": "Operation completed successfully",   "data": {} } 

---

# 3. Standard Error Response

json {   "success": false,   "message": "Validation failed",   "errors": [] } 

---

# 4. Authentication APIs

## Register User

Endpoint:

http POST /api/v1/auth/register 

Request:

json {   "full_name": "Vishwajeet Nande",   "email": "user@example.com",   "password": "password123" } 

Response:

json {   "success": true,   "message": "User registered successfully" } 

---

## Login User

Endpoint:

http POST /api/v1/auth/login 

Request:

json {   "email": "user@example.com",   "password": "password123" } 

Response:

json {   "success": true,   "token": "jwt_token",   "user": {     "id": "uuid",     "full_name": "Vishwajeet Nande",     "role": "citizen"   } } 

---

## Get Current User

Endpoint:

http GET /api/v1/auth/me 

Headers:

http Authorization: Bearer <token> 

Response:

json {   "id": "uuid",   "full_name": "John Doe",   "email": "john@example.com",   "role": "citizen" } 

---

# 5. Complaint APIs

## Create Complaint

Endpoint:

http POST /api/v1/complaints 

Request:

json {   "title": "Pothole on Main Road",   "description": "Large pothole causing traffic issues",   "latitude": 20.7074,   "longitude": 76.5688,   "ward_id": "uuid" } 

Response:

json {   "success": true,   "complaint_id": "uuid" } 

---

## Get All Complaints

Endpoint:

http GET /api/v1/complaints 

Response:

json {   "success": true,   "data": [     {       "id": "uuid",       "title": "Pothole",       "status": "reported",       "created_at": "timestamp"     }   ] } 

---

## Get Complaint Details

Endpoint:

http GET /api/v1/complaints/{id} 

Response:

json {   "id": "uuid",   "title": "Pothole",   "description": "Road damaged",   "status": "reported",   "category": "Road Infrastructure",   "ai_analysis": {} } 

---

## Update Complaint Status

Endpoint:

http PATCH /api/v1/complaints/{id}/status 

Request:

json {   "status": "resolved" } 

Response:

json {   "success": true } 

---

# 6. Complaint Image APIs

## Upload Complaint Image

Endpoint:

http POST /api/v1/complaints/{id}/images 

Content Type:

http multipart/form-data 

Response:

json {   "success": true,   "image_url": "https://..." } 

---

# 7. AI Intelligence APIs

## Analyze Complaint

Endpoint:

http POST /api/v1/ai/classify 

Request:

json {   "complaint_text": "Garbage overflowing near market" } 

Response:

json {   "category": "Waste Management",   "severity_score": 0.82,   "priority": "high",   "recommended_department": "Sanitation" } 

---

## Generate Recommendation

Endpoint:

http POST /api/v1/ai/recommend 

Request:

json {   "complaint_id": "uuid" } 

Response:

json {   "recommendation": "Deploy sanitation team within 24 hours" } 

---

# 8. Dashboard APIs

## Dashboard Summary

Endpoint:

http GET /api/v1/dashboard/summary 

Response:

json {   "total_complaints": 250,   "resolved_complaints": 180,   "active_complaints": 70,   "city_health_score": 82 } 

---

## Ward Analytics

Endpoint:

http GET /api/v1/dashboard/wards 

Response:

json [   {     "ward_name": "Ward 1",     "risk_score": 78,     "complaint_count": 34   } ] 

---

# 9. Risk Intelligence APIs

## Get Risk Scores

Endpoint:

http GET /api/v1/risks 

Response:

json [   {     "ward_id": "uuid",     "risk_score": 85,     "severity_index": 76   } ] 

---

## Get Ward Risk

Endpoint:

http GET /api/v1/risks/{ward_id} 

Response:

json {   "ward_name": "Ward 7",   "risk_score": 91,   "recommendation": "Immediate intervention required" } 

---

# 10. Digital Twin APIs

## Map Data

Endpoint:

http GET /api/v1/map/overview 

Response:

json {   "complaints": [],   "wards": [],   "risk_scores": [] } 

---

## Ward GeoJSON

Endpoint:

http GET /api/v1/map/wards 

Response:

json {   "type": "FeatureCollection",   "features": [] } 

---

# 11. Urban AI Assistant APIs

## Ask Assistant

Endpoint:

http POST /api/v1/assistant/query 

Request:

json {   "query": "Which ward requires attention?" } 

Response:

json {   "answer": "Ward 12 requires immediate attention due to elevated risk scores and complaint density." } 

---

## Assistant History

Endpoint:

http GET /api/v1/assistant/history 

Response:

json [   {     "query": "...",     "response": "...",     "timestamp": "..."   } ] 

---

# 12. Admin APIs

## Get Users

Endpoint:

http GET /api/v1/admin/users 

---

## Get System Metrics

Endpoint:

http GET /api/v1/admin/metrics 

Response:

json {   "users": 150,   "complaints": 250,   "assistant_queries": 450 } 

---

# 13. Future APIs

Reserved for:

text Flood Prediction  Traffic Prediction  Waste Forecasting  Pollution Monitoring  Simulation Engine 

These are not required for MVP.

---

# 14. API Versioning Strategy

Current:

text /api/v1 

Future:

text /api/v2 

Versioning must be maintained to ensure backward compatibility.

---

# 15. MVP Endpoints

Required for Version 1:

text /auth/register /auth/login /auth/me  /complaints /complaints/{id}  /ai/classify  /dashboard/summary  /risks  /map/overview  /assistant/query 

These endpoints are sufficient to demonstrate the complete UrbanMindX workflow.

---

End of Document