# UrbanMind X – AI Digital Twin for Campus Micro-Cities

UrbanMind X is a prototype AI-powered digital twin system designed to simulate and optimize campus infrastructure as a micro-city.

## Features Implemented
- Multi-agent traffic simulation
- Congestion measurement
- Adaptive routing optimization
- Energy load simulation (24-hour model)
- Visual AI dashboard

## How to Run

1. Create virtual environment:
   python3 -m venv venv
   source venv/bin/activate

2. Install dependencies:
   pip install fastapi uvicorn networkx numpy

3. Start server:
   uvicorn main:app --reload

4. Open browser:
   http://127.0.0.1:8000

Built for AMD Slingshot 2026 – AI for Smart Cities.
