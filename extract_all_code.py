import glob, re, html, json, os

files = glob.glob('experiments/*.html')
out = {}
for f in files:
    name = os.path.basename(f)
    m = re.match(r'(\d+)', name)
    if not m:
        continue
    exp_id = int(m.group(1))
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        html_text = fp.read()
    
    # Extract code from pre inside input-area or general pre
    pres = re.findall(r'<div class="input-area">\s*<pre>(.*?)</pre>', html_text, re.DOTALL)
    if not pres:
        pres = re.findall(r'<pre>(.*?)</pre>', html_text, re.DOTALL)
        
    clean_blocks = []
    for p in pres:
        c = html.unescape(re.sub(r'<[^>]+>', '', p)).strip()
        if c:
            clean_blocks.append(c)
            
    full_code = "\n\n# ----------------------------------------\n\n".join(clean_blocks)
    out[exp_id] = full_code

with open('experiments_code.js', 'w', encoding='utf-8') as fp:
    fp.write("const EXPERIMENT_CODES = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n")

print(f"Extracted code for {len(out)} experiments: {sorted(out.keys())}")
