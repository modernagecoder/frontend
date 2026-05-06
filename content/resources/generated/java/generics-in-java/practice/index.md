---
title: "Practice: Generics in Java"
description: "42 practice problems for Generics in Java in Java"
slug: generics-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/generics-in-java/practice
category: "Java"
---
# Practice: Generics in Java

**Total questions:** 42

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
class Box {
    T value;
    Box(T v) { this.value = v; }
    T get() { return value; }
}
public class Main {
    public static void main(String[] args) {
        Box b = new Box<>("Hello");
        System.out.println(b.get());
        System.out.println(b.get().length());
    }
}
```

*Hint:* T is String. get() returns a String. No cast needed.

**Answer:** `Hello`
`5`

`Box` makes T=String. `get()` returns "Hello" (String). `length()` returns 5. No casting needed because the compiler knows the type.

### Q2. [Easy] What is the output?

```
class Pair<A, B> {
    A first;
    B second;
    Pair(A a, B b) { first = a; second = b; }
}
public class Main {
    public static void main(String[] args) {
        Pair<String, Integer> p = new Pair<>("Arjun", 20);
        System.out.println(p.first);
        System.out.println(p.second);
        System.out.println(p.first.getClass().getSimpleName());
        System.out.println(p.second.getClass().getSimpleName());
    }
}
```

*Hint:* A=String, B=Integer. getClass().getSimpleName() returns the class name.

**Answer:** `Arjun`
`20`
`String`
`Integer`

The Pair holds String and Integer. `first` is "Arjun" (String), `second` is 20 (Integer, auto-boxed). `getSimpleName()` returns the short class name.

### Q3. [Easy] Does this code compile?

```
ArrayList list = new ArrayList<>();
```

*Hint:* Can generics use primitive types?

**Answer:** No, it does not compile. Compilation error: type argument cannot be a primitive type.

Generics require reference types. `int` is a primitive. Use `ArrayList` instead. Java autoboxes `int` to `Integer` automatically when adding elements.

### Q4. [Easy] What is the output?

```
public class Main {
    static  T getFirst(T[] array) {
        return array[0];
    }
    public static void main(String[] args) {
        Integer[] ints = {10, 20, 30};
        String[] strs = {"A", "B", "C"};
        System.out.println(getFirst(ints));
        System.out.println(getFirst(strs));
    }
}
```

*Hint:* The generic method infers T from the array type.

**Answer:** `10`
`A`

For `getFirst(ints)`, T is inferred as Integer. For `getFirst(strs)`, T is inferred as String. The method returns the first element of any array type.

### Q5. [Easy] What is the output?

```
ArrayList a = new ArrayList<>();
ArrayList b = new ArrayList<>();
System.out.println(a.getClass() == b.getClass());
```

*Hint:* Due to type erasure, what are these at runtime?

**Answer:** `true`

Due to type erasure, both are `ArrayList` at runtime. Generic type information is removed after compilation. They have the same class.

### Q6. [Medium] What is the output?

```
class MathBox {
    T value;
    MathBox(T v) { value = v; }
    double doubleVal() { return value.doubleValue(); }
}
public class Main {
    public static void main(String[] args) {
        MathBox a = new MathBox<>(42);
        MathBox b = new MathBox<>(3.14);
        System.out.println(a.doubleVal());
        System.out.println(b.doubleVal());
    }
}
```

*Hint:* T extends Number, so doubleValue() is available.

**Answer:** `42.0`
`3.14`

`T extends Number` allows calling `doubleValue()`. For Integer 42, `doubleValue()` returns 42.0. For Double 3.14, it returns 3.14.

### Q7. [Medium] Does this code compile?

```
class Box {
    static T staticField;  // Is this valid?
}
```

*Hint:* Static fields belong to the class, not to instances. But each instance can have different T.

**Answer:** No, it does not compile. Compilation error: cannot make a static reference to the non-static type T.

Static fields are shared across all instances. But `Box` and `Box` are the same class at runtime (type erasure). A static field of type T would have conflicting types. Hence, static generic fields are forbidden.

### Q8. [Medium] What is the output?

```
import java.util.List;
public class Main {
    static double sum(List<? extends Number> list) {
        double total = 0;
        for (Number n : list) total += n.doubleValue();
        return total;
    }
    public static void main(String[] args) {
        System.out.println(sum(List.of(1, 2, 3)));
        System.out.println(sum(List.of(1.5, 2.5)));
    }
}
```

*Hint:* ? extends Number accepts List and List.

**Answer:** `6.0`
`4.0`

`List.of(1, 2, 3)` creates a `List`. `List.of(1.5, 2.5)` creates a `List`. Both match `? extends Number`. Sum of [1,2,3] = 6.0. Sum of [1.5,2.5] = 4.0.

### Q9. [Medium] Does this code compile?

```
List<? extends Number> list = new ArrayList();
list.add(42);
```

*Hint:* Can you add elements to a List<? extends Number>?

**Answer:** No, it does not compile. Compilation error: cannot add Integer to List<? extends Number>.

`List<? extends Number>` could be `List`, `List`, etc. The compiler cannot guarantee that adding an Integer is safe (what if it is actually a `List`?). Extends means read-only (PECS: Producer Extends).

### Q10. [Medium] What is the output?

```
import java.util.ArrayList;
import java.util.List;
public class Main {
    static void addInts(List<? super Integer> list) {
        list.add(10);
        list.add(20);
    }
    public static void main(String[] args) {
        List nums = new ArrayList<>();
        addInts(nums);
        System.out.println(nums);

        List objs = new ArrayList<>();
        addInts(objs);
        System.out.println(objs);
    }
}
```

*Hint:* ? super Integer accepts List, List, and List.

**Answer:** `[10, 20]`
`[10, 20]`

`? super Integer` accepts any list whose element type is Integer or a supertype. `List` and `List` both qualify. Adding Integers is safe because Integer IS-A Number and IS-A Object.

### Q11. [Hard] What is the output?

```
public class Main {
    static > T max(T a, T b, T c) {
        T result = a;
        if (b.compareTo(result) > 0) result = b;
        if (c.compareTo(result) > 0) result = c;
        return result;
    }
    public static void main(String[] args) {
        System.out.println(max(3, 7, 2));
        System.out.println(max("apple", "banana", "cherry"));
        System.out.println(max(3.14, 2.71, 1.41));
    }
}
```

*Hint:* The method works for any Comparable type. String comparison is lexicographic.

**Answer:** `7`
`cherry`
`3.14`

For integers: max(3, 7, 2) = 7. For strings: lexicographic comparison gives "cherry" > "banana" > "apple". For doubles: 3.14 > 2.71 > 1.41. The generic method works for all Comparable types.

### Q12. [Hard] Does this code compile?

```
class Container {
    T create() {
        return new T();  // ?
    }
}
```

*Hint:* What does T become at runtime due to type erasure?

**Answer:** No, it does not compile. Compilation error: cannot instantiate the type T.

Due to type erasure, the JVM does not know what `T` is at runtime. `new T()` is impossible because the constructor call needs a concrete class. Use a factory pattern (`Supplier`) as a workaround.

### Q13. [Hard] What is the output?

```
import java.util.*;
public class Main {
    static  void copy(List<? extends T> src, List<? super T> dst) {
        for (T item : src) {
            dst.add(item);
        }
    }
    public static void main(String[] args) {
        List ints = List.of(1, 2, 3);
        List objs = new ArrayList<>();
        copy(ints, objs);
        System.out.println(objs);
    }
}
```

*Hint:* src is a producer (extends), dst is a consumer (super). T is inferred.

**Answer:** `[1, 2, 3]`

T is inferred as Integer. `List` matches `? extends Integer` (producer: we read Integers from it). `List` matches `? super Integer` (consumer: we write Integers to it). The integers are copied to the object list.

### Q14. [Hard] What is the output?

```
import java.util.*;
public class Main {
    public static void main(String[] args) {
        List strings = new ArrayList<>();
        strings.add("A");
        strings.add("B");

        List raw = strings;   // Raw type
        raw.add(100);          // No compile error!

        System.out.println(strings.size());

        for (Object o : strings) {
            System.out.println(o);
        }
    }
}
```

*Hint:* Raw types bypass generic type checking. What happens when iterating?

**Answer:** `3`
`A`
`B`
`100`

The raw type `List` bypasses generic safety, allowing `add(100)` to an allegedly String-only list. The list now contains 2 Strings and 1 Integer. Iterating with `Object` works, but `for (String s : strings)` would throw ClassCastException on 100.

### Q15. [Hard] What is the output?

```
class Wrapper> {
    T value;
    Wrapper(T v) { value = v; }

