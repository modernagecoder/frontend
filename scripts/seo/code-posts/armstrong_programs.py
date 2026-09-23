"""Programs added to /blog/armstrong-number-python-complete-guide-examples-code (run by run_programs.py)."""

PROGRAMS = [
    dict(n=1, title='Check a number and show the working', code='''def is_armstrong(number):
    digits = str(number)
    power = len(digits)
    return sum(int(d) ** power for d in digits) == number

for number in [153, 9474, 123]:
    digits = str(number)
    power = len(digits)
    working = " + ".join(f"{d}^{power}" for d in digits)
    total = sum(int(d) ** power for d in digits)
    print(f"{number}: {working} = {total} ->", "Armstrong" if is_armstrong(number) else "not Armstrong")'''),
    dict(n=2, title='Every Armstrong number up to 7 digits', code='''from itertools import combinations_with_replacement

# For n digits, only the multiset of digits matters for the sum, so try each
# multiset once instead of every number (about 11,000 checks instead of 10 million).
found = []
for n in range(1, 8):
    for combo in combinations_with_replacement(range(10), n):
        total = sum(d ** n for d in combo)
        if len(str(total)) == n and sorted(int(c) for c in str(total)) == list(combo):
            found.append(total)

for n in range(1, 8):
    group = sorted(x for x in found if len(str(x)) == n)
    print(f"{n}-digit ({len(group)}):", ", ".join(map(str, group)) if group else "none")'''),
]
