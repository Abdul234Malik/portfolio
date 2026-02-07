"""
Portfolio chatbot API – normal FastAPI backend.
Run with: uvicorn main:app --reload --port 8000
Set OPENAI_API_KEY in your environment (or .env file in backend/) – never expose it to the frontend.
"""
import os
from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI

from prompts import SYSTEM_PROMPT, PORTFOLIO_KNOWLEDGE

app = FastAPI(title="Portfolio Chat API")

# CORS: allow React frontend. Add your production frontend URL to the env var if needed.
_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in _origins if o.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    message = (request.message or "").strip()
    if not message:
        raise HTTPException(status_code=400, detail="Missing or empty 'message' field.")

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="Chat is not configured (missing OPENAI_API_KEY).",
        )

    user_content = f"Knowledge about Adeboye Abdul-Malik:\n\n{PORTFOLIO_KNOWLEDGE.strip()}\n\nVisitor question: {message}"

    try:
        client = OpenAI(api_key=api_key)
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_content},
            ],
            max_tokens=300,
            temperature=0.5,
        )
        reply = (response.choices[0].message.content or "").strip()
        return ChatResponse(reply=reply)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
