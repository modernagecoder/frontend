---
title: "Practice: Polymorphism in Java"
description: "50 practice problems for Polymorphism in Java in Java"
slug: polymorphism-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/polymorphism-in-java/practice/
category: "Java"
---
# Practice: Polymorphism in Java

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
class Animal {
    void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}
```

*Hint:* The reference type is Animal, but the actual object is Dog. Which sound() runs?

**Answer:** `Bark`

This is runtime polymorphism. The reference is `Animal`, but the actual object is `Dog`. Since `Dog` overrides `sound()`, the JVM calls `Dog`'s version at runtime.

### Q2. [Easy] What is the output?

```
class Calc {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
public class Main {
    public static void main(String[] args) {
        Calc c = new Calc();
        System.out.println(c.add(3, 4));
        System.out.println(c.add(3.0, 4.0));
    }
}
```

*Hint:* The compiler selects the matching method based on argument types.

**Answer:** `7`
`7.0`

`add(3, 4)` calls `add(int, int)` returning 7. `add(3.0, 4.0)` calls `add(double, double)` returning 7.0. The compiler resolves the correct overloaded method at compile time.

### Q3. [Easy] What is the output?

```
class A {
    void show() { System.out.println("A"); }
}
class B extends A {
    void show() { System.out.println("B"); }
}
class C extends B {
    void show() { System.out.println("C"); }
}
public class Main {
    public static void main(String[] args) {
        A obj = new C();
        obj.show();
    }
}
```

*Hint:* C extends B extends A. The actual object is C.

**Answer:** `C`

The reference type is `A` but the actual object is `C`. `C` overrides `show()`, so the JVM calls `C`'s version. It does not matter that `B` also overrides it; the most specific (actual object) version runs.

### Q4. [Easy] What is the output?

```
class Parent {
    void greet() { System.out.println("Hello from Parent"); }
}
class Child extends Parent {
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.greet();
    }
}
```

*Hint:* Child does not override greet(). What happens?

**Answer:** `Hello from Parent`

`Child` does not override `greet()`, so it inherits the parent's version. Even with upcasting, the parent's method runs since there is no overridden version in `Child`.

### Q5. [Easy] What is the output?

```
class Demo {
    void print(int a) { System.out.println("int: " + a); }
    void print(String a) { System.out.println("String: " + a); }
}
public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print(10);
        d.print("Arjun");
    }
}
```

*Hint:* Method overloading: the compiler picks by argument type.

**Answer:** `int: 10`
`String: Arjun`

`print(10)` matches `print(int)`. `print("Arjun")` matches `print(String)`. The compiler selects the correct overloaded method based on argument type.

### Q6. [Medium] What is the output?

```
class Vehicle {
    void start() { System.out.println("Vehicle"); }
}
class Car extends Vehicle {
    void start() { System.out.println("Car"); }
    void openTrunk() { System.out.println("Trunk opened"); }
}
public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();
        System.out.println(v instanceof Car);
        System.out.println(v instanceof Vehicle);
    }
}
```

*Hint:* instanceof checks the actual object type, not the reference type.

**Answer:** `Car`
`true`
`true`

`v.start()` calls `Car`'s overridden version. `v instanceof Car` is `true` because the actual object is `Car`. `v instanceof Vehicle` is also `true` because `Car` is a subclass of `Vehicle`.

### Q7. [Medium] What is the output?

```
class Base {
    int x = 10;
    void show() { System.out.println(x); }
}
class Derived extends Base {
    int x = 20;
    void show() { System.out.println(x); }
}
public class Main {
    public static void main(String[] args) {
        Base b = new Derived();
        System.out.println(b.x);
        b.show();
    }
}
```

*Hint:* Fields are resolved at compile time (by reference type). Methods are resolved at runtime (by object type).

**Answer:** `10`
`20`

Fields are NOT polymorphic. `b.x` uses the reference type (`Base`), so it prints 10. Methods ARE polymorphic. `b.show()` uses the actual object type (`Derived`), so it prints 20. This is a common interview trick question.

### Q8. [Medium] What is the output?

```
class A {
    void show(int a) { System.out.println("A-int: " + a); }
}
class B extends A {
    void show(int a) { System.out.println("B-int: " + a); }
    void show(String a) { System.out.println("B-String: " + a); }
}
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        obj.show(5);
    }
}
```

*Hint:* The reference type is A. Which methods can A see?

**Answer:** `B-int: 5`

The reference type is `A`, which only declares `show(int)`. `B` overrides `show(int)`, so dynamic dispatch calls `B`'s version. `show(String)` in `B` is an overloaded method, invisible through the `A` reference.

### Q9. [Medium] What is the output?

```
class Parent {
    static void display() { System.out.println("Parent static"); }
    void show() { System.out.println("Parent instance"); }
}
class Child extends Parent {
    static void display() { System.out.println("Child static"); }
    void show() { System.out.println("Child instance"); }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.display();
        p.show();
    }
}
```

*Hint:* Static methods are resolved by reference type. Instance methods are resolved by object type.

**Answer:** `Parent static`
`Child instance`

`display()` is static, so it is resolved by the reference type (`Parent`). This is method hiding, not overriding. `show()` is an instance method, so dynamic dispatch calls `Child`'s overridden version.

### Q10. [Medium] What is the output?

```
class Printer {
    void print(Object o) { System.out.println("Object: " + o); }
    void print(String s) { System.out.println("String: " + s); }
    void print(int i) { System.out.println("int: " + i); }
}
public class Main {
    public static void main(String[] args) {
        Printer p = new Printer();
        p.print("Hello");
        p.print(42);
        p.print((Object) "World");
    }
}
```

*Hint:* Overloading is resolved at compile time based on the compile-time type of arguments.

**Answer:** `String: Hello`
`int: 42`
`Object: World`

"Hello" matches `print(String)`. 42 matches `print(int)`. Casting "World" to `Object` makes the compile-time type `Object`, so `print(Object)` is called. Overloading is resolved at compile time.

### Q11. [Medium] What is the output?

```
class Shape {
    void draw() { System.out.println("Shape"); }
}
class Circle extends Shape {
    void draw() { System.out.println("Circle"); }
}
class ColoredCircle extends Circle {
    void draw() { System.out.println("Colored Circle"); }
}
public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new ColoredCircle();
        Circle c1 = new ColoredCircle();
        
        s1.draw();
        s2.draw();
        c1.draw();
    }
}
```

*Hint:* Each call resolves to the actual object type's draw() method.

**Answer:** `Circle`
`Colored Circle`
`Colored Circle`

`s1` is a `Circle` object, so `Circle.draw()` runs. `s2` and `c1` are both `ColoredCircle` objects, so `ColoredCircle.draw()` runs regardless of the reference type.

### Q12. [Hard] What is the output?

```
class A {
    void method() { System.out.println("A.method"); }
}
class B extends A {
    void method() { System.out.println("B.method"); }
}
class C extends A {
    void method() { System.out.println("C.method"); }
}
public class Main {
    public static void main(String[] args) {
        A[] arr = { new A(), new B(), new C(), new B() };
        for (A a : arr) {
            a.method();
        }
    }
}
```

*Hint:* Each element in the array is a different actual type.

**Answer:** `A.method`
`B.method`
`C.method`
`B.method`

The array holds `A`, `B`, `C`, `B` objects. Dynamic dispatch calls the overridden `method()` for each object's actual type. This demonstrates polymorphism with arrays.

### Q13. [Hard] What is the output?

```
class Parent {
    int value() { return 10; }
    void print() { System.out.println(value()); }
}
class Child extends Parent {
    int value() { return 20; }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.print();
    }
}
```

*Hint:* print() is inherited by Child. But value() is overridden. Which value() does print() call?

**Answer:** `20`

`p.print()` calls the inherited `print()` method. Inside `print()`, `value()` is called on `this`. Since the actual object is `Child` and `value()` is overridden in `Child`, it returns 20. Dynamic dispatch applies even within inherited methods.

### Q14. [Hard] What is the output?

```
class Base {
    void display(int a) { System.out.println("Base-int"); }
    void display(double a) { System.out.println("Base-double"); }
}
class Child extends Base {
    void display(int a) { System.out.println("Child-int"); }
}
public class Main {
    public static void main(String[] args) {
        Base b = new Child();
        b.display(10);
        b.display(10.5);
    }
}
```

*Hint:* Child only overrides display(int). display(double) is inherited.

**Answer:** `Child-int`
`Base-double`

`display(10)`: the argument is `int`, matching `display(int)`. `Child` overrides it, so `Child-int` prints. `display(10.5)`: the argument is `double`, matching `display(double)`. `Child` does not override it, so the inherited `Base-double` runs.

### Q15. [Hard] What is the output?

```
class A {
    A get() {
        System.out.println("A's get");
        return this;
    }
}
class B extends A {
    B get() {
        System.out.println("B's get");
        return this;
    }
}
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        obj.get();
    }
}
```

*Hint:* B's get() returns B instead of A. Is this a valid override?

**Answer:** `B's get`

