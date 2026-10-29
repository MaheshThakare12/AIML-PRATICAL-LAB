import glob, re, html

files = sorted(glob.glob('*.html'))
for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    pres = re.findall(r'<pre>(.*?)</pre>', content, re.DOTALL)
    cleaned = [html.unescape(re.sub(r'<[^>]+>', '', p)).strip() for p in pres if p.strip()]
    first_meaningful = [c for c in cleaned if len(c) > 10][:2]
    first_snippet = ' // '.join(c.replace('
', ' ')[:80] for c in first_meaningful)
    print(f'{f} ({len(cleaned)} blocks): {first_snippet}')
