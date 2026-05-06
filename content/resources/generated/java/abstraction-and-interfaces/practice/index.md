---
title: "Practice: Abstraction - Abstract Classes and Interfaces"
description: "49 practice problems for Abstraction - Abstract Classes and Interfaces in Java"
slug: abstraction-and-interfaces-practice
canonical: https://learn.modernagecoders.com/resources/java/abstraction-and-interfaces/practice
category: "Java"
---
# Practice: Abstraction - Abstract Classes and Interfaces

**Total questions:** 49

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
abstract class Shape {
    abstract double area();
}
class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return 3.14 * r * r; }
}
public class Main {
    public static void main(String[] args) {
        Shape s = new Circle(5);
        System.out.println(s.area());
    }
}
```

*Hint:* Circle implements area(). The object is Circle, reference is Shape.

**Answer:** `78.5`

The `Circle` class implements `area()` returning `3.14 * 5 * 5 = 78.5`. Even though the reference is `Shape`, dynamic dispatch calls `Circle`'s version.

### Q2. [Easy] Does this code compile?

```
abstract class Animal {
    abstract void sound();
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Animal();
    }
}
```

*Hint:* Can you instantiate an abstract class?

**Answer:** No, it does not compile. `Compilation error: Animal is abstract; cannot be instantiated.`

Abstract classes cannot be instantiated with `new`. You must create a concrete subclass that implements all abstract methods, then instantiate that subclass.

### Q3. [Easy] What is the output?

```
interface Greetable {
    void greet();
}
class HelloGreeter implements Greetable {
    public void greet() {
        System.out.println("Hello!");
    }
}
public class Main {
    public static void main(String[] args) {
        Greetable g = new HelloGreeter();
        g.greet();
    }
}
```

*Hint:* HelloGreeter implements the interface method. The reference is the interface type.

**Answer:** `Hello!`

`HelloGreeter` implements `Greetable` and provides the `greet()` method. The interface reference `g` calls the implementation polymorphically.

### Q4. [Easy] What is the output?

```
interface Constants {
    int VALUE = 100;
}
public class Main {
    public static void main(String[] args) {
        System.out.println(Constants.VALUE);
        // Constants.VALUE = 200;  // Would this work?
    }
}
```

*Hint:* Interface variables are public static final by default.

**Answer:** `100`
The commented line would NOT work (compilation error: cannot assign a value to a final variable).

Interface variables are implicitly `public static final`. They are constants. `Constants.VALUE` prints 100. Attempting to reassign would cause a compilation error because it is final.

### Q5. [Easy] What is the output?

```
abstract class Base {
    void concrete() {
        System.out.println("Concrete method");
    }
    abstract void abstractMethod();
}
class Derived extends Base {
    void abstractMethod() {
        System.out.println("Implemented!");
    }
}
public class Main {
    public static void main(String[] args) {
        Base b = new Derived();
        b.concrete();
        b.abstractMethod();
    }
}
```

*Hint:* Abstract classes can have concrete methods that are inherited.

**Answer:** `Concrete method`
`Implemented!`

`concrete()` is inherited from `Base`. `abstractMethod()` is implemented in `Derived`. Both are called through the `Base` reference.

### Q6. [Medium] What is the output?

```
abstract class Animal {
    String name;
    Animal(String name) {
        this.name = name;
        System.out.println("Animal: " + name);
    }
    abstract void sound();
}
class Cat extends Animal {
    Cat(String name) {
        super(name);
        System.out.println("Cat: " + name);
    }
    void sound() { System.out.println(name + " says Meow"); }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Cat("Whiskers");
        a.sound();
    }
}
```

*Hint:* Abstract class constructors are called via super() from the subclass constructor.

**Answer:** `Animal: Whiskers`
`Cat: Whiskers`
`Whiskers says Meow`

Creating `new Cat("Whiskers")` calls `Cat`'s constructor, which calls `super(name)` first. The `Animal` constructor prints first, then `Cat`'s constructor body, then `sound()` is called.

### Q7. [Medium] What is the output?

```
interface A {
    default void show() { System.out.println("A"); }
}
interface B {
    default void show() { System.out.println("B"); }
}
class C implements A, B {
    public void show() {
        A.super.show();
        B.super.show();
    }
}
public class Main {
    public static void main(String[] args) {
        C c = new C();
        c.show();
    }
}
```

*Hint:* When two interfaces have the same default method, the class must override it. Use InterfaceName.super to call a specific one.

**Answer:** `A`
`B`

Both `A` and `B` have a `default show()`. Class `C` must override it to resolve the conflict. Using `A.super.show()` and `B.super.show()`, it calls both default implementations.

### Q8. [Medium] What is the output?

```
interface Calculable {
    int calculate(int a, int b);
    
