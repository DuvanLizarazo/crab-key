import math

def calculate_bsa(weight: float, height: float) -> float:
    """Calcula la superficie corporal (BSA) usando la fórmula de Mosteller."""
    if weight <= 0 or height <= 0:
        raise ValueError("Weight and height must be positive numbers.")
    return round(math.sqrt((weight * height) / 3600), 2)
