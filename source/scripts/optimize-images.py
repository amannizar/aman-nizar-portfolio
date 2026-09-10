#!/usr/bin/env python3
"""Optimize portfolio images: profile photo + real project screenshots."""
from PIL import Image
import os

SRC = '/workspace/assets'
REPOS = '/workspace/repos'
OUT = '/workspace/portfolio-src/public/images'

os.makedirs(f'{OUT}/profile', exist_ok=True)
os.makedirs(f'{OUT}/projects/expense-tracker', exist_ok=True)
os.makedirs(f'{OUT}/projects/gym-management', exist_ok=True)


def jpg(im, out, max_w, q=87):
    if im.width > max_w:
        im = im.resize((max_w, int(im.height * max_w / im.width)), Image.LANCZOS)
    im.save(out, 'JPEG', quality=q, optimize=True, progressive=True)
    print(f'{out}  {im.size}  {round(os.path.getsize(out)/1024)} KB')


def webp(im, out, max_w, q=84):
    if im.width > max_w:
        im = im.resize((max_w, int(im.height * max_w / im.width)), Image.LANCZOS)
    im.save(out, 'WEBP', quality=q, method=6)
    print(f'{out}  {im.size}  {round(os.path.getsize(out)/1024)} KB')


# Profile photo (real photograph — kept natural, only resized)
jpg(Image.open(f'{SRC}/profile.jpg').convert('RGB'), f'{OUT}/profile/aman-nizar.jpg', 1100)

# Expense Tracker — real screenshots from the GitHub repository
for name in ['dashboard', 'expense-list', 'categories', 'reports']:
    webp(
        Image.open(f'{REPOS}/expense-tracker/screenshots/{name}.png').convert('RGB'),
        f'{OUT}/projects/expense-tracker/{name}.webp',
        1400,
    )

# Gym Management System — real screenshots from the GitHub repository
for name in ['admin-dashboard', 'member-dashboard', 'ai-coach', 'admin-members']:
    webp(
        Image.open(f'{REPOS}/gym-management-system/docs/screenshots/{name}.png').convert('RGB'),
        f'{OUT}/projects/gym-management/{name}.webp',
        1500,
    )

print('Done.')
