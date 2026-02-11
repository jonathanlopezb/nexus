from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Nexxus Neural AI")

# Configure CORS for Next.js frontend
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    user_id: str | None = None

class ChatResponse(BaseModel):
    response: str

@app.get("/")
async def root():
    return {"status": "online", "engine": "Sorenexus Neural v1"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    # This is a placeholder for the actual AI logic
    # In a real scenario, we would call OpenAI or Gemini here
    user_msg = request.message.lower()
    
    # Mock responses for demonstration
    if "drop" in user_msg or "nike" in user_msg:
        response = "He detectado un pico de calor en los últimos drops de Nike. Te recomiendo el Vortex Quantum 'Zenith', tiene un 98% de compatibilidad con tus búsquedas recientes."
    elif "precio" in user_msg or "oferta" in user_msg:
        response = "Actualmente tenemos el Drop Quantum con un 45% de descuento por tiempo limitado. ¿Quieres que te lo añada al carrito?"
    else:
        response = f"Sorenexus procesando: '{request.message}'. Mi red neural indica que buscas algo específico. ¿Buscas un estilo Urbano o algo más Deportivo para hoy?"

    return ChatResponse(response=response)

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
