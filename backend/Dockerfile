
FROM python:3.12


WORKDIR /code


COPY ./requirements.lock /code/requirements.lock


RUN pip install --no-cache-dir --upgrade -r /code/requirements.lock


COPY ./app /code/app


CMD ["fastapi", "run", "app/main.py", "--port", "80"]