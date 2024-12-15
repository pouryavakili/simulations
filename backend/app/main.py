from fastapi import FastAPI, Depends
from app.auth import authenticate_user
from app.apis import tweets, chat, apollo

app = FastAPI()

# # Add routes
app.include_router(tweets.router, prefix="/api/tweets", dependencies=[Depends(authenticate_user)])
app.include_router(chat.router, prefix="/api/chat", dependencies=[Depends(authenticate_user)])
app.include_router(apollo.router, prefix="/api/apollo", dependencies=[Depends(authenticate_user)])

@app.get("/")
def root():
    return {"name": "simulation", "version": "0.0.1"}