    boolean isGreater(Wrapper other) {
        return value.compareTo(other.value) > 0;
    }
}
public class Main {
    public static void main(String[] args) {
        Wrapper a = new Wrapper<>(10);
        Wrapper b = new Wrapper<>(5);
        Wrapper c = new Wrapper<>("Hello");
        Wrapper d = new Wrapper<>("World");

        System.out.println(a.isGreater(b));
        System.out.println(b.isGreater(a));
        System.out.println(c.isGreater(d));
    }
}
```

*Hint:* compareTo returns positive if this > other. String comparison is lexicographic.

**Answer:** `true`
`false`
`false`

10 > 5 is true. 5 > 10 is false. "Hello" vs "World": lexicographically 'H' < 'W', so "Hello" is NOT greater than "World" (false).

## Mixed Questions

### Q1. [Easy] What is the purpose of generics in Java?

*Hint:* Think about type safety and code reuse.

**Answer:** Generics provide compile-time type safety and eliminate the need for explicit casting. They allow writing classes and methods that work with any type while catching type errors at compile time instead of runtime. A single generic class (`Box`) replaces multiple type-specific classes.

Without generics, collections hold Object references, requiring unsafe casting at every retrieval. With generics, the compiler verifies type correctness, preventing ClassCastException at runtime.

### Q2. [Easy] What is type erasure?

*Hint:* Think about what happens to generic type information at runtime.

**Answer:** Type erasure is the process by which the Java compiler removes all generic type information during compilation. At runtime, `ArrayList` and `ArrayList` are both just `ArrayList`. Generics are a compile-time-only feature.

Type erasure was introduced for backward compatibility with pre-generics code. It means you cannot use instanceof with parameterized types, cannot create T[], and cannot do new T().

### Q3. [Easy] What is the output?

```
class Container {
    T value;
    Container(T v) { value = v; }
    String getType() { return value.getClass().getSimpleName(); }
}
public class Main {
    public static void main(String[] args) {
        Container a = new Container<>(42);
        Container b = new Container<>("Hi");
        System.out.println(a.getType());
        System.out.println(b.getType());
    }
}
```

*Hint:* getClass() works on the actual object at runtime.

**Answer:** `Integer`
`String`

Even though T is erased at runtime, the actual objects (Integer 42, String "Hi") retain their class information. `getClass().getSimpleName()` returns the runtime class name.

### Q4. [Medium] What is the difference between `List` and `List<?>`?

*Hint:* One accepts any object for add. The other is read-only.

**Answer:** `List` is a list that holds Objects. You can add any object to it. `List<?>` is a list of unknown type. You can only read from it (as Object) and cannot add to it (except null). `List` IS-NOT a `List`, but it IS a `List<?>`.

Generics are invariant: `List` is not a subtype of `List`. But `List` is a subtype of `List<?>`. Wildcards provide flexibility that plain parameterized types do not.

### Q5. [Medium] Explain the PECS principle with an example.

*Hint:* Producer Extends, Consumer Super.

**Answer:** PECS stands for Producer Extends, Consumer Super. If a collection produces items (you read from it), use `? extends T`. If it consumes items (you write to it), use `? super T`. Example: `void copy(List<? extends T> source, List<? super T> dest)`. Source produces items (extends), dest consumes them (super).

`? extends T` guarantees elements are at least T (safe to read as T). `? super T` guarantees the list accepts T (safe to write T). Using the wrong one causes compilation errors.

### Q6. [Medium] Does this compile?

```
class Pair {
    T first, second;
    Pair(T a, T b) { first = a; second = b; }
}

