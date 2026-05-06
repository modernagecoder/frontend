---
title: "Object-Oriented Programming in Python - Classes, Objects, __init__, self | Modern Age Coders"
description: "Learn Python OOP including classes and objects, __init__ constructor, self parameter, instance vs class variables, methods, encapsulation, @property, __str__, @classmethod, @staticmethod. Includes 65+ practice questions with output prediction and coding challenges."
slug: object-oriented-programming
canonical: https://learn.modernagecoders.com/resources/python/object-oriented-programming/
category: "Python"
keywords: ["python OOP", "classes and objects python", "python class tutorial", "object oriented programming python", "python __init__", "python self", "python encapsulation", "python class variables", "python property decorator", "python class methods"]
---
# Object-Oriented Programming in Python

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 21  
**Practice questions:** 65

## What Is Object-Oriented Programming?

**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code around **objects** rather than functions and logic. An object is a bundle of related data (attributes) and behavior (methods) that represents a real-world entity or concept.

In Python, you create objects from **classes**. A class is a blueprint that defines what data an object holds and what operations it can perform:

```
class Student:
    def __init__(self, name, age):
        self.name = name    # attribute (data)
        self.age = age      # attribute (data)
    
    def greet(self):        # method (behavior)
        return f"Hi, I am {self.name}, age {self.age}"

# Creating objects from the class
student1 = Student("Aarav", 16)
student2 = Student("Priya", 15)

print(student1.greet())  # Hi, I am Aarav, age 16
print(student2.greet())  # Hi, I am Priya, age 15
```

`Student` is a class (blueprint). `student1` and `student2` are objects (instances) created from that blueprint. Each object has its own `name` and `age`, but they share the same methods.

## Why Learn OOP?

### 1. Organizing Complex Code

As programs grow, managing hundreds of functions and variables becomes unwieldy. OOP groups related data and functions into classes. Instead of separate variables `student_name`, `student_age`, `student_marks` and functions `get_student_name()`, `set_student_age()`, everything lives inside a `Student` class. This structure mirrors how we think about things in the real world.

### 2. Code Reuse

Once you write a `BankAccount` class, you can create thousands of account objects from it. If Aarav needs to add a new feature to all accounts, he changes the class once, and every object gets the update. Inheritance (covered in the next chapter) allows you to build new classes from existing ones, reusing code without rewriting it.

### 3. Real-World Modeling

OOP maps naturally to real-world domains. A school has Students, Teachers, Courses, and Classrooms. An e-commerce system has Products, Carts, Orders, and Payments. Each entity becomes a class with its own data and behavior. This makes the code intuitive to design and understand.

### 4. Encapsulation

OOP allows you to hide internal details and expose only what is necessary. A `BankAccount` class lets you call `deposit()` and `withdraw()` but does not let you directly modify the balance. This prevents invalid states and makes the code safer to use and modify.

### 5. Industry Standard

OOP is used in most production software: web frameworks (Django, Flask), game engines (Pygame), GUI libraries (Tkinter), machine learning frameworks (scikit-learn), and more. Understanding OOP is essential for working with these tools and for professional software development.

## Detailed Explanation

### 1. Defining a Class

A class is defined with the `class` keyword, followed by the class name (PascalCase by convention) and a colon:

```
class Dog:
    pass  # Empty class (placeholder)

# Creating an instance
my_dog = Dog()
print(type(my_dog))  # 
```

Even an empty class can be instantiated. The resulting object has the type `Dog`.

### 2. The __init__() Constructor

`__init__()` is a special method (called a **constructor** or **initializer**) that runs automatically when you create an object. It sets up the object's initial state:

```
class Student:
    def __init__(self, name, age, grade):
        self.name = name      # Instance variable
        self.age = age        # Instance variable
        self.grade = grade    # Instance variable

# __init__ is called automatically
student = Student("Aarav", 16, "A")
print(student.name)   # Aarav
print(student.age)    # 16
print(student.grade)  # A
```

You never call `__init__()` directly. Python calls it for you when you write `Student("Aarav", 16, "A")`. The arguments you pass are forwarded to `__init__()`'s parameters (after `self`).

### 3. The self Parameter

`self` is the first parameter of every instance method. It refers to the specific object that the method is being called on:

```
class Student:
    def __init__(self, name):
        self.name = name   # self.name belongs to THIS object
    
    def greet(self):
        return f"Hello, I am {self.name}"

a = Student("Aarav")
p = Student("Priya")

print(a.greet())  # Hello, I am Aarav  (self = a)
print(p.greet())  # Hello, I am Priya  (self = p)
```

