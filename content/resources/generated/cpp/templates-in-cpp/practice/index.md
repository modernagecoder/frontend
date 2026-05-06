---
title: "Practice: Templates - Function and Class Templates"
description: "52 practice problems for Templates - Function and Class Templates in C++"
slug: templates-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/templates-in-cpp/practice
category: "C++"
---
# Practice: Templates - Function and Class Templates

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
#include 
using namespace std;
template
T add(T a, T b) {
    return a + b;
}
int main() {
    cout << add(3, 4) << endl;
    cout << add(2.5, 3.5) << endl;
    return 0;
}
```

*Hint:* T is deduced from arguments: int for (3,4), double for (2.5,3.5).

**Answer:** `7`
`6`

`add(3, 4)` deduces T=int, returns 7. `add(2.5, 3.5)` deduces T=double, returns 6.0 which prints as 6.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
template
class Wrapper {
    T val;
public:
    Wrapper(T v) : val(v) {}
    T get() const { return val; }
};
int main() {
    Wrapper w1(42);
    Wrapper w2("Arjun");
    cout << w1.get() << endl;
    cout << w2.get() << endl;
    return 0;
}
```

*Hint:* Wrapper stores an int. Wrapper stores a string.

**Answer:** `42`
`Arjun`

`Wrapper` stores 42. `Wrapper` stores "Arjun". The `get()` method returns the stored value.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
template
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}
int main() {
    cout << maxOf(10, 20) << endl;
    cout << maxOf('A', 'Z') << endl;
    return 0;
}
```

*Hint:* maxOf works with any type that supports >. Chars are compared by ASCII values.

**Answer:** `20`
`Z`

`maxOf(10, 20)` returns 20. `maxOf('A', 'Z')` compares ASCII values (65 vs 90), returns 'Z'.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
template
class Array {
    T data[N];
public:
    void fill(T val) {
        for (int i = 0; i < N; i++) data[i] = val;
    }
    void print() const {
        for (int i = 0; i < N; i++) cout << data[i] << " ";
        cout << endl;
    }
    int size() const { return N; }
};
int main() {
    Array<int, 4> arr;
    arr.fill(7);
    arr.print();
    cout << "Size: " << arr.size() << endl;
    return 0;
}
```

*Hint:* N=4 is a non-type template parameter. The array has exactly 4 elements filled with 7.

**Answer:** `7 7 7 7 `
`Size: 4`

`Array<int, 4>` creates a fixed-size array of 4 ints. `fill(7)` sets all elements to 7. `size()` returns N=4.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
template
void display(T val) {
    cout << "Generic: " << val << endl;
}
template<>
void display(bool val) {
    cout << "Bool: " << (val ? "true" : "false") << endl;
}
int main() {
    display(42);
    display(3.14);
    display(true);
    return 0;
}
```

*Hint:* display is fully specialized. Other types use the generic version.

**Answer:** `Generic: 42`
`Generic: 3.14`
`Bool: true`

`display(42)` and `display(3.14)` use the generic template. `display(true)` matches the full specialization for `bool`.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
template
auto multiply(T a, U b) -> decltype(a * b) {
    return a * b;
}
int main() {
    cout << multiply(3, 4) << endl;
    cout << multiply(3, 4.5) << endl;
    cout << multiply(2.5, 4) << endl;
    return 0;
}
```

*Hint:* The return type is deduced from a*b. int*int=int, int*double=double.

**Answer:** `12`
`13.5`
`10`

`3*4=12` (int). `3*4.5=13.5` (double). `2.5*4=10.0` (double, prints as 10).

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
void print() { cout << endl; }
template
void print(T first, Args... rest) {
    cout << first << " ";
    print(rest...);
}
int main() {
    print(1, 2, 3);
    print("Kavya", 25, 'A');
    return 0;
}
```

*Hint:* Variadic template peels off the first argument and recurses. Base case prints newline.

**Answer:** `1 2 3 `
`Kavya 25 A `

First call: print(1,2,3) -> prints 1, print(2,3) -> prints 2, print(3) -> prints 3, print() -> newline. Second call follows the same pattern.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
template
class Pair {
    T first, second;
public:
    Pair(T a, T b) : first(a), second(b) {}
    T getFirst() const { return first; }
    T getSecond() const { return second; }
    T sum() const { return first + second; }
};
int main() {
    Pair p1(10, 20);
    Pair p2(1.5, 2.5);
    cout << p1.sum() << endl;
    cout << p2.sum() << endl;
    Pair p3("Hello, ", "World");
    cout << p3.sum() << endl;
    return 0;
}
```

