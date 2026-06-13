from app.models.complaint import Complaint


def calculate_risk_score(complaints):
    complaint_count = len(complaints)

    if complaint_count == 0:
        return {
            "complaint_count": 0,
            "average_severity": 0,
            "risk_score": 0,
            "recommendation": "No Action Required"
        }

    total_severity = sum(
        complaint.severity_score
        for complaint in complaints
    )

    average_severity = (
        total_severity / complaint_count
    )

    risk_score = min(
        int(
            complaint_count * average_severity
        ),
        100
    )

    if risk_score >= 80:
        recommendation = (
            "Immediate intervention required"
        )

    elif risk_score >= 50:
        recommendation = (
            "Monitor closely"
        )

    else:
        recommendation = (
            "Routine monitoring"
        )

    return {
        "complaint_count": complaint_count,
        "average_severity": round(
            average_severity,
            2
        ),
        "risk_score": risk_score,
        "recommendation": recommendation
    }