This is a covariant return type. `B`'s `get()` returns `B` (a subtype of `A`), which is a valid override. Since the actual object is `B`, dynamic dispatch calls `B`'s version.

### Q16. [Hard] What is the output?

```
class Animal {
    Animal() { System.out.println("Animal constructor"); }
    void eat() { System.out.println("Animal eats"); }
}
class Dog extends Animal {
    Dog() { System.out.println("Dog constructor"); }
    void eat() { System.out.println("Dog eats"); }
    void bark() { System.out.println("Dog barks"); }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.eat();
        System.out.println(a instanceof Animal);
        System.out.println(a instanceof Dog);
    }
}
```

*Hint:* Constructors run during object creation. Then polymorphic method call. Then instanceof checks.

**Answer:** `Animal constructor`
`Dog constructor`
`Dog eats`
`true`
`true`

Creating `new Dog()` calls `Animal`'s constructor first, then `Dog`'s. `a.eat()` calls `Dog`'s overridden version. The object is both an `Animal` and a `Dog`, so both `instanceof` checks return `true`.

### Q17. [Hard] What is the output?

```
class X {
    void method(X x) { System.out.println("X-X"); }
    void method(Y y) { System.out.println("X-Y"); }
}
class Y extends X {
    void method(X x) { System.out.println("Y-X"); }
    void method(Y y) { System.out.println("Y-Y"); }
}
public class Main {
    public static void main(String[] args) {
        X obj = new Y();
        obj.method(new Y());
    }
}
```

