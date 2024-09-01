FROM python:3.11-slim as builder

WORKDIR /app/

RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential libpq-dev \
  && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip wheel

COPY ./ ./

RUN pip install -r ./requirements.txt

FROM python:3.11-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends libpq-dev \
  && rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/local/lib/python3.11/site-packages/ /usr/local/lib/python3.11/site-packages/
COPY --from=builder /app/ /app/

EXPOSE 8000

ENTRYPOINT ["python3 ./manage.py runserver"]