Pair p = new Pair<>(1, 2.5);
```

*Hint:* 1 is Integer, 2.5 is Double. Both are Number subclasses.

**Answer:** Yes, it compiles. T is Number. Integer (1) and Double (2.5) are both subtypes of Number.

When T is explicitly `Number`, both arguments must be assignable to Number. Integer and Double are both Number subclasses, so they can be passed where Number is expected.

### Q7. [Hard] What is the output?

```
import java.util.*;
public class Main {
    static  List merge(List<? extends T> a, List<? extends T> b) {
        List result = new ArrayList<>();
        result.addAll(a);
        result.addAll(b);
        return result;
    }
    public static void main(String[] args) {
        List ints = List.of(1, 2);
        List dbls = List.of(3.0, 4.0);
        List merged = merge(ints, dbls);
        System.out.println(merged);
    }
}
```

*Hint:* T is inferred as Number (common supertype of Integer and Double).

**Answer:** `[1, 2, 3.0, 4.0]`

T is inferred as Number. `List` matches `? extends Number`. `List` matches `? extends Number`. Both are read (producers) and merged into a `List`.

### Q8. [Hard] Why can you not create generic arrays like `new T[10]`?

*Hint:* Think about the relationship between arrays and generics at runtime.

**Answer:** Arrays carry runtime type information (they are reified and covariant). Generics are erased at runtime. If `new T[10]` were allowed, the array would be `Object[]` at runtime, violating the array's type guarantee. This could lead to ArrayStoreException being missed, creating type-unsafe situations.

A `String[]` at runtime knows it holds Strings and throws ArrayStoreException if you try to store an Integer. A `T[]` would become `Object[]` at runtime, losing this safety. Java prevents this inconsistency by disallowing generic array creation.

### Q9. [Hard] What is the output?

```
import java.util.*;
public class Main {
    static void addToList(List<? super Integer> list) {
        list.add(1);
        list.add(2);
    }
    public static void main(String[] args) {
        List nums = new ArrayList<>();
        nums.add(0.5);  // Double
        addToList(nums);
        System.out.println(nums);
        System.out.println(nums.get(0).getClass().getSimpleName());
        System.out.println(nums.get(1).getClass().getSimpleName());
    }
}
```

*Hint:* List contains a Double and two Integers after addToList.

**Answer:** `[0.5, 1, 2]`
`Double`
`Integer`

The `List` starts with 0.5 (Double). `addToList` adds 1 and 2 (Integers). The list now holds mixed Number subtypes. Each element retains its actual runtime type.

### Q10. [Medium] What is the difference between a bounded type parameter (``) and an upper bounded wildcard (`<? extends Number>`)?

*Hint:* One is used in class/method declarations, the other in method parameters.

**Answer:** Bounded type parameters (``) are used in class or method declarations. They give you a named type T that you can reference throughout the class/method. Upper bounded wildcards (`<? extends Number>`) are used in method parameters when you do not need to reference the specific type. Wildcards provide more flexibility but less control.

Use bounded type parameters when you need to use T in multiple places (return type, multiple parameters). Use wildcards when you just need to accept a range of types in a parameter and do not need to reference the specific type elsewhere.

## Multiple Choice Questions

### Q1. [Easy] What does  represent in a generic class?

A. A specific type called T
B. A type parameter placeholder that is replaced by an actual type
C. The Thread class
D. The Throwable class

**Answer:** B

**B is correct.** `T` is a type parameter (placeholder) that gets replaced by an actual type (like `String`, `Integer`) when the generic class is instantiated.

### Q2. [Easy] Which of these is a valid generic declaration?

A. class Box { }
B. class Box { }
C. class Box(T) { }
D. class Box{T} { }

**Answer:** B

**B is correct.** Generic type parameters are declared in angle brackets: `class Box`. Primitive types (int) cannot be used. Parentheses and braces are invalid syntax.

### Q3. [Easy] Why were generics introduced in Java?

A. To make code run faster
B. To provide compile-time type safety and eliminate casting
C. To allow multiple inheritance
D. To replace arrays

**Answer:** B

**B is correct.** Generics provide compile-time type safety (catching type errors before runtime) and eliminate the need for explicit casting when retrieving elements from collections.

### Q4. [Easy] What happens to generic type information at runtime?

A. It is preserved for instanceof checks
B. It is erased (type erasure)
C. It is stored in a metadata file
D. It is converted to primitive types

**Answer:** B

**B is correct.** Java uses type erasure: all generic type parameters are replaced by Object (or the bound) at compile time. No generic type information exists at runtime.

### Q5. [Medium] What does `? extends Number` mean in a method parameter?

A. Exactly Number
B. Number or any subclass of Number
C. Number or any superclass of Number
D. Any type that has a method called extends

**Answer:** B

**B is correct.** `? extends Number` is an upper bounded wildcard. It accepts Number or any subclass (Integer, Double, Long, etc.). You can read from such a collection but not write to it.

### Q6. [Medium] What does `? super Integer` mean?

A. Exactly Integer
B. Integer or any subclass of Integer
C. Integer or any superclass of Integer
D. Any type except Integer

**Answer:** C

**C is correct.** `? super Integer` is a lower bounded wildcard. It accepts Integer or any superclass (Number, Object). You can write Integers to such a collection.

### Q7. [Medium] What does PECS stand for?

A. Polymorphism Encapsulation Class Subtype
B. Producer Extends Consumer Super
C. Parameter Extension Casting System
D. Private Enum Class Static

**Answer:** B

**B is correct.** PECS: Producer Extends, Consumer Super. Use `extends` when reading from a collection (it produces items). Use `super` when writing to it (it consumes items).

### Q8. [Medium] Which of these is NOT allowed with generics?

A. Generic classes
B. Generic methods
C. Generic arrays (new T[])
D. Generic interfaces

**Answer:** C

**C is correct.** Generic array creation (`new T[]`) is not allowed because arrays carry runtime type information (reified) while generics are erased. This would create a type safety hole.

### Q9. [Hard] Is `List` a subtype of `List`?

A. Yes, because String extends Object
B. No, generics are invariant
C. Only with wildcards
D. Depends on the JVM version

**Answer:** B

**B is correct.** Generics are invariant. `List` is NOT a `List`, even though String extends Object. If it were, you could add an Integer to a String list through the Object reference. Use `List<? extends Object>` for covariance.

### Q10. [Hard] What is the purpose of `>`?

A. T must extend Number OR implement Comparable
B. T must extend Number AND implement Comparable
C. T must be exactly Number
D. This is invalid syntax

**Answer:** B

**B is correct.** Multiple bounds use `&` (not `|`). T must satisfy ALL bounds: extend Number AND implement Comparable. The class bound must come first, followed by interface bounds.

### Q11. [Hard] Can you overload methods that differ only in generic type parameters?

A. Yes, they are different methods
B. No, due to type erasure they become the same method
C. Only if the return types differ
D. Only in Java 17+

**Answer:** B

**B is correct.** `void process(List list)` and `void process(List list)` cannot coexist. After type erasure, both become `void process(List list)`, which is a duplicate method definition.

### Q12. [Hard] Which is a valid restriction of generics?

A. Cannot use generic types in loops
B. Cannot create instances of type parameters (new T())
C. Cannot have more than one type parameter
D. Cannot use generics with interfaces

**Answer:** B

**B is correct.** `new T()` is illegal because the JVM does not know what T is at runtime (type erasure). Multiple type parameters (`Map<K,V>`) and generic interfaces are fully supported.

## Coding Challenges

### Challenge 1. Generic Stack

**Difficulty:** Easy

Implement a generic Stack using an ArrayList internally. It should support push(T), pop(), peek(), isEmpty(), and size(). Test with Integer and String stacks.

**Constraints:**

- Use generics. Handle empty stack with IllegalStateException.

**Sample input:**

```
Push 10, 20, 30. Pop twice.
```

**Sample output:**

```
Stack: [10, 20, 30]
Pop: 30
Pop: 20
Peek: 10
Size: 1
```

**Solution:**

```java
import java.util.ArrayList;

