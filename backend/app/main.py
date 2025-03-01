from fastapi import FastAPI
from backend.app.api.v1.endpoints import patient
from backend.app.database.session import Base, engine

app = FastAPI()

# Crear las tablas
Base.metadata.create_all(bind=engine)

# Incluir las rutas
app.include_router(patient.router, prefix="/patients", tags=["Patients"])
