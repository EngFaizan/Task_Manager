# Dockerfile for Django Backend
# Use Python 3.9.8 as a parent image
FROM python:3.9.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Expose the Django development server port
EXPOSE 8000

# Run database migrations and collect static files
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

# Start Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
