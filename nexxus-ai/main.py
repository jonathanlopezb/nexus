from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

from openai import OpenAI

load_dotenv()

app = FastAPI(title="Nexxus Neural AI")

# Initialize OpenAI client if key is present
client = None
if os.getenv("OPENAI_API_KEY") and os.getenv("OPENAI_API_KEY") != "your_key_here":
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

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
    return {"status": "online", "engine": "Sorenexus Neural v1", "ai_enabled": client is not None}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    user_msg = request.message.lower()
    
    # Use OpenAI if available
    if client:
        try:
            chat_completion = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "Eres Sorenexus, el guía neural de Nexxus, una tienda de sneakers cyber-urban premium de 2026. Tu tono es futurista, experto en drops y muy visual. Ayuda al usuario a elegir su drop ideal."},
                    {"role": "user", "content": request.message}
                ],
                max_tokens=150
            )
            return ChatResponse(response=chat_completion.choices[0].message.content)
        except Exception as e:
            print(f"OpenAI Error: {e}")
            # Fallback to mock on error
    
    # Mock fallback logic
    if "drop" in user_msg or "nike" in user_msg:
        response = "He detectado un pico de calor en los últimos drops de Nike. Te recomiendo el Vortex Quantum 'Zenith', tiene un 98% de compatibilidad con tus búsquedas recientes."
    elif "precio" in user_msg or "oferta" in user_msg:
        response = "Actualmente tenemos el Drop Quantum con un 45% de descuento por tiempo limitado. ¿Quieres que te lo añada al carrito?"
    else:
        response = f"Sorenexus detecta tu mensaje. Mi red neural indica que buscas algo específico. ¿Buscas un estilo Urbano o algo más Deportivo?"

    return ChatResponse(response=response)

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