*Hint:* sum() uses operator+ which works for int, double, and string (concatenation).

**Answer:** `30`
`4`
`Hello, World`

`Pair::sum()` returns 10+20=30. `Pair::sum()` returns 1.5+2.5=4.0 (prints as 4). `Pair::sum()` concatenates strings.

### Q9. [Hard] What is the output?

```
#include 
using namespace std;
template
class Info {
public:
    static string type() { return "unknown"; }
};
template<> class Info {
public:
    static string type() { return "int"; }
};
template<> class Info {
public:
    static string type() { return "double"; }
};
template
class Info<T*> {
public:
    static string type() { return "pointer to " + Info::type(); }
};
int main() {
    cout << Info::type() << endl;
    cout << Info::type() << endl;
    cout << Info<int*>::type() << endl;
    cout << Info<double*>::type() << endl;
    cout << Info<int**>::type() << endl;
    return 0;
}
```

*Hint:* int* matches partial specialization T*. int** matches T* where T=int*, which recursively uses T* again.

**Answer:** `int`
`unknown`
`pointer to int`
`pointer to double`
`pointer to pointer to int`

`Info` uses full specialization. `Info` has no specialization, uses primary ("unknown"). `Info<int*>` matches partial specialization T* with T=int. `Info<int**>` matches T* with T=int*, which recursively matches T* with T=int.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
template
struct Factorial {
    static const int value = N * Factorial::value;
};
template<>
struct Factorial<0> {
    static const int value = 1;
};
int main() {
    cout << Factorial<5>::value << endl;
    cout << Factorial<0>::value << endl;
    cout << Factorial<8>::value << endl;
    return 0;
}
```

*Hint:* Compile-time recursion. Factorial<5> = 5 * Factorial<4> = 5*4*3*2*1*1 = 120.

**Answer:** `120`
`1`
`40320`

This is template metaprogramming. `Factorial<5>::value` = 5*4*3*2*1 = 120. `Factorial<0>::value` = 1 (base case). `Factorial<8>::value` = 40320. All computed at compile time.

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
template
class Pair {
public:
    void info() { cout << "Generic" << endl; }
};
template
class Pair<T, T> {
public:
    void info() { cout << "Same types" << endl; }
};
template
class Pair<T, int> {
public:
    void info() { cout << "Second is int" << endl; }
};
int main() {
    Pair<double, string> p1; p1.info();
    Pair<double, double> p2; p2.info();
    Pair<string, int> p3; p3.info();
    Pair<int, int> p4; p4.info();
    return 0;
}
```

*Hint:* Pair<int,int> could match both <T,T> and <T,int>. Which is more specialized?

**Answer:** `Generic`
`Same types`
`Second is int`
`Same types`

