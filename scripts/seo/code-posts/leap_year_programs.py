"""Programs added to /blog/how-to-write-a-leap-year-program-in-python (run by run_programs.py)."""

PROGRAMS = [
    dict(n=1, title='The short answer', code='''def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

for year in [1900, 2000, 2024, 2100]:
    print(year, is_leap(year))'''),
    dict(n=2, title='Leap year program in Python using a function and input()', stdin=['2024'], code='''def is_leap(year):
    """Return True if year is a leap year in the Gregorian calendar."""
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

year = int(input("Enter a year: "))

if is_leap(year):
    print(year, "is a leap year")
else:
    print(year, "is not a leap year")'''),
    dict(n=3, title='The next leap year after a given year', stdin=['2024'], code='''def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

year = int(input("Year: "))

next_year = year + 1          # start AFTER the year typed, even if it is a leap year
while not is_leap(next_year):
    next_year += 1

print(f"The next leap year after {year} is {next_year}")'''),
    dict(n=4, title='All leap years between two years', stdin=['1890', '1920'], code='''def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

start = int(input("From: "))
end = int(input("To: "))

leap_years = [y for y in range(start, end + 1) if is_leap(y)]
print(leap_years)
print(len(leap_years), "leap years")'''),
    dict(n=5, title='How many days February has', stdin=['2100'], code='''import calendar

year = int(input("Year: "))
days = calendar.monthrange(year, 2)[1]     # (weekday of the 1st, number of days)
print(f"February {year} has {days} days")'''),
    dict(n=6, title='Test your function against Python itself', code='''import calendar

def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

wrong = [y for y in range(1, 3001) if is_leap(y) != calendar.isleap(y)]
print("Years checked: 3000")
print("Disagreements:", wrong)'''),
]