*Hint:* Overloading is resolved at compile time (reference types). Overriding is resolved at runtime.

**Answer:** `Y-Y`

At compile time, `obj` is type `X` and the argument is type `Y`. The compiler selects `method(Y)` (overloading resolution). At runtime, `obj` is a `Y` object, so `Y`'s overriding `method(Y)` runs, printing `Y-Y`.

### Q18. [Hard] What is the output?

```
class Base {
    void show() {
        System.out.println("Base show");
        display();
    }
    void display() {
        System.out.println("Base display");
    }
}
class Derived extends Base {
    void display() {
        System.out.println("Derived display");
    }
}
public class Main {
    public static void main(String[] args) {
        Base b = new Derived();
        b.show();
    }
}
```

*Hint:* show() is not overridden, but it calls display() which IS overridden.

**Answer:** `Base show`
`Derived display`

`b.show()` calls the inherited `show()` from `Base`, printing "Base show". Inside `show()`, `display()` is called. Since the actual object is `Derived` and `display()` is overridden, `Derived`'s version runs.

## Mixed Questions

### Q1. [Easy] What is the output?

```
class Greet {
    void hello(String name) { System.out.println("Hello, " + name); }
    void hello(String name, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println("Hi, " + name);
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Greet g = new Greet();
        g.hello("Kavya");
        g.hello("Ravi", 2);
    }
}
```

*Hint:* Two overloaded methods with different parameter counts.

**Answer:** `Hello, Kavya`
`Hi, Ravi`
`Hi, Ravi`

