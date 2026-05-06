---
title: "Practice: Object-Oriented Programming in Python"
description: "65 practice problems for Object-Oriented Programming in Python in Python"
slug: object-oriented-programming-practice
canonical: https://learn.modernagecoders.com/resources/python/object-oriented-programming/practice
category: "Python"
---
# Practice: Object-Oriented Programming in Python

**Total questions:** 65

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
class Dog:
    def __init__(self, name):
        self.name = name

d = Dog("Rex")
print(d.name)
```

*Hint:* The __init__ method sets self.name to the given argument.

**Answer:** `Rex`

When `Dog("Rex")` is called, `__init__` receives "Rex" as `name` and assigns it to `self.name`. `d.name` accesses this instance variable.

### Q2. [Easy] What is the output?

```
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

c1 = Cat("Whiskers", 3)
c2 = Cat("Luna", 5)
print(c1.name, c2.age)
```

*Hint:* Each object has its own name and age.

**Answer:** `Whiskers 5`

`c1.name` is "Whiskers" (c1's name). `c2.age` is 5 (c2's age). Each object maintains independent instance variables.

### Q3. [Easy] What is the output?

```
class Greeter:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        return f"Hello, {self.name}!"

g = Greeter("Aarav")
print(g.greet())
```

*Hint:* The greet method uses self.name to build the greeting.

**Answer:** `Hello, Aarav!`

`g.greet()` calls the method with `self = g`. `self.name` is "Aarav", so the f-string produces "Hello, Aarav!".

### Q4. [Easy] What is the output?

```
class Car:
    wheels = 4
    
    def __init__(self, brand):
        self.brand = brand

c1 = Car("Toyota")
c2 = Car("Honda")
print(c1.wheels)
print(c2.wheels)
print(Car.wheels)
```

*Hint:* wheels is a class variable shared by all instances.

**Answer:** `4`
`4`
`4`

`wheels` is a class variable. All instances and the class itself access the same value: 4.

### Q5. [Easy] What is the output?

```
class Box:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width

b = Box(5, 3)
print(b.area())
print(type(b))
```

*Hint:* area() returns length * width. type() gives the class.

**Answer:** `15`
``

`b.area()` computes 5 * 3 = 15. `type(b)` shows that b is an instance of the Box class.

### Q6. [Medium] What is the output?

```
class Counter:
    count = 0
    
    def __init__(self):
        Counter.count += 1
    
    def get_count(self):
        return Counter.count

a = Counter()
b = Counter()
c = Counter()
print(a.get_count())
print(Counter.count)
```

*Hint:* Each __init__ call increments the class variable Counter.count.

**Answer:** `3`
`3`

Three Counter objects are created, each incrementing `Counter.count` by 1 (0 -> 1 -> 2 -> 3). Both `a.get_count()` and `Counter.count` return 3 because it is a shared class variable.

### Q7. [Medium] What is the output?

```
class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def __str__(self):
        return f"{self.name}: Rs.{self.price}"
    
    def __repr__(self):
        return f"Item('{self.name}', {self.price})"

i = Item("Book", 250)
print(i)
print(repr(i))
```

*Hint:* print() uses __str__. repr() uses __repr__.

**Answer:** `Book: Rs.250`
`Item('Book', 250)`

`print(i)` calls `__str__` which returns the human-readable format. `repr(i)` calls `__repr__` which returns the developer format.

### Q8. [Medium] What is the output?

```
class MyClass:
    x = 10

a = MyClass()
b = MyClass()
a.x = 20

print(a.x)
print(b.x)
print(MyClass.x)
```

*Hint:* Assigning to a.x creates an instance variable on a, not modifying the class variable.

**Answer:** `20`
`10`
`10`

`a.x = 20` creates an instance variable on `a` that shadows the class variable. `b.x` still reads the class variable (10). `MyClass.x` is unchanged (10).

### Q9. [Medium] What is the output?

```
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
        return self
    
    def pop(self):
        return self.items.pop()
    
    def size(self):
        return len(self.items)

s = Stack()
s.push(1).push(2).push(3)
print(s.size())
print(s.pop())
print(s.size())
```

*Hint:* push() returns self, enabling method chaining.

**Answer:** `3`
`3`
`2`

Method chaining: push(1) adds 1, returns self. push(2) adds 2, returns self. push(3) adds 3. Size is 3. pop() removes and returns the last item (3). Size is now 2.

### Q10. [Medium] What is the output?

```
class Person:
    def __init__(self, name):
        self.__name = name
    
    def get_name(self):
        return self.__name

p = Person("Priya")
print(p.get_name())
try:
    print(p.__name)
