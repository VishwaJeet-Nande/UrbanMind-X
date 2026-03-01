def optimize_traffic(G):
    # Reduce weight of low-traffic edges
    for u, v in G.edges():
        if G[u][v]['traffic'] > 15:
            G[u][v]['weight'] += 3  # discourage heavy routes
        else:
            G[u][v]['weight'] = max(1, G[u][v]['weight'] - 1)  # encourage alternate paths
    return G
