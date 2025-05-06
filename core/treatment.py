from datetime import timedelta

def generate_treatment_phase(phase_name: str, start_date, drugs,bsa):
    calendar = []
    for drug in drugs:
        for day in drug.days:
            date = start_date + timedelta(days=day - 1)

            if drug.dose_mg_m2 is not None:
                dose_info = f"{round(drug.dose_mg_m2 * bsa, 2)} mg"
            else:
                dose_info = drug.notes or "Special dose per protocol"

            calendar.append({
                "day": day,
                "date": date,
                "drug": drug.name,
                "dose_mg_m2": drug.dose_mg_m2,  # puede ser None
                "dose": dose_info,              # esto es lo que se usará para imprimir
                "route": drug.route,
                "notes": drug.notes
            })

            # Si hay co_medications, agregarlos también al calendario
            if drug.co_medications:
                for co_drug in drug.co_medications:
                    calendar.append({
                        "day": day,
                        "date": date,
                        "drug": co_drug.name,
                        "dose_mg_m2": co_drug.dose_mg_m2,  # Puede ser None
                        "dose": co_drug.notes if co_drug.notes else "Special dose per protocol",
                        "route": co_drug.route,
                        "notes": co_drug.notes
                    })

    return sorted(calendar, key=lambda x: x["day"])


def reschedule_drug_day(calendar, drug_name, original_day, new_day, start_date):
    for item in calendar:
        if item["drug"].lower() == drug_name.lower() and item["day"] == original_day:
            item["day"] = new_day
            item["date"] = start_date + timedelta(days=new_day)
            print(f"Rescheduled {item['drug']} from day {original_day} to {new_day}")
            return
    print("No matching drug application found.")