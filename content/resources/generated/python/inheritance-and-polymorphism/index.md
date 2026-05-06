---
title: "Inheritance and Polymorphism in Python - super(), MRO, Abstract Classes | Modern Age Coders"
description: "Learn Python inheritance including single and multiple inheritance, super() function, method overriding, MRO (Method Resolution Order), polymorphism, duck typing, abstract base classes, mixins, and operator overloading. Includes 60+ practice questions with output prediction and coding challenges."
slug: inheritance-and-polymorphism
canonical: https://learn.modernagecoders.com/resources/python/inheritance-and-polymorphism/
category: "Python"
keywords: ["python inheritance", "polymorphism python", "method overriding python", "python inheritance tutorial", "python super function", "python MRO", "python abstract class", "python duck typing", "python operator overloading", "python multiple inheritance"]
---
# Inheritance and Polymorphism

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 22  
**Practice questions:** 60

## What Are Inheritance and Polymorphism?

**Inheritance** is a mechanism where a new class (child/subclass) is built from an existing class (parent/superclass), inheriting its attributes and methods. The child class can add new features or modify existing ones. This represents an **IS-A relationship**: a Dog IS-A Animal, a Car IS-A Vehicle.

```
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Dog(Animal):           # Dog inherits from Animal
    def speak(self):          # Override parent's method
        return "Woof!"

class Cat(Animal):           # Cat inherits from Animal
    def speak(self):          # Override parent's method
        return "Meow!"

dog = Dog("Rex")
cat = Cat("Luna")
print(f"{dog.name}: {dog.speak()}")  # Rex: Woof!
print(f"{cat.name}: {cat.speak()}")  # Luna: Meow!
```

Both Dog and Cat inherit the `__init__` method and `name` attribute from Animal. Each overrides `speak()` with its own behavior.

**Polymorphism** means "many forms." It is the ability to use the same interface (method name) with different types. In the example above, both Dog and Cat have a `speak()` method, but each produces different output. Code that calls `animal.speak()` works correctly regardless of whether `animal` is a Dog, Cat, or any other Animal subclass.

## Why Are Inheritance and Polymorphism Important?

### 1. Code Reuse Without Duplication

Without inheritance, if Aarav creates Dog, Cat, and Bird classes, each with `name`, `age`, `eat()`, and `sleep()`, he copies the same code three times. With inheritance, the shared code lives in the Animal base class, and each subclass only adds or overrides what is unique to it.

### 2. Extending Existing Code

Inheritance lets you extend libraries and frameworks without modifying them. Django's class-based views, Flask's error handlers, and pytest's fixtures all use inheritance. You inherit from a provided base class and override specific methods to customize behavior.

### 3. Polymorphism Simplifies Code

Consider a drawing application with Circle, Rectangle, and Triangle shapes. Without polymorphism, you need if/elif chains to check the type before calling the right method. With polymorphism, you simply call `shape.draw()` on any shape, and each one knows how to draw itself. Adding a new shape requires no changes to existing code.

### 4. Modeling Hierarchies

Real-world domains have natural hierarchies. An Employee has subtypes: Manager, Developer, Designer. A payment system has CreditCard, DebitCard, UPI. These hierarchies map directly to inheritance, making the code structure mirror the domain structure.

### 5. Open/Closed Principle

Good software is **open for extension but closed for modification**. Inheritance and polymorphism enable this: you can add new subclasses (extension) without changing existing code that works with the base class (no modification).

## Detailed Explanation

### 1. Single Inheritance

The most common form: one child class inherits from one parent class:

```
class Vehicle:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed
    
    def describe(self):
        return f"{self.brand} - {self.speed} km/h"

class Car(Vehicle):
    def __init__(self, brand, speed, doors):
        super().__init__(brand, speed)  # Call parent's __init__
        self.doors = doors              # Add new attribute
    
    def describe(self):                 # Override parent's method
        return f"{super().describe()}, {self.doors} doors"

class Bike(Vehicle):
    def __init__(self, brand, speed, bike_type):
        super().__init__(brand, speed)
        self.bike_type = bike_type

car = Car("Toyota", 180, 4)
bike = Bike("Royal Enfield", 120, "Cruiser")
print(car.describe())    # Toyota - 180 km/h, 4 doors
print(bike.describe())   # Royal Enfield - 120 km/h (uses parent's)
```

