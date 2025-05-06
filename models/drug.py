class Drug:
    def __init__(
        self,
        name: str,
        dose_mg_m2: float,
        days: list[int],
        route: str = "",
        notes: str = "",
        co_medications: list["Drug"] = None
    ):
        self.name = name
        self.dose_mg_m2 = dose_mg_m2
        self.days = days if isinstance(days, list) else [days]
        self.route = route
        self.notes = notes
        self.co_medications = co_medications or []

def mtx_it_dose_by_age(age_years: float) -> int:
    if age_years < 1:
        return 6
    elif age_years < 2:
        return 8
    elif age_years < 3:
        return 10
    else:
        return 12

def create_mtx_it_drug(age_years: float) -> Drug:
    dose = mtx_it_dose_by_age(age_years)
    return Drug(
        name="MTX IT",
        dose_mg_m2=None,  # None since it's not based on BSA
        days=[9, 23],
        route="IT",
        notes=f"Age-based dose: {dose} mg"
    )