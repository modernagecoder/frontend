---
title: "Practice: Introduction to Design Patterns"
description: "57 practice problems for Introduction to Design Patterns in Java"
slug: design-patterns-introduction-practice
canonical: https://learn.modernagecoders.com/resources/java/design-patterns-introduction/practice
category: "Java"
---
# Practice: Introduction to Design Patterns

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```java
public enum Config {
    INSTANCE;
    private int value = 0;
    public void set(int v) { value = v; }
    public int get() { return value; }
}

Config c1 = Config.INSTANCE;
Config c2 = Config.INSTANCE;
c1.set(42);
System.out.println(c2.get());
```

*Hint:* Enum constants are singletons. c1 and c2 are the same object.

**Answer:** `42`

`c1` and `c2` both reference the same `INSTANCE` enum constant. Setting value to 42 through c1 is visible through c2 because they are the same object.

### Q2. [Easy] What is the output?

```java
class Singleton {
    private static Singleton instance = new Singleton();
    private int count = 0;
    private Singleton() { count++; }
    public static Singleton getInstance() { return instance; }
    public int getCount() { return count; }
}

Singleton s1 = Singleton.getInstance();
Singleton s2 = Singleton.getInstance();
System.out.println(s1 == s2);
System.out.println(s1.getCount());
```

*Hint:* The constructor runs only once (eager initialization).

**Answer:** `true`
`1`

Eager initialization creates the instance at class loading time. The constructor runs once, setting count to 1. Both `s1` and `s2` reference the same instance (==  true). `getCount()` returns 1.

### Q3. [Easy] What is the output?

```java
interface Animal { String speak(); }
class Dog implements Animal { public String speak() { return "Woof"; } }
class Cat implements Animal { public String speak() { return "Meow"; } }

class AnimalFactory {
    static Animal create(String type) {
        if (type.equals("dog")) return new Dog();
        if (type.equals("cat")) return new Cat();
        throw new IllegalArgumentException("Unknown");
    }
}

Animal a = AnimalFactory.create("cat");
System.out.println(a.speak());
```

*Hint:* The factory creates a Cat when given "cat".

**Answer:** `Meow`

The factory receives "cat" and returns a new `Cat` object. `a.speak()` calls Cat's speak() method, returning "Meow".

### Q4. [Easy] What is the output?

```java
interface Greeting { void greet(String name); }

class Formal implements Greeting {
    public void greet(String name) { System.out.println("Good day, " + name); }
}
class Casual implements Greeting {
    public void greet(String name) { System.out.println("Hey, " + name + "!"); }
}

Greeting g = new Casual();
g.greet("Arjun");
g = new Formal();
g.greet("Arjun");
```

*Hint:* The strategy (greeting style) changes at runtime.

**Answer:** `Hey, Arjun!`
`Good day, Arjun`

First, `g` is a Casual greeting. Then it is reassigned to Formal. The behavior changes based on the current implementation -- this is the Strategy pattern.

### Q5. [Medium] What is the output?

```java
class Builder {
    private String name = "";
    private int value = 0;
    Builder name(String n) { name = n; return this; }
    Builder value(int v) { value = v; return this; }
    String build() { return name + ":" + value; }
}

String result = new Builder().name("test").value(42).build();
System.out.println(result);
```

*Hint:* Each method returns 'this' for chaining.

**Answer:** `test:42`

Method chaining: `name("test")` sets name and returns the builder. `value(42)` sets value and returns the builder. `build()` combines them into "test:42".

### Q6. [Medium] What is the output?

```java
interface Observer { void update(String msg); }

class Subject {
    List observers = new ArrayList<>();
    void add(Observer o) { observers.add(o); }
    void notifyAll(String msg) {
        for (Observer o : observers) o.update(msg);
    }
}

Subject s = new Subject();
s.add(msg -> System.out.println("A: " + msg));
s.add(msg -> System.out.println("B: " + msg));
s.notifyAll("Hello");
```

*Hint:* Two observers are registered. Both receive the notification.

**Answer:** `A: Hello`
`B: Hello`

Two lambda observers are registered. When `notifyAll("Hello")` is called, both are invoked in order, printing "A: Hello" and "B: Hello".