    default void printResult(int a, int b) {
        System.out.println("Result: " + calculate(a, b));
    }
}
class Adder implements Calculable {
    public int calculate(int a, int b) { return a + b; }
}
class Multiplier implements Calculable {
    public int calculate(int a, int b) { return a * b; }
}
public class Main {
    public static void main(String[] args) {
        Calculable c1 = new Adder();
        Calculable c2 = new Multiplier();
        c1.printResult(3, 4);
        c2.printResult(3, 4);
    }
}
```

*Hint:* The default method calls the abstract method, which is resolved polymorphically.

**Answer:** `Result: 7`
`Result: 12`

The `default` method `printResult` calls the abstract `calculate` method. For `Adder`, `calculate` returns 3+4=7. For `Multiplier`, it returns 3*4=12. The default method acts as a template.

### Q9. [Medium] What is the output?

```
interface Util {
    static int doubleIt(int n) { return n * 2; }
}
class MyClass implements Util { }
public class Main {
    public static void main(String[] args) {
        System.out.println(Util.doubleIt(5));
        // MyClass m = new MyClass();
        // m.doubleIt(5);  // Would this work?
    }
}
```

*Hint:* Static methods in interfaces are called on the interface, not on implementing classes.

**Answer:** `10`
The commented call would NOT compile. Static interface methods are not inherited.

`Util.doubleIt(5)` returns 10. Static methods in interfaces are not inherited by implementing classes. You must call them on the interface itself: `Util.doubleIt()`, not `m.doubleIt()`.

### Q10. [Medium] What is the output?

```
abstract class AbstractLogger {
    abstract void log(String msg);
    
    void logWithTimestamp(String msg) {
        System.out.print("[LOG] ");
        log(msg);
    }
}
class ConsoleLogger extends AbstractLogger {
    void log(String msg) {
        System.out.println(msg);
    }
}
public class Main {
    public static void main(String[] args) {
        AbstractLogger logger = new ConsoleLogger();
        logger.log("Direct message");
        logger.logWithTimestamp("Timestamped message");
    }
}
```

*Hint:* logWithTimestamp is concrete and calls the abstract log() which is implemented in ConsoleLogger.

**Answer:** `Direct message`
`[LOG] Timestamped message`

`log()` directly prints the message. `logWithTimestamp()` prints "[LOG] " then calls `log()`, which prints the message on the same line via dynamic dispatch.

### Q11. [Hard] What is the output?

```
abstract class Base {
    Base() {
        System.out.println("Base init");
        init();
    }
    abstract void init();
}
class Child extends Base {
    int value = 5;
    
    Child() {
        System.out.println("Child init, value=" + value);
    }
    
    void init() {
        System.out.println("init called, value=" + value);
    }
}
public class Main {
    public static void main(String[] args) {
        Child c = new Child();
    }
}
```

*Hint:* The Base constructor calls init() before Child's fields are initialized.

**Answer:** `Base init`
`init called, value=0`
`Child init, value=5`

The `Base` constructor runs first, printing "Base init", then calls `init()`. Since the actual object is `Child`, `Child`'s `init()` runs. But `Child`'s field `value` has not been initialized yet (still default 0). Then `Child`'s constructor body runs with `value=5`.

### Q12. [Hard] Does this code compile? If yes, what is the output?

```
interface X {
    default void show() { System.out.println("X"); }
}
interface Y extends X {
    default void show() { System.out.println("Y"); }
}
class Z implements X, Y { }
public class Main {
    public static void main(String[] args) {
        Z z = new Z();
        z.show();
    }
}
```

*Hint:* Y extends X and overrides show(). Z implements both. Is there a conflict?

**Answer:** `Y`

There is no conflict because `Y extends X` and overrides `show()`. `Y`'s version is more specific. When `Z` implements both, it inherits `Y`'s `show()` (the most specific override). No explicit override in `Z` is needed.

### Q13. [Hard] What is the output?

```
@FunctionalInterface
interface Transformer {
    String transform(String s);
}
public class Main {
    static String applyTwice(Transformer t, String s) {
        return t.transform(t.transform(s));
    }
    public static void main(String[] args) {
        Transformer upper = s -> s.toUpperCase();
        Transformer addBang = s -> s + "!";

        System.out.println(applyTwice(upper, "hello"));
        System.out.println(applyTwice(addBang, "hi"));
    }
}
```

*Hint:* applyTwice applies the transformer twice. Upper on 'hello' then upper again.

**Answer:** `HELLO`
`hi!!`

`applyTwice(upper, "hello")`: "hello" -> "HELLO" -> "HELLO" (already uppercase). `applyTwice(addBang, "hi")`: "hi" -> "hi!" -> "hi!!" (two exclamation marks added).

### Q14. [Hard] What is the output?

```
interface Drawable { void draw(); }
interface Resizable { void resize(int factor); }

