from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.api.v1.endpoints import patient
from backend.app.database.session import Base, engine

app = FastAPI()

# Crear las tablas
Base.metadata.create_all(bind=engine)

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL del frontend
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos (GET, POST, PUT, DELETE...)
    allow_headers=["*"],  # Permite todos los encabezados
)

# Incluir las rutas
app.include_router(patient.router, prefix="/patients", tags=["Patients"])