### Q7. [Medium] What happens when this code runs?

```java
class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) instance = new Singleton();
        return instance;
    }
}

// Called from two threads simultaneously:
// Thread 1: Singleton.getInstance()
// Thread 2: Singleton.getInstance()
```

*Hint:* This lazy initialization is not thread-safe.

**Answer:** Both threads could see `instance == null` simultaneously and create two separate instances. This violates the Singleton contract. The first thread creates one instance, the second creates another.

Without synchronization, two threads can interleave the null check and the assignment. Thread 1 checks null (true), then Thread 2 checks null (also true, because Thread 1 has not finished creating yet). Both create instances. Use double-checked locking with `volatile` or enum Singleton to fix.

### Q8. [Medium] What is the difference between the Factory pattern and the Builder pattern?

*Hint:* Think about what problem each solves.

**Answer:** The **Factory** pattern selects which class to instantiate based on input (choosing between Circle, Rectangle, Triangle). The **Builder** pattern constructs a single complex object step by step with many optional parameters (setting name, email, phone, address on a Student). Factory answers 'which type?' while Builder answers 'how to configure it?'.

Factory: one method call, returns different types. Builder: multiple method calls (chaining), returns one type with different configurations. Use Factory when you have a family of related classes. Use Builder when one class has many optional fields.

### Q9. [Hard] Why is the enum Singleton considered the best implementation? What problems does it solve that other approaches do not?

*Hint:* Think about reflection, serialization, and thread safety.

**Answer:** Enum Singleton solves three problems: (1) **Thread safety**: the JVM guarantees that enum instances are created exactly once in a thread-safe manner. (2) **Serialization safety**: enum deserialization always returns the same instance (Java handles this specially). Other Singletons may create a new instance during deserialization. (3) **Reflection safety**: you cannot create new enum instances via reflection (the JVM prevents it). Other Singletons can be broken by `Constructor.setAccessible(true)`.

Joshua Bloch (Effective Java, Item 3) recommends the enum approach as the simplest and most robust Singleton. The JVM handles all the edge cases that other approaches must manually address.

### Q10. [Hard] When should you NOT use the Singleton pattern?

*Hint:* Think about testability and coupling.

**Answer:** Avoid Singleton when: (1) You need testability -- Singletons are hard to mock/stub in unit tests because they carry global state. (2) You need different configurations -- Singleton provides one fixed instance, which cannot be configured differently per context. (3) The class does not truly need to be unique. Prefer **dependency injection** -- let a DI container manage singleton scope instead of hardcoding it into the class. This allows easy substitution for testing and different environments.

Singleton overuse is an anti-pattern. In modern Java development (Spring, Guice), dependency injection containers manage object lifecycle. You get singleton behavior through container configuration, not the Singleton pattern.

### Q11. [Hard] How does the Observer pattern support the Open/Closed Principle?

*Hint:* Think about adding new observers without modifying the subject.

**Answer:** The Open/Closed Principle states that classes should be open for extension but closed for modification. The Observer pattern supports this because you can add new observer types (new classes implementing the Observer interface) without modifying the Subject class. The Subject only knows the Observer interface, not concrete types. Adding an SMS notifier, Slack notifier, or any other observer requires zero changes to the Subject.

The key is that the Subject depends on an abstraction (the Observer interface), not concrete implementations. Any new implementation can be plugged in at runtime.

## Mixed Questions

### Q1. [Easy] What is the output?

```java
class Logger {
    private static final Logger INSTANCE = new Logger();
    private int logCount = 0;
    private Logger() {}
    static Logger getInstance() { return INSTANCE; }
    void log(String msg) {
        logCount++;
        System.out.println(logCount + ": " + msg);
    }
}

Logger.getInstance().log("Start");
Logger.getInstance().log("Process");
Logger.getInstance().log("End");
```

*Hint:* All three calls use the same Singleton instance.

**Answer:** `1: Start`
`2: Process`
`3: End`

All three `getInstance()` calls return the same object. `logCount` increments across calls: 1, 2, 3.

### Q2. [Easy] What is the output?

