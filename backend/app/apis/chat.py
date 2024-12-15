from fastapi import APIRouter, Depends
from app.auth import authenticate_user
from app.data import mock_data

router = APIRouter()

@router.get("/")
def get_chat_conversation(user_id: str = Depends(authenticate_user)):
    chat_history = mock_data.get("chat", {}).get(user_id, [])
    return {"chat": chat_history}