except AttributeError:
    print("Cannot access")
```

*Hint:* Double underscore triggers name mangling.

**Answer:** `Priya`
`Cannot access`

`self.__name` is name-mangled to `self._Person__name`. `get_name()` can access it (inside the class). Direct access `p.__name` raises AttributeError because the actual attribute name is `_Person__name`.

### Q11. [Medium] What is the output?

```
class Circle:
    pi = 3.14159
    
    def __init__(self, radius):
        self.radius = radius
    
    @property
    def area(self):
        return Circle.pi * self.radius ** 2

c = Circle(5)
print(round(c.area, 2))
c.radius = 10
print(round(c.area, 2))
```

*Hint:* @property makes area behave like an attribute, but it is computed each time.

**Answer:** `78.54`
`314.16`

`c.area` is a property that computes `pi * radius^2` each time. With radius=5: 3.14159 * 25 = 78.53975, rounded to 78.54. After changing radius to 10: 3.14159 * 100 = 314.159, rounded to 314.16.

### Q12. [Hard] What is the output?

```
class A:
    data = []
    
    def add(self, item):
        self.data.append(item)

a1 = A()
a2 = A()
a1.add(1)
a2.add(2)
print(a1.data)
print(a2.data)
print(a1.data is a2.data)
```

*Hint:* data is a mutable class variable. All instances share the same list.

**Answer:** `[1, 2]`
`[1, 2]`
`True`

`data = []` is a class variable. Both `a1` and `a2` share the same list. `a1.add(1)` appends to the shared list. `a2.add(2)` also appends to the same list. Both see [1, 2].

### Q13. [Hard] What is the output?

```
class Tracker:
    def __init__(self):
        self.history = []
    
    def record(self, value):
        self.history.append(value)
        return self

t1 = Tracker()
t2 = Tracker()
t1.record("a").record("b")
t2.record("x")
print(t1.history)
print(t2.history)
print(t1.history is t2.history)
```

*Hint:* history is created in __init__ as an instance variable. Each tracker has its own list.

**Answer:** `['a', 'b']`
`['x']`
`False`

Unlike class variables, `self.history = []` in `__init__` creates a new list for each instance. `t1` and `t2` have independent lists. They are not the same object (`is` returns False).

### Q14. [Hard] What is the output?

```
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __str__(self):
        return f"({self.x}, {self.y})"

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

print(p1 == p2)
print(p1 == p3)
print(p1 is p2)
points = [p1, p2, p3]
print(p2 in points)
```

*Hint:* __eq__ compares values. 'is' compares identity. 'in' uses __eq__.

**Answer:** `True`
`False`
`False`
`True`

`p1 == p2`: same x and y values, True. `p1 == p3`: different values, False. `p1 is p2`: different objects in memory, False. `p2 in points`: uses __eq__ to find a match, True (p2 == p1).

### Q15. [Hard] What is the output?

```
class Config:
    _instance = None
    
    def __init__(self, value):
        self.value = value
    
    @classmethod
    def get_instance(cls, value):
        if cls._instance is None:
            cls._instance = cls(value)
        return cls._instance

c1 = Config.get_instance("first")
c2 = Config.get_instance("second")
print(c1.value)
print(c2.value)
print(c1 is c2)
```

*Hint:* The class method creates the instance only once (singleton pattern).

**Answer:** `first`
`first`
`True`

First call creates a Config with value "first" and stores it in `_instance`. Second call finds `_instance` is not None, so it returns the same object. Both c1 and c2 point to the same instance with value "first".

### Q16. [Hard] What is the output?

```
class Number:
    def __init__(self, value):
        self._value = value
    
    @property
    def value(self):
        print("Getting value")
        return self._value
    
    @value.setter
    def value(self, new_value):
        print("Setting value")
        self._value = new_value