### 2. The super() Function

`super()` returns a proxy object that delegates method calls to the parent class. It is most commonly used in `__init__` to initialize the parent's attributes:

```
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # Initialize Person's attributes
        self.student_id = student_id  # Add Student-specific attribute
    
    def __str__(self):
        return f"Student({self.name}, {self.age}, ID: {self.student_id})"

s = Student("Aarav", 16, "STU001")
print(s)  # Student(Aarav, 16, ID: STU001)
```

Without `super().__init__(name, age)`, the Student object would not have `name` and `age` attributes. Always call super().__init__() if the parent has initialization logic.

### 3. Method Overriding

A child class can **override** (replace) a parent's method by defining a method with the same name:

```
class Shape:
    def area(self):
        return 0
    
    def describe(self):
        return f"{type(self).__name__}: area = {self.area()}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):  # Override
        return 3.14159 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):  # Override
        return self.width * self.height

shapes = [Circle(5), Rectangle(4, 6), Circle(3)]
for s in shapes:
    print(s.describe())  # Each shape uses its own area()
```

The `describe()` method in Shape calls `self.area()`. When called on a Circle, `self.area()` calls Circle's area. When called on a Rectangle, it calls Rectangle's area. This is polymorphism in action.

### 4. Multiple Inheritance

A class can inherit from more than one parent:

```
class Flyable:
    def fly(self):
        return f"{self.name} is flying"

class Swimmable:
    def swim(self):
        return f"{self.name} is swimming"

class Duck(Flyable, Swimmable):
    def __init__(self, name):
        self.name = name

d = Duck("Donald")
print(d.fly())   # Donald is flying
print(d.swim())  # Donald is swimming
```

Multiple inheritance is powerful but can lead to complexity, especially with the **diamond problem** (when two parent classes share a common ancestor).

### 5. Method Resolution Order (MRO)

When a class has multiple parents, Python uses the **C3 linearization algorithm** to determine the order in which classes are searched for methods:

```
class A:
    def greet(self):
        return "A"

class B(A):
    def greet(self):
        return "B"

class C(A):
    def greet(self):
        return "C"

class D(B, C):  # B before C
    pass

d = D()
print(d.greet())  # B (found in B first)
print(D.__mro__)  # D -> B -> C -> A -> object
```

The MRO is: D -> B -> C -> A -> object. Python searches this order when looking up methods. You can inspect the MRO with `ClassName.__mro__` or `ClassName.mro()`.

### 6. isinstance() and issubclass()

```
class Animal:
    pass

class Dog(Animal):
    pass

class Cat(Animal):
    pass

d = Dog()
c = Cat()

print(isinstance(d, Dog))     # True (d is a Dog)
print(isinstance(d, Animal))  # True (d is also an Animal)
print(isinstance(d, Cat))     # False (d is not a Cat)

print(issubclass(Dog, Animal))  # True (Dog inherits from Animal)
print(issubclass(Dog, Cat))     # False (Dog does not inherit from Cat)
print(issubclass(Animal, object))  # True (everything inherits from object)
```

`isinstance()` checks if an object is an instance of a class (including parent classes). `issubclass()` checks if one class inherits from another.

### 7. Polymorphism

Polymorphism allows the same code to work with different types:

