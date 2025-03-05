from backend.app.models.treatment_plan import TreatmentPlan

def generate_treatment_plan(patient_id: str, bsa: float) -> list[TreatmentPlan]:
    """Generates a treatment plan with multiple medications per phase."""
    phases = [
        {
            "phase": "Induction",
            "medications": [
                {"name": "Prednisone", "dose_mg_m2": 60, "days": 28},
                {"name": "Vincristine", "dose_mg_m2": 1.5, "days": 4},
                {"name": "Daunorubicin", "dose_mg_m2": 25, "days": 1}
            ]
        },
        {
            "phase": "Consolidation",
            "medications": [
                {"name": "Methotrexate", "dose_mg_m2": 5000, "days": 4},
                {"name": "Cytarabine", "dose_mg_m2": 100, "days": 8}
            ]
        },
        {
            "phase": "Reinduction",
            "medications": [
                {"name": "Dexamethasone", "dose_mg_m2": 6, "days": 14},
                {"name": "Vincristine", "dose_mg_m2": 1.5, "days": 4},
                {"name": "Doxorubicin", "dose_mg_m2": 25, "days": 1}
            ]
        },
        {
            "phase": "Maintenance",
            "medications": [
                {"name": "Mercaptopurine", "dose_mg_m2": 50, "days": 365},
                {"name": "Methotrexate", "dose_mg_m2": 20, "days": 52}
            ]
        }
    ]

    treatment_plan = []
    for phase in phases:
        for med in phase["medications"]:
            total_dose = round(med["dose_mg_m2"] * bsa, 2)
            treatment_plan.append({
                "patient_id": patient_id,
                "phase": phase["phase"],
                "medication": med["name"],
                "total_dose_mg": total_dose,
                "days": med["days"]
            })

    return treatment_plan