When you call `a.greet()`, Python translates it to `Student.greet(a)` -- passing the object `a` as the `self` parameter. This is how each object knows its own data.

`self` is a convention, not a keyword. You could use any name, but using anything other than `self` is strongly discouraged and confuses other developers.

### 4. Instance Variables

Instance variables are created by assigning to `self.variable_name` inside `__init__` (or any method). Each object gets its own copy:

```
class Circle:
    def __init__(self, radius):
        self.radius = radius    # Each circle has its own radius
        self.area = 3.14159 * radius ** 2

c1 = Circle(5)
c2 = Circle(10)
print(c1.radius, c1.area)   # 5, 78.53975
print(c2.radius, c2.area)   # 10, 314.159
```

Modifying `c1.radius` does not affect `c2.radius`. They are independent.

### 5. Instance Methods

Methods are functions defined inside a class. They always take `self` as the first parameter:

```
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds")
            return self.balance
        self.balance -= amount
        return self.balance
    
    def get_balance(self):
        return self.balance

account = BankAccount("Aarav", 1000)
account.deposit(500)      # balance = 1500
account.withdraw(200)     # balance = 1300
print(account.get_balance())  # 1300
```

### 6. Class Variables (Shared Across All Instances)

Class variables are defined inside the class body but outside any method. They are shared by all instances:

```
class Student:
    school_name = "Modern Age Coders"  # Class variable
    student_count = 0                   # Class variable
    
    def __init__(self, name):
        self.name = name                # Instance variable
        Student.student_count += 1      # Modify class variable

s1 = Student("Aarav")
s2 = Student("Priya")
s3 = Student("Rohan")

print(Student.student_count)    # 3 (accessed via class)
print(s1.student_count)         # 3 (accessed via instance)
print(s1.school_name)           # Modern Age Coders
print(s2.school_name)           # Modern Age Coders (same for all)
```

Critical distinction: if you **read** a class variable through an instance (`s1.school_name`), it works fine. But if you **assign** through an instance (`s1.school_name = "New Name"`), Python creates a new **instance variable** that shadows the class variable. The class variable is unchanged.

### 7. Class Methods (@classmethod)

Class methods receive the class itself (not an instance) as the first parameter, conventionally named `cls`:

```
class Student:
    count = 0
    
    def __init__(self, name):
        self.name = name
        Student.count += 1
    
    @classmethod
    def get_count(cls):
        return cls.count
    
    @classmethod
    def from_string(cls, data_string):
        name, age = data_string.split(",")
        return cls(name.strip())

s1 = Student("Aarav")
s2 = Student("Priya")
print(Student.get_count())   # 2

# Alternative constructor using classmethod
s3 = Student.from_string("Rohan, 17")
print(s3.name)               # Rohan
print(Student.get_count())   # 3
```

Class methods are commonly used for alternative constructors (factory methods) and operations that affect the class as a whole rather than individual instances.

### 8. Static Methods (@staticmethod)

Static methods do not receive `self` or `cls`. They are regular functions that logically belong to the class:

```
class MathHelper:
    @staticmethod
    def is_even(n):
        return n % 2 == 0
    
    @staticmethod
    def factorial(n):
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result

print(MathHelper.is_even(4))    # True
print(MathHelper.factorial(5))  # 120
```

Use `@staticmethod` for utility functions that do not need access to instance or class data but are logically related to the class.

### 9. __str__() and __repr__()

`__str__()` defines the human-readable string representation (used by `print()` and `str()`). `__repr__()` defines the developer-facing representation (used in the console and `repr()`):

```
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"{self.name} (age {self.age})"
    
    def __repr__(self):
        return f"Student('{self.name}', {self.age})"

s = Student("Aarav", 16)
print(s)        # Aarav (age 16)       -- uses __str__
print(repr(s))  # Student('Aarav', 16)  -- uses __repr__
print([s])      # [Student('Aarav', 16)] -- lists use __repr__
```

If only `__repr__` is defined, it is also used as a fallback for `__str__`.

### 10. Encapsulation

Encapsulation is the practice of controlling access to an object's internal data. Python uses naming conventions:

```
class Account:
    def __init__(self, owner, balance):
        self.owner = owner          # Public
        self._account_id = "ACC001" # Protected (convention: single underscore)
        self.__balance = balance    # Private (name mangling: double underscore)
    
    def get_balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

a = Account("Aarav", 1000)
print(a.owner)          # Aarav (public: accessible)
print(a._account_id)    # ACC001 (protected: accessible but discouraged)
# print(a.__balance)    # AttributeError! (name mangled)
print(a._Account__balance)  # 1000 (name mangling: _ClassName__attr)
print(a.get_balance())  # 1000 (proper way to access)
```

**Public** (`self.name`): accessible from anywhere. **Protected** (`self._name`): a convention meaning "do not access from outside the class", but Python does not enforce it. **Private** (`self.__name`): Python mangles the name to `_ClassName__name`, making accidental access harder (but not impossible).

### 11. The @property Decorator

`@property` lets you define methods that behave like attributes, providing controlled access:

```
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperature(25)
print(t.celsius)       # 25 (calls the getter)
print(t.fahrenheit)    # 77.0 (computed property)

t.celsius = 100        # Calls the setter
print(t.celsius)       # 100

try:
    t.celsius = -300   # Setter validates!
except ValueError as e:
    print(e)           # Temperature below absolute zero!
```

`@property` turns a method into a read-only attribute. Adding `@name.setter` allows assignment with validation. This is better than public attributes because you can add validation later without changing the interface.

### 12. Comparing Objects (__eq__)

By default, `==` checks if two variables refer to the same object (identity). To compare by value, define `__eq__`:

```
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        if not isinstance(other, Point):
            return False
        return self.x == other.x and self.y == other.y

p1 = Point(3, 4)
p2 = Point(3, 4)
p3 = Point(5, 6)

print(p1 == p2)   # True (same values)
print(p1 == p3)   # False (different values)
print(p1 is p2)   # False (different objects)
```

### 13. The Destructor (__del__)

`__del__` is called when an object is about to be garbage collected. It is rarely needed in Python:

```
class Resource:
    def __init__(self, name):
        self.name = name
        print(f"Resource '{name}' created")
    
    def __del__(self):
        print(f"Resource '{self.name}' destroyed")

r = Resource("database")
del r  # Triggers __del__
```

In practice, use context managers (`with` statement) for cleanup instead of `__del__`. The garbage collector may not call `__del__` immediately or at all.

## Code Examples

### Complete Class with __init__, Methods, and __str__

```python
class Student:
    def __init__(self, name, age, marks):
        self.name = name
        self.age = age
        self.marks = marks
    
    def average(self):
        return sum(self.marks) / len(self.marks)
    
    def grade(self):
        avg = self.average()
        if avg >= 90: return "A+"
        if avg >= 80: return "A"
        if avg >= 70: return "B"
        if avg >= 60: return "C"
        return "F"
    
    def __str__(self):
        return f"Student({self.name}, avg={self.average():.1f}, grade={self.grade()})"

s1 = Student("Aarav", 16, [92, 88, 95, 90])
s2 = Student("Priya", 15, [78, 82, 75, 80])

print(s1)
print(s2)
print(f"{s1.name}'s average: {s1.average():.1f}")
print(f"{s2.name}'s grade: {s2.grade()}")
```

This demonstrates a complete class with initialization, computed methods (`average()`, `grade()`), and a string representation. Each student object holds its own data, and methods access that data through `self`.

**Output:**

```
Student(Aarav, avg=91.2, grade=A+)
Student(Priya, avg=78.8, grade=B)
Aarav's average: 91.2
Priya's grade: B
```

### Class Variables vs Instance Variables

```python
class Employee:
    company = "Modern Age Coders"  # Class variable
    employee_count = 0              # Class variable
    
    def __init__(self, name, role):
        self.name = name            # Instance variable
        self.role = role            # Instance variable
        Employee.employee_count += 1
    
    def info(self):
        return f"{self.name} ({self.role}) at {Employee.company}"

e1 = Employee("Aarav", "Developer")
e2 = Employee("Priya", "Designer")
e3 = Employee("Rohan", "Tester")

print(f"Company: {Employee.company}")
print(f"Total employees: {Employee.employee_count}")
print()

for emp in [e1, e2, e3]:
    print(emp.info())

# Changing class variable affects all instances
Employee.company = "MAC Technologies"
print(f"\nAfter company rename:")
print(e1.info())
print(e2.info())

# Assigning through instance creates instance variable (shadow)
e3.company = "Freelance"
print(f"\ne3.company: {e3.company}")            # Instance variable
print(f"Employee.company: {Employee.company}")  # Class variable unchanged
print(f"e1.company: {e1.company}")              # Still class variable
```