n = Number(10)
print(n.value)
n.value = 20
print(n.value)
```

*Hint:* The property getter and setter print messages when accessed.

**Answer:** `Getting value`
`10`
`Setting value`
`Getting value`
`20`

First `n.value` calls the getter (prints "Getting value", returns 10). `n.value = 20` calls the setter (prints "Setting value"). Second `n.value` calls the getter again (prints "Getting value", returns 20).

### Q17. [Medium] What is the difference between a class variable and an instance variable?

*Hint:* Think about where they are defined and who shares them.

**Answer:** A **class variable** is defined in the class body (outside any method) and is shared by all instances. A **instance variable** is defined using `self.variable` (usually in __init__) and belongs to one specific object. Changing a class variable through the class name affects all instances. Assigning through an instance creates a new instance variable that shadows the class variable.

Class variables are stored on the class itself. Instance variables are stored on individual objects. When you read an attribute, Python first checks the instance, then the class. When you assign through an instance, it always creates/updates an instance variable.

### Q18. [Hard] Why does assigning `self.count += 1` (where count is a class variable) create an instance variable instead of modifying the class variable?

*Hint:* Expand self.count += 1 into its equivalent form.

**Answer:** `self.count += 1` is equivalent to `self.count = self.count + 1`. On the right side, `self.count` reads the class variable (since no instance variable exists yet). Adding 1 produces a new value. On the left side, `self.count = ...` is an assignment through an instance, which creates a new instance variable. The class variable is never modified.

This is a subtle but important point. Augmented assignment (`+=`) expands to read + write. The read finds the class variable, the write creates an instance variable. To modify the class variable, use `ClassName.count += 1`.

## Mixed Questions

### Q1. [Easy] What is the output?

```
class Rectangle:
    def __init__(self, w, h):
        self.w = w
        self.h = h
    
    def area(self):
        return self.w * self.h
    
    def perimeter(self):
        return 2 * (self.w + self.h)

r = Rectangle(4, 6)
print(r.area())
print(r.perimeter())
```

*Hint:* Area = width * height. Perimeter = 2 * (width + height).

**Answer:** `24`
`20`

Area: 4 * 6 = 24. Perimeter: 2 * (4 + 6) = 2 * 10 = 20.

### Q2. [Easy] What is the output?

```
class Pair:
    def __init__(self, a, b):
        self.a = a
        self.b = b
    
    def sum(self):
        return self.a + self.b

p = Pair("Hello", " World")
print(p.sum())
print(Pair(3, 7).sum())
```

*Hint:* The + operator works for both strings and numbers.

**Answer:** `Hello World`
`10`

First Pair holds strings: "Hello" + " World" = "Hello World". Second Pair holds numbers: 3 + 7 = 10. The same class works with different types due to Python's dynamic typing.

### Q3. [Medium] What is the output?

```
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
    
    def average(self):
        return sum(self.marks) / len(self.marks)

students = [
    Student("Aarav", [90, 85, 92]),
    Student("Priya", [88, 95, 82]),
    Student("Rohan", [75, 80, 70]),
]

for s in students:
    print(f"{s.name}: {s.average():.1f}")
```

*Hint:* Calculate the average for each student's marks.

**Answer:** `Aarav: 89.0`
`Priya: 88.3`
`Rohan: 75.0`

Aarav: (90+85+92)/3 = 267/3 = 89.0. Priya: (88+95+82)/3 = 265/3 = 88.33... formatted as 88.3. Rohan: (75+80+70)/3 = 225/3 = 75.0.

### Q4. [Medium] What is the output?

```
class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def multiply(self, value):
        return self.factor * value

double = Multiplier(2)
triple = Multiplier(3)

results = [double.multiply(x) for x in range(1, 5)]
print(results)
print(triple.multiply(10))
```

*Hint:* double.factor = 2, triple.factor = 3.

**Answer:** `[2, 4, 6, 8]`
`30`

double.multiply(x) returns 2*x for x in 1..4: [2, 4, 6, 8]. triple.multiply(10) returns 3*10 = 30.

### Q5. [Medium] What is the output?

```
class Account:
    def __init__(self, balance=0):
        self.balance = balance
        self.transactions = []
    
    def deposit(self, amount):
        self.balance += amount
        self.transactions.append(f"+{amount}")
    
    def withdraw(self, amount):
        self.balance -= amount
        self.transactions.append(f"-{amount}")

a = Account(100)
a.deposit(50)
a.withdraw(30)
a.deposit(20)
print(a.balance)
print(a.transactions)
```

*Hint:* Track the balance: 100 + 50 - 30 + 20.

**Answer:** `140`
`['+50', '-30', '+20']`

Balance: 100 + 50 = 150, 150 - 30 = 120, 120 + 20 = 140. Transactions: ["+50", "-30", "+20"].

### Q6. [Hard] What is the output?

```
class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next = next_node
    
    def __str__(self):
        result = str(self.value)
        current = self.next
        while current:
            result += f" -> {current.value}"
            current = current.next
        return result

c = Node(3)
b = Node(2, c)
a = Node(1, b)
print(a)
print(b)
```

*Hint:* Each node points to the next. __str__ follows the chain.

**Answer:** `1 -> 2 -> 3`
`2 -> 3`

Node a(1) -> b(2) -> c(3). Printing a follows the chain: 1 -> 2 -> 3. Printing b starts at 2: 2 -> 3.

### Q7. [Hard] What is the output?

```
class Matrix:
    def __init__(self, rows):
        self.rows = rows
    
    def __eq__(self, other):
        return self.rows == other.rows
    
    def transpose(self):
        t = list(zip(*self.rows))
        return Matrix([list(row) for row in t])

