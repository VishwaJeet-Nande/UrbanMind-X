def analyze_complaint(text: str):
    text = text.lower()

    if "pothole" in text:
        return {
            "category": "Road Infrastructure",
            "priority": "High",
            "severity_score": 8,
            "recommended_department": "Public Works Department"
        }

    if "garbage" in text:
        return {
            "category": "Waste Management",
            "priority": "Medium",
            "severity_score": 6,
            "recommended_department": "Sanitation Department"
        }

    if "streetlight" in text:
        return {
            "category": "Electrical",
            "priority": "High",
            "severity_score": 7,
            "recommended_department": "Electrical Department"
        }

    if "water" in text:
        return {
            "category": "Water Supply",
            "priority": "High",
            "severity_score": 8,
            "recommended_department": "Water Department"
        }

    return {
        "category": "General",
        "priority": "Low",
        "severity_score": 3,
        "recommended_department": "General Administration"
    }