from fastapi import FastAPI
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles

from simulation import (
    create_campus_graph,
    simulate_traffic,
    calculate_congestion,
    simulate_energy_load
)

from optimization import optimize_traffic

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def root():
    return FileResponse("static/index.html")


@app.get("/run")
def run_simulation():
    G = create_campus_graph()
    G = simulate_traffic(G)
    before = calculate_congestion(G)

    G = optimize_traffic(G)
    G = simulate_traffic(G)
    after = calculate_congestion(G)

    improvement = before - after
    improvement_percent = (improvement / before) * 100 if before != 0 else 0

    return JSONResponse({
        "before_congestion": before,
        "after_congestion": after,
        "improvement": improvement,
        "improvement_percent": round(improvement_percent, 2)
    })


@app.get("/energy")
def run_energy_simulation():
    energy_data = simulate_energy_load()

    peak_load = max(energy_data)
    avg_load = sum(energy_data) / len(energy_data)

    return JSONResponse({
        "energy_data": energy_data,
        "peak_load": peak_load,
        "average_load": round(avg_load, 2)
    })
