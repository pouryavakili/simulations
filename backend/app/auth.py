from fastapi import HTTPException, Header

def authenticate_user(x_user_id: str = Header(...)):
    if not x_user_id:
        raise HTTPException(status_code=401, detail="Invalid user ID")
    return x_user_id