```
class Employee:
    def __init__(self, name, base_salary):
        self.name = name
        self.base_salary = base_salary
    
    def calculate_pay(self):
        return self.base_salary

class Manager(Employee):
    def __init__(self, name, base_salary, bonus):
        super().__init__(name, base_salary)
        self.bonus = bonus
    
    def calculate_pay(self):
        return self.base_salary + self.bonus

class Intern(Employee):
    def calculate_pay(self):
        return self.base_salary * 0.5

# Polymorphic function: works with ANY Employee subclass
def print_payroll(employees):
    for emp in employees:
        print(f"{emp.name}: Rs.{emp.calculate_pay():.0f}")

team = [
    Manager("Aarav", 50000, 10000),
    Employee("Priya", 30000),
    Intern("Rohan", 20000),
]

print_payroll(team)  # Each calls its own calculate_pay()
```

### 8. Duck Typing

Python does not require inheritance for polymorphism. If an object has the right methods, it works. This is called **duck typing**: "If it walks like a duck and quacks like a duck, it is a duck."

```
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Robot:
    def speak(self):
        return "Beep boop!"

# No common parent class needed!
def make_noise(things):
    for thing in things:
        print(thing.speak())

make_noise([Dog(), Cat(), Robot()])
```

Dog, Cat, and Robot are unrelated classes. But they all have `speak()`, so `make_noise()` works with all of them. Python does not check the type -- it just calls the method.

### 9. Abstract Base Classes (ABC)

Abstract classes cannot be instantiated. They define an interface that subclasses must implement:

```
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass
    
    def describe(self):  # Concrete method (not abstract)
        return f"{type(self).__name__}: area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

try:
    s = Shape()  # Cannot instantiate abstract class!
except TypeError as e:
    print(f"Error: {e}")

c = Circle(5)
print(c.describe())
print(f"Perimeter: {c.perimeter():.2f}")
```

Any class with at least one `@abstractmethod` cannot be instantiated. Subclasses must implement all abstract methods, or they too become abstract. This enforces a contract: every Shape must have `area()` and `perimeter()`.

### 10. Mixins

A mixin is a class designed to be inherited alongside other classes, providing specific functionality:

```
class JsonMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class PrintableMixin:
    def print_info(self):
        for key, value in self.__dict__.items():
            print(f"  {key}: {value}")

class Student(JsonMixin, PrintableMixin):
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

s = Student("Aarav", 16, "A")
s.print_info()
print(s.to_json())
```

Mixins are not meant to be used alone. They add specific capabilities (serialization, printing, logging) to classes that inherit from them. Mixins typically do not have `__init__` methods.

### 11. Operator Overloading Basics

Special methods let you define how operators work with your objects:

```
class Money:
    def __init__(self, amount, currency="INR"):
        self.amount = amount
        self.currency = currency
    
    def __add__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot add different currencies")
        return Money(self.amount + other.amount, self.currency)
    
    def __len__(self):
        return abs(self.amount)
    
    def __getitem__(self, key):
        if key == "amount":
            return self.amount
        if key == "currency":
            return self.currency
        raise KeyError(key)
    
    def __str__(self):
        return f"{self.currency} {self.amount}"

a = Money(500)
b = Money(300)
c = a + b          # Uses __add__
print(c)            # INR 800
print(len(a))       # 500 (uses __len__)
print(a["amount"])  # 500 (uses __getitem__)
```

Common operator methods: `__add__` (+), `__sub__` (-), `__mul__` (*), `__eq__` (==), `__lt__` (<), `__len__` (len()), `__getitem__` (obj[key]).

## Code Examples

### Basic Inheritance with super()

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"I am {self.name}, {self.age} years old"

class Student(Person):
    def __init__(self, name, age, school):
        super().__init__(name, age)
        self.school = school
    
    def introduce(self):
        base = super().introduce()
        return f"{base}, studying at {self.school}"

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def introduce(self):
        base = super().introduce()
        return f"{base}, teaching {self.subject}"

p = Person("Vikram", 40)
s = Student("Aarav", 16, "Modern Age Coders")
t = Teacher("Meera", 35, "Python")

for person in [p, s, t]:
    print(person.introduce())
    print(f"  isinstance(Person): {isinstance(person, Person)}")
    print(f"  type: {type(person).__name__}")
