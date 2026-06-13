def answer_city_query(
    query: str,
    complaints,
    ward_risks
):
    query = query.lower()

    if "highest risk" in query:
        return {
            "answer":
            f"{ward_risks[0]['ward_name']} is currently the highest risk ward with risk score {ward_risks[0]['risk_score']}."
        }

    if "high priority" in query:
        high_priority = [
            complaint.title
            for complaint in complaints
            if complaint.priority == "High"
        ]

        return {
            "answer":
            f"High priority complaints: {', '.join(high_priority)}"
        }

    return {
        "answer":
        "I do not have enough information to answer that query yet."
    }