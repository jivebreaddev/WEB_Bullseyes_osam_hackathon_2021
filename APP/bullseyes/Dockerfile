# syntax=docker/dockerfile:1
FROM bullseyes_web
ENV PYTHONUNBUFFERED=1
WORKDIR /APP
COPY requirements.txt /APP
RUN pip install -r requirements.txt
COPY . /APP/