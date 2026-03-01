import networkx as nx
import random

def create_campus_graph():
    G = nx.grid_2d_graph(10, 10)
    for u, v in G.edges():
        G[u][v]['weight'] = random.randint(1, 5)
        G[u][v]['traffic'] = 0
    return G

def simulate_traffic(G, num_agents=500):
    # Reset traffic before each simulation
    for u, v in G.edges():
        G[u][v]['traffic'] = 0

    for _ in range(num_agents):
        start = random.choice(list(G.nodes()))
        end = random.choice(list(G.nodes()))
        path = nx.shortest_path(G, start, end, weight='weight')
        for i in range(len(path)-1):
            G[path[i]][path[i+1]]['traffic'] += 1
    return G

def calculate_congestion(G):
    total = 0
    for u, v in G.edges():
        total += G[u][v]['traffic']
    return total

def simulate_energy_load(hours=24):
    import random
    base_load = 100
    energy_data = []

    for hour in range(hours):
        peak_factor = 1.5 if 9 <= hour <= 17 else 0.8
        load = base_load * peak_factor + random.randint(-10, 10)
        energy_data.append(load)

    return energy_data

def simulate_energy_load(hours=24):
    import random
    base_load = 100
    energy_data = []

    for hour in range(hours):
        peak_factor = 1.5 if 9 <= hour <= 17 else 0.8
        load = base_load * peak_factor + random.randint(-10, 10)
        energy_data.append(load)

    return energy_data