Class variables (`company`, `employee_count`) are shared by all instances. Changing `Employee.company` affects all objects. But assigning `e3.company` creates a new instance variable on `e3` that **shadows** the class variable, without changing the class variable itself.

**Output:**

```
Company: Modern Age Coders
Total employees: 3

Aarav (Developer) at Modern Age Coders
Priya (Designer) at Modern Age Coders
Rohan (Tester) at Modern Age Coders

After company rename:
Aarav (Developer) at MAC Technologies
Priya (Designer) at MAC Technologies

e3.company: Freelance
Employee.company: MAC Technologies
e1.company: MAC Technologies
```

### @classmethod and @staticmethod

```python
class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year
    
    @classmethod
    def from_string(cls, date_string):
        """Alternative constructor from 'DD-MM-YYYY' string."""
        day, month, year = date_string.split("-")
        return cls(int(day), int(month), int(year))
    
    @classmethod
    def today(cls):
        """Alternative constructor for today's date."""
        return cls(6, 4, 2026)
    
    @staticmethod
    def is_valid(day, month, year):
        """Check if a date is valid (simplified)."""
        return 1 <= month <= 12 and 1 <= day <= 31 and year > 0
    
    def __str__(self):
        return f"{self.day:02d}-{self.month:02d}-{self.year}"

# Regular constructor
d1 = Date(15, 8, 1947)
print(f"Regular: {d1}")

# Classmethod constructor
d2 = Date.from_string("26-01-1950")
print(f"From string: {d2}")

d3 = Date.today()
print(f"Today: {d3}")

# Static method (no self or cls needed)
print(f"\nIs 31-02-2025 valid? {Date.is_valid(31, 2, 2025)}")
print(f"Is 15-08-1947 valid? {Date.is_valid(15, 8, 1947)}")
```

`@classmethod` receives `cls` (the class itself) and is commonly used for alternative constructors like `from_string()`. `@staticmethod` receives neither `self` nor `cls` and is used for utility functions logically related to the class.

**Output:**

```
Regular: 15-08-1947
From string: 26-01-1950
Today: 06-04-2026

Is 31-02-2025 valid? True
Is 15-08-1947 valid? True
```

### Encapsulation with @property

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self._owner = owner
        self.__balance = balance  # Private
    
    @property
    def owner(self):
        return self._owner
    
    @property
    def balance(self):
        return self.__balance
    
    @balance.setter
    def balance(self, value):
        raise AttributeError("Cannot set balance directly. Use deposit/withdraw.")
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self.__balance += amount
        print(f"Deposited {amount}. New balance: {self.__balance}")
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount
        print(f"Withdrew {amount}. New balance: {self.__balance}")
    
    def __str__(self):
        return f"Account({self._owner}, balance={self.__balance})"

account = BankAccount("Aarav", 1000)
print(account)
print(f"Balance: {account.balance}")  # Property getter

account.deposit(500)
account.withdraw(200)

try:
    account.balance = 9999  # Property setter blocks this
except AttributeError as e:
    print(f"Blocked: {e}")

try:
    account.withdraw(5000)
except ValueError as e:
    print(f"Error: {e}")
```

The balance is stored as a private variable (`__balance`). The `@property` allows reading it, but the setter raises an error, forcing users to go through `deposit()` and `withdraw()` which include validation. This is encapsulation in action.

**Output:**

```
Account(Aarav, balance=1000)
Balance: 1000
Deposited 500. New balance: 1500
Withdrew 200. New balance: 1300
Blocked: Cannot set balance directly. Use deposit/withdraw.
Error: Insufficient funds
```

### __eq__, __str__, and __repr__

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def distance_to(self, other):
        return ((self.x - other.x)**2 + (self.y - other.y)**2) ** 0.5
    
    def __eq__(self, other):
        if not isinstance(other, Point):
            return NotImplemented
        return self.x == other.x and self.y == other.y
    
    def __str__(self):
        return f"({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p1 = Point(0, 0)
p2 = Point(3, 4)
p3 = Point(3, 4)

print(f"p1 = {p1}")
print(f"p2 = {p2}")
print(f"Distance p1 to p2: {p1.distance_to(p2)}")

print(f"\np2 == p3: {p2 == p3}")  # True (same values)
print(f"p2 is p3: {p2 is p3}")   # False (different objects)
print(f"p1 == p2: {p1 == p2}")   # False (different values)

print(f"\nrepr(p1): {repr(p1)}")
print(f"List: {[p1, p2, p3]}")
```