m1 = Matrix([[1, 2], [3, 4]])
m2 = m1.transpose()
print(m2.rows)
print(m1 == m1.transpose().transpose())
```

*Hint:* Transposing swaps rows and columns. Transposing twice gives the original.

**Answer:** `[[1, 3], [2, 4]]`
`True`

Transpose of [[1,2],[3,4]] is [[1,3],[2,4]]. Transposing twice returns to [[1,2],[3,4]], which equals the original (via __eq__ comparing the rows lists).

### Q8. [Hard] What is the output?

```
class Logger:
    _messages = []
    
    @classmethod
    def log(cls, message):
        cls._messages.append(message)
    
    @classmethod
    def get_logs(cls):
        return cls._messages.copy()

Logger.log("start")
Logger.log("process")

l1 = Logger()
l2 = Logger()
l1.log("end")

print(Logger.get_logs())
print(len(l2.get_logs()))
```

*Hint:* All log calls modify the same class-level list.

**Answer:** `['start', 'process', 'end']`
`3`

All three log() calls (via class and via instances) modify the same class variable `_messages`. The list contains ["start", "process", "end"]. l2.get_logs() also returns this list (length 3) because class methods are shared.

### Q9. [Hard] What is the output?

```
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32
    
    @staticmethod
    def from_fahrenheit(f):
        return Temperature((f - 32) * 5/9)

t1 = Temperature(100)
print(t1.fahrenheit)

