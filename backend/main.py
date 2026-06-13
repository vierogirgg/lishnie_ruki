import firebase_admin
from firebase_admin import credentials, db
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import os

import os
from dotenv import load_dotenv

load_dotenv()

# Инициализация Firebase
cred = credentials.Certificate("firebase_keys.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': os.getenv('FIREBASE_DATABASE_URL')
})
app = FastAPI(title="Лишние Руки API")

class User(BaseModel):
    id: int
    username: str
    first_name: str
    role: str
    rating: float = 5.0
    level: str = "Лапа-Новичок"

class Ad(BaseModel):
    id: Optional[str] = None
    shelter_id: int
    title: str
    description: str
    date: str
    time: str
    needed_hands: int
    type: str
    location: dict

@app.post("/users/register")
async def register_user(user: User):
    ref = db.reference(f'users/{user.id}')
    ref.set(user.dict())
    return {"status": "success"}

@app.get("/ads")
async def get_ads():
    ref = db.reference('ads')
    ads = ref.get()
    return ads if ads else {}

@app.post("/ads/create")
async def create_ad(ad: Ad):
    ref = db.reference('ads')
    new_ad_ref = ref.push()
    ad.id = new_ad_ref.key
    new_ad_ref.set(ad.dict())
    return {"status": "success", "id": ad.id}