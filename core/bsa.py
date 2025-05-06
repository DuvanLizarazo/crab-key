from math import sqrt

def calculate_bsa(weight_kg: float, height_cm: float) -> float:
    return round(sqrt((weight_kg * height_cm) / 3600), 2)