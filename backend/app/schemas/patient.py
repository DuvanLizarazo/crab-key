from pydantic import BaseModel

class PatientBase(BaseModel):
    id: str
    name: str
    age: int
    weight: float
    height: float
    #body_surface_area: float

class PatientCreate(PatientBase):
    pass

class PatientResponse(BaseModel):
    id: str
    name: str
    age: int
    weight: float
    height: float
    body_surface_area: float
    current_phase: str | None = None
    current_day: int | None = None
    total_days: int | None = None
    treatment: dict | None = None