`hello("Kavya")` matches the one-parameter version. `hello("Ravi", 2)` matches the two-parameter version, which loops twice.

### Q2. [Easy] What is the output?

```
class Animal {
    String type = "Animal";
    void identify() { System.out.println(type); }
}
class Cat extends Animal {
    String type = "Cat";
    void identify() { System.out.println(type); }
}
public class Main {
    public static void main(String[] args) {
        Cat c = new Cat();
        c.identify();
        System.out.println(c.type);
    }
}
```

*Hint:* When using the actual type as reference, no polymorphism ambiguity arises.

**Answer:** `Cat`
`Cat`

The reference type is `Cat` (not upcasted). `identify()` calls `Cat`'s version which prints `Cat`'s `type` field. `c.type` also refers to `Cat`'s field. Both print "Cat".

### Q3. [Medium] What is the output?

```
class Num {
    void show(int a) { System.out.println("int"); }
    void show(long a) { System.out.println("long"); }
    void show(float a) { System.out.println("float"); }
    void show(double a) { System.out.println("double"); }
}
public class Main {
    public static void main(String[] args) {
        Num n = new Num();
        byte b = 5;
        n.show(b);
        n.show(5L);
        n.show(5.0f);
        n.show(5.0);
    }
}
```

*Hint:* byte is promoted to int (smallest compatible type).

**Answer:** `int`
`long`
`float`
`double`

`byte` is promoted to `int` (the smallest matching type). `5L` is `long`. `5.0f` is `float`. `5.0` is `double`. Java picks the most specific matching overloaded method.

### Q4. [Medium] What is the output?

```
class Parent {
    void show() { System.out.println("Parent"); }
}
class ChildA extends Parent {
    void show() { System.out.println("ChildA"); }
}
class ChildB extends Parent {
    void show() { System.out.println("ChildB"); }
}
public class Main {
    static void display(Parent p) { p.show(); }
    public static void main(String[] args) {
        display(new Parent());
        display(new ChildA());
        display(new ChildB());
    }
}
```

*Hint:* The display method accepts Parent but receives different subtypes.

**Answer:** `Parent`
`ChildA`
`ChildB`

The `display` method accepts a `Parent` reference. Each call passes a different subtype. Dynamic dispatch ensures the correct overridden `show()` runs for each actual object type.

### Q5. [Easy] What is the difference between compile-time polymorphism and runtime polymorphism?

*Hint:* Think about when the decision is made: during compilation or during execution.

**Answer:** Compile-time polymorphism (method overloading) is resolved by the compiler based on argument types and count. Runtime polymorphism (method overriding) is resolved by the JVM at runtime based on the actual object type. Overloading is within the same class; overriding is across parent-child classes.

Overloading: same method name, different parameters, same class, resolved at compile time. Overriding: same method name, same parameters, parent-child classes, resolved at runtime via dynamic method dispatch.

### Q6. [Medium] What is the output?

```
class A {
    void test(Object o) { System.out.println("Object"); }
    void test(String s) { System.out.println("String"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new A();
        a.test(null);
    }
}
```

*Hint:* null can match both Object and String. Which is more specific?

**Answer:** `String`

When `null` matches multiple overloaded methods, Java selects the most specific type. `String` is more specific than `Object` (since String extends Object), so `test(String)` is called.

### Q7. [Hard] What is the output?

```
class A {
    int x = 10;
    void show() { System.out.println("A: " + x); }
}
class B extends A {
    int x = 20;
}
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        System.out.println(obj.x);
        obj.show();
    }
}
```

*Hint:* B does not override show(). Fields are not polymorphic.

**Answer:** `10`
`A: 10`

`obj.x` uses the reference type `A`, so it accesses `A`'s `x` (10). `obj.show()` calls `A`'s `show()` (not overridden by `B`), which prints `A`'s `x` (10). `B`'s `x` shadows but does not replace `A`'s.

### Q8. [Medium] Can we override a `private` method in Java?

*Hint:* Private methods are not visible to subclasses.

