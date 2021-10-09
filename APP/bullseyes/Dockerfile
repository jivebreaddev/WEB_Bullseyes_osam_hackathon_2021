# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /APP
COPY requirements.txt /APP
RUN pip install -r requirements.txt
COPY . /APP/