t2 = Temperature.from_fahrenheit(32)
print(t2._celsius)
print(t2.fahrenheit)
```

*Hint:* 100C = 212F. 32F = 0C.

**Answer:** `212.0`
`0.0`
`32.0`

t1 at 100C: fahrenheit = 100*9/5+32 = 212.0. from_fahrenheit(32): celsius = (32-32)*5/9 = 0.0. t2 at 0C: fahrenheit = 0*9/5+32 = 32.0.

### Q10. [Medium] What is the difference between `@classmethod` and `@staticmethod`?

*Hint:* What does each method receive as its first parameter?

**Answer:** `@classmethod` receives the class (`cls`) as its first parameter and can access/modify class state. `@staticmethod` receives neither `self` nor `cls` and is essentially a regular function scoped inside the class. Use classmethod for alternative constructors or operations on class data. Use staticmethod for utility functions logically grouped with the class.

Example: `Date.from_string("15-08-1947")` is a classmethod that creates a Date object (needs cls to call the constructor). `Date.is_valid(31, 2, 2025)` is a staticmethod that validates a date without needing the class or an instance.

### Q11. [Hard] What is name mangling in Python? Why does Python use it instead of truly private attributes?

*Hint:* Double underscore attributes get renamed. Think about Python's philosophy.

**Answer:** Name mangling transforms `self.__attr` to `self._ClassName__attr`. It is not true privacy -- the attribute is still accessible if you know the mangled name. Python uses this approach because of its philosophy: 'We are all consenting adults here.' Python trusts developers to follow conventions rather than enforcing strict access control. The mangling prevents accidental name collisions in subclasses, which is its primary purpose.

Languages like Java enforce private with compiler checks. Python's culture prefers conventions (single underscore = protected, double underscore = name mangled). The single underscore convention is much more commonly used in practice.

## Multiple Choice Questions

### Q1. [Easy] What keyword is used to define a class in Python?

A. define
B. class
C. struct
D. object

**Answer:** B

**B is correct.** The `class` keyword defines a class. Option A is not a Python keyword. Options C and D are not used for class definitions.

### Q2. [Easy] What is __init__() in a Python class?

A. A destructor that cleans up objects
B. A constructor that initializes object attributes
C. A method that prints the object
D. A class variable

**Answer:** B

**B is correct.** `__init__` is the constructor/initializer. It runs automatically when an object is created and sets up its initial state.

### Q3. [Easy] What does 'self' refer to in a class method?

A. The class itself
B. The current instance (object) calling the method
C. The parent class
D. The module the class is in

**Answer:** B

**B is correct.** `self` refers to the specific instance that the method is being called on. When `obj.method()` is called, `self` is `obj`.

### Q4. [Easy] What is an instance of a class called?

A. A variable
B. An object
C. A function
D. A module

**Answer:** B

**B is correct.** An instance of a class is called an object. A class is the blueprint; an object is a specific entity created from that blueprint.

### Q5. [Easy] How do you create an object from a class named Dog?

A. Dog.new()
B. new Dog()
C. Dog()
D. create Dog()

**Answer:** C

**C is correct.** In Python, you create objects by calling the class name as if it were a function: `Dog()`. This is unlike Java/C++ which use the `new` keyword.

### Q6. [Medium] What is the difference between self.name and name inside __init__(self, name)?

A. They are the same thing
B. self.name is an instance variable stored on the object; name is a parameter that exists only during the method call
C. name is the class variable; self.name is the local variable
D. self.name is read-only; name is writable

**Answer:** B

**B is correct.** `name` is a parameter (local variable) that disappears when __init__ finishes. `self.name` is an instance variable that persists as an attribute of the object.

### Q7. [Medium] What happens when you assign to a class variable through an instance?

A. The class variable is modified for all instances
B. A new instance variable is created that shadows the class variable
C. A TypeError is raised
D. The assignment is ignored

**Answer:** B

**B is correct.** Assigning through an instance (`obj.x = 5`) always creates or modifies an instance variable, never a class variable. The class variable remains unchanged, but the new instance variable shadows it for that specific object.

### Q8. [Medium] What does __str__() do?

A. Converts the object to an integer
B. Returns a human-readable string representation used by print()
C. Creates a string variable in the class
D. Checks if the object is a string

**Answer:** B

**B is correct.** `__str__` defines the string representation used by `print()` and `str()`. Without it, printing an object shows something like `<__main__.MyClass object at 0x...>`.

### Q9. [Medium] What is the naming convention for Python class names?

A. snake_case (my_class)
B. camelCase (myClass)
C. PascalCase (MyClass)
D. ALL_CAPS (MY_CLASS)

**Answer:** C

**C is correct.** Python class names use PascalCase (also called CamelCase with initial capital): `Student`, `BankAccount`, `FileHandler`. Methods and variables use snake_case.

### Q10. [Medium] What does @property do?

A. Makes a variable immutable
B. Turns a method into an attribute-like accessor
C. Creates a class variable
D. Makes the method static

**Answer:** B

**B is correct.** `@property` turns a method into something that can be accessed like an attribute (without parentheses). It allows you to add getter/setter logic while keeping the clean `obj.attr` syntax.

### Q11. [Hard] What is the purpose of __repr__() vs __str__()?

A. They do the same thing
B. __str__ is for humans (print), __repr__ is for developers (debugging/console)
C. __repr__ is for humans, __str__ is for developers
D. __repr__ converts to a number, __str__ converts to a string

**Answer:** B

**B is correct.** `__str__` provides a human-friendly string (used by print). `__repr__` provides an unambiguous developer-friendly string (used in the console, repr(), and when objects are in containers like lists).

### Q12. [Hard] What does Python's name mangling do with self.__attr?

A. Makes the attribute truly private and inaccessible
B. Renames it to self._ClassName__attr
C. Deletes the attribute after __init__
D. Encrypts the attribute value

**Answer:** B

**B is correct.** Python renames `__attr` to `_ClassName__attr`. It is not true privacy -- the attribute can still be accessed with the mangled name. The primary purpose is preventing accidental name collisions in inheritance.

### Q13. [Hard] What is the first parameter of a @classmethod?

A. self (the instance)
B. cls (the class)
C. args (the arguments)
D. It has no required first parameter

**Answer:** B

**B is correct.** A `@classmethod` receives the class itself as the first parameter, conventionally named `cls`. This allows it to create instances (`cls(args)`) and access class variables.

### Q14. [Hard] If only __repr__ is defined (no __str__), what does print(obj) use?

A. It prints nothing
B. It raises an error
C. It uses __repr__ as a fallback
D. It prints the object's memory address

**Answer:** C

**C is correct.** If `__str__` is not defined, Python falls back to `__repr__` for `print()` and `str()`. If neither is defined, it uses the default representation showing the class name and memory address.

### Q15. [Medium] What is the purpose of __eq__(self, other)?

A. It assigns a value to the object
B. It defines how == works for objects of this class
C. It checks if the object exists
D. It compares the memory addresses of two objects

**Answer:** B

**B is correct.** `__eq__` defines the behavior of the `==` operator. Without it, `==` checks identity (same object in memory), not value equality.

### Q16. [Easy] Is 'self' a keyword in Python?

A. Yes, it is a reserved keyword
B. No, it is a convention; any name could be used
C. Yes, but only inside __init__
D. No, it is automatically created by Python

**Answer:** B

**B is correct.** `self` is not a keyword -- it is a strong convention. You could technically use `this` or `me`, but doing so would confuse every Python developer who reads your code.

### Q17. [Hard] What happens if you define a class variable as a list and append to it through an instance?

A. A new instance variable is created
B. The class variable list is modified for ALL instances
C. An error is raised
D. Only that instance's copy is modified

**Answer:** B

**B is correct.** `self.data.append(x)` does not create a new instance variable because it is not an assignment. It modifies the existing list object in place. Since the list is a class variable, the modification is visible to all instances.

### Q18. [Hard] What is returned by type(obj) if obj is an instance of class Student?

A. 'Student'
B. 
C. object
D. Student()

**Answer:** B

**B is correct.** `type(obj)` returns the class of the object, which displays as `` (or `` in simplified form).

### Q19. [Medium] Can a class have multiple __init__ methods (method overloading)?

A. Yes, like Java
B. No, the last __init__ defined replaces all previous ones
C. Yes, but only with different numbers of parameters
D. No, Python does not support __init__

**Answer:** B

**B is correct.** Python does not support method overloading. If you define __init__ twice, the second definition replaces the first. Use default parameters, *args, or @classmethod alternative constructors instead.

### Q20. [Hard] What does returning NotImplemented from __eq__ do?

A. Raises a NotImplementedError
B. Returns False
C. Tells Python to try the other operand's __eq__ method
D. Makes the comparison always True

**Answer:** C

**C is correct.** Returning `NotImplemented` (not raising NotImplementedError) is a signal to Python that this comparison is not supported. Python will then try the other operand's `__eq__` method. If that also returns NotImplemented, the comparison falls back to identity comparison.

## Coding Challenges

### Challenge 1. Student Gradebook

**Difficulty:** Easy

Create a Student class with name and marks (list). Add methods: add_mark(mark), average(), highest(), lowest(), and __str__. Test with two students.

**Constraints:**

- Use instance variables for name and marks. marks should be a list.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Aarav - Avg: 88.7, Highest: 95, Lowest: 82
Priya - Avg: 91.0, Highest: 97, Lowest: 85
```

