export interface Medication {
    name: string;
    dosage: string; // Ej: "50mg/m²"
    frequency: string; // Ej: "Daily", "Weekly"
    duration: number; // Días de administración
  }
  
  export interface TreatmentPhase {
    name: string; // Ej: "Induction", "Consolidation"
    start_date: string; // Fecha real de inicio
    end_date: string; // Fecha real de finalización
    medications: Medication[];
  }
  
  export interface TreatmentPlan {
    current_phase: string;
    current_day: number;
    total_days: number;
    phases: TreatmentPhase[];
  }
  
  export interface Patient {
    id: string;
    id_hash: string;
    name: string;
    age: number;
    weight: number;
    height: number;
    body_surface_area: number;
    treatment_plan?: TreatmentPlan;
  }
  