`Pair<double, string>` matches generic. `Pair<double, double>` matches <T,T>. `Pair<string, int>` matches <T,int>. `Pair<int, int>` could match both <T,T> and <T,int>, but <T,T> is more specialized (both parameters constrained) so it wins.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
template
T sum(T val) { return val; }
template
T sum(T first, Args... rest) {
    return first + sum(rest...);
}
int main() {
    cout << sum(1, 2, 3, 4, 5) << endl;
    cout << sum(10) << endl;
    return 0;
}
```

*Hint:* sum(1,2,3,4,5) = 1 + sum(2,3,4,5) = 1+2+sum(3,4,5) = ... = 15. sum(10) hits base case directly.

**Answer:** `15`
`10`

`sum(1,2,3,4,5)` recursively adds: 1+2+3+4+5 = 15. `sum(10)` matches the single-argument base case, returning 10.

### Q13. [Easy] What is the output?

```
#include 
using namespace std;
template
T square(T x) { return x * x; }
int main() {
    cout << square(5) << endl;
    cout << square(2.5) << endl;
    return 0;
}
```

*Hint:* square(5) deduces T=int. square(2.5) deduces T=double.

**Answer:** `25`
`6.25`

`square(5)` returns 5*5=25 (int). `square(2.5)` returns 2.5*2.5=6.25 (double).

### Q14. [Easy] What is the output?

```
#include 
#include 
using namespace std;
template
bool isEqual(T a, T b) { return a == b; }
int main() {
    cout << isEqual(10, 10) << endl;
    cout << isEqual(string("Ravi"), string("Ravi")) << endl;
    cout << isEqual(3.14, 3.15) << endl;
    return 0;
}
```

*Hint:* isEqual compares using ==. Works for int, string, and double.

**Answer:** `1`
`1`
`0`

10==10 is true (1). "Ravi"=="Ravi" is true (1). 3.14==3.15 is false (0).

### Q15. [Medium] What is the output?

```
#include 
using namespace std;
template
T arraySum(T (&arr)[N]) {
    T total = T();
    for (int i = 0; i < N; i++) total += arr[i];
    return total;
}
int main() {
    int a[] = {10, 20, 30};
    double b[] = {1.5, 2.5};
    cout << arraySum(a) << endl;
    cout << arraySum(b) << endl;
    return 0;
}
```

*Hint:* Both T and N are deduced from the array reference. T() initializes to 0 for numeric types.

**Answer:** `60`
`4`

`arraySum(a)` deduces T=int, N=3. Sum=10+20+30=60. `arraySum(b)` deduces T=double, N=2. Sum=1.5+2.5=4.0 (prints as 4).

### Q16. [Medium] What is the output?

```
#include 
using namespace std;
template
class MinMax {
    T minVal, maxVal;
public:
    MinMax(T a, T b) {
        minVal = (a < b) ? a : b;
        maxVal = (a > b) ? a : b;
    }
    T getMin() const { return minVal; }
    T getMax() const { return maxVal; }
};
int main() {
    MinMax m(30, 10);
    cout << m.getMin() << " " << m.getMax() << endl;
    MinMax s("Arjun", "Priya");
    cout << s.getMin() << " " << s.getMax() << endl;
    return 0;
}
```

*Hint:* MinMax sorts two values. Strings are compared lexicographically.

**Answer:** `10 30`
`Arjun Priya`

For ints: min(30,10)=10, max=30. For strings: "Arjun" < "Priya" lexicographically, so min=Arjun, max=Priya.

### Q17. [Hard] What is the output?

```
#include 
using namespace std;
template
void show(T val) { cout << "value: " << val << endl; }
template
void show(T* ptr) { cout << "pointer: " << *ptr << endl; }
template<>
void show(int val) { cout << "int: " << val << endl; }
int main() {
    int x = 42;
    show(x);
    show(&x);
    show(3.14);
    show(&x + 0);
    return 0;
}
```

*Hint:* show(x) matches the int specialization. show(&x) matches the pointer overload. show(3.14) matches generic.

**Answer:** `int: 42`
`pointer: 42`
`value: 3.14`
`pointer: 42`

`show(x)` matches int specialization. `show(&x)` matches pointer overload. `show(3.14)` matches generic T. `show(&x + 0)` is still int*, matches pointer overload.

### Q18. [Hard] What is the output?

```
#include 
using namespace std;
template
class Container {
    T first;
    U second;
public:
    Container(T a, U b) : first(a), second(b) {}
    void show() { cout << first << " " << second << endl; }
};
int main() {
    Container c1(10, 20);
    Container<int, double> c2(10, 3.14);
    c1.show();
    c2.show();
    return 0;
}
```

*Hint:* Container uses default U=int. Container<int,double> specifies U=double.

**Answer:** `10 20`
`10 3.14`

`Container` uses default U=T=int, so both are int. `Container<int, double>` has T=int and U=double.

## Mixed Questions

### Q1. [Easy] What is the difference between a function template and a template function?

*Hint:* One is the blueprint, the other is the generated code.

**Answer:** A function template is the blueprint (template T add(T a, T b)). A template function is a specific instantiation generated by the compiler (e.g., add is a template function). The template is the code you write; the template function is the code the compiler generates.

The distinction is: the template is the generic definition, and the instantiation (template function) is the concrete version for a specific type. The compiler generates one instantiation per unique set of template arguments used.

### Q2. [Easy] Why must template definitions be placed in header files?

*Hint:* Think about what the compiler needs to see at the point of instantiation.

**Answer:** The compiler needs to see the full template definition to generate code for a specific type. If the definition is in a .cpp file, other translation units cannot see it and the linker reports undefined references.

Templates are not compiled into object code until instantiated. The compiler needs the complete source of the template at every point where it is used. Putting template code in .cpp files separates the definition from the usage, causing linker errors.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
template
void print(T val) {
    cout << val << endl;
}
int main() {
    print(42);
    print(3.14);
    print("Ravi");
    return 0;
}
```

