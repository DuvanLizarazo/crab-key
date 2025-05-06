from datetime import datetime
from core.bsa import calculate_bsa
from core.treatment import generate_treatment_phase, reschedule_drug_day
from core.calendar import display_calendar,display_by_day
from models.patient import Patient
from data.protocols import get_protocol_1b

# Input
name = input("Nombre del paciente: ")
weight = float(input("Peso (kg): "))
height = float(input("Altura (cm): "))
age = int(input("Edad (años): "))
patient = Patient(name, weight, height)
bsa = calculate_bsa(weight, height)
print(f"BSA: {bsa} m²")

start_str = input("Dia inicio fase (YYYY-MM-DD): ")
start_date = datetime.strptime(start_str, "%Y-%m-%d")

drugs = get_protocol_1b(age)
calendar = generate_treatment_phase("Induction", start_date, drugs,bsa)
display_calendar(calendar)

if input("\nReprogramar medicamento? (y/n): ").lower() == "y":
    drug = input("Nombre del medicamento: ")
    old_day = int(input("Día original: "))
    new_day = int(input("Nuevo día: "))
    reschedule_drug_day(calendar, drug, old_day, new_day, start_date)
    display_calendar(calendar, bsa)
else:
    display_by_day(calendar)