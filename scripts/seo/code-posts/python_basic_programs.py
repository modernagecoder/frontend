"""The 35 programs on /blog/python-basic-programs-for-beginners.

Each entry is shown on the page exactly as written here, and its output block is
whatever run_programs.py captured when it ran the code (typed input is echoed
after the prompt, the way a terminal shows it). Programs whose output depends on
the clock or on randomness are marked sample=True and labelled "Sample output".

Rule for this file: no program may need a package outside the standard library,
and every program must run on Python 3.9 or later.
"""

PROGRAMS = [
    # ---------------------------------------------------------------- level 1
    dict(n=1, title='Print "Hello, World!"', code='''print("Hello, World!")'''),
    dict(n=2, title='Add Two Numbers', stdin=['7', '5.5'], code='''a = float(input("First number: "))
b = float(input("Second number: "))
print(f"{a} + {b} = {a + b}")'''),
    dict(n=3, title='Find the Square Root of a Number', stdin=['20'], code='''import math

n = float(input("Enter a number: "))
print(f"The square root of {n} is {math.sqrt(n):.4f}")'''),
    dict(n=4, title='Calculate the Area of a Triangle', stdin=['10', '6'], code='''base = float(input("Base: "))
height = float(input("Height: "))
area = 0.5 * base * height
print("Area of the triangle:", area)'''),
    dict(n=5, title='Swap Two Variables', code='''x = 5
y = 10

# the Python way: tuple unpacking
x, y = y, x
print("After swapping: x =", x, "and y =", y)

# the classic way, with a temporary variable
temp = x
x = y
y = temp
print("Swapped back:   x =", x, "and y =", y)'''),
    dict(n=6, title='Generate a Random Number', sample=True, code='''import random

number = random.randint(1, 100)   # both ends included
print("Your random number is", number)'''),
    dict(n=7, title='Convert Kilometres to Miles', stdin=['10'], code='''km = float(input("Distance in kilometres: "))
miles = km * 0.621371
print(f"{km} km is {miles:.2f} miles")'''),
    dict(n=8, title='Convert Celsius to Fahrenheit', stdin=['37'], code='''celsius = float(input("Temperature in Celsius: "))
fahrenheit = celsius * 1.8 + 32
print(f"{celsius} C is {fahrenheit:.1f} F")'''),
    dict(n=9, title='Check if a Number is Positive, Negative or Zero', stdin=['-4'], code='''num = float(input("Enter a number: "))

if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")'''),
    dict(n=10, title='Check if a Number is Even or Odd', stdin=['17'], code='''num = int(input("Enter a whole number: "))

if num % 2 == 0:
    print(num, "is even")
else:
    print(num, "is odd")'''),
    # ---------------------------------------------------------------- level 2
    dict(n=11, title='Check if a Year is a Leap Year', code='''def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

for year in [1900, 2000, 2024, 2026]:
    print(year, "leap year" if is_leap(year) else "not a leap year")'''),
    dict(n=12, title='Find the Largest Among Three Numbers', stdin=['12', '45', '7'], code='''a = float(input("First: "))
b = float(input("Second: "))
c = float(input("Third: "))

if a >= b and a >= c:
    largest = a
elif b >= a and b >= c:
    largest = b
else:
    largest = c

print("Largest:", largest)
print("Same answer with max():", max(a, b, c))'''),
    dict(n=13, title='Check if a Number is Prime', stdin=['29'], code='''num = int(input("Enter a number: "))

is_prime = num > 1
for i in range(2, int(num ** 0.5) + 1):   # no factor can be bigger than the square root
    if num % i == 0:
        is_prime = False
        break

print(num, "is prime" if is_prime else "is not prime")'''),
    dict(n=14, title='Print All Prime Numbers in an Interval', stdin=['10', '50'], code='''lower = int(input("From: "))
upper = int(input("To: "))

primes = []
for num in range(max(lower, 2), upper + 1):
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            break
    else:                 # runs only when the loop did not break
        primes.append(num)

print("Primes:", primes)'''),
    dict(n=15, title='Find the Factorial of a Number', stdin=['5'], code='''n = int(input("Enter a number: "))

factorial = 1
for i in range(1, n + 1):
    factorial *= i

print(f"{n}! = {factorial}")'''),
    dict(n=16, title='Display the Multiplication Table', stdin=['7'], code='''num = int(input("Table of: "))

for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")'''),
    dict(n=17, title='Print the Fibonacci Sequence', code='''count = 10
a, b = 0, 1

for _ in range(count):
    print(a, end=" ")
    a, b = b, a + b
print()'''),
    dict(n=18, title='Check if a Number is an Armstrong Number', stdin=['153'], code='''num = input("Enter a number: ")
power = len(num)
total = sum(int(digit) ** power for digit in num)

if total == int(num):
    print(num, "is an Armstrong number")
else:
    print(num, "is not an Armstrong number")'''),
    dict(n=19, title='Find the Sum of Natural Numbers', stdin=['10'], code='''n = int(input("Add up 1 to: "))

total = 0
for i in range(1, n + 1):
    total += i

print("Sum with a loop:", total)
print("Sum with the formula n(n+1)/2:", n * (n + 1) // 2)'''),
    dict(n=20, title='Display Powers of 2 Using an Anonymous Function', code='''terms = 8
powers = list(map(lambda x: 2 ** x, range(terms)))

for i, value in enumerate(powers):
    print(f"2 raised to {i} = {value}")'''),
    # ---------------------------------------------------------------- level 3
    dict(n=21, title='Find the ASCII Value of a Character', stdin=['p'], code='''ch = input("Enter one character: ")
print(f"The ASCII value of '{ch}' is {ord(ch)}")
print("And back again:", chr(ord(ch)))'''),
    dict(n=22, title='Find the HCF or GCD of Two Numbers', stdin=['54', '24'], code='''import math

a = int(input("First number: "))
b = int(input("Second number: "))

# Euclid's method: replace the pair with (b, remainder) until the remainder is 0
x, y = a, b
while y:
    x, y = y, x % y

print("HCF by Euclid:", x)
print("HCF by math.gcd:", math.gcd(a, b))'''),
    dict(n=23, title='Make a Simple Calculator', stdin=['3', '8', '4'], code='''def add(x, y): return x + y
def subtract(x, y): return x - y
def multiply(x, y): return x * y
def divide(x, y): return "cannot divide by zero" if y == 0 else x / y

operations = {"1": ("+", add), "2": ("-", subtract), "3": ("*", multiply), "4": ("/", divide)}

print("1 Add   2 Subtract   3 Multiply   4 Divide")
choice = input("Choose 1 to 4: ")
a = float(input("First number: "))
b = float(input("Second number: "))

symbol, action = operations[choice]
print(f"{a} {symbol} {b} = {action(a, b)}")'''),
    dict(n=24, title='Check Whether a String is a Palindrome', stdin=['Racecar'], code='''word = input("Enter a word: ")
cleaned = word.lower()

if cleaned == cleaned[::-1]:      # [::-1] reverses a string
    print(word, "is a palindrome")
else:
    print(word, "is not a palindrome")'''),
    dict(n=25, title='Remove Punctuation from a String', code='''import string

text = "Hello!!! How are you, today? (Fine, thanks.)"
cleaned = "".join(ch for ch in text if ch not in string.punctuation)
print(cleaned)'''),
    dict(n=26, title='Sort Words in Alphabetical Order', stdin=['the Quick brown fox jumps over a lazy dog'], code='''sentence = input("Enter a sentence: ")
words = sentence.lower().split()
words.sort()
print(" ".join(words))'''),
    dict(n=27, title='Count Each Vowel in a String', code='''text = "Modern Age Coders teaches Python to every age"
counts = {vowel: 0 for vowel in "aeiou"}

for ch in text.lower():
    if ch in counts:
        counts[ch] += 1

print(counts)'''),
    dict(n=28, title='Merge Two Dictionaries', code='''student = {"name": "Asha", "age": 12}
marks = {"maths": 91, "science": 88, "age": 13}

merged = {**student, **marks}      # works on every Python 3 version
print(merged)

merged2 = student | marks          # Python 3.9 and later
print(merged2 == merged)'''),
    dict(n=29, title='Catch Multiple Exceptions in One Line', code='''for value in ["10", "0", "abc"]:
    try:
        print(f"100 / {value} =", 100 / int(value))
    except (ZeroDivisionError, ValueError) as error:
        print(f"Could not divide by {value!r}:", type(error).__name__)'''),
    dict(n=30, title='Safely Open, Read and Write a File', code='''with open("notes.txt", "w") as file:          # "w" creates or overwrites
    file.write("Python closes this file for me.\\n")

with open("notes.txt", "a") as file:          # "a" adds to the end
    file.write("Second line, appended.\\n")

with open("notes.txt") as file:               # reading is the default
    for number, line in enumerate(file, start=1):
        print(number, line.strip())'''),
    # ---------------------------------------------------------------- level 4
    dict(n=31, title='Get the Current Date and Time', sample=True, code='''from datetime import datetime

now = datetime.now()
print("Today is", now.strftime("%A, %d %B %Y"))
print("The time is", now.strftime("%H:%M"))'''),
    dict(n=32, title='Check if Two Strings are Anagrams', stdin=['Listen', 'Silent'], code='''first = input("First word: ")
second = input("Second word: ")

if sorted(first.lower()) == sorted(second.lower()):
    print(first, "and", second, "are anagrams")
else:
    print(first, "and", second, "are not anagrams")'''),
    dict(n=33, title='Generate a Secure Random Password', sample=True, code='''import secrets
import string

alphabet = string.ascii_letters + string.digits + string.punctuation

while True:
    password = "".join(secrets.choice(alphabet) for _ in range(12))
    # keep only passwords that mix all four kinds of character
    if (any(c.islower() for c in password) and any(c.isupper() for c in password)
            and any(c.isdigit() for c in password) and any(c in string.punctuation for c in password)):
        break

print("Your new password:", password)'''),
    dict(n=34, title='Build a Simple Countdown Timer', stdin=['3'], code='''import time

seconds = int(input("Count down from: "))

while seconds > 0:
    print(seconds)
    time.sleep(1)       # wait one second
    seconds -= 1

print("Time's up!")'''),
    dict(n=35, title='Filter a List Using a List Comprehension', code='''numbers = [14, 3, 8, 21, 6, 17, 30, 9, 12, 5, 26, 11, 4, 19, 2, 27, 16, 7, 10, 23]

evens = [n for n in numbers if n % 2 == 0]
squares_of_odds = [n * n for n in numbers if n % 2 == 1]

print("Evens:", evens)
print("Squares of the odd numbers:", squares_of_odds)'''),
]
