def build_city_overview(
    complaints,
    ward_risks
):
    total_complaints = len(
        complaints
    )

    high_priority = len(
        [
            c
            for c in complaints
            if c.priority == "High"
        ]
    )

    high_risk_wards = len(
        [
            w
            for w in ward_risks
            if w["risk_score"] >= 50
        ]
    )

    top_ward = (
        ward_risks[0]["ward_name"]
        if ward_risks
        else None
    )

    city_risk_score = (
        max(
            [
                w["risk_score"]
                for w in ward_risks
            ],
            default=0
        )
    )

    return {
        "total_complaints": total_complaints,
        "high_priority_complaints": high_priority,
        "high_risk_wards": high_risk_wards,
        "city_risk_score": city_risk_score,
        "top_ward": top_ward
    }