abstract class UIComponent implements Drawable {
    String id;
    UIComponent(String id) { this.id = id; }
}

class Button extends UIComponent implements Resizable {
    int size = 10;
    Button(String id) { super(id); }
    
    public void draw() { System.out.println("Button[" + id + "] size=" + size); }
    public void resize(int f) { size *= f; }
}

public class Main {
    public static void main(String[] args) {
        Button b = new Button("btn1");
        b.draw();
        b.resize(3);
        b.draw();
        
        Drawable d = b;
        d.draw();
        
        Resizable r = b;
        r.resize(2);
        d.draw();
    }
}
```

*Hint:* All references point to the same Button object. Changes through one affect all.

**Answer:** `Button[btn1] size=10`
`Button[btn1] size=30`
`Button[btn1] size=30`
`Button[btn1] size=60`

All variables reference the same `Button` object. `resize(3)` changes size to 30. `resize(2)` through the `Resizable` reference changes it to 60. `d.draw()` through the `Drawable` reference shows the updated size.

### Q15. [Hard] Does this code compile?

```
abstract class A {
    abstract void foo();
}
abstract class B extends A {
    abstract void bar();
}
class C extends B {
    void bar() { System.out.println("bar"); }
}
```

*Hint:* C extends B which extends A. Does C implement ALL abstract methods?

**Answer:** No, it does not compile. `C` must also implement `foo()` from `A`.

`B` extends `A` and is abstract, so it does not need to implement `foo()`. But `C` is concrete and must implement all inherited abstract methods: both `foo()` from `A` and `bar()` from `B`. `C` only implements `bar()`.

### Q16. [Hard] What is the output?

```
interface Processor {
    default String process(String input) {
        return input.trim();
    }
}
class UpperProcessor implements Processor {
    @Override
    public String process(String input) {
        String trimmed = Processor.super.process(input);
        return trimmed.toUpperCase();
    }
}
public class Main {
    public static void main(String[] args) {
        Processor p = new UpperProcessor();
        System.out.println(p.process("  hello world  "));
    }
}
```

*Hint:* The overriding method calls the default method via Processor.super, then converts to uppercase.

**Answer:** `HELLO WORLD`

`UpperProcessor` overrides `process()`. It calls `Processor.super.process(input)` to use the default method which trims whitespace ("  hello world  " -> "hello world"). Then `toUpperCase()` converts it to "HELLO WORLD".

## Mixed Questions

### Q1. [Easy] Can an abstract class have a constructor?

*Hint:* Think about how subclass constructors call super().

**Answer:** Yes, abstract classes can have constructors. They are called when a subclass is instantiated, via `super()`. The constructor initializes shared state (fields) for all subclasses.

Abstract classes cannot be instantiated directly, but their constructors run when a concrete subclass is created. The subclass constructor calls `super()` (explicitly or implicitly), which invokes the abstract class's constructor.

### Q2. [Easy] What is the key difference between `extends` and `implements`?

*Hint:* One is for classes/abstract classes, the other for interfaces.

**Answer:** `extends` is used for class-to-class inheritance (including abstract classes). `implements` is used when a class implements an interface. A class can extend only one class but implement multiple interfaces.

Syntax: `class Dog extends Animal` (inheriting from a class). `class Dog implements Pet, Trainable` (implementing interfaces). You can combine both: `class Dog extends Animal implements Pet`.

### Q3. [Easy] What is the output?

```
interface Speakable {
    void speak();
}
class Person implements Speakable {
    String name;
    Person(String name) { this.name = name; }
    public void speak() { System.out.println(name + " is speaking"); }
}
public class Main {
    public static void main(String[] args) {
        Speakable s = new Person("Arjun");
        s.speak();
    }
}
```

*Hint:* A Person object is referenced by a Speakable interface variable.

**Answer:** `Arjun is speaking`

`Person` implements `Speakable` and provides `speak()`. The interface reference `s` calls the implementation polymorphically.

### Q4. [Medium] What is the output?

```
abstract class Template {
    final void execute() {
        step1();
        step2();
        step3();
    }
    void step1() { System.out.println("Default step 1"); }
    abstract void step2();
    void step3() { System.out.println("Default step 3"); }
}
class MyProcess extends Template {
    void step2() { System.out.println("Custom step 2"); }
    void step3() { System.out.println("Custom step 3"); }
}
public class Main {
    public static void main(String[] args) {
        Template t = new MyProcess();
        t.execute();
    }
}
```

*Hint:* This is the Template Method design pattern. execute() is final, step2 is abstract, step3 is overridden.

**Answer:** `Default step 1`
`Custom step 2`
`Custom step 3`

`execute()` calls all three steps. `step1()` is not overridden, so the default runs. `step2()` is abstract and implemented by `MyProcess`. `step3()` is overridden by `MyProcess`. This is the Template Method pattern.

### Q5. [Medium] What is a marker interface? Give two examples.

*Hint:* Think about interfaces with zero methods.

**Answer:** A marker interface has no methods or constants. It 'marks' a class as having a certain property. Examples: `java.io.Serializable` (marks objects that can be serialized) and `java.lang.Cloneable` (marks objects that can be cloned). The JVM or framework checks for the marker using `instanceof`.

Marker interfaces provide metadata at the type level. `Serializable` tells the JVM that an object's state can be written to a stream. `Cloneable` tells `Object.clone()` that cloning is permitted. Without the marker, the operations throw exceptions.

### Q6. [Medium] What is the output?

```
interface Shape {
    double area();
    default String describe() {
        return "Shape with area " + area();
    }
}
class Square implements Shape {
    double side;
    Square(double s) { this.side = s; }
    public double area() { return side * side; }
}
public class Main {
    public static void main(String[] args) {
        Shape s = new Square(4);
        System.out.println(s.describe());
    }
}
```

*Hint:* The default method calls the abstract area(), which is resolved polymorphically.

**Answer:** `Shape with area 16.0`

The `default` method `describe()` calls `area()`, which is implemented by `Square` returning 4*4=16.0. The default method acts as a template that uses the abstract method's result.

### Q7. [Medium] Why were default methods added to interfaces in Java 8?

*Hint:* Think about backward compatibility.

**Answer:** Default methods were added to allow interface evolution without breaking existing implementations. Before Java 8, adding a new method to an interface would break all classes that implement it. With default methods, new methods can be added with a default implementation, and existing classes continue to work without changes.

For example, the `forEach()` method was added to `Iterable` in Java 8 as a default method. All existing `Iterable` implementations (ArrayList, HashSet, etc.) inherited it without needing code changes.

### Q8. [Hard] What is the output?

```
interface A {
    default void show() {
        System.out.println("A");
    }
}
class B implements A {
    public void show() {
        System.out.println("B");
    }
}
class C extends B {
}
public class Main {
    public static void main(String[] args) {
        A obj = new C();
        obj.show();
    }
}
```

*Hint:* C extends B which overrides the default method from A. C inherits B's version.

**Answer:** `B`

`B` overrides the default `show()` from `A`. `C` extends `B` and inherits `B`'s `show()`. The actual object is `C`, which uses `B`'s version. Dynamic dispatch prints "B".

### Q9. [Hard] What is the output?

```
abstract class Account {
    double balance;
    Account(double balance) { this.balance = balance; }
    
