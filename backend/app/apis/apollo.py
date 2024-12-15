from fastapi import APIRouter, Depends
from app.auth import authenticate_user
from app.data import mock_data

router = APIRouter()

@router.get("/")
def get_apollo_data(user_id: str = Depends(authenticate_user)):
    apollo_data = mock_data.get("apollo", {}).get(user_id, [])
    return {"apollo_data": apollo_data}
