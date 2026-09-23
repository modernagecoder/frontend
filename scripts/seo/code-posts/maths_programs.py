"""Programs on /blog/role-of-mathematics-programming-logical-problem-solving (run by run_programs.py)."""

PROGRAMS = [
    dict(n=1, title='Variables and algebra', code='''# the equation y = 2x + 5
x = 10
y = 2 * x + 5
print("x = 10 gives y =", y)

x = 20                  # a variable can change
y = 2 * x + 5
print("x = 20 gives y =", y)

# rearranged to solve for x: x = (y - 5) / 2
y = 25
x = (y - 5) / 2
print("y = 25 needs x =", x)'''),
    dict(n=2, title='Functions in maths and in code', code='''def square(x):          # f(x) = x squared
    return x ** 2

def double(x):          # g(x) = 2x
    return x * 2

def absolute(x):        # a piecewise function
    if x >= 0:
        return x
    return -x

print("f(5) =", square(5))
print("g(f(3)) =", double(square(3)))    # g(9) = 18
print("|-7| =", absolute(-7))'''),
    dict(n=3, title='Boolean logic', code='''age = 25
has_license = True
has_vip_pass = False

print("can drive:", age >= 18 and has_license)     # AND: both must be true
print("can enter:", age >= 21 or has_vip_pass)     # OR: at least one true
print("is minor:", not (age >= 18))                # NOT: flips the value'''),
    dict(n=4, title='Sets', code='''a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print("union:       ", a | b)
print("intersection:", a & b)
print("difference:  ", a - b)'''),
    dict(n=5, title='Sequences and series', code='''evens = [2 * i for i in range(1, 6)]            # arithmetic sequence
print("first five even numbers:", evens)

n = 100
print("1 + 2 + ... + 100 by adding:", sum(range(1, n + 1)))
print("by the formula n(n+1)/2:  ", n * (n + 1) // 2)

a, b = 0, 1                                        # Fibonacci, each term = sum of previous two
terms = []
for _ in range(10):
    terms.append(a)
    a, b = b, a + b
print("Fibonacci:", terms)'''),
    dict(n=6, title='Modular arithmetic', code='''number = 7
print(number, "is", "even" if number % 2 == 0 else "odd")

slides = ["intro", "demo", "results"]     # wrap around a carousel
index = 0
shown = []
for _ in range(5):
    shown.append(slides[index])
    index = (index + 1) % len(slides)
print("carousel:", shown)

for hour_24 in [0, 9, 12, 15, 23]:        # 24-hour clock to 12-hour clock
    print(hour_24, "->", hour_24 % 12 or 12)'''),
    dict(n=7, title='Logarithms and exponentials', code='''import math

print("log2 of 1,000,000 =", round(math.log2(1_000_000), 2))

def compound(principal, rate, years):      # exponential growth
    return principal * (1 + rate) ** years

print("1000 at 8% for 10 years =", round(compound(1000, 0.08, 10), 2))

power_ratio = 100                          # decibels are a logarithmic scale
print("a power ratio of 100 is", 10 * math.log10(power_ratio), "dB")'''),
    dict(n=8, title='Why binary search needs so few steps', code='''numbers = list(range(1_000_000))     # a sorted list of a million numbers
target = 765_432

low, high, steps = 0, len(numbers) - 1, 0
while low <= high:
    steps += 1
    mid = (low + high) // 2
    if numbers[mid] == target:
        break
    if numbers[mid] < target:
        low = mid + 1
    else:
        high = mid - 1

print("found", target, "in", steps, "steps")
print("worst case for a million items:", len(numbers).bit_length(), "steps")'''),
]
