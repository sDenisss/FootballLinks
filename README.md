# ⚽ Football Matches Links

![GitHub last commit](https://img.shields.io/github/last-commit/sDenisss/FootballLinks?color=66fcf1&label=Last%20Update)
![GitHub repo size](https://img.shields.io/github/repo-size/sDenisss/FootballLinks?color=ff6f61&label=Repo%20Size)
![GitHub stars](https://img.shields.io/github/stars/sDenisss/FootballLinks?style=social)

---

## 🇬🇧 English

A simple and beautiful website for **football match links**, hosted on [GitHub Pages](https://pages.github.com/).  
Manually updated — just add new match cards to the HTML file.

[**Open Website**](https://sDenisss.github.io/FootballLinks/)

### 🛠 How to add a new match
1. Open the `index.html` file in your editor.
2. Find the block:
    ```html
    <div class="All_matches">
        ...
    </div>
    ```
3. Add a match card:
    ```html
    <div class="match-card">
        <a href="MATCH_LINK" target="_blank">TEAM 1 vs TEAM 2</a>
        <div class="match-date">YYYY-MM-DD, HH:MM</div>
    </div>
    ```
4. Save and commit changes:
    ```bash
    git add .
    git commit -m "Added match: Team 1 vs Team 2"
    git push origin main
    ```
5. Wait a few minutes for GitHub Pages to update.

---