`__eq__` defines value-based equality (`==`). Without it, `==` checks identity (same as `is`). `__str__` is for human-readable output (used by print). `__repr__` is for developer output (used in lists, debugger, repr()). `NotImplemented` tells Python to try the other operand's `__eq__`.

**Output:**

```
p1 = (0, 0)
p2 = (3, 4)
Distance p1 to p2: 5.0

p2 == p3: True
p2 is p3: False
p1 == p2: False

repr(p1): Point(0, 0)
List: [Point(0, 0), Point(3, 4), Point(3, 4)]
```

### Understanding self Through Multiple Instances

```python
class Counter:
    def __init__(self, name, start=0):
        self.name = name
        self.value = start
        print(f"Counter '{name}' created with value {start}")
    
    def increment(self, amount=1):
        self.value += amount
        return self
    
    def decrement(self, amount=1):
        self.value -= amount
        return self
    
    def reset(self):
        self.value = 0
        return self
    
    def __str__(self):
        return f"{self.name}: {self.value}"

c1 = Counter("visitors")
c2 = Counter("errors", 10)

# Each object maintains its own state
c1.increment()
c1.increment()
c1.increment()
c2.decrement(3)

print(c1)  # visitors: 3
print(c2)  # errors: 7

# Method chaining (because methods return self)
c3 = Counter("test")
c3.increment(5).increment(3).decrement(2)
print(c3)  # test: 6
```

Each Counter object has its own `value`. When `c1.increment()` is called, `self` refers to `c1`. When `c2.decrement()` is called, `self` refers to `c2`. Returning `self` enables method chaining.

**Output:**

```
Counter 'visitors' created with value 0
Counter 'errors' created with value 10
visitors: 3
errors: 7
Counter 'test' created with value 0
test: 6
```

### Private Variables and Name Mangling

```python
class Secret:
    def __init__(self):
        self.public = "I am public"
        self._protected = "I am protected (convention)"
        self.__private = "I am private (name mangled)"
    
    def reveal(self):
        return self.__private

s = Secret()

# Public: fully accessible
print(f"public: {s.public}")

# Protected: accessible but discouraged
print(f"protected: {s._protected}")

# Private: name mangled
try:
    print(s.__private)
except AttributeError as e:
    print(f"Direct access: {e}")

# Accessing through method (correct way)
print(f"Through method: {s.reveal()}")

# Name mangling: _ClassName__attr
print(f"Mangled name: {s._Secret__private}")

# Checking actual attribute names
print(f"\nAttributes containing 'private':")
for attr in dir(s):
    if 'private' in attr.lower():
        print(f"  {attr}")
```

Python does not have true private variables. Double underscore triggers **name mangling**: `__private` becomes `_Secret__private`. This prevents accidental access from subclasses, but is not security. The convention-based approach (single underscore) relies on developer discipline.

**Output:**

```
public: I am public
protected: I am protected (convention)
Direct access: 'Secret' object has no attribute '__private'
Through method: I am private (name mangled)
Mangled name: I am private (name mangled)

Attributes containing 'private':
  _Secret__private
```

## Common Mistakes

### Forgetting self in Method Definitions

**Wrong:**

```
class Dog:
    def __init__(name):  # Missing self!
        name = name
    
    def bark():          # Missing self!
        return "Woof!"

d = Dog("Rex")
# TypeError: __init__() takes 1 positional argument but 2 were given
```

TypeError: Dog.__init__() takes 1 positional argument but 2 were given

**Correct:**

```
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return "Woof!"

d = Dog("Rex")
print(d.bark())  # Woof!
```

Every instance method must have `self` as its first parameter. When you call `Dog("Rex")`, Python passes the new object as the first argument (self) and "Rex" as the second. Without self in the definition, the parameter count is wrong.

### Forgetting self. When Assigning Instance Variables

**Wrong:**

```
class Student:
    def __init__(self, name, age):
        name = name    # Local variable, not saved!
        age = age      # Local variable, not saved!

s = Student("Aarav", 16)
print(s.name)  # AttributeError: 'Student' object has no attribute 'name'
```

AttributeError: 'Student' object has no attribute 'name'

**Correct:**

```
class Student:
    def __init__(self, name, age):
        self.name = name    # Instance variable
        self.age = age      # Instance variable

s = Student("Aarav", 16)
print(s.name)  # Aarav
```

Without `self.`, the assignments create local variables inside `__init__` that disappear when the method ends. The object has no attributes. You must use `self.name = name` to store data on the object.