```java
interface Formatter { String format(String text); }
class Upper implements Formatter { public String format(String t) { return t.toUpperCase(); } }
class Lower implements Formatter { public String format(String t) { return t.toLowerCase(); } }

Formatter f = new Upper();
System.out.println(f.format("Hello"));
f = new Lower();
System.out.println(f.format("Hello"));
```

*Hint:* The strategy (formatter) changes at runtime.

**Answer:** `HELLO`
`hello`

First, the Upper strategy transforms to uppercase. Then the Lower strategy transforms to lowercase. The behavior changes based on which implementation is assigned.

### Q3. [Medium] What is the output?

```java
class Pizza {
    String size, crust;
    boolean cheese, pepperoni;
    public String toString() { return size + "/" + crust
        + (cheese ? "+cheese" : "") + (pepperoni ? "+pepperoni" : ""); }
    static class Builder {
        String size, crust = "thin";
        boolean cheese, pepperoni;
        Builder(String size) { this.size = size; }
        Builder crust(String c) { crust = c; return this; }
        Builder cheese() { cheese = true; return this; }
        Builder pepperoni() { pepperoni = true; return this; }
        Pizza build() {
            Pizza p = new Pizza(); p.size = size; p.crust = crust;
            p.cheese = cheese; p.pepperoni = pepperoni; return p;
        }
    }
}

Pizza p = new Pizza.Builder("Large").cheese().pepperoni().build();
System.out.println(p);
```

*Hint:* Default crust is "thin". cheese() and pepperoni() are called.

**Answer:** `Large/thin+cheese+pepperoni`

The Builder starts with size="Large" and default crust="thin". `cheese()` sets cheese=true. `pepperoni()` sets pepperoni=true. `build()` creates the Pizza. toString formats it.

### Q4. [Medium] What is the output?

```java
interface Calculator { int compute(int a, int b); }

class Add implements Calculator { public int compute(int a, int b) { return a + b; } }
class Multiply implements Calculator { public int compute(int a, int b) { return a * b; } }

class Engine {
    Calculator strategy;
    void setStrategy(Calculator c) { strategy = c; }
    int execute(int a, int b) { return strategy.compute(a, b); }
}

Engine e = new Engine();
e.setStrategy(new Add());
System.out.println(e.execute(3, 4));
e.setStrategy(new Multiply());
System.out.println(e.execute(3, 4));
```

*Hint:* The strategy changes from Add to Multiply.

**Answer:** `7`
`12`

First execution uses Add: 3 + 4 = 7. Second uses Multiply: 3 * 4 = 12. Same engine, different behavior based on the strategy.

### Q5. [Hard] What is the output?

```java
interface Observer { void notify(int val); }
class Subject {
    List obs = new ArrayList<>();
    int value;
    void add(Observer o) { obs.add(o); }
    void remove(Observer o) { obs.remove(o); }
    void setValue(int v) {
        value = v;
        obs.forEach(o -> o.notify(v));
    }
}

Subject s = new Subject();
Observer o1 = v -> System.out.println("O1: " + v);
Observer o2 = v -> System.out.println("O2: " + v);
s.add(o1);
s.add(o2);
s.setValue(10);
s.remove(o1);
s.setValue(20);
```

*Hint:* o1 is removed before the second setValue call.

**Answer:** `O1: 10`
`O2: 10`
`O2: 20`

First setValue(10): both o1 and o2 are notified. Then o1 is removed. Second setValue(20): only o2 is notified. This demonstrates the dynamic subscribe/unsubscribe behavior of the Observer pattern.

### Q6. [Easy] What are the three categories of design patterns defined by the Gang of Four?

*Hint:* Think about creating, composing, and communicating.

**Answer:** (1) **Creational**: patterns for object creation (Singleton, Factory, Builder, Prototype, Abstract Factory). (2) **Structural**: patterns for composing objects into larger structures (Adapter, Decorator, Proxy, Facade, Composite). (3) **Behavioral**: patterns for object communication and responsibility distribution (Observer, Strategy, Command, Iterator, State).

Creational = how objects are born. Structural = how objects are organized. Behavioral = how objects interact. Each category addresses a different aspect of software design.

### Q7. [Medium] What real-world Java framework uses the Observer pattern, and how?

*Hint:* Think about event handling in Java GUI or Spring.

