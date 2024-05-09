import os
from pathlib import Path
from .base_settings import * # NOQA

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = False

ALLOWED_HOSTS = ['localhost', '192.168.1.253', '10.8.0.9', '10.8.0.1', 'test.it-kyzyl.ru']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.getenv('POSTGRES_DB'),
        'USER': os.getenv('POSTGRES_USER'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD'),
        'HOST': 'pg',
        'PORT': '5432',
    }
}

CSRF_TRUSTED_ORIGINS = ['http://localhost', 'http://10.8.0.9', 'http://192.168.1.253', 'https://test.it-kyzyl.ru']

INTERNAL_IPS = [
    "127.0.0.1",
    "localhost"
]

RQ_QUEUES = {
    'default': {
        'HOST': 'redishost',
        'PORT': 6379,
        'DB': 0,
        # 'USERNAME': 'some-user',
        # 'PASSWORD': 'some-password',
        # 'DEFAULT_TIMEOUT': 360,
        # 'REDIS_CLIENT_KWARGS': {    # Eventual additional Redis connection arguments
        #    'ssl_cert_reqs': None,
        # },
    },
}

CELERY_BROKER_URL = "redis://redishost:6379/0"
CELERY_RESULT_BACKEND = "redis://redishost:6379/0"
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'

# CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = ['http://localhost:8001', 'http://game.it-kyzyl.ru:8001', 'http://10.8.0.1:8001']

#CORS_ALLOW_ALL_ORIGINS = True
CORS_ORIGIN_ALLOW_ALL = True
#CORS_ALLOWED_ORIGINS = ['http://localhost:8081', 'https://test.it-kyzyl.ru', 'http://10.8.0.9:5173', 'http://localhost:5173']

# отправка почты
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = os.getenv('EMAIL_HOST')
EMAIL_PORT = os.getenv('EMAIL_PORT')
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
# EMAIL_USE_TLS = os.getenv('EMAIL_USE_TLS')
EMAIL_USE_SSL = os.getenv('EMAIL_USE_SSL')
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
SERVER_EMAIL = EMAIL_HOST_USER
EMAIL_ADMIN = EMAIL_HOST_USER

ADMINS = [('Игорь', 'mistrikov1@yandex.ru')]

print("load prod_settings file")
