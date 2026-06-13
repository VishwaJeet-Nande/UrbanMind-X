def get_top_priority_wards(ward_risks):
    return sorted(
        ward_risks,
        key=lambda x: x["risk_score"],
        reverse=True
    )[:3]