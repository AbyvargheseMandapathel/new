import requests

def trigger_views():
    urls = [
        "http://hirewave.online/send-job-alerts-email/",
        "http://hirewave.online/expire-premium-status/"
    ]
    
    for url in urls:
        try:
            response = requests.get(url)
            if response.status_code == 200:
                print(f"Successfully triggered view: {url}")
            else:
                print(f"Failed to trigger view: {url} (Status code: {response.status_code})")
        except requests.exceptions.RequestException as e:
            print(f"Error occurred while trying to trigger view: {url}\n{e}")

if __name__ == "__main__":
    trigger_views()
