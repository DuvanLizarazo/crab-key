from pydantic import BaseModel

class PatientBase(BaseModel):
    name: str
    age: int
    weight: float
    height: float
    body_surface_area: float

class PatientCreate(PatientBase):
    pass

class PatientResponse(PatientBase):
    id: int

    class Config:
        from_attributes = True