**Solution:**

```python
class Student:
    def __init__(self, name, marks=None):
        self.name = name
        self.marks = marks if marks else []
    
    def add_mark(self, mark):
        self.marks.append(mark)
    
    def average(self):
        return sum(self.marks) / len(self.marks) if self.marks else 0
    
    def highest(self):
        return max(self.marks) if self.marks else 0
    
    def lowest(self):
        return min(self.marks) if self.marks else 0
    
    def __str__(self):
        return f"{self.name} - Avg: {self.average():.1f}, Highest: {self.highest()}, Lowest: {self.lowest()}"

s1 = Student("Aarav", [88, 92, 82, 95, 86])
s2 = Student("Priya", [91, 97, 85, 88, 94])
print(s1)
print(s2)
```

### Challenge 2. Bank Account with Transaction History

**Difficulty:** Easy

Create a BankAccount class with owner, balance, and a transactions list. Implement deposit(amount), withdraw(amount) with validation, and show_history(). The class variable should track total accounts created.

**Constraints:**

- Withdraw should fail if insufficient funds. Use a class variable for account count.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Aarav's balance: 1300
Transactions: ['+500', '-200', '+1000']
Total accounts: 2
```

**Solution:**

```python
class BankAccount:
    total_accounts = 0
    
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []
        BankAccount.total_accounts += 1
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(f'+{amount}')
    
    def withdraw(self, amount):
        if amount > self.balance:
            print(f"Insufficient funds for {self.owner}")
            return
        if amount > 0:
            self.balance -= amount
            self.transactions.append(f'-{amount}')
    
    def show_history(self):
        return self.transactions

a1 = BankAccount("Aarav", 0)
a1.deposit(500)
a1.withdraw(200)
a1.deposit(1000)

a2 = BankAccount("Priya", 500)

print(f"{a1.owner}'s balance: {a1.balance}")
print(f"Transactions: {a1.show_history()}")
print(f"Total accounts: {BankAccount.total_accounts}")
```

### Challenge 3. Todo List Manager

**Difficulty:** Easy

Create a TodoList class with methods: add(task), complete(index), remove(index), pending() (returns incomplete tasks), and __str__. Each task should track its completion status.

**Constraints:**

- Store tasks as a list of dictionaries with 'task' and 'done' keys.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[x] Buy groceries
[ ] Study Python
[ ] Exercise
Pending: 2 tasks
```

**Solution:**