**Answer:** No, private methods cannot be overridden. They are not visible to subclasses. If a subclass defines a method with the same name and parameters as a parent's private method, it is a completely new method, not an override.

Private methods are bound at compile time. Since subclasses cannot see them, there is no overriding relationship. The `@Override` annotation on such a method would cause a compilation error.

### Q9. [Hard] What is the output?

```
class Base {
    Base() {
        System.out.println("Base constructor");
        show();
    }
    void show() { System.out.println("Base show"); }
}
class Child extends Base {
    int x = 10;
    Child() {
        System.out.println("Child constructor, x=" + x);
    }
    void show() { System.out.println("Child show, x=" + x); }
}
public class Main {
    public static void main(String[] args) {
        Child c = new Child();
    }
}
```

*Hint:* The Base constructor runs first. It calls show(). Which show() runs? What is x at that point?

**Answer:** `Base constructor`
`Child show, x=0`
`Child constructor, x=10`

The `Base` constructor runs first and calls `show()`. Because the actual object is `Child`, `Child`'s overridden `show()` runs. But `Child`'s constructor has not run yet, so `x` is still 0 (default int value). Then `Child`'s constructor runs, and `x` is 10. This is why calling overridable methods from constructors is dangerous.

### Q10. [Hard] What is the output?

```
class Animal {
    void eat() { System.out.println("Animal eats"); }
}
class Dog extends Animal {
    void eat() { System.out.println("Dog eats"); }
    void bark() { System.out.println("Dog barks"); }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.eat();

        Dog d = (Dog) a;
        d.eat();
        d.bark();

        Animal a2 = (Animal) d;
        a2.eat();
    }
}
```

*Hint:* All references point to the same Dog object. Casting does not change the object.

**Answer:** `Dog eats`
`Dog eats`
`Dog barks`
`Dog eats`

All variables (`a`, `d`, `a2`) reference the same `Dog` object. Casting changes the reference type but not the object. `eat()` is overridden, so `Dog`'s version always runs regardless of reference type.

### Q11. [Medium] What is the difference between method hiding and method overriding?

*Hint:* One involves static methods, the other involves instance methods.

**Answer:** Method overriding applies to instance methods and uses dynamic dispatch (runtime resolution based on object type). Method hiding applies to static methods, where the child class defines a static method with the same signature. Static methods are resolved by the reference type at compile time, not the object type.

With overriding: `Parent p = new Child(); p.instanceMethod();` calls Child's version. With hiding: `Parent p = new Child(); p.staticMethod();` calls Parent's version. This is why static methods are not truly polymorphic.

### Q12. [Hard] What is the output?

```
class A {
    void method() { System.out.println("A"); }
}
class B extends A {
    void method() { System.out.println("B"); }
}
class C extends B {
    void method() { System.out.println("C"); }
}
public class Main {
    public static void main(String[] args) {
        A obj = new C();
        System.out.println(obj instanceof A);
        System.out.println(obj instanceof B);
        System.out.println(obj instanceof C);
        System.out.println(obj instanceof Object);
    }
}
```

*Hint:* instanceof checks if the object IS-A certain type (including all ancestors).

**Answer:** `true`
`true`
`true`
`true`

A `C` object is an instance of `C`, `B`, `A`, and `Object` (all its ancestors). The `instanceof` operator checks the actual object type against the entire class hierarchy.

## Multiple Choice Questions

### Q1. [Easy] What is polymorphism in Java?

A. The ability of a class to have multiple constructors
B. The ability of one entity to take many forms
C. The ability to create multiple objects
D. The ability to hide implementation details

**Answer:** B

**B is correct.** Polymorphism literally means 'many forms.' In Java, it refers to methods or references that can behave differently based on the context (argument types, actual object type).

### Q2. [Easy] Which of the following is compile-time polymorphism?

A. Method overriding
B. Method overloading
C. Dynamic method dispatch
D. Upcasting

**Answer:** B

**B is correct.** Method overloading is resolved at compile time based on argument types and count. Method overriding and dynamic dispatch are runtime polymorphism.