```

Student and Teacher inherit from Person. Each calls `super().__init__()` to initialize name and age, then adds its own attributes. Each overrides `introduce()` but uses `super().introduce()` to include the parent's output. All three are instances of Person.

**Output:**

```
I am Vikram, 40 years old
  isinstance(Person): True
  type: Person
I am Aarav, 16 years old, studying at Modern Age Coders
  isinstance(Person): True
  type: Student
I am Meera, 35 years old, teaching Python
  isinstance(Person): True
  type: Teacher
```

### Method Overriding and Polymorphism

```python
class Shape:
    def area(self):
        return 0
    
    def __str__(self):
        return f"{type(self).__name__}(area={self.area():.2f})"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# Polymorphism: same interface, different implementations
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8), Circle(2)]

total_area = 0
for shape in shapes:
    print(shape)  # Each shape uses its own area() and __str__
    total_area += shape.area()

print(f"\nTotal area: {total_area:.2f}")
```

Each subclass overrides `area()` with its own formula. The loop works with all shapes uniformly because they share the same interface. This is polymorphism: the same code (`shape.area()`) produces different results based on the actual type of the object.

**Output:**

```
Circle(area=78.54)
Rectangle(area=24.00)
Triangle(area=12.00)
Circle(area=12.57)

Total area: 127.11
```

### Multiple Inheritance and MRO

```python
class A:
    def method(self):
        return "A"

class B(A):
    def method(self):
        return "B"

class C(A):
    def method(self):
        return "C"

class D(B, C):
    pass

class E(C, B):
    pass

d = D()
e = E()

print(f"D().method() = {d.method()}")
print(f"E().method() = {e.method()}")

print(f"\nD MRO: {[cls.__name__ for cls in D.__mro__]}")
print(f"E MRO: {[cls.__name__ for cls in E.__mro__]}")

# super() follows MRO
class X:
    def method(self):
        return ["X"]

class Y(X):
    def method(self):
        return ["Y"] + super().method()

class Z(X):
    def method(self):
        return ["Z"] + super().method()

class W(Y, Z):
    def method(self):
        return ["W"] + super().method()

w = W()
print(f"\nW MRO: {[cls.__name__ for cls in W.__mro__]}")
print(f"W().method() = {w.method()}")
```

D(B, C) searches B before C (MRO: D->B->C->A). E(C, B) searches C before B (MRO: E->C->B->A). The order in the class definition determines the MRO. In the W example, `super()` follows the MRO chain: W->Y->Z->X, calling each class's method in order.

**Output:**

```
D().method() = B
E().method() = C

D MRO: ['D', 'B', 'C', 'A', 'object']
E MRO: ['E', 'C', 'B', 'A', 'object']

W MRO: ['W', 'Y', 'Z', 'X', 'object']
W().method() = ['W', 'Y', 'Z', 'X']
```

### Abstract Base Classes

```python
from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def execute(self, query):
        pass
    
    def status(self):  # Concrete method
        return f"{type(self).__name__} database"

class SQLiteDB(Database):
    def connect(self):
        return "Connected to SQLite"
    
    def execute(self, query):
        return f"SQLite executing: {query}"

class MongoDB(Database):
    def connect(self):
        return "Connected to MongoDB"
    
    def execute(self, query):
        return f"MongoDB executing: {query}"

# Cannot instantiate abstract class
try:
    db = Database()
except TypeError as e:
    print(f"Error: {e}")

# Concrete subclasses work fine
for db in [SQLiteDB(), MongoDB()]:
    print(db.connect())
    print(db.execute("SELECT * FROM users"))
    print(db.status())
    print()
```

Database is abstract (has @abstractmethod). It cannot be instantiated directly. SQLiteDB and MongoDB implement all abstract methods, so they can be instantiated. The concrete method `status()` is inherited by both without needing to override it.

**Output:**

```
Error: Can't instantiate abstract class Database with abstract methods 'connect', 'execute'
Connected to SQLite
SQLite executing: SELECT * FROM users
SQLiteDB database