```python
class TodoList:
    def __init__(self):
        self.tasks = []
    
    def add(self, task):
        self.tasks.append({'task': task, 'done': False})
    
    def complete(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks[index]['done'] = True
    
    def remove(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks.pop(index)
    
    def pending(self):
        return [t for t in self.tasks if not t['done']]
    
    def __str__(self):
        lines = []
        for t in self.tasks:
            status = 'x' if t['done'] else ' '
            lines.append(f"[{status}] {t['task']}")
        return '\n'.join(lines)

todo = TodoList()
todo.add("Buy groceries")
todo.add("Study Python")
todo.add("Exercise")
todo.complete(0)
print(todo)
print(f"Pending: {len(todo.pending())} tasks")
```

### Challenge 4. Fraction Class with Arithmetic

**Difficulty:** Medium

Create a Fraction class that stores numerator and denominator. Implement add(other) and multiply(other) methods that return new Fraction objects. Include a simplify() method using GCD, __str__, and __eq__.

**Constraints:**

- Always simplify fractions. Handle negative fractions. Do not use the fractions module.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1/2 + 1/3 = 5/6
2/3 * 3/4 = 1/2
2/4 == 1/2: True
```

**Solution:**

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

class Fraction:
    def __init__(self, num, den):
        if den == 0:
            raise ValueError("Denominator cannot be zero")
        if den < 0:
            num, den = -num, -den
        common = gcd(abs(num), abs(den))
        self.num = num // common
        self.den = den // common
    
    def add(self, other):
        new_num = self.num * other.den + other.num * self.den
        new_den = self.den * other.den
        return Fraction(new_num, new_den)
    
    def multiply(self, other):
        return Fraction(self.num * other.num, self.den * other.den)
    
    def __eq__(self, other):
        return self.num == other.num and self.den == other.den
    
    def __str__(self):
        return f"{self.num}/{self.den}"

a = Fraction(1, 2)
b = Fraction(1, 3)
print(f"{a} + {b} = {a.add(b)}")

c = Fraction(2, 3)
d = Fraction(3, 4)
print(f"{c} * {d} = {c.multiply(d)}")

print(f"2/4 == 1/2: {Fraction(2, 4) == Fraction(1, 2)}")
```

### Challenge 5. Inventory Management System

**Difficulty:** Medium

Create a Product class (name, price, quantity) and an Inventory class that manages a list of products. Inventory should have: add_product(product), remove_product(name), find_product(name), total_value() (sum of price*quantity), and low_stock(threshold) that returns products below the threshold.

**Constraints:**

- Use two classes. Product should have __str__. Inventory should manage a list.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Total value: Rs.18750
Low stock (< 10): ['Mouse']
Found: Keyboard - Rs.500 x 15
```

**Solution:**

```python
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def __str__(self):
        return f"{self.name} - Rs.{self.price} x {self.quantity}"

class Inventory:
    def __init__(self):
        self.products = []
    
    def add_product(self, product):
        self.products.append(product)
    
    def remove_product(self, name):
        self.products = [p for p in self.products if p.name != name]
    
    def find_product(self, name):
        for p in self.products:
            if p.name == name:
                return p
        return None
    
    def total_value(self):
        return sum(p.price * p.quantity for p in self.products)
    
    def low_stock(self, threshold=10):
        return [p.name for p in self.products if p.quantity < threshold]

inv = Inventory()
inv.add_product(Product("Keyboard", 500, 15))
inv.add_product(Product("Mouse", 250, 5))
inv.add_product(Product("Monitor", 8000, 1))

print(f"Total value: Rs.{inv.total_value()}")
print(f"Low stock (< 10): {inv.low_stock(10)}")
print(f"Found: {inv.find_product('Keyboard')}")
```

### Challenge 6. Playlist Manager

**Difficulty:** Medium

Create a Song class (title, artist, duration_seconds) and a Playlist class. Playlist methods: add(song), remove(title), total_duration() (formatted as MM:SS), shuffle() (return shuffled copy), and __str__ (numbered list of songs).

**Constraints:**

- Song duration stored in seconds. Display as M:SS.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1. Shape of You - Ed Sheeran (3:53)
2. Believer - Imagine Dragons (3:24)
3. Blinding Lights - The Weeknd (3:20)
Total duration: 10:37
```

**Solution:**