### Modifying Class Variable Through an Instance (Shadow)

**Wrong:**

```
class Counter:
    count = 0  # Class variable
    
    def __init__(self):
        self.count += 1  # Creates instance variable instead!

c1 = Counter()
c2 = Counter()
print(Counter.count)  # 0 (unchanged!)
print(c1.count)       # 1 (instance variable)
print(c2.count)       # 1 (different instance variable)
```

No error, but Counter.count stays 0 because self.count += 1 creates an instance variable that shadows the class variable.

**Correct:**

```
class Counter:
    count = 0
    
    def __init__(self):
        Counter.count += 1  # Modify class variable through class name

c1 = Counter()
c2 = Counter()
print(Counter.count)  # 2
print(c1.count)       # 2 (reads class variable)
print(c2.count)       # 2 (reads class variable)
```

`self.count += 1` is equivalent to `self.count = self.count + 1`. The read (`self.count`) finds the class variable (0), adds 1, then the assignment (`self.count = 1`) creates a new instance variable. To modify the class variable, use `Counter.count += 1`.

### Using Mutable Class Variables (Shared State Bug)

**Wrong:**

```
class Student:
    grades = []  # Shared mutable class variable!
    
    def __init__(self, name):
        self.name = name
    
    def add_grade(self, grade):
        self.grades.append(grade)

s1 = Student("Aarav")
s2 = Student("Priya")
s1.add_grade("A")
s2.add_grade("B")
print(s1.grades)  # ['A', 'B'] -- Both grades!
print(s2.grades)  # ['A', 'B'] -- Same list!
```

No error, but all students share the same grades list. Aarav sees Priya's grades and vice versa.

**Correct:**

```
class Student:
    def __init__(self, name):
        self.name = name
        self.grades = []  # Instance variable -- each student gets their own list
    
    def add_grade(self, grade):
        self.grades.append(grade)

s1 = Student("Aarav")
s2 = Student("Priya")
s1.add_grade("A")
s2.add_grade("B")
print(s1.grades)  # ['A']
print(s2.grades)  # ['B']
```

A mutable class variable (like a list) is shared by all instances. When one instance appends to it, all instances see the change. Mutable data that is unique per instance must be created in `__init__` as an instance variable.

### Calling a Method Without Parentheses

**Wrong:**

```
class Calculator:
    def __init__(self, value):
        self.value = value
    
    def double(self):
        return self.value * 2

c = Calculator(5)
result = c.double  # Missing ()!
print(result)  # <bound method Calculator.double of ...>
```

No error, but prints the method object instead of the return value.

**Correct:**

```
c = Calculator(5)
result = c.double()  # With parentheses
print(result)  # 10
```

`c.double` without parentheses gives the method object itself. `c.double()` calls the method and returns its result. This is the same distinction as with regular functions.

## Summary

- A class is a blueprint for creating objects. Define with the class keyword (PascalCase name). Objects are instances of a class, each holding their own data.
- The __init__() method is the constructor. It runs automatically when an object is created and initializes the object's attributes. You never call __init__() directly.
- self is the first parameter of every instance method. It refers to the specific object the method is called on. When you call obj.method(), Python passes obj as self.
- Instance variables (self.name) belong to individual objects. Class variables (defined in the class body) are shared by all instances. Modify class variables through the class name, not through self.
- Instance methods operate on self. @classmethod methods receive cls (the class) and are used for alternative constructors. @staticmethod methods receive neither and are utility functions.
- __str__() defines human-readable output (used by print). __repr__() defines developer output (used in console, lists, repr()). If only __repr__ is defined, it serves as fallback for __str__.
- Encapsulation controls access: public (self.name), protected convention (self._name), private via name mangling (self.__name becomes self._ClassName__name). Python does not enforce access restrictions.
- @property turns a method into a readable attribute. @name.setter adds write access with validation. Properties let you add logic to attribute access without changing the interface.
- __eq__() defines value-based equality for the == operator. Without it, == checks object identity (whether two variables refer to the same object in memory).
- Class variables that are mutable (lists, dicts) must be used carefully. Assigning through an instance creates a shadow instance variable. Appending through an instance modifies the shared object.
- OOP principles -- encapsulation, inheritance (next chapter), and polymorphism (next chapter) -- are the foundation of software architecture. Most Python libraries and frameworks are built with OOP.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/object-oriented-programming/*
*Practice questions: https://learn.modernagecoders.com/resources/python/object-oriented-programming/practice/*
