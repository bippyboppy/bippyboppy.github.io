import feedparser
import requests
from bs4 import BeautifulSoup
import os
from datetime import datetime

# Substack RSS feed URL
FEED_URL = "https://gratefuldaemon.substack.com/feed/"

# Directory to save Jekyll formatted posts
OUTPUT_DIR = "_posts"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def fetch_and_format_posts():
    feed = feedparser.parse(FEED_URL)

    for entry in feed.entries:
        title = entry.title
        date = datetime(*entry.published_parsed[:6])
        content = entry.content[0].value if 'content' in entry else entry.summary

        # Clean HTML content
        soup = BeautifulSoup(content, "html.parser")
        markdown_content = soup.get_text(separator="\n")

        # Extract tags (if available)
        tags = [tag.term for tag in entry.tags] if 'tags' in entry else []
        categories = [tags[0]] if tags else ["Misc"]  # First tag as category, default to 'Main'

        # Create Jekyll-compatible filename
        filename = f"{date.strftime('%Y-%m-%d')}-{title.replace(' ', '-').replace('/', '-')}.md"
        filepath = os.path.join(OUTPUT_DIR, filename)

        # Jekyll Front Matter
        front_matter = f"""---
title: "{title}"
description: ""
toc: true
categories: {categories}
tags: {tags}
---

"""

        # Write to markdown file
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(front_matter + markdown_content)

        print(f"Saved: {filepath}")

if __name__ == "__main__":
    fetch_and_format_posts()