```python
class Song:
    def __init__(self, title, artist, duration_seconds):
        self.title = title
        self.artist = artist
        self.duration = duration_seconds
    
    def formatted_duration(self):
        minutes = self.duration // 60
        seconds = self.duration % 60
        return f"{minutes}:{seconds:02d}"
    
    def __str__(self):
        return f"{self.title} - {self.artist} ({self.formatted_duration()})"

class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []
    
    def add(self, song):
        self.songs.append(song)
    
    def remove(self, title):
        self.songs = [s for s in self.songs if s.title != title]
    
    def total_duration(self):
        total = sum(s.duration for s in self.songs)
        minutes = total // 60
        seconds = total % 60
        return f"{minutes}:{seconds:02d}"
    
    def __str__(self):
        lines = [f"{i+1}. {song}" for i, song in enumerate(self.songs)]
        return '\n'.join(lines)

pl = Playlist("Favorites")
pl.add(Song("Shape of You", "Ed Sheeran", 233))
pl.add(Song("Believer", "Imagine Dragons", 204))
pl.add(Song("Blinding Lights", "The Weeknd", 200))
print(pl)
print(f"Total duration: {pl.total_duration()}")
```

### Challenge 7. Vector Class with Operator Methods

**Difficulty:** Hard

Create a Vector2D class with x and y. Implement __add__ (vector addition), __sub__ (vector subtraction), __mul__ (scalar multiplication), __eq__ (equality), __abs__ (magnitude), and __str__. Test thoroughly.

**Constraints:**

- Return new Vector2D objects from operations (do not modify originals).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
v1 + v2 = (4, 6)
v1 - v2 = (-2, -2)
v1 * 3 = (3, 6)
|v2| = 5.0
v1 == Vector2D(1, 2): True
```

**Solution:**

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector2D(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        return Vector2D(self.x * scalar, self.y * scalar)
    
    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5
    
    def __eq__(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        return self.x == other.x and self.y == other.y
    
    def __str__(self):
        return f"({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector2D({self.x}, {self.y})"

v1 = Vector2D(1, 2)
v2 = Vector2D(3, 4)

print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 3 = {v1 * 3}")
print(f"|v2| = {abs(v2)}")
print(f"v1 == Vector2D(1, 2): {v1 == Vector2D(1, 2)}")
```

### Challenge 8. Linked List Implementation

**Difficulty:** Hard

Implement a singly linked list using Node and LinkedList classes. LinkedList should support: append(value), prepend(value), delete(value), search(value) -> bool, length(), and __str__ (display as 'a -> b -> c -> None').

**Constraints:**

- Do not use Python lists. Build the data structure from scratch using Node objects.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1 -> 2 -> 3 -> 4 -> None
Length: 4
Search 3: True
After delete 2: 1 -> 3 -> 4 -> None
```

**Solution:**

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
    
    def delete(self, value):
        if not self.head:
            return
        if self.head.value == value:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.value == value:
                current.next = current.next.next
                return
            current = current.next
    
    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False
    
    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count
    
    def __str__(self):
        parts = []
        current = self.head
        while current:
            parts.append(str(current.value))
            current = current.next
        parts.append("None")
        return " -> ".join(parts)

ll = LinkedList()
for v in [1, 2, 3, 4]:
    ll.append(v)
print(ll)
print(f"Length: {ll.length()}")
print(f"Search 3: {ll.search(3)}")
ll.delete(2)
print(f"After delete 2: {ll}")
```

### Challenge 9. Class Registry with @classmethod

**Difficulty:** Hard

Create a Shape class with a class-level registry. Each shape subclass (Circle, Rectangle) registers itself. Implement a from_dict(data) classmethod that creates the right shape based on a 'type' key. Include area() and __str__ for each shape.

**Constraints:**

- Use a class variable dictionary for the registry. Use @classmethod for the factory.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Circle(radius=5) area: 78.54
Rectangle(4x6) area: 24
Registered shapes: ['circle', 'rectangle']
```

**Solution:**

```python
class Shape:
    _registry = {}
    
    @classmethod
    def register(cls, shape_type, shape_class):
        cls._registry[shape_type] = shape_class
    
    @classmethod
    def from_dict(cls, data):
        shape_type = data.get('type')
        shape_class = cls._registry.get(shape_type)
        if not shape_class:
            raise ValueError(f"Unknown shape: {shape_type}")
        return shape_class(**{k: v for k, v in data.items() if k != 'type'})
    
    @classmethod
    def registered_shapes(cls):
        return list(cls._registry.keys())

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return round(3.14159 * self.radius ** 2, 2)
    
    def __str__(self):
        return f"Circle(radius={self.radius})"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def __str__(self):
        return f"Rectangle({self.width}x{self.height})"

Shape.register('circle', Circle)
Shape.register('rectangle', Rectangle)

c = Shape.from_dict({'type': 'circle', 'radius': 5})
r = Shape.from_dict({'type': 'rectangle', 'width': 4, 'height': 6})
print(f"{c} area: {c.area()}")
print(f"{r} area: {r.area()}")
print(f"Registered shapes: {Shape.registered_shapes()}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/object-oriented-programming/*
