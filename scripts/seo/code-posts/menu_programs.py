"""Programs shown on /blog/how-to-build-menu-driven-program-in-python (run by run_programs.py)."""

PROGRAMS = [
    dict(n=1, title='The calculator menu, run once', stdin=['1', '8', '2', '5', '4'], code='''def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def divide(x, y):
    if y == 0:
        return "Error: Cannot divide by zero!"
    return x / y

while True:
    # Step 1: show the menu
    print("\\n--- Main Menu ---")
    print("1. Add Numbers")
    print("2. Subtract Numbers")
    print("3. Divide Numbers")
    print("4. Exit Program")

    # Step 2: read the choice
    choice = input("Enter your choice (1-4): ")

    # Step 3: act on it
    if choice == "4":
        print("Exiting the program. Goodbye!")
        break                      # leaves the while loop

    if choice in ("1", "2", "3"):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        if choice == "1":
            print(f"Result: {num1} + {num2} = {add(num1, num2)}")
        elif choice == "2":
            print(f"Result: {num1} - {num2} = {subtract(num1, num2)}")
        else:
            print(f"Result: {num1} / {num2} = {divide(num1, num2)}")
    else:
        # Step 4: anything else is a bad choice
        print("Invalid input. Please enter a number between 1 and 4.")'''),
    dict(n=2, title='A number reader that never crashes', stdin=['A', '12'], code='''def read_number(prompt):
    while True:                          # keep asking until the input is a number
        try:
            return float(input(prompt))
        except ValueError:
            print("That is not a valid number! Please try again.")

num = read_number("Enter first number: ")
print("Got", num)'''),
    dict(n=3, title="Today's menu from a Python dictionary", sample=True, code='''from datetime import date

WEEKLY_MENU = {
    "Monday":    ["Veg pulao", "Dal tadka", "Salad"],
    "Tuesday":   ["Rajma chawal", "Jeera aloo", "Curd"],
    "Wednesday": ["Pasta", "Garlic bread", "Fruit"],
    "Thursday":  ["Chole", "Rice", "Pickle"],
    "Friday":    ["Paneer wrap", "Soup", "Brownie"],
    "Saturday":  ["Idli", "Sambar", "Chutney"],
    "Sunday":    ["Poha", "Masala chai"],
}

today = date.today().strftime("%A")        # e.g. "Wednesday"
print(f"Menu for {today}:")
for dish in WEEKLY_MENU[today]:
    print(" -", dish)'''),
    dict(n=4, title='The daily menu kept in a file', code='''import json
from datetime import date, timedelta

# In real use the file already exists; this line only creates a small one to read.
with open("menu.json", "w") as f:
    json.dump({"Monday": ["Veg pulao", "Dal"], "Tuesday": ["Rajma chawal"],
               "Wednesday": ["Pasta", "Fruit"], "Thursday": ["Chole", "Rice"],
               "Friday": ["Paneer wrap"], "Saturday": ["Idli", "Sambar"],
               "Sunday": ["Poha"]}, f)

def menu_for(day):
    with open("menu.json") as f:
        menu = json.load(f)
    return menu.get(day.strftime("%A"), ["No menu published for this day"])

wednesday = date(2026, 9, 23)
for offset in range(3):
    day = wednesday + timedelta(days=offset)
    print(day.strftime("%a %d %b"), "->", ", ".join(menu_for(day)))'''),
    dict(n=5, title='A menu driven canteen program', stdin=['1', '2', 'Friday', '3'], code='''from datetime import date

WEEKLY_MENU = {
    "Monday": ["Veg pulao", "Dal"], "Tuesday": ["Rajma chawal"],
    "Wednesday": ["Pasta", "Fruit"], "Thursday": ["Chole", "Rice"],
    "Friday": ["Paneer wrap", "Soup"], "Saturday": ["Idli", "Sambar"],
    "Sunday": ["Poha"],
}

def show(day):
    print(f"{day}: " + ", ".join(WEEKLY_MENU[day]))

while True:
    print("\\n1. Show the whole week   2. Pick a day   3. Quit")
    choice = input("Choice: ")
    if choice == "1":
        for day in WEEKLY_MENU:
            show(day)
    elif choice == "2":
        day = input("Which day? ").strip().capitalize()
        if day in WEEKLY_MENU:
            show(day)
        else:
            print("Please type a day name, for example Monday")
    elif choice == "3":
        print("Bye!")
        break
    else:
        print("Choose 1, 2 or 3")'''),
]