class Stack<T> {
    private ArrayList<T> items = new ArrayList<>();
    void push(T item) { items.add(item); }
    T pop() {
        if (isEmpty()) throw new IllegalStateException("Stack is empty");
        return items.remove(items.size() - 1);
    }
    T peek() {
        if (isEmpty()) throw new IllegalStateException("Stack is empty");
        return items.get(items.size() - 1);
    }
    boolean isEmpty() { return items.isEmpty(); }
    int size() { return items.size(); }
    @Override
    public String toString() { return items.toString(); }
}

public class Main {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack: " + stack);
        System.out.println("Pop: " + stack.pop());
        System.out.println("Pop: " + stack.pop());
        System.out.println("Peek: " + stack.peek());
        System.out.println("Size: " + stack.size());
    }
}
```

### Challenge 2. Generic Pair with Swap

**Difficulty:** Easy

Create a generic Pair<A, B> class with methods getFirst(), getSecond(), and swap() that returns a new Pair<B, A> with swapped types. Test with Pair<String, Integer>.

**Constraints:**

- swap() must return a new Pair with swapped type parameters.

**Sample input:**

```
Pair('Arjun', 20)
```

**Sample output:**

```
Original: (Arjun, 20)
Swapped: (20, Arjun)
```

**Solution:**

```java
class Pair<A, B> {
    A first;
    B second;
    Pair(A a, B b) { first = a; second = b; }
    A getFirst() { return first; }
    B getSecond() { return second; }
    Pair<B, A> swap() { return new Pair<>(second, first); }
    @Override
    public String toString() { return "(" + first + ", " + second + ")"; }
}