    abstract double interestRate();
    
    double futureValue(int years) {
        return balance * Math.pow(1 + interestRate(), years);
    }
}
class SavingsAccount extends Account {
    SavingsAccount(double bal) { super(bal); }
    double interestRate() { return 0.04; }
}
class FixedDeposit extends Account {
    FixedDeposit(double bal) { super(bal); }
    double interestRate() { return 0.07; }
}
public class Main {
    public static void main(String[] args) {
        Account[] accounts = {
            new SavingsAccount(10000),
            new FixedDeposit(10000)
        };
        for (Account a : accounts) {
            System.out.printf("%.2f at %.0f%% for 5 years = %.2f%n",
                a.balance, a.interestRate()*100, a.futureValue(5));
        }
    }
}
```

*Hint:* futureValue uses interestRate() which is abstract and resolved polymorphically.

**Answer:** `10000.00 at 4% for 5 years = 12166.53`
`10000.00 at 7% for 5 years = 14025.52`

`futureValue()` is a concrete method that calls the abstract `interestRate()`. For `SavingsAccount`, the rate is 0.04 (4%). For `FixedDeposit`, it is 0.07 (7%). Each polymorphic call produces different results.

### Q10. [Hard] What is the diamond problem and how does Java solve it?

*Hint:* Consider what happens when two parent classes have the same method.

**Answer:** The diamond problem occurs when a class inherits from two classes that share a common ancestor, creating ambiguity about which version of a method to use. Java avoids this by disallowing multiple class inheritance (single extends only). For interfaces with conflicting default methods, the implementing class MUST override the conflicting method to resolve the ambiguity.

If interface A and interface B both have `default void show()`, and class C implements both, C must override `show()`. Inside the override, C can call `A.super.show()` or `B.super.show()` to delegate to a specific interface's default.

### Q11. [Hard] What is the output?

```
interface Validator {
    boolean validate(String input);
    
