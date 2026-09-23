"""Run every program in a code-post module and record exactly what it prints.

    python scripts/seo/code-posts/run_programs.py python_basic_programs

Writes scripts/seo/code-posts/<module>.out.json: [{n, title, code, output, sample}].
Typed input is echoed after its prompt, as a terminal would show it. Each program
runs in its own fresh interpreter inside a temporary directory, so file programs
leave nothing behind. A program that raises, or prints nothing, stops the run.
"""
import importlib
import json
import os
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

PRELUDE = '''import builtins, sys
_answers = iter(sys.argv[1:])
def _input(prompt=""):
    value = next(_answers)
    print(prompt + value)
    return value
builtins.input = _input
'''


def run(code, stdin):
    with tempfile.TemporaryDirectory() as tmp:
        path = os.path.join(tmp, 'prog.py')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(PRELUDE + code + '\n')
        res = subprocess.run([sys.executable, path, *stdin], cwd=tmp, capture_output=True,
                             text=True, encoding='utf-8', timeout=60)
    if res.returncode != 0 or res.stderr.strip():
        raise SystemExit('program failed:\n' + code + '\n' + res.stderr)
    return res.stdout.strip('\n')


def main():
    name = sys.argv[1]
    mod = importlib.import_module(name)
    out = []
    for p in mod.PROGRAMS:
        text = run(p['code'], p.get('stdin', []))
        if not text:
            raise SystemExit(f"program {p['n']} printed nothing")
        out.append({'n': p['n'], 'title': p['title'], 'code': p['code'], 'output': text,
                    'sample': bool(p.get('sample'))})
    nums = [p['n'] for p in out]
    if nums != list(range(1, len(nums) + 1)):
        raise SystemExit('programs are not numbered 1..N in order')
    dest = os.path.join(HERE, name + '.out.json')
    with open(dest, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print(f'{len(out)} programs ran, written to {os.path.relpath(dest)}')


if __name__ == '__main__':
    main()