Connected to MongoDB
MongoDB executing: SELECT * FROM users
MongoDB database
```

### Duck Typing in Action

```python
class File:
    def __init__(self, name, content):
        self.name = name
        self.content = content
    
    def read(self):
        return self.content
    
    def size(self):
        return len(self.content)

class StringBuffer:
    def __init__(self, text):
        self.name = "<buffer>"
        self.content = text
    
    def read(self):
        return self.content
    
    def size(self):
        return len(self.content)

class DatabaseResult:
    def __init__(self, rows):
        self.name = "<db_query>"
        self.rows = rows
    
    def read(self):
        return "\n".join(str(row) for row in self.rows)
    
    def size(self):
        return len(self.rows)

# This function works with ANY object that has read() and size()
def process(source):
    print(f"Source: {source.name}")
    print(f"Size: {source.size()}")
    print(f"Content: {source.read()[:50]}")
    print()

# No common base class needed!
process(File("notes.txt", "Python is amazing!"))
process(StringBuffer("Temporary data for processing"))
process(DatabaseResult([("Aarav", 92), ("Priya", 97)]))
```

File, StringBuffer, and DatabaseResult have no inheritance relationship. But they all implement `read()`, `size()`, and `name`. The `process()` function works with all three because Python uses duck typing: it does not care about the type, only that the required methods exist.

**Output:**

```
Source: notes.txt
Size: 18
Content: Python is amazing!

Source: <buffer>
Size: 29
Content: Temporary data for processing

Source: <db_query>
Size: 2
Content: ('Aarav', 92)
('Priya', 97)
```

### Operator Overloading

```python
class Vector:
    def __init__(self, *components):
        self.components = list(components)
    
    def __add__(self, other):
        paired = zip(self.components, other.components)
        return Vector(*(a + b for a, b in paired))
    
    def __sub__(self, other):
        paired = zip(self.components, other.components)
        return Vector(*(a - b for a, b in paired))
    
    def __mul__(self, scalar):
        return Vector(*(c * scalar for c in self.components))
    
    def __len__(self):
        return len(self.components)
    
    def __getitem__(self, index):
        return self.components[index]
    
    def __eq__(self, other):
        return self.components == other.components
    
    def __str__(self):
        return f"Vector({', '.join(str(c) for c in self.components)})"

v1 = Vector(1, 2, 3)
v2 = Vector(4, 5, 6)

print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v2 - v1 = {v2 - v1}")
print(f"v1 * 3 = {v1 * 3}")
print(f"len(v1) = {len(v1)}")
print(f"v1[0] = {v1[0]}")
print(f"v1 == Vector(1,2,3): {v1 == Vector(1, 2, 3)}")
```

Operator overloading methods: `__add__` enables +, `__sub__` enables -, `__mul__` enables *, `__len__` enables len(), `__getitem__` enables [] indexing, `__eq__` enables ==. Each returns a new Vector (immutable style) or a value.

**Output:**

```
v1 = Vector(1, 2, 3)
v2 = Vector(4, 5, 6)
v1 + v2 = Vector(5, 7, 9)
v2 - v1 = Vector(3, 3, 3)
v1 * 3 = Vector(3, 6, 9)
len(v1) = 3
v1[0] = 1
v1 == Vector(1,2,3): True
```

## Common Mistakes

### Forgetting to Call super().__init__() in the Child

**Wrong:**

```
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        self.breed = breed  # Forgot super().__init__(name)!

d = Dog("Rex", "Labrador")
print(d.breed)   # Labrador
print(d.name)    # AttributeError: 'Dog' object has no attribute 'name'
```

AttributeError: 'Dog' object has no attribute 'name'

**Correct:**

```
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Initialize parent's attributes
        self.breed = breed

d = Dog("Rex", "Labrador")
print(d.breed)  # Labrador
print(d.name)   # Rex
```

If the child defines `__init__`, it replaces (does not extend) the parent's `__init__`. The parent's initialization code does not run unless you explicitly call `super().__init__()`.

### Wrong MRO Assumption in Multiple Inheritance

**Wrong:**

```
class A:
    def method(self):
        return "A"