public class Main {
    public static void main(String[] args) {
        Pair<String, Integer> p = new Pair<>("Arjun", 20);
        System.out.println("Original: " + p);
        Pair<Integer, String> swapped = p.swap();
        System.out.println("Swapped: " + swapped);
    }
}
```

### Challenge 3. Generic Min/Max Finder

**Difficulty:** Medium

Write generic methods min() and max() that find the minimum and maximum elements in a List>. Also write a range() method that returns a Pair<T,T> of (min, max). Test with Integer and String lists.

**Constraints:**

- Use bounded type parameters with Comparable.

**Sample input:**

```
List: [30, 10, 50, 20, 40]
```

**Sample output:**

```
Min: 10, Max: 50
Range: (10, 50)
String min: Apple, max: Cherry
```

**Solution:**

```java
import java.util.List;

class Pair<A, B> {
    A first; B second;
    Pair(A a, B b) { first = a; second = b; }
    @Override
    public String toString() { return "(" + first + ", " + second + ")"; }
}

public class Main {
    static <T extends Comparable<T>> T min(List<T> list) {
        T result = list.get(0);
        for (T item : list) {
            if (item.compareTo(result) < 0) result = item;
        }
        return result;
    }
    static <T extends Comparable<T>> T max(List<T> list) {
        T result = list.get(0);
        for (T item : list) {
            if (item.compareTo(result) > 0) result = item;
        }
        return result;
    }
    static <T extends Comparable<T>> Pair<T, T> range(List<T> list) {
        return new Pair<>(min(list), max(list));
    }
    public static void main(String[] args) {
        var nums = List.of(30, 10, 50, 20, 40);
        System.out.println("Min: " + min(nums) + ", Max: " + max(nums));
        System.out.println("Range: " + range(nums));
        var strs = List.of("Banana", "Apple", "Cherry");
        System.out.println("String min: " + min(strs) + ", max: " + max(strs));
    }
}
```

### Challenge 4. Generic Filter Method

**Difficulty:** Medium

Write a generic method filter(List list, Predicate condition) that returns a new list containing only elements that satisfy the condition. Test with filtering even numbers and strings longer than 3 characters.

**Constraints:**

- Use generics and Predicate functional interface.

**Sample input:**

```
Numbers: [1,2,3,4,5,6], Strings: ['Hi','Hello','Hey','Howdy']
```

**Sample output:**

```
Even numbers: [2, 4, 6]
Long strings: [Hello, Howdy]
```

**Solution:**

```java
import java.util.*;
import java.util.function.Predicate;