*Hint:* The template deduces T from each argument.

**Answer:** `42`
`3.14`
`Ravi`

The compiler generates three versions: `print`, `print`, and `print`. Each prints its argument.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
template
class Container {
    T val;
public:
    Container(T v) : val(v) {}
    T get() const { return val; }
};
int main() {
    Container<> c1(100);
    Container c2(3.14);
    cout << c1.get() << endl;
    cout << c2.get() << endl;
    return 0;
}
```

*Hint:* Container<> uses the default type int. Container overrides the default.

**Answer:** `100`
`3.14`

`Container<>` uses the default template argument `int`. `Container` explicitly specifies `double`.

### Q5. [Medium] What happens when you compile this code?

```
#include 
using namespace std;
template
T add(T a, T b) { return a + b; }
int main() {
    cout << add(3, 4.5) << endl;
    return 0;
}
```

*Hint:* T is deduced from both arguments. 3 deduces int, 4.5 deduces double. Do they match?

**Answer:** Compilation error: deduced conflicting types for parameter T (int vs double).

Both arguments must deduce the same type for T. 3 deduces int, 4.5 deduces double. These conflict. Fix: `add(3, 4.5)` or use two template parameters.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
template
T sumArray(T (&arr)[N]) {
    T total = T();
    for (int i = 0; i < N; i++) total += arr[i];
    return total;
}
int main() {
    int a[] = {1, 2, 3, 4, 5};
    double b[] = {1.5, 2.5, 3.5};
    cout << sumArray(a) << endl;
    cout << sumArray(b) << endl;
    return 0;
}
```

*Hint:* The template deduces both T and N from the array reference. N is the array size.

**Answer:** `15`
`7.5`

`sumArray(a)` deduces T=int, N=5. Sum = 1+2+3+4+5 = 15. `sumArray(b)` deduces T=double, N=3. Sum = 1.5+2.5+3.5 = 7.5.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
template
class Box {
    T val;
public:
    Box(T v) : val(v) {}
    bool operator>(const Box& other) const { return val > other.val; }
    T get() const { return val; }
};
template
Box maxBox(Box a, Box b) {
    return (a > b) ? a : b;
}
int main() {
    Box a(10), b(20);
    cout << maxBox(a, b).get() << endl;
    Box s1("Arjun"), s2("Priya");
    cout << maxBox(s1, s2).get() << endl;
    return 0;
}
```

*Hint:* maxBox uses the > operator which Box overloads. For strings, > uses lexicographic comparison.

**Answer:** `20`
`Priya`

`maxBox(a, b)` compares 10 > 20 (false), returns b (20). `maxBox(s1, s2)` compares "Arjun" > "Priya" (false lexicographically), returns s2 ("Priya").

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
template
void process(T val) {
    cout << "Value: " << val << endl;
}
template
void process(T* ptr) {
    cout << "Pointer to: " << *ptr << endl;
}
template<>
void process(int val) {
    cout << "Int: " << val << endl;
}
int main() {
    int x = 42;
    process(x);
    process(&x);
    process(3.14);
    return 0;
}
```

*Hint:* Overload resolution: process(x) matches both generic T and specialization int. Specialization wins for exact match. process(&x) matches the pointer overload.

**Answer:** `Int: 42`
`Pointer to: 42`
`Value: 3.14`

`process(x)` matches the `int` specialization. `process(&x)` matches the pointer overload `process(T*)`. `process(3.14)` matches the generic template with T=double.

### Q9. [Hard] What is the output?

```
#include 
using namespace std;
template
struct Fib {
    static const int value = Fib::value + Fib::value;
};
template<> struct Fib<0> { static const int value = 0; };
template<> struct Fib<1> { static const int value = 1; };
int main() {
    cout << Fib<0>::value << endl;
    cout << Fib<1>::value << endl;
    cout << Fib<6>::value << endl;
    cout << Fib<10>::value << endl;
    return 0;
}
```

*Hint:* Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Index 6 = 8, index 10 = 55.

**Answer:** `0`
`1`
`8`
`55`