### Q3. [Easy] What is required for method overloading?

A. Different return types
B. Different parameter lists
C. Different access modifiers
D. A parent-child relationship

**Answer:** B

**B is correct.** Overloaded methods must have different parameter lists (number, type, or order of parameters). Return type alone does not qualify as overloading.

### Q4. [Easy] What is upcasting in Java?

A. Casting a parent reference to a child type
B. Casting a child object to a parent reference
C. Casting between unrelated types
D. Converting primitive types

**Answer:** B

**B is correct.** Upcasting is assigning a child class object to a parent class reference: `Animal a = new Dog();`. It is implicit and always safe.

### Q5. [Easy] What annotation should you use when overriding a method?

A. @Overload
B. @Override
C. @Override is mandatory
D. @Super

**Answer:** B

**B is correct.** The `@Override` annotation is recommended (but not mandatory) when overriding a method. It causes a compile-time error if the method does not actually override a parent method, catching mistakes early.

### Q6. [Medium] What is dynamic method dispatch?

A. Selecting an overloaded method at compile time
B. Resolving an overridden method at runtime based on the actual object type
C. Calling a static method through a reference
D. Dispatching methods to multiple threads

**Answer:** B

**B is correct.** Dynamic method dispatch is the mechanism where the JVM determines at runtime which overridden method to call, based on the actual object type rather than the reference type.

### Q7. [Medium] Which of these CANNOT be overridden in Java?

A. public methods
B. protected methods
C. static methods
D. default (package-private) methods

**Answer:** C

**C is correct.** Static methods belong to the class, not instances. They cannot be overridden, only hidden. Public, protected, and default methods can all be overridden (assuming visibility).

### Q8. [Medium] What happens when you downcast without checking instanceof?

A. Compilation error always
B. It works fine always
C. ClassCastException if the object is not the target type
D. NullPointerException

**Answer:** C

**C is correct.** Downcasting compiles successfully (the compiler trusts you). But at runtime, if the actual object is not compatible with the target type, the JVM throws `ClassCastException`.

### Q9. [Medium] What is a covariant return type?

A. Returning void instead of a type
B. Returning a parent type in the child's overriding method
C. Returning a subtype of the parent method's return type in the overriding method
D. Returning multiple values

**Answer:** C

**C is correct.** A covariant return type allows the overriding method to return a subtype of the parent method's return type. For example, if the parent returns `Number`, the child can return `Integer`.

### Q10. [Medium] In `Parent p = new Child();`, which class determines the methods that can be called?

A. Child (actual object)
B. Parent (reference type) determines callable methods, Child determines which version runs
C. Both equally
D. Object class

**Answer:** B

**B is correct.** The reference type (`Parent`) determines which methods can be called (compilation check). The actual object type (`Child`) determines which version of an overridden method runs (runtime dispatch).

### Q11. [Medium] Are fields (instance variables) polymorphic in Java?

A. Yes, like methods
B. No, fields are resolved by reference type at compile time
C. Only static fields are polymorphic
D. Only final fields are polymorphic

**Answer:** B

**B is correct.** Fields are NOT polymorphic. They are resolved at compile time based on the reference type. Only instance methods support runtime polymorphism through dynamic dispatch.

### Q12. [Hard] What is the output?

```
class A { void m(A a) { System.out.println("AA"); } }
class B extends A { void m(B b) { System.out.println("BB"); } }
A obj = new B(); obj.m(new B());
```

A. AA
B. BB
C. Compilation error
D. Runtime exception

**Answer:** A

**A is correct.** `B`'s `m(B)` does not override `A`'s `m(A)` (different parameter type). It is an overloaded method. The reference type `A` only sees `m(A)`. The argument `new B()` matches `m(A)` via upcasting. Since `B` does not override `m(A)`, the inherited `A`'s version runs.

### Q13. [Hard] Which is true about the `instanceof` operator?

A. It checks the reference type
B. It returns true if the object is an instance of the class or any of its subclasses
C. It throws an exception for null
D. It only works with interfaces, not classes

**Answer:** B

