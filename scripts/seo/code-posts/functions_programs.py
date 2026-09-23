"""Programs on /blog/advantages-functions-python-why-every-coder-should-use-them (run by run_programs.py)."""

PROGRAMS = [
    dict(n=1, title='The simplest function', code='''def greet():
    print("Hello! Welcome to Python.")

greet()
greet()          # define once, run as often as you like'''),
    dict(n=2, title='Reusability', code='''def add_numbers(a, b):
    return a + b

print(add_numbers(5, 3))
print(add_numbers(10, 20))
print(add_numbers(2.5, 0.5))'''),
    dict(n=3, title='Readability', code='''def update_score(current_score, points):
    return current_score + points

score = 0
score = update_score(score, 10)     # the name says what happens
score = update_score(score, 25)
print("Total:", score)'''),
    dict(n=4, title='Less repetition (DRY)', code='''def greet_user(name):
    print(f"Hello, {name}!")

for name in ["Aryan", "Priya", "Rohan"]:
    greet_user(name)'''),
    dict(n=5, title='Easier testing', code='''def is_even(n):
    return n % 2 == 0

# each check runs the function on its own, away from the rest of the program
assert is_even(4) is True
assert is_even(7) is False
assert is_even(0) is True
print("all 3 checks passed")'''),
    dict(n=6, title='Change it in one place', code='''def format_price(amount):
    return f"USD {amount:,.2f}"      # change the format here and every caller follows

print(format_price(1500))
print(format_price(19.5))
print(format_price(1234567.891))'''),
    dict(n=7, title='Parameters and return values', code='''def calculate_area(length, width):
    area = length * width
    return area

result = calculate_area(5, 4)
print("Area:", result)
print("Twice the area:", 2 * calculate_area(5, 4))   # a returned value can be used anywhere'''),
    dict(n=8, title='Forgetting return', code='''def add_without_return(a, b):
    total = a + b          # calculated, but never sent back

def add_with_return(a, b):
    return a + b

print(add_without_return(2, 3))
print(add_with_return(2, 3))'''),
    dict(n=9, title='Small functions from real projects', code='''def check_answer(user_answer, correct_answer):
    if user_answer.strip().lower() == correct_answer.lower():
        return "Correct!"
    return "Try again."

def respond(message):
    if "hello" in message.lower():
        return "Hi there! How can I help?"
    return "I'm not sure what you mean."

print(check_answer(" Paris ", "paris"))
print(check_answer("Rome", "paris"))
print(respond("Hello bot"))
print(respond("What is 2 + 2?"))'''),
]