**Answer:** Multiple frameworks use Observer: (1) **Java Swing/AWT**: ActionListener, MouseListener are observers registered on GUI components (subjects). (2) **Spring Framework**: ApplicationListener observes ApplicationEvents published by the event system. (3) **Java Beans**: PropertyChangeListener observes property changes. The common theme is decoupling event producers from event consumers.

The Observer pattern is fundamental to event-driven programming. Any system where components need to react to changes in other components without tight coupling uses some form of this pattern.

### Q8. [Hard] Compare the Singleton pattern with dependency injection. When would you prefer one over the other?

*Hint:* Think about testability and coupling.

**Answer:** **Singleton pattern**: hardcodes single-instance behavior into the class. Simple but creates tight coupling (code directly calls `getInstance()`). Difficult to mock in tests. **Dependency injection**: a DI container (like Spring) manages the lifecycle. The class receives its dependencies through the constructor. Singleton scope is a container configuration, not a class design choice. Prefer DI when: testability matters, different environments need different configurations, or you use a framework (Spring, Guice). Prefer Singleton pattern when: no DI framework is available and you genuinely need a single global instance.

In modern Java development, DI has largely replaced the Singleton pattern. Spring's default bean scope is singleton -- you get single-instance behavior without any Singleton boilerplate, and the class remains easily testable with mock dependencies.

## Multiple Choice Questions

### Q1. [Easy] What does the Singleton pattern guarantee?

A. A class can only have one method
B. A class has exactly one instance with global access
C. A class cannot be inherited
D. A class is immutable

**Answer:** B

**B is correct.** Singleton ensures exactly one instance of the class exists and provides a global access point (usually through `getInstance()`).

### Q2. [Easy] What is the key element that prevents external instantiation in Singleton?

A. A static variable
B. A private constructor
C. A final class
D. An abstract method

**Answer:** B

**B is correct.** A private constructor prevents code outside the class from using `new` to create instances. Only the class itself (through `getInstance()`) can create the instance.

### Q3. [Easy] Which pattern creates objects without exposing the creation logic to the client?

A. Observer
B. Strategy
C. Factory
D. Builder

**Answer:** C

**C is correct.** The Factory pattern hides object creation behind a factory method. The client requests an object by type and receives it without knowing which concrete class was instantiated.

### Q4. [Easy] What problem does the Builder pattern solve?

A. Creating a single global instance
B. Constructing complex objects with many optional parameters
C. Notifying multiple objects about changes
D. Selecting algorithms at runtime

**Answer:** B

**B is correct.** Builder solves the problem of constructing objects with many optional parameters. It avoids telescoping constructors and produces readable, immutable objects.

### Q5. [Easy] The Gang of Four book organizes patterns into how many categories?

A. 2
B. 3
C. 4
D. 5

**Answer:** B

**B is correct.** The GoF organizes 23 patterns into three categories: Creational, Structural, and Behavioral.

### Q6. [Medium] Why is the enum Singleton recommended over other implementations?

A. It is faster
B. It is thread-safe, serialization-safe, and reflection-proof
C. It uses less memory
D. It can have multiple instances

**Answer:** B

**B is correct.** Enum Singleton is inherently thread-safe (JVM guarantee), serialization-safe (always returns the same instance), and reflection-proof (cannot create new enum instances via reflection).

### Q7. [Medium] In the Observer pattern, what is the Subject?

A. The object that receives notifications
B. The object that maintains a list of observers and notifies them
C. The interface that observers implement
D. The event data

**Answer:** B

**B is correct.** The Subject (or Observable) maintains a list of observers, and when its state changes, it notifies all of them. Observers subscribe to and unsubscribe from the Subject.

### Q8. [Medium] What technique does the Builder pattern use to make code readable?

A. Inheritance
B. Method chaining (each setter returns 'this')
C. Recursion
D. Static imports

**Answer:** B

**B is correct.** Each setter method in the Builder returns `this`, enabling method chaining: `builder.name("X").age(20).build()`. This creates a fluent, readable API.

### Q9. [Medium] Which pattern allows selecting an algorithm at runtime?

A. Singleton
B. Factory
C. Builder
D. Strategy

**Answer:** D

**D is correct.** The Strategy pattern encapsulates algorithms into interchangeable classes. The client selects which algorithm to use at runtime by setting the strategy object.

### Q10. [Medium] What is the volatile keyword used for in double-checked locking Singleton?

A. To make the variable faster to access
B. To prevent the compiler from reordering instructions that could expose a partially constructed object
C. To make the variable thread-local
D. To prevent the variable from being garbage collected

**Answer:** B

**B is correct.** Without `volatile`, the JVM might reorder the assignment and constructor call, allowing a thread to see a non-null but incompletely initialized instance. `volatile` prevents this reordering.

### Q11. [Hard] Which is an anti-pattern to avoid?

A. Using Factory to create objects
B. Using Builder for complex construction
C. Using Singleton for every service class (Singleton overuse)
D. Using Observer for event notifications

**Answer:** C

**C is correct.** Making every service a Singleton creates tight coupling, makes testing difficult, and introduces global state. Use dependency injection instead.

### Q12. [Hard] What is the difference between Factory Method and Abstract Factory?

A. There is no difference
B. Factory Method creates one product type; Abstract Factory creates families of related products
C. Abstract Factory is simpler than Factory Method
D. Factory Method uses inheritance; Abstract Factory does not

**Answer:** B

**B is correct.** Factory Method creates one type of product. Abstract Factory creates families of related products (e.g., a UI factory that creates both buttons and checkboxes for a specific platform).

### Q13. [Hard] How can reflection break a Singleton (non-enum)?

A. Reflection can delete the instance
B. Reflection can set the private constructor to accessible and create a new instance
C. Reflection can change the class name
D. Reflection cannot affect Singletons

**Answer:** B

**B is correct.** `Constructor.setAccessible(true)` bypasses the private modifier, allowing creation of new instances. Enum Singletons are immune because the JVM prevents enum instantiation via reflection.

### Q14. [Hard] Which SOLID principle does the Strategy pattern primarily support?

A. Single Responsibility Principle
B. Open/Closed Principle
C. Liskov Substitution Principle
D. Interface Segregation Principle

**Answer:** B

**B is correct.** The Strategy pattern supports the Open/Closed Principle: new algorithms (strategies) can be added by creating new classes, without modifying existing client code or the context class.

### Q15. [Medium] What is the return type of each setter method in a Builder class?

A. void
B. The type of the field being set
C. The Builder type itself (for method chaining)
D. The final product type

**Answer:** C

**C is correct.** Each setter returns `this` (the Builder instance) to enable method chaining. Only the `build()` method returns the final product.

### Q16. [Easy] Which of these is a Behavioral design pattern?

A. Singleton
B. Builder
C. Observer
D. Factory

**Answer:** C

**C is correct.** Observer is a Behavioral pattern (how objects communicate). Singleton, Builder, and Factory are Creational patterns (how objects are created).

## Coding Challenges

### Challenge 1. Enum Singleton Logger

**Difficulty:** Easy

Implement a Logger as an enum Singleton with methods: info(msg), warn(msg), error(msg). Each method should print the log level, timestamp (simplified as a counter), and message. Verify that multiple references point to the same instance.

**Constraints:**

- Use enum Singleton. Include a message counter.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1] INFO: Application started
[2] WARN: Low memory
[3] ERROR: NullPointerException
Same instance: true
```

**Solution:**

```java
public enum Logger {
    INSTANCE;
    private int counter = 0;

    public void info(String msg) { log("INFO", msg); }
    public void warn(String msg) { log("WARN", msg); }
    public void error(String msg) { log("ERROR", msg); }

    private void log(String level, String msg) {
        counter++;
        System.out.printf("[%d] %s: %s%n", counter, level, msg);
    }

    public static void main(String[] args) {
        Logger.INSTANCE.info("Application started");
        Logger.INSTANCE.warn("Low memory");
        Logger.INSTANCE.error("NullPointerException");
        System.out.println("Same instance: " + (Logger.INSTANCE == Logger.INSTANCE));
    }
}
```

### Challenge 2. Shape Factory with Area Calculation

**Difficulty:** Medium

Create a Shape interface with getArea() and getName(). Implement Circle, Rectangle, and Triangle. Build a ShapeFactory that creates shapes from string input. Calculate and print the area of each shape.

**Constraints:**

- Use the Factory pattern. Return the Shape interface type, not concrete types.

**Sample input:**

```
create("circle", 5), create("rectangle", 4, 6), create("triangle", 3, 8)
```

**Sample output:**

```
Circle: area = 78.54
Rectangle: area = 24.00
Triangle: area = 12.00
```

**Solution:**

```java
interface Shape {
    double getArea();
    String getName();
}

class Circle implements Shape {
    double radius;
    Circle(double r) { radius = r; }
    public double getArea() { return Math.PI * radius * radius; }
    public String getName() { return "Circle"; }
}

class Rectangle implements Shape {
    double width, height;
    Rectangle(double w, double h) { width = w; height = h; }
    public double getArea() { return width * height; }
    public String getName() { return "Rectangle"; }
}

class Triangle implements Shape {
    double base, height;
    Triangle(double b, double h) { base = b; height = h; }
    public double getArea() { return 0.5 * base * height; }
    public String getName() { return "Triangle"; }
}

class ShapeFactory {
    static Shape create(String type, double... dims) {
        return switch (type.toLowerCase()) {
            case "circle" -> new Circle(dims[0]);
            case "rectangle" -> new Rectangle(dims[0], dims[1]);
            case "triangle" -> new Triangle(dims[0], dims[1]);
            default -> throw new IllegalArgumentException("Unknown: " + type);
        };
    }
}

public class FactoryChallenge {
    public static void main(String[] args) {
        Shape[] shapes = {
            ShapeFactory.create("circle", 5),
            ShapeFactory.create("rectangle", 4, 6),
            ShapeFactory.create("triangle", 3, 8)
        };
        for (Shape s : shapes) {
            System.out.printf("%s: area = %.2f%n", s.getName(), s.getArea());
        }
    }
}
```

### Challenge 3. Student Builder with Validation

**Difficulty:** Medium

Create a Student class using the Builder pattern. Required fields: name and age. Optional: email, phone, department, gpa. The build() method should validate: name must not be empty, age must be 16-30, gpa (if set) must be 0.0-10.0. Throw IllegalArgumentException for invalid data.

**Constraints:**

- Use Builder pattern with method chaining. Validate in build(). Make Student immutable (final fields).

**Sample input:**

```
Builder("Arjun", 20).email("arjun@email.com").gpa(8.5).build()
```

**Sample output:**

```
Student{name=Arjun, age=20, email=arjun@email.com, gpa=8.5}
```

**Solution:**

```java
public class Student {
    private final String name;
    private final int age;
    private final String email;
    private final String phone;
    private final String department;
    private final double gpa;

    private Student(Builder b) {
        this.name = b.name; this.age = b.age;
        this.email = b.email; this.phone = b.phone;
        this.department = b.department; this.gpa = b.gpa;
    }

    public String toString() {
        return String.format("Student{name=%s, age=%d, email=%s, gpa=%.1f}", name, age, email, gpa);
    }

    public static class Builder {
        private final String name;
        private final int age;
        private String email = ""; private String phone = "";
        private String department = ""; private double gpa = -1;

        public Builder(String name, int age) { this.name = name; this.age = age; }
        public Builder email(String e) { email = e; return this; }
        public Builder phone(String p) { phone = p; return this; }
        public Builder department(String d) { department = d; return this; }
        public Builder gpa(double g) { gpa = g; return this; }

        public Student build() {
            if (name == null || name.isEmpty()) throw new IllegalArgumentException("Name required");
            if (age < 16 || age > 30) throw new IllegalArgumentException("Age must be 16-30");
            if (gpa != -1 && (gpa < 0 || gpa > 10)) throw new IllegalArgumentException("GPA must be 0-10");
            return new Student(this);
        }
    }

    public static void main(String[] args) {
        Student s = new Student.Builder("Arjun", 20).email("arjun@email.com").gpa(8.5).build();
        System.out.println(s);
        try {
            new Student.Builder("", 20).build();
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Challenge 4. Event System with Observer Pattern

**Difficulty:** Hard

Build an EventBus that supports multiple event types (strings). Observers subscribe to specific event types. When an event is published, only observers subscribed to that type are notified. Support subscribe, unsubscribe, and publish.

**Constraints:**

- Use Observer pattern with Map<String, List> for topic-based routing.

**Sample input:**

```
Subscribe o1 to 'login', o2 to 'purchase', o3 to both. Publish 'login' and 'purchase'.
```

**Sample output:**

```
On login: o1 notified, o3 notified
On purchase: o2 notified, o3 notified
```

**Solution:**

```java
import java.util.*;

interface EventListener {
    void onEvent(String eventType, String data);
}

class EventBus {
    private Map<String, List<EventListener>> subscribers = new HashMap<>();

    void subscribe(String event, EventListener listener) {
        subscribers.computeIfAbsent(event, k -> new ArrayList<>()).add(listener);
    }

    void unsubscribe(String event, EventListener listener) {
        List<EventListener> list = subscribers.get(event);
        if (list != null) list.remove(listener);
    }

    void publish(String event, String data) {
        List<EventListener> list = subscribers.getOrDefault(event, Collections.emptyList());
        for (EventListener l : list) l.onEvent(event, data);
    }
}

public class EventSystemChallenge {
    public static void main(String[] args) {
        EventBus bus = new EventBus();

        EventListener authLogger = (type, data) -> System.out.println("AuthLog: [" + type + "] " + data);
        EventListener purchaseTracker = (type, data) -> System.out.println("Purchase: [" + type + "] " + data);
        EventListener allEvents = (type, data) -> System.out.println("Monitor: [" + type + "] " + data);

        bus.subscribe("login", authLogger);
        bus.subscribe("purchase", purchaseTracker);
        bus.subscribe("login", allEvents);
        bus.subscribe("purchase", allEvents);

        System.out.println("--- Login Event ---");
        bus.publish("login", "User Arjun logged in");
        System.out.println("\n--- Purchase Event ---");
        bus.publish("purchase", "Order #1234 placed");
    }
}
```

### Challenge 5. Discount Strategy System

**Difficulty:** Hard

Create a shopping discount system using the Strategy pattern. Implement three discount strategies: NoDiscount, PercentageDiscount(percent), and FlatDiscount(amount). A ShoppingCart should accept a discount strategy and calculate the final price after discount.

**Constraints:**

- Use Strategy pattern with a DiscountStrategy interface. Support switching strategies at runtime.

**Sample input:**

```
Cart with items totaling 1000. Apply 10% discount, then flat 200 discount.
```

**Sample output:**

```
No discount: 1000.00
10% discount: 900.00
Flat 200 discount: 800.00
```

**Solution:**

```java
import java.util.*;

interface DiscountStrategy {
    double applyDiscount(double total);
    String describe();
}

class NoDiscount implements DiscountStrategy {
    public double applyDiscount(double total) { return total; }
    public String describe() { return "No discount"; }
}

class PercentageDiscount implements DiscountStrategy {
    private double percent;
    PercentageDiscount(double p) { percent = p; }
    public double applyDiscount(double total) { return total * (1 - percent / 100); }
    public String describe() { return percent + "% discount"; }
}

class FlatDiscount implements DiscountStrategy {
    private double amount;
    FlatDiscount(double a) { amount = a; }
    public double applyDiscount(double total) { return Math.max(0, total - amount); }
    public String describe() { return "Flat " + (int) amount + " discount"; }
}

class ShoppingCart {
    private List<Double> items = new ArrayList<>();
    private DiscountStrategy strategy = new NoDiscount();

    void addItem(double price) { items.add(price); }
    void setDiscount(DiscountStrategy s) { strategy = s; }

    double checkout() {
        double total = items.stream().mapToDouble(Double::doubleValue).sum();
        double finalPrice = strategy.applyDiscount(total);
        System.out.printf("%s: %.2f -> %.2f%n", strategy.describe(), total, finalPrice);
        return finalPrice;
    }
}

public class DiscountChallenge {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem(500); cart.addItem(300); cart.addItem(200);

        cart.setDiscount(new NoDiscount());
        cart.checkout();

        cart.setDiscount(new PercentageDiscount(10));
        cart.checkout();

        cart.setDiscount(new FlatDiscount(200));
        cart.checkout();
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/design-patterns-introduction/*