**B is correct.** `instanceof` checks the actual object type against the specified class/interface, including all parent classes and implemented interfaces. It returns `false` for `null` (no exception).

### Q14. [Hard] Why is calling an overridable method from a constructor considered bad practice?

A. It causes a compilation error
B. The overriding method may access uninitialized child class fields
C. It makes the constructor slower
D. It breaks encapsulation

**Answer:** B

**B is correct.** When a parent constructor calls an overridable method, the child's overriding version runs (dynamic dispatch). But the child's constructor has not executed yet, so the child's fields are still at default values (0, null, false). This can lead to subtle bugs.

### Q15. [Hard] What happens if an overriding method has a MORE restrictive access modifier?

A. It works fine
B. Runtime exception
C. Compilation error
D. Warning only

**Answer:** C

**C is correct.** An overriding method cannot have a more restrictive access modifier than the overridden method. If the parent method is `public`, the child cannot make it `private` or `protected`. This is a compile-time error.

## Coding Challenges

### Challenge 1. Shape Area Calculator

**Difficulty:** Easy

Create a base class Shape with a method area() returning 0. Create subclasses Circle (takes radius), Rectangle (takes width, height), and Triangle (takes base, height). Override area() in each. Store all three in a Shape array and print each area using a loop.

**Constraints:**

- Use polymorphism with a Shape array. Use @Override annotation.

**Sample input:**

```
Circle radius=5, Rectangle 4x6, Triangle base=3 height=8
```

**Sample output:**

```
Circle area: 78.54
Rectangle area: 24.00
Triangle area: 12.00
```

**Solution:**

```java
class Shape {
    double area() { return 0; }
    String name() { return "Shape"; }
}

class Circle extends Shape {
    double radius;
    Circle(double r) { this.radius = r; }
    @Override double area() { return Math.PI * radius * radius; }
    @Override String name() { return "Circle"; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override double area() { return w * h; }
    @Override String name() { return "Rectangle"; }
}

class Triangle extends Shape {
    double base, height;
    Triangle(double b, double h) { this.base = b; this.height = h; }
    @Override double area() { return 0.5 * base * height; }
    @Override String name() { return "Triangle"; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(5), new Rectangle(4, 6), new Triangle(3, 8) };
        for (Shape s : shapes) {
            System.out.printf("%s area: %.2f%n", s.name(), s.area());
        }
    }
}
```

### Challenge 2. Payment Processor

**Difficulty:** Medium

Create a base class Payment with a method process(double amount) that prints 'Processing payment of '. Create subclasses CreditCard, UPI, and NetBanking, each overriding process() with their own message. Write a method processAll(Payment[] payments, double amount) that calls process() on each.

**Constraints:**

- Use an array of Payment references. Demonstrate dynamic dispatch.

**Sample input:**

```
Amount = 1500.0
```

**Sample output:**

```
Credit Card: Processing 1500.0 with 2% surcharge
UPI: Processing 1500.0 instantly
Net Banking: Processing 1500.0 via bank transfer
```

**Solution:**

```java
class Payment {
    void process(double amount) {
        System.out.println("Processing payment of " + amount);
    }
}

class CreditCard extends Payment {
    @Override
    void process(double amount) {
        System.out.println("Credit Card: Processing " + amount + " with 2% surcharge");
    }
}

class UPI extends Payment {
    @Override
    void process(double amount) {
        System.out.println("UPI: Processing " + amount + " instantly");
    }
}

class NetBanking extends Payment {
    @Override
    void process(double amount) {
        System.out.println("Net Banking: Processing " + amount + " via bank transfer");
    }
}

public class Main {
    static void processAll(Payment[] payments, double amount) {
        for (Payment p : payments) {
            p.process(amount);
        }
    }

    public static void main(String[] args) {
        Payment[] payments = { new CreditCard(), new UPI(), new NetBanking() };
        processAll(payments, 1500.0);
    }
}
```

### Challenge 3. Overloaded Calculator

**Difficulty:** Easy

Create a Calculator class with overloaded multiply methods: multiply(int, int), multiply(int, int, int), multiply(double, double), and multiply(int, double). Test each version.

