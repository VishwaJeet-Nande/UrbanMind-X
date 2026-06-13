from collections import defaultdict


def calculate_ward_risks(complaints):
    ward_data = defaultdict(list)

    for complaint in complaints:
        ward_data[
            complaint.ward_name
        ].append(complaint)

    results = []

    for ward_name, items in ward_data.items():

        complaint_count = len(items)

        average_severity = (
            sum(
                c.severity_score
                for c in items
            )
            / complaint_count
        )

        risk_score = min(
            int(
                complaint_count
                * average_severity
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

        results.append(
            {
                "ward_name": ward_name,
                "complaint_count": complaint_count,
                "average_severity": round(
                    average_severity,
                    2
                ),
                "risk_score": risk_score,
                "recommendation": recommendation
            }
        )

    return sorted(
        results,
        key=lambda x: x["risk_score"],
        reverse=True
    )