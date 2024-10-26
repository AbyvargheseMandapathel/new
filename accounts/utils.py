# utils.py

from django.conf import settings
from telegram import Bot
import asyncio

async def send_job_alert_to_telegram(job_alert):
    bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)
    
    # Construct the job description link
    job_description_link = f"{settings.SITE_URL}/job/{job_alert.pk}/"
    
    # Create the message with the job description link
    message = (
        f"New Job Alert!\n"
        f"{job_alert.company_name}"
        f"is HIring! for "
        f"{job_alert.title}\n"
        f"Apply Now: {job_description_link}"
    )
    
    await bot.send_message(chat_id=settings.TELEGRAM_CHAT_ID, text=message)