**Constraints:**

- All methods should be named multiply. Demonstrate compile-time polymorphism.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
int x int: 20
int x int x int: 60
double x double: 7.5
int x double: 12.5
```

**Solution:**

```java
class Calculator {
    int multiply(int a, int b) { return a * b; }
    int multiply(int a, int b, int c) { return a * b * c; }
    double multiply(double a, double b) { return a * b; }
    double multiply(int a, double b) { return a * b; }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("int x int: " + c.multiply(4, 5));
        System.out.println("int x int x int: " + c.multiply(3, 4, 5));
        System.out.println("double x double: " + c.multiply(2.5, 3.0));
        System.out.println("int x double: " + c.multiply(5, 2.5));
    }
}
```

### Challenge 4. Animal Sound Simulator with instanceof

**Difficulty:** Medium

Create Animal, Dog, Cat, and Parrot classes. Dog has fetch(), Cat has purr(), Parrot has mimic(). Write a method interact(Animal a) that calls the animal's sound() and then uses instanceof to call the subclass-specific method.

**Constraints:**

- Use instanceof for safe downcasting. Handle all subtypes.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Bark!
Dog fetches ball
---
Meow!
Cat purrs
---
Squawk!
Parrot mimics speech
```

**Solution:**

```java
class Animal {
    void sound() { System.out.println("..."); }
}
class Dog extends Animal {
    @Override void sound() { System.out.println("Bark!"); }
    void fetch() { System.out.println("Dog fetches ball"); }
}
class Cat extends Animal {
    @Override void sound() { System.out.println("Meow!"); }
    void purr() { System.out.println("Cat purrs"); }
}
class Parrot extends Animal {
    @Override void sound() { System.out.println("Squawk!"); }
    void mimic() { System.out.println("Parrot mimics speech"); }
}

public class Main {
    static void interact(Animal a) {
        a.sound();
        if (a instanceof Dog) ((Dog) a).fetch();
        else if (a instanceof Cat) ((Cat) a).purr();
        else if (a instanceof Parrot) ((Parrot) a).mimic();
    }
    public static void main(String[] args) {
        interact(new Dog());
        System.out.println("---");
        interact(new Cat());
        System.out.println("---");
        interact(new Parrot());
    }
}
```

### Challenge 5. Employee Salary System

**Difficulty:** Hard

Create an abstract-like hierarchy: Employee (base, salary()), FullTime (fixed monthly salary), PartTime (hourly rate * hours), and Intern (stipend). Override salary() in each. Create an array of employees and compute total payroll using a loop.

**Constraints:**

- Use polymorphism. Compute total using a single loop over Employee[].

**Sample input:**

```
FullTime=50000, PartTime=500/hr*80hrs, Intern=15000
```

**Sample output:**

```
FullTime salary: 50000.0
PartTime salary: 40000.0
Intern salary: 15000.0
Total payroll: 105000.0
```

**Solution:**

```java
class Employee {
    String name;
    Employee(String name) { this.name = name; }
    double salary() { return 0; }
}

class FullTime extends Employee {
    double monthly;
    FullTime(String name, double monthly) { super(name); this.monthly = monthly; }
    @Override double salary() { return monthly; }
}

class PartTime extends Employee {
    double rate; int hours;
    PartTime(String name, double rate, int hours) { super(name); this.rate = rate; this.hours = hours; }
    @Override double salary() { return rate * hours; }
}

class Intern extends Employee {
    double stipend;
    Intern(String name, double stipend) { super(name); this.stipend = stipend; }
    @Override double salary() { return stipend; }
}

public class Main {
    public static void main(String[] args) {
        Employee[] team = {
            new FullTime("Arjun", 50000),
            new PartTime("Kavya", 500, 80),
            new Intern("Ravi", 15000)
        };
        double total = 0;
        for (Employee e : team) {
            System.out.println(e.name + " salary: " + e.salary());
            total += e.salary();
        }
        System.out.println("Total payroll: " + total);
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/polymorphism-in-java/*