Compile-time Fibonacci. Fib<6> = Fib<5>+Fib<4> = 5+3 = 8. Fib<10> = 55. All computed by the compiler.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
template<typename... Args>
int countArgs(Args... args) {
    return sizeof...(args);
}
int main() {
    cout << countArgs() << endl;
    cout << countArgs(1) << endl;
    cout << countArgs(1, 2.5, "three", 'A') << endl;
    return 0;
}
```

*Hint:* sizeof...(args) returns the number of arguments in the parameter pack at compile time.

**Answer:** `0`
`1`
`4`

`sizeof...(args)` is a compile-time operator that returns the number of elements in a parameter pack. Empty pack = 0, one argument = 1, four arguments = 4.

## Multiple Choice Questions

### Q1. [Easy] What is the keyword used to define a template in C++?

**Answer:** B

**B is correct.** The `template` keyword is used before the function or class to define a template. `typename` and `class` are used inside the template parameter list.

### Q2. [Easy] What is the difference between template and template?

**Answer:** B

**B is correct.** In template parameter declarations, `typename` and `class` are interchangeable. Both accept any type (built-in or user-defined). The convention is to use `typename` in modern C++.

### Q3. [Easy] When does the compiler generate code from a template?

**Answer:** C

**C is correct.** Templates are instantiated at compile time when they are used with specific type arguments. The compiler generates a separate version of the function/class for each unique set of template arguments.

### Q4. [Easy] What is a non-type template parameter?

**Answer:** B

**B is correct.** Non-type template parameters accept compile-time constant values, such as integers, pointers, or enums. Example: `template` where N must be a compile-time constant.

### Q5. [Easy] Which C++ library is entirely built on templates?

**Answer:** C

**C is correct.** The STL (containers like vector, map; algorithms like sort, find; utilities like pair, tuple) is entirely implemented using templates.

### Q6. [Medium] Which of the following supports partial specialization?

**Answer:** B

**B is correct.** Only class templates support partial specialization. Function templates must use overloading as an alternative to partial specialization.

### Q7. [Medium] What does sizeof...(Args) return in a variadic template?

**Answer:** B

**B is correct.** `sizeof...(Args)` is a compile-time operator that returns the number of elements in a template parameter pack or function parameter pack.

### Q8. [Medium] What is the purpose of decltype in C++?

**Answer:** B

**B is correct.** `decltype(expr)` yields the type of the expression `expr` at compile time. It does not evaluate the expression. It is commonly used in trailing return types.

### Q9. [Medium] What happens when you put template definitions in a .cpp file?

**Answer:** B

**B is correct.** The .cpp file compiles fine, but other translation units cannot see the template definition and cannot instantiate it. The linker cannot find the generated code, resulting in undefined reference errors.

### Q10. [Hard] What is SFINAE in C++ templates?

**Answer:** B

**B is correct.** SFINAE means that when the compiler tries to instantiate a template and substitution of template arguments makes the declaration ill-formed, the template is silently removed from the overload set instead of causing a compilation error.

### Q11. [Hard] What is the output of Pair<int, int> p; p.info(); given partial specializations <T,T> and <T,int>?

**Answer:** C

**C is correct.** When `Pair<int, int>` matches both `<T,T>` and `<T,int>`, the compiler uses partial ordering rules. `<T,T>` is more specialized because it constrains both parameters, so it wins.

### Q12. [Hard] In a variadic template, what does the ... (ellipsis) do in print(rest...)?

**Answer:** B

**B is correct.** The `...` after a parameter pack name is the pack expansion operator. `rest...` expands to `arg1, arg2, arg3, ...`, passing each element as a separate argument to the recursive call.

### Q13. [Easy] What is the advantage of templates over void* for generic programming?

**Answer:** B

**B is correct.** Templates preserve complete type information and enable compile-time type checking. `void*` erases type information, requiring manual casts that can cause runtime errors if incorrect.

### Q14. [Easy] Can a template have both type and non-type parameters?

**Answer:** B

**B is correct.** Templates can freely mix type parameters (`typename T`) and non-type parameters (`int N`). Example: `template class Array`.

### Q15. [Medium] What is the difference between full specialization and partial specialization?

**Answer:** B

**B is correct.** Full specialization (`template<>`) provides a specific implementation for a complete set of template arguments. Partial specialization fixes some parameters while leaving others generic.

### Q16. [Medium] What does template argument deduction mean?

**Answer:** B

**B is correct.** When calling a function template, the compiler can deduce the template arguments from the types of the function arguments. For example, `maxOf(3, 4)` deduces T=int.

### Q17. [Hard] What is template metaprogramming?

**Answer:** B

**B is correct.** Template metaprogramming uses recursive template instantiation and specialization to perform computations at compile time. Examples include compile-time factorial, Fibonacci, and type traits.

### Q18. [Hard] Why can function templates not be partially specialized?

**Answer:** B

**B is correct.** The C++ standard does not allow partial specialization of function templates. Instead, function overloading achieves the same effect. Overload resolution is more intuitive for functions than partial specialization would be.

### Q19. [Medium] What is CTAD (Class Template Argument Deduction) introduced in C++17?

**Answer:** B

**B is correct.** Prior to C++17, you had to write `pair<int, double> p(1, 2.5);`. With CTAD, you can write `pair p(1, 2.5);` and the compiler deduces the template arguments from the constructor arguments.

## Coding Challenges

### Challenge 1. Generic Pair Class with Comparison

**Difficulty:** Easy

Create a class template Pair<T, U> that stores two values of possibly different types. Provide getFirst(), getSecond(), and overload operator== to compare two pairs. Demonstrate with int/string and double/double pairs.

**Constraints:**

- Use two template parameters. Overload == and <<.

**Sample input:**

```
Pair<int, string>(1, "Arjun") and Pair<int, string>(1, "Arjun"); Pair<double, double>(3.14, 2.71)
```

**Sample output:**

```
(1, Arjun)
(1, Arjun)
Equal: 1
(3.14, 2.71)
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

