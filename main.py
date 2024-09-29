import requests
TELEGRAM_BOT_TOKEN = '6884539721:AAEf_tYPrvf6tIX6vzLeh2Xx8XSQ2Uud5E8'  # Replace with your actual Telegram bot token
TELEGRAM_CHAT_ID = '-1002096731474'
message = "hello from your telegram bot"
url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage?chat_id={TELEGRAM_CHAT_ID}&text={message}"
print(requests.get(url).json())