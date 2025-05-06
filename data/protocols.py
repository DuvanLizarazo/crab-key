from models.drug import Drug, create_mtx_it_drug

def get_protocol_1b(age_years: float) -> list[Drug]:
    return [
    #Durg("Medicine", dose_mg_m2, days, route, notes, co_medications)
    Drug(
    "Ciclofosfamida (1000mg/m2)", 
    1000, 
    [1,28],
    "IP",
    "Pasar en infusión de 1 hora cada dosis,",
    co_medications=[Drug("MESNA (400mg/m2)", 400, [0], "IV", "A las horas 0, +4 y +8 post ciclofosfamida")]
    ),

    Drug(
    "Citarabina (75mg/m2)",
    75,
    [
        2, 3, 4, 5,
        9, 10, 11, 12,
        16, 17, 18, 19,
        23, 24, 25, 26
    ],
    "IV",
    ""
    ),

    Drug(
    "Mercaptopurina ( 60mg/m2)",
    60,
    list(range(2, 30)),
    "PO",
    "Tomar en la noche con el estómago vacío, sin leche."
    ),

    create_mtx_it_drug(age_years)
]