template<typename T, typename U>
class Pair {
    T first;
    U second;
public:
    Pair(T f, U s) : first(f), second(s) {}
    T getFirst() const { return first; }
    U getSecond() const { return second; }
    bool operator==(const Pair& other) const {
        return first == other.first && second == other.second;
    }
    friend ostream& operator<<(ostream& os, const Pair& p) {
        os << "(" << p.first << ", " << p.second << ")";
        return os;
    }
};

int main() {
    Pair<int, string> p1(1, "Arjun"), p2(1, "Arjun");
    cout << p1 << endl;
    cout << p2 << endl;
    cout << "Equal: " << (p1 == p2) << endl;

    Pair<double, double> p3(3.14, 2.71);
    cout << p3 << endl;
    return 0;
}
```

### Challenge 2. Generic Sorting with Function Templates

**Difficulty:** Medium

Write a function template bubbleSort that sorts an array of any type T in ascending order. Write a function template printArray that prints the array. Demonstrate with int, double, and string arrays.

**Constraints:**

- Use template for both functions. Use reference to array or pointer+size.

**Sample input:**

```
int: {5, 2, 8, 1, 9}, double: {3.14, 1.41, 2.71}, string: {"Ravi", "Arjun", "Kavya"}
```

**Sample output:**

```
int: 1 2 5 8 9
double: 1.41 2.71 3.14
string: Arjun Kavya Ravi
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