    default Validator and(Validator other) {
        return input -> this.validate(input) && other.validate(input);
    }
}
public class Main {
    public static void main(String[] args) {
        Validator notEmpty = s -> !s.isEmpty();
        Validator shortEnough = s -> s.length() <= 10;
        Validator combined = notEmpty.and(shortEnough);
        
        System.out.println(combined.validate(""));
        System.out.println(combined.validate("Hello"));
        System.out.println(combined.validate("This is a very long string"));
    }
}
```

*Hint:* The and() default method returns a new Validator that requires both conditions to be true.

**Answer:** `false`
`true`
`false`

`combined` requires both not-empty AND length <= 10. "" is empty (fails first). "Hello" is not empty and length 5 (passes both). "This is a very long string" is not empty but length > 10 (fails second).

### Q12. [Medium] Can an abstract class implement an interface without providing method implementations?

*Hint:* Abstract classes can leave methods unimplemented.

**Answer:** Yes. An abstract class can implement an interface without providing implementations for the interface's abstract methods. The abstract class simply inherits those methods as abstract. The first concrete (non-abstract) subclass must implement all remaining abstract methods.

For example: `abstract class X implements Runnable { }` is valid even without implementing `run()`. The `run()` method remains abstract in `X`. Any concrete class extending `X` must implement `run()`.

## Multiple Choice Questions

### Q1. [Easy] Which keyword is used to define an abstract class in Java?

A. virtual
B. abstract
C. interface
D. abstraction

**Answer:** B

**B is correct.** The `abstract` keyword is placed before the `class` keyword: `abstract class MyClass { }`.

### Q2. [Easy] Which is true about interface variables?

A. They can be changed at runtime
B. They are public static final by default
C. They can be private
D. They are instance variables

**Answer:** B

**B is correct.** All variables in an interface are implicitly `public static final`. They are constants that must be initialized at declaration and cannot be changed.

### Q3. [Easy] How many classes can a Java class extend?

A. Zero
B. One
C. Two
D. Unlimited

**Answer:** B

**B is correct.** Java supports single inheritance for classes. A class can extend at most one other class. For multiple inheritance of type, use interfaces.

### Q4. [Easy] Can an abstract class have concrete (non-abstract) methods?

A. No, all methods must be abstract
B. Yes, it can mix abstract and concrete methods
C. Only static methods can be concrete
D. Only if it implements an interface

**Answer:** B

**B is correct.** Abstract classes can have both abstract methods (no body) and concrete methods (with body). This is one of their main advantages over interfaces (before Java 8).

### Q5. [Easy] Which keyword does a class use to implement an interface?

A. extends
B. implements
C. inherits
D. uses

**Answer:** B

**B is correct.** Classes use `implements` for interfaces: `class Dog implements Pet { }`. `extends` is used for class-to-class or interface-to-interface inheritance.

### Q6. [Medium] What is a functional interface?

A. An interface with no methods
B. An interface with exactly one abstract method
C. An interface with only default methods
D. An interface that extends Function

**Answer:** B

**B is correct.** A functional interface has exactly one abstract method. It can have any number of default and static methods. It can be used with lambda expressions.

### Q7. [Medium] When should you use an abstract class over an interface?

A. When you need multiple inheritance
B. When you need to define a contract
C. When subclasses share common state (fields) and partial implementation
D. When you want to use lambda expressions

**Answer:** C

**C is correct.** Abstract classes are ideal when subclasses share instance variables and some common behavior. Interfaces cannot have instance variables, making abstract classes the better choice for shared state.

### Q8. [Medium] What happens if a class implements two interfaces that both have the same default method?

A. The class inherits both versions
B. Compilation error unless the class overrides the method
C. The first interface's method wins
D. Runtime exception

**Answer:** B

**B is correct.** If two interfaces provide conflicting default methods, the implementing class must override the method to resolve the ambiguity. The class can call `InterfaceName.super.method()` to delegate.

### Q9. [Medium] Can an interface extend another interface?

A. No, only classes can extend
B. Yes, using extends
C. Yes, using implements
D. Only if the parent is a functional interface

**Answer:** B

**B is correct.** An interface can extend one or more interfaces using `extends`: `interface ReadWrite extends Readable, Writable { }`. Note: classes implement interfaces, but interfaces extend interfaces.

### Q10. [Medium] Are static methods in interfaces inherited by implementing classes?

A. Yes, like default methods
B. No, they must be called on the interface itself
C. Yes, but only if public
D. Only in Java 9+

**Answer:** B

**B is correct.** Static methods in interfaces are not inherited by implementing classes. They can only be called using the interface name: `MyInterface.staticMethod()`.

### Q11. [Hard] Which of the following is NOT a valid functional interface?

A. An interface with one abstract method and two default methods
B. An interface with one abstract method and one static method
C. An interface with two abstract methods
D. An interface extending another functional interface without adding abstract methods

**Answer:** C

**C is correct.** A functional interface must have exactly ONE abstract method. Two abstract methods disqualify it. Options A, B, and D all have exactly one abstract method.

### Q12. [Hard] What is the purpose of `@FunctionalInterface`?

A. It makes the interface faster at runtime
B. It is required for lambda expressions to work
C. It is a compile-time check ensuring exactly one abstract method
D. It automatically generates lambda implementations

**Answer:** C

**C is correct.** `@FunctionalInterface` is optional but causes a compile-time error if the interface has more or fewer than one abstract method. Lambda expressions work with any functional interface, even without the annotation.

### Q13. [Hard] Can an abstract class have `final` methods?

A. No, abstract and final are incompatible
B. Yes, the class can be abstract but individual methods can be final
C. Only static methods can be final
D. Only if the class is also final

**Answer:** B

**B is correct.** An abstract class can have final methods (methods that cannot be overridden by subclasses). The class itself cannot be both abstract and final (that would be contradictory), but individual methods can be final.

### Q14. [Hard] What is the Serializable interface an example of?

A. A functional interface
B. A marker interface
C. An abstract interface
D. A default interface

**Answer:** B

**B is correct.** `Serializable` is a marker interface (no methods). It marks a class as serializable. The JVM checks for this marker when serialization is attempted.

### Q15. [Hard] In Java 8+, which features can interfaces have that they could NOT have before?

A. Constructors and instance variables
B. Default methods and static methods
C. Private methods and protected methods
D. Abstract methods and constants

**Answer:** B

**B is correct.** Java 8 added default methods (with body, inherited by implementations) and static methods (called on the interface). Java 9 added private methods. Constructors and instance variables are still not allowed.

### Q16. [Easy] What happens if a concrete class extends an abstract class but does not implement all abstract methods?

A. The unimplemented methods return null
B. Runtime error
C. Compilation error
D. The methods are ignored

**Answer:** C

**C is correct.** A concrete class must implement all abstract methods from its parent. Failure to do so results in a compilation error. Alternatively, the class can declare itself abstract.

## Coding Challenges

### Challenge 1. Shape Hierarchy with Abstract Class

**Difficulty:** Easy

Create an abstract class Shape with abstract methods area() and perimeter(). Implement Circle, Rectangle, and Triangle. Print each shape's area and perimeter using a Shape array.

**Constraints:**

- Use abstract class and @Override. Calculate triangle area using Heron's formula or base*height/2.

**Sample input:**

```
Circle r=5, Rectangle 4x6, Triangle 3-4-5
```

**Sample output:**

```
Circle: area=78.54, perimeter=31.42
Rectangle: area=24.00, perimeter=20.00
Triangle: area=6.00, perimeter=12.00
```

**Solution:**

```java
abstract class Shape {
    abstract double area();
    abstract double perimeter();
    abstract String name();
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override double area() { return Math.PI * r * r; }
    @Override double perimeter() { return 2 * Math.PI * r; }
    @Override String name() { return "Circle"; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override double area() { return w * h; }
    @Override double perimeter() { return 2 * (w + h); }
    @Override String name() { return "Rectangle"; }
}

class Triangle extends Shape {
    double a, b, c;
    Triangle(double a, double b, double c) { this.a = a; this.b = b; this.c = c; }
    @Override double area() {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    @Override double perimeter() { return a + b + c; }
    @Override String name() { return "Triangle"; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(5), new Rectangle(4, 6), new Triangle(3, 4, 5) };
        for (Shape s : shapes) {
            System.out.printf("%s: area=%.2f, perimeter=%.2f%n", s.name(), s.area(), s.perimeter());
        }
    }
}
```

### Challenge 2. Payment Gateway with Interfaces

**Difficulty:** Medium

Create an interface PaymentGateway with methods processPayment(double amount) and getProviderName(). Add a default method receipt(double amount) that prints a formatted receipt. Implement CreditCardPayment, UPIPayment, and WalletPayment. Process all payments through a PaymentGateway array.

**Constraints:**

- Use interface with default method. Use polymorphism with interface array.

**Sample input:**

```
Amount = 2500.0
```

**Sample output:**

```
Processing 2500.0 via Credit Card (2% fee)
--- Receipt from Credit Card: 2550.0 ---
Processing 2500.0 via UPI (no fee)
--- Receipt from UPI: 2500.0 ---
Processing 2500.0 via Digital Wallet
--- Receipt from Digital Wallet: 2500.0 ---
```

**Solution:**

```java
interface PaymentGateway {
    void processPayment(double amount);
    String getProviderName();
    default void receipt(double amount) {
        System.out.println("--- Receipt from " + getProviderName() + ": " + amount + " ---");
    }
}

class CreditCardPayment implements PaymentGateway {
    public void processPayment(double amount) {
        double fee = amount * 0.02;
        System.out.println("Processing " + amount + " via Credit Card (2% fee)");
        receipt(amount + fee);
    }
    public String getProviderName() { return "Credit Card"; }
}

class UPIPayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing " + amount + " via UPI (no fee)");
        receipt(amount);
    }
    public String getProviderName() { return "UPI"; }
}

class WalletPayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing " + amount + " via Digital Wallet");
        receipt(amount);
    }
    public String getProviderName() { return "Digital Wallet"; }
}

public class Main {
    public static void main(String[] args) {
        PaymentGateway[] gateways = { new CreditCardPayment(), new UPIPayment(), new WalletPayment() };
        for (PaymentGateway pg : gateways) {
            pg.processPayment(2500.0);
        }
    }
}
```

### Challenge 3. Functional Interface Calculator

**Difficulty:** Medium

Create a @FunctionalInterface called Operation with method int apply(int a, int b). Use lambda expressions to create add, subtract, multiply, divide, and modulus operations. Write a method compute(int a, int b, Operation op) that applies the operation and prints the result.

**Constraints:**

- Use @FunctionalInterface and lambda expressions.

**Sample input:**

```
a=10, b=3
```

**Sample output:**

```
Add: 13
Subtract: 7
Multiply: 30
Divide: 3
Modulus: 1
```

**Solution:**

```java
@FunctionalInterface
interface Operation {
    int apply(int a, int b);
}

public class Main {
    static void compute(String label, int a, int b, Operation op) {
        System.out.println(label + ": " + op.apply(a, b));
    }
    public static void main(String[] args) {
        compute("Add", 10, 3, (a, b) -> a + b);
        compute("Subtract", 10, 3, (a, b) -> a - b);
        compute("Multiply", 10, 3, (a, b) -> a * b);
        compute("Divide", 10, 3, (a, b) -> a / b);
        compute("Modulus", 10, 3, (a, b) -> a % b);
    }
}
```

### Challenge 4. Database Abstraction Layer

**Difficulty:** Hard

Create an abstract class Database with abstract methods connect(), disconnect(), and query(String sql). Add a concrete method executeAndClose(String sql) that calls connect, query, and disconnect in sequence. Implement MySQLDatabase and MongoDBDatabase. Test with the abstract reference.

**Constraints:**

- Use abstract class with Template Method pattern.

**Sample input:**

```
SQL: SELECT * FROM users
```

**Sample output:**

```
Connecting to MySQL on port 3306
MySQL executing: SELECT * FROM users
Disconnecting from MySQL
---
Connecting to MongoDB on port 27017
MongoDB executing: SELECT * FROM users
Disconnecting from MongoDB
```

**Solution:**

```java
abstract class Database {
    abstract void connect();
    abstract void disconnect();
    abstract void query(String sql);
    
