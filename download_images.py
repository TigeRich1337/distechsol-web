import requests
import os

images = {
    "src/assets/images/suprema-biostation3.png": "https://www.supremainc.com/en/asset/images/thumbnail/biostation3.png",
    "src/assets/images/uundz-cx2172.jpg": "https://uundz.com/fileadmin/_processed_/b/4/csm_Elektronische_Tuerdruecker_2021_897f919486.jpg"
}

def download_file(url, filepath):
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        r = requests.get(url, headers=headers, stream=True)
        r.raise_for_status()
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Downloaded {filepath}")
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

if __name__ == "__main__":
    for path, url in images.items():
        download_file(url, path)