template<typename T>
void bubbleSort(T arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                T temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

template<typename T>
void printArray(T arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
}

int main() {
    int ints[] = {5, 2, 8, 1, 9};
    bubbleSort(ints, 5);
    cout << "int: "; printArray(ints, 5);

    double doubles[] = {3.14, 1.41, 2.71};
    bubbleSort(doubles, 3);
    cout << "double: "; printArray(doubles, 3);

    string strings[] = {"Ravi", "Arjun", "Kavya"};
    bubbleSort(strings, 3);
    cout << "string: "; printArray(strings, 3);
    return 0;
}
```

### Challenge 3. Type-Safe Generic Stack with Specialization

**Difficulty:** Medium

Create a class template Stack with push, pop, peek, size, and empty. Create a full specialization Stack that stores bools efficiently by printing a special message on push/pop. Demonstrate both the generic and specialized versions.

**Constraints:**

- Full specialization for bool. Show different behavior for bool vs generic.

**Sample input:**

```
Stack<int>: push 10, 20, 30. Pop. Stack<bool>: push true, false. Pop.
```

**Sample output:**

```
Pushed int: 30
Peek: 30
Popped: 30
Size: 2
Pushed bool: true
Pushed bool: false
Popped bool: false
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

template<typename T>
class Stack {
    T data[100];
    int top;
public:
    Stack() : top(-1) {}
    void push(T val) {
        data[++top] = val;
        cout << "Pushed int: " << val << endl;
    }
    T pop() {
        T val = data[top--];
        cout << "Popped: " << val << endl;
        return val;
    }
    T peek() const { return data[top]; }
    int size() const { return top + 1; }
    bool empty() const { return top == -1; }
};

template<>
class Stack<bool> {
    bool data[100];
    int top;
public:
    Stack() : top(-1) {}
    void push(bool val) {
        data[++top] = val;
        cout << "Pushed bool: " << (val ? "true" : "false") << endl;
    }
    bool pop() {
        bool val = data[top--];
        cout << "Popped bool: " << (val ? "true" : "false") << endl;
        return val;
    }
    bool peek() const { return data[top]; }
    int size() const { return top + 1; }
    bool empty() const { return top == -1; }
};

int main() {
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    cout << "Peek: " << intStack.peek() << endl;
    intStack.pop();
    cout << "Size: " << intStack.size() << endl;

    Stack<bool> boolStack;
    boolStack.push(true);
    boolStack.push(false);
    boolStack.pop();
    return 0;
}
```

### Challenge 4. Compile-Time Power Calculation

**Difficulty:** Hard

Create a template metaprogram Power<Base, Exp> that computes Base^Exp at compile time. Specialize for Exp=0 (result is 1). Also create a variadic template function printAll that prints any number of arguments. Demonstrate both.

**Constraints:**

- Use template recursion for Power. Use variadic templates for printAll. All Power values computed at compile time.

**Sample input:**

```
Power<2,10>, Power<3,4>, Power<5,0>. printAll(1, 2.5, "Priya", true).
```

**Sample output:**

```
2^10 = 1024
3^4 = 81
5^0 = 1
1 2.5 Priya 1
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

template<int Base, int Exp>
struct Power {
    static const long long value = Base * Power<Base, Exp - 1>::value;
};

template<int Base>
struct Power<Base, 0> {
    static const long long value = 1;
};

void printAll() { cout << endl; }

template<typename T, typename... Args>
void printAll(T first, Args... rest) {
    cout << first;
    if (sizeof...(rest) > 0) cout << " ";
    printAll(rest...);
}

int main() {
    cout << "2^10 = " << Power<2, 10>::value << endl;
    cout << "3^4 = " << Power<3, 4>::value << endl;
    cout << "5^0 = " << Power<5, 0>::value << endl;
    printAll(1, 2.5, "Priya", true);
    return 0;
}
```

### Challenge 5. Generic Matrix with Non-Type Parameters

**Difficulty:** Hard

Create a class template Matrix<T, Rows, Cols> using non-type template parameters for dimensions. Implement set(), get(), operator+ (for same-dimension matrices), and a print method. Demonstrate with 2x3 int matrices and 2x2 double matrices.

**Constraints:**

- Use non-type template parameters for Rows and Cols. Size known at compile time. operator+ only compiles for matching dimensions.

**Sample input:**

```
Matrix A(2x3): {1,2,3,4,5,6}. Matrix B(2x3): {6,5,4,3,2,1}. C = A + B.
```

**Sample output:**

```
A:
1 2 3
4 5 6
B:
6 5 4
3 2 1
A+B:
7 7 7
7 7 7
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

template<typename T, int Rows, int Cols>
class Matrix {
    T data[Rows][Cols];
public:
    Matrix() {
        for (int i = 0; i < Rows; i++)
            for (int j = 0; j < Cols; j++)
                data[i][j] = T();
    }

    void set(int r, int c, T val) { data[r][c] = val; }
    T get(int r, int c) const { return data[r][c]; }

    Matrix operator+(const Matrix& other) const {
        Matrix result;
        for (int i = 0; i < Rows; i++)
            for (int j = 0; j < Cols; j++)
                result.data[i][j] = data[i][j] + other.data[i][j];
        return result;
    }

    void print() const {
        for (int i = 0; i < Rows; i++) {
            for (int j = 0; j < Cols; j++) {
                cout << data[i][j];
                if (j < Cols - 1) cout << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    Matrix<int, 2, 3> A, B;
    int val = 1;
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++) {
            A.set(i, j, val);
            B.set(i, j, 7 - val);
            val++;
        }

    cout << "A:" << endl; A.print();
    cout << "B:" << endl; B.print();
    Matrix<int, 2, 3> C = A + B;
    cout << "A+B:" << endl; C.print();
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/templates-in-cpp/*
