from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

app = FastAPI()

# ------------------ CORS ------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------ DATABASE ------------------
DATABASE_URL = "sqlite:///./menu.db"

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# ------------------ TABLE ------------------
class Menu(Base):
    __tablename__ = "menu"

    id = Column(Integer, primary_key=True, index=True)
    breakfast = Column(String, default="")
    lunch = Column(String, default="")
    snacks = Column(String, default="")
    dinner = Column(String, default="")

Base.metadata.create_all(bind=engine)

# ------------------ SCHEMA ------------------
class MenuUpdate(BaseModel):
    breakfast: list[str]
    lunch: list[str]
    snacks: list[str]
    dinner: list[str]

# ------------------ GET MENU ------------------
@app.get("/menu")
def get_menu():
    db = SessionLocal()
    try:
        menu = db.query(Menu).first()

        if not menu:
            return {
                "today": {
                    "breakfast": [],
                    "lunch": [],
                    "snacks": [],
                    "dinner": [],
                }
            }

        return {
            "today": {
                "breakfast": menu.breakfast.split(",") if menu.breakfast else [],
                "lunch": menu.lunch.split(",") if menu.lunch else [],
                "snacks": menu.snacks.split(",") if menu.snacks else [],
                "dinner": menu.dinner.split(",") if menu.dinner else [],
            }
        }

    finally:
        db.close()

# ------------------ UPDATE MENU ------------------
@app.post("/menu")
def update_menu(data: MenuUpdate):
    db = SessionLocal()
    try:
        menu = db.query(Menu).first()

        # If no record exists → create new
        if not menu:
            menu = Menu()

        # Save data (convert list → string)
        menu.breakfast = ",".join(data.breakfast)
        menu.lunch = ",".join(data.lunch)
        menu.snacks = ",".join(data.snacks)
        menu.dinner = ",".join(data.dinner)

        db.add(menu)
        db.commit()
        db.refresh(menu)

        return {
            "message": "Menu updated successfully ✅",
            "data": {
                "breakfast": data.breakfast,
                "lunch": data.lunch,
                "snacks": data.snacks,
                "dinner": data.dinner,
            },
        }

    finally:
        db.close()