    void executeAndClose(String sql) {
        connect();
        query(sql);
        disconnect();
    }
}

class MySQLDatabase extends Database {
    void connect() { System.out.println("Connecting to MySQL on port 3306"); }
    void disconnect() { System.out.println("Disconnecting from MySQL"); }
    void query(String sql) { System.out.println("MySQL executing: " + sql); }
}

class MongoDBDatabase extends Database {
    void connect() { System.out.println("Connecting to MongoDB on port 27017"); }
    void disconnect() { System.out.println("Disconnecting from MongoDB"); }
    void query(String sql) { System.out.println("MongoDB executing: " + sql); }
}

public class Main {
    public static void main(String[] args) {
        Database[] dbs = { new MySQLDatabase(), new MongoDBDatabase() };
        for (Database db : dbs) {
            db.executeAndClose("SELECT * FROM users");
            System.out.println("---");
        }
    }
}
```

### Challenge 5. Multi-Interface Robot

**Difficulty:** Hard

Create interfaces Walkable (walk()), Talkable (talk()), and Flyable (fly()). Create classes: HumanoidRobot (implements Walkable, Talkable), DroneRobot (implements Flyable), and AdvancedRobot (implements all three). Write a method that accepts Object and uses instanceof to call appropriate methods.

**Constraints:**

- Use instanceof for runtime type checking. Demonstrate multiple interface implementation.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
HumanoidRobot: Walking... Talking...
DroneRobot: Flying...
AdvancedRobot: Walking... Talking... Flying...
```

**Solution:**

```java
interface Walkable { void walk(); }
interface Talkable { void talk(); }
interface Flyable { void fly(); }

class HumanoidRobot implements Walkable, Talkable {
    public void walk() { System.out.print("Walking... "); }
    public void talk() { System.out.print("Talking... "); }
}

class DroneRobot implements Flyable {
    public void fly() { System.out.print("Flying... "); }
}

class AdvancedRobot implements Walkable, Talkable, Flyable {
    public void walk() { System.out.print("Walking... "); }
    public void talk() { System.out.print("Talking... "); }
    public void fly() { System.out.print("Flying... "); }
}

public class Main {
    static void demonstrate(Object robot, String label) {
        System.out.print(label + ": ");
        if (robot instanceof Walkable) ((Walkable) robot).walk();
        if (robot instanceof Talkable) ((Talkable) robot).talk();
        if (robot instanceof Flyable) ((Flyable) robot).fly();
        System.out.println();
    }
    public static void main(String[] args) {
        demonstrate(new HumanoidRobot(), "HumanoidRobot");
        demonstrate(new DroneRobot(), "DroneRobot");
        demonstrate(new AdvancedRobot(), "AdvancedRobot");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/abstraction-and-interfaces/*
