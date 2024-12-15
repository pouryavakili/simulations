from fastapi import APIRouter, Depends
from app.auth import authenticate_user
from app.data import mock_data

router = APIRouter()

@router.get("/")
async def get_tweets(user_id: str = Depends(authenticate_user)):
  print(user_id)
  tweets = mock_data.get("tweets", {}).get(user_id, [])
  return {"tweets": tweets}