class B(A):
    pass  # Inherits method from A

class C(A):
    def method(self):
        return "C"

class D(B, C):
    pass

d = D()
print(d.method())  # Expecting 'A' because B inherits from A?
```

No error, but the output is 'C', not 'A' as expected.

**Correct:**

```
# The MRO is D -> B -> C -> A -> object
# B does not define method(), so Python continues to C
# C defines method(), so 'C' is returned

d = D()
print(d.method())  # C
print([cls.__name__ for cls in D.__mro__])  # ['D', 'B', 'C', 'A', 'object']
```

The MRO is D -> B -> C -> A. Python looks in D (not found), then B (not found, B just inherits from A), then C (found!). C's method is called, not A's. The MRO follows C3 linearization, not a simple depth-first search.

### Using isinstance() Check Instead of Polymorphism

**Wrong:**

```
def get_sound(animal):
    if isinstance(animal, Dog):
        return "Woof"
    elif isinstance(animal, Cat):
        return "Meow"
    elif isinstance(animal, Bird):
        return "Tweet"
    # Adding new animal requires changing this function!
```

No error, but this violates the Open/Closed principle. Every new animal type requires modifying get_sound().

**Correct:**

```
class Animal:
    def sound(self):
        raise NotImplementedError

class Dog(Animal):
    def sound(self):
        return "Woof"

class Cat(Animal):
    def sound(self):
        return "Meow"

# Adding new animals requires NO changes to existing code
for animal in [Dog(), Cat()]:
    print(animal.sound())  # Polymorphism!
```

If you find yourself writing isinstance() chains, you probably need polymorphism instead. Let each class define its own behavior through method overriding. New types can be added without modifying existing code.

### Not Implementing All Abstract Methods

**Wrong:**

```
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):  # Only implements area, not perimeter!
        return 3.14 * self.radius ** 2

c = Circle(5)  # TypeError: Can't instantiate abstract class
```

TypeError: Can't instantiate abstract class Circle with abstract method perimeter

**Correct:**

```
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14 * self.radius

c = Circle(5)  # Works!
```

If a class inherits from an ABC and does not implement all abstract methods, it too is abstract and cannot be instantiated. You must implement every `@abstractmethod` from the parent.

## Summary

- Inheritance creates a new class from an existing one using class Child(Parent) syntax. The child inherits all attributes and methods of the parent. This represents an IS-A relationship.
- super() delegates method calls to the parent class. Use super().__init__() in the child's __init__ to initialize inherited attributes. Without it, the parent's initialization code does not run.
- Method overriding replaces a parent's method by defining a method with the same name in the child class. The child's version is called instead of the parent's.
- Multiple inheritance allows a class to inherit from several parents: class D(B, C). Python uses the C3 linearization algorithm to determine the Method Resolution Order (MRO).
- The MRO defines the order in which Python searches for methods: check the class itself, then parents left to right, using C3 linearization. Inspect with ClassName.__mro__ or ClassName.mro().
- isinstance(obj, Class) checks if obj is an instance of Class or its subclasses. issubclass(Child, Parent) checks if Child inherits from Parent. Both consider the full inheritance chain.
- Polymorphism means the same method name produces different behavior depending on the object's type. It allows writing generic code that works with any subclass.
- Duck typing: Python does not require inheritance for polymorphism. If an object has the required methods, it works. 'If it walks like a duck and quacks like a duck, it is a duck.'
- Abstract Base Classes (from abc import ABC, abstractmethod) define interfaces that subclasses must implement. Abstract classes cannot be instantiated directly.
- Mixins are small classes designed to be inherited alongside other classes, adding specific functionality (like serialization or logging) without being standalone classes.
- Operator overloading uses special methods (__add__, __sub__, __mul__, __len__, __getitem__, __eq__, __lt__) to define how operators work with custom objects.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/inheritance-and-polymorphism/*
*Practice questions: https://learn.modernagecoders.com/resources/python/inheritance-and-polymorphism/practice/*