public class Main {
    static <T> List<T> filter(List<T> list, Predicate<T> condition) {
        List<T> result = new ArrayList<>();
        for (T item : list) {
            if (condition.test(item)) result.add(item);
        }
        return result;
    }
    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 2, 3, 4, 5, 6);
        System.out.println("Even numbers: " + filter(nums, n -> n % 2 == 0));

        List<String> strs = List.of("Hi", "Hello", "Hey", "Howdy");
        System.out.println("Long strings: " + filter(strs, s -> s.length() > 3));
    }
}
```

### Challenge 5. Generic Transform (Map) Method

**Difficulty:** Hard

Write a generic method transform(List list, Function<T, R> mapper) that applies a transformation function to each element and returns a List. Test with: numbers to their squares, strings to their lengths, students to their names.

**Constraints:**

- Use two type parameters T and R. Use Function<T,R> interface.

**Sample input:**

```
Numbers: [1,2,3,4], Strings: ['Java','Go','Python']
```

**Sample output:**

```
Squares: [1, 4, 9, 16]
Lengths: [4, 2, 6]
```

**Solution:**

```java
import java.util.*;
import java.util.function.Function;

public class Main {
    static <T, R> List<R> transform(List<T> list, Function<T, R> mapper) {
        List<R> result = new ArrayList<>();
        for (T item : list) {
            result.add(mapper.apply(item));
        }
        return result;
    }
    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 2, 3, 4);
        System.out.println("Squares: " + transform(nums, n -> n * n));

        List<String> strs = List.of("Java", "Go", "Python");
        System.out.println("Lengths: " + transform(strs, String::length));

        System.out.println("Uppercase: " + transform(strs, String::toUpperCase));
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/generics-in-java/*
