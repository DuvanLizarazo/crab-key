def display_calendar(calendar):
    for item in calendar:
        # Imprimir el medicamento principal
        print(f"{item['date'].strftime('%Y-%m-%d')} | Day {item['day']:>2} | {item['drug']:<15} | {item['dose']}")
        
        # Verificar si el medicamento tiene co-medicamentos
        if 'co_medications' in item:
            print(f"    Co-medications: {item['co_medications']}")  # Depuración
            if item['co_medications']:
                for co_med in item['co_medications']:
                    # Verificar estructura del co-med
                    print(f"    ➤ Co-medication: {co_med['drug']} - {co_med['dose']}")
                    if 'notes' in co_med and co_med['notes']:
                        print(f"        Note: {co_med['notes']}")

def display_by_day(calendar):
    from collections import defaultdict

    # Agrupar por día
    days = defaultdict(list)
    for item in calendar:
        days[item["day"]].append(item)

    # Mostrar en orden
    for day in sorted(days):
        print(f"\n🗓️  Day {day} - {days[day][0]['date'].strftime('%Y-%m-%d')}")
        print("-" * 50)
        for med in days[day]:
            print(f"  • {med['drug']} - {med['dose']}")
            if med['notes']:
                print(f"    ➤ Note: {med['notes']}")
            
            # Verificar si tiene co-medicamentos
            if 'co_medications' in item:
                print(f"    Co-medications: {item['co_medications']}")  # Depuración
                if item['co_medications']:
                    for co_med in item['co_medications']:
                        # Verificar estructura del co-med
                        print(f"    ➤ Co-medication: {co_med['drug']} - {co_med['dose']}")
                        if 'notes' in co_med and co_med['notes']:
                            print(f"        Note: {co_med['notes']}")