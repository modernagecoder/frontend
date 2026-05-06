---
title: "Practice: Modern C++ Features (C++11 to C++20)"
description: "54 practice problems for Modern C++ Features (C++11 to C++20) in C++"
slug: modern-cpp-features-practice
canonical: https://learn.modernagecoders.com/resources/cpp/modern-cpp-features/practice
category: "C++"
---
# Practice: Modern C++ Features (C++11 to C++20)

**Total questions:** 54

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```cpp
auto x = 42;
auto y = 3.14;
cout << sizeof(x) << " " << sizeof(y);
```

*Hint:* auto deduces int for 42 and double for 3.14.

**Answer:** `4 8`

42 is an int (4 bytes on most platforms). 3.14 is a double (8 bytes). auto deduces these types exactly.

### Q2. [Easy] What is the output?

```cpp
vector v = {10, 20, 30};
for (auto x : v) x *= 2;
for (auto x : v) cout << x << " ";
```

*Hint:* auto x (not auto& x) creates a copy.

**Answer:** `10 20 30`

The first loop copies each element into x (by value). Modifying x does not affect the vector. The vector remains unchanged.

### Q3. [Easy] What is the output?

```cpp
vector v = {10, 20, 30};
for (auto& x : v) x *= 2;
for (auto x : v) cout << x << " ";
```

*Hint:* auto& x is a reference -- modifying x modifies the vector.

**Answer:** `20 40 60`

The first loop uses auto& (reference), so x *= 2 modifies the actual elements. The vector becomes {20, 40, 60}.

### Q4. [Easy] What is the output?

```cpp
auto sq = [](int x) { return x * x; };
cout << sq(5) << " " << sq(3);
```

*Hint:* Lambda that squares its argument.

**Answer:** `25 9`

The lambda squares its input: sq(5) = 25, sq(3) = 9.

### Q5. [Easy] What is the output?

```cpp
int a = 10;
auto add = [a](int x) { return x + a; };
a = 20;
cout << add(5);
```

*Hint:* Capture by value copies the value at the time of lambda creation.

**Answer:** `15`

a is captured by value at lambda creation time (a=10). Changing a to 20 does not affect the captured copy. add(5) = 5 + 10 = 15.

### Q6. [Medium] What is the output?

```cpp
int a = 10;
auto add = [&a](int x) { return x + a; };
a = 20;
cout << add(5);
```

*Hint:* Capture by reference: the lambda sees the current value of a.

**Answer:** `25`

a is captured by reference. When add(5) is called, a is 20 (changed after lambda creation). add(5) = 5 + 20 = 25.

### Q7. [Medium] What is the output?

```cpp
pair<string, int> p = {"Arjun", 85};
auto [name, marks] = p;
marks = 90;
cout << p.second << " " << marks;
```

*Hint:* Structured bindings create copies by default (auto, not auto&).

**Answer:** `85 90`

auto [name, marks] creates copies. Modifying marks does not change p.second. p.second remains 85.

### Q8. [Medium] What is the output?

```cpp
pair<string, int> p = {"Arjun", 85};
auto& [name, marks] = p;
marks = 90;
cout << p.second;
```

*Hint:* auto& structured bindings are references.

**Answer:** `90`

auto& [name, marks] binds by reference. Changing marks changes p.second. Output: 90.

### Q9. [Medium] What is the output?

```cpp
constexpr int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
cout << fib(7);
```

*Hint:* constexpr recursive Fibonacci.

**Answer:** `13`

fib(7) = fib(6) + fib(5) = 8 + 5 = 13. This is computed at compile time when called with a constant.

### Q10. [Medium] What is the output?

```cpp
auto print = [](auto x) { cout << x << " "; };
print(42);
print(3.14);
print("hello");
```

*Hint:* Generic lambda (C++14): auto parameter works like a template.

**Answer:** `42 3.14 hello`

The generic lambda accepts any type. The compiler generates separate instantiations for int, double, and const char*.

### Q11. [Hard] What is the output?

```cpp
auto counter = [n = 0]() mutable { return ++n; };
cout << counter() << " " << counter() << " " << counter();
```

*Hint:* Init capture (n = 0) creates a variable inside the lambda. mutable allows modification.

**Answer:** `1 2 3`

Init capture `[n = 0]` creates a member variable n initialized to 0. Each call increments it: 1, 2, 3. The `mutable` keyword allows modifying the captured variable.

### Q12. [Hard] What is the output?

```cpp
optional val;
cout << val.has_value() << " ";
val = 42;
cout << val.has_value() << " " << val.value() << " ";
val.reset();
cout << val.value_or(-1);
```

*Hint:* optional can hold a value or be empty. value_or returns the default if empty.

**Answer:** `0 1 42 -1`

Initially empty (has_value=0). After assignment: has_value=1, value=42. After reset: empty again, value_or(-1) returns -1.

### Q13. [Hard] What is the output?

```cpp
enum class Direction { Up = 1, Down = 2, Left = 3, Right = 4 };
Direction d = Direction::Left;
cout << static_cast(d);
// cout << d;  // Would NOT compile: no implicit conversion
```

*Hint:* enum class requires explicit cast to int.

**Answer:** `3`

Direction::Left has value 3. enum class requires static_cast<int> for conversion. Direct output would not compile.

### Q14. [Easy] What is the output?

```cpp
auto p = make_pair(10, 20);
cout << p.first << " " << p.second;
```

*Hint:* make_pair creates a pair. auto deduces pair<int,int>.

**Answer:** `10 20`

auto deduces pair<int,int>. p.first=10, p.second=20.

### Q15. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
auto sum = [](const vector& vec) {
    int s = 0;
    for (auto x : vec) s += x;
    return s;
};
cout << sum(v);
```

*Hint:* Lambda that computes the sum of a vector.

**Answer:** `15`

The lambda sums all elements: 1+2+3+4+5 = 15.

### Q16. [Medium] What is the output?

```cpp
constexpr int square(int x) { return x * x; }
constexpr int a = square(3);
constexpr int b = square(4);
cout << a + b;
```

*Hint:* constexpr evaluates at compile time.

**Answer:** `25`

square(3) = 9, square(4) = 16. Both computed at compile time. 9 + 16 = 25.

### Q17. [Hard] What is the output?

```cpp
auto apply = [](auto f, auto x) { return f(x); };
auto twice = [](int x) { return x * 2; };
auto negate = [](int x) { return -x; };
cout << apply(twice, 5) << " " << apply(negate, 3);
```

*Hint:* Higher-order generic lambda: takes a function and an argument.

**Answer:** `10 -3`

apply(twice, 5) calls twice(5) = 10. apply(negate, 3) calls negate(3) = -3. Generic lambdas can accept other lambdas as arguments.

### Q18. [Easy] What is the output?

```cpp
using IntVec = vector;
IntVec v = {5, 10, 15};
cout << v.size() << " " << v[2];
```

*Hint:* using creates a type alias. IntVec is vector.

**Answer:** `3 15`

IntVec is an alias for vector<int>. v has 3 elements. v[2] = 15.

## Mixed Questions

### Q1. [Easy] What is the output?

```cpp
int* p = nullptr;
cout << (p == nullptr);
```

*Hint:* nullptr is the type-safe null pointer constant.

**Answer:** `1`

p is initialized to nullptr. The comparison p == nullptr is true (1).

### Q2. [Easy] What is the output?

```cpp
vector v{1, 2, 3, 4, 5};
cout << v.size();
```

*Hint:* Uniform initialization with braces creates a vector with 5 elements.

**Answer:** `5`

Uniform initialization `vector{1, 2, 3, 4, 5}` creates a vector with 5 elements.

### Q3. [Easy] What is the output?

```cpp
auto add = [](int a, int b) { return a + b; };
cout << add(10, 20);
```

*Hint:* Lambda that adds two integers.

**Answer:** `30`

The lambda computes 10 + 20 = 30.

### Q4. [Medium] What is the output?

```cpp
vector v = {5, 3, 1, 4, 2};
sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
cout << v[0] << " " << v[4];
```

*Hint:* Lambda comparator returns true if a should come before b.

**Answer:** `5 1`

The lambda sorts in descending order: {5, 4, 3, 2, 1}. v[0] = 5, v[4] = 1.

### Q5. [Medium] What is the output?

```cpp
auto [a, b, c] = tuple{10, 20, 30};
cout << a + b + c;
```

*Hint:* Structured bindings unpack a tuple.

**Answer:** `60`

Structured bindings unpack the tuple: a=10, b=20, c=30. Sum = 60.

### Q6. [Medium] What is the output?

```cpp
map<string, int> m = {{"a", 1}, {"b", 2}};
if (auto it = m.find("b"); it != m.end())
    cout << it->second;
else
    cout << "not found";
```

*Hint:* C++17 if-with-initializer: the variable is scoped to the if/else.

**Answer:** `2`

The if-init declares it inside the if statement. "b" is found with value 2.

### Q7. [Medium] What is the output?

```cpp
constexpr int N = 5;
int arr[N] = {1, 2, 3, 4, 5};
cout << arr[N - 1];
```

*Hint:* constexpr values can be used as array sizes.

**Answer:** `5`

constexpr N = 5 is a compile-time constant, valid as an array size. arr[4] = 5.

### Q8. [Hard] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
auto even = [](int x) { return x % 2 == 0; };
int cnt = count_if(v.begin(), v.end(), even);
auto it = find_if(v.begin(), v.end(), even);
cout << cnt << " " << *it;
```

*Hint:* count_if counts matching elements. find_if finds the first match.

**Answer:** `2 2`

Two even numbers: 2, 4. count_if returns 2. find_if returns iterator to the first even number (2).

### Q9. [Hard] What is the output?

```cpp
auto make_adder = [](int n) {
    return [n](int x) { return x + n; };
};
auto add5 = make_adder(5);
auto add10 = make_adder(10);
cout << add5(3) << " " << add10(3);
```

*Hint:* A lambda that returns a lambda (closure factory).

**Answer:** `8 13`

make_adder(5) returns a lambda that adds 5. make_adder(10) returns one that adds 10. add5(3) = 8, add10(3) = 13.

### Q10. [Hard] What is the output?

```cpp
auto fib = [](auto self, int n) -> int {
    if (n <= 1) return n;
    return self(self, n - 1) + self(self, n - 2);
};
cout << fib(fib, 8);
```

*Hint:* A recursive lambda using the self-passing trick.

**Answer:** `21`

Self-recursive lambda: fib(8) = fib(7) + fib(6) = 13 + 8 = 21. The self parameter enables recursion since lambdas cannot reference themselves by name.

### Q11. [Medium] What is the difference between capture by value [x] and capture by reference [&x] in lambdas?

*Hint:* Think about when the value is read and whether modifications are visible.

**Answer:** **Capture by value [x]** copies the variable at lambda creation time. The lambda has its own copy; changes to the original do not affect the lambda, and the lambda cannot modify the original (unless `mutable` is used, which modifies the copy). **Capture by reference [&x]** stores a reference to the original variable. The lambda always sees the current value, and modifications through the lambda affect the original.

Use capture by value when the lambda might outlive the captured variable (to avoid dangling references). Use capture by reference when you need to observe or modify the original variable and the lambda will not outlive it.

### Q12. [Hard] What problems does C++20 concepts solve that SFINAE and enable_if had?

*Hint:* Think about error messages and readability.

**Answer:** SFINAE (Substitution Failure Is Not An Error) and `enable_if` produce extremely cryptic error messages when template constraints are violated -- often dozens of lines of nested template instantiation errors. **Concepts** provide clear, readable error messages like "T does not satisfy Numeric." They also make the intent readable in the code itself: `template` is immediately clear, while `template>>` is nearly unreadable.

Concepts are a direct replacement for SFINAE-based constraints. They produce better errors, are more readable, and are composable with && and || operators. They represent the biggest improvement to template programming since C++11.

## Multiple Choice Questions

### Q1. [Easy] What does the auto keyword do in C++11?

**Answer:** B

**B is correct.** In C++11, `auto` was repurposed for type deduction. The compiler infers the type from the initializer expression.

### Q2. [Easy] What is nullptr in C++11?

**Answer:** B

**B is correct.** `nullptr` has type `std::nullptr_t` and unambiguously represents a null pointer, unlike `NULL` which is an integer 0.

### Q3. [Easy] Which C++ standard introduced lambdas?

**Answer:** B

**B is correct.** Lambda expressions were introduced in C++11. C++14 added generic lambdas (auto parameters).

### Q4. [Easy] What does constexpr mean?

**Answer:** B

**B is correct.** `constexpr` indicates that a function or variable can be evaluated at compile time when given constant arguments. It can also be called at runtime.

### Q5. [Easy] What is the syntax for a range-based for loop?

**Answer:** B

**B is correct.** The C++11 range-based for loop uses the colon syntax: `for (auto x : container)`.

### Q6. [Medium] What is the difference between enum and enum class?

**Answer:** B

**B is correct.** `enum class` (scoped enumeration) requires the scope operator (`Color::Red`) and does not implicitly convert to int. Regular `enum` pollutes the enclosing scope and allows implicit int conversion.

### Q7. [Medium] What does [&] in a lambda capture clause mean?

**Answer:** B

**B is correct.** `[&]` captures all variables used in the lambda by reference. `[=]` captures all by value. `[this]` captures the this pointer.

### Q8. [Medium] Which C++ standard introduced structured bindings (auto [x, y] = pair)?

**Answer:** C

**C is correct.** Structured bindings were introduced in C++17. They work with pairs, tuples, arrays, and structs with public members.

### Q9. [Medium] What does std::optional represent?

**Answer:** B

**B is correct.** `std::optional` either contains a value of type T or is empty (`nullopt`). It replaces sentinel values like -1 or nullptr for indicating missing data.

### Q10. [Medium] What is string_view in C++17?

**Answer:** B

**B is correct.** `string_view` provides a lightweight, non-owning view into character data. It avoids copying strings when you only need to read them.

### Q11. [Hard] What does the spaceship operator (<=>) do in C++20?

**Answer:** B

**B is correct.** The three-way comparison operator `<=>` returns a comparison category (strong_ordering, weak_ordering, partial_ordering). With `= default`, the compiler generates all six comparison operators automatically.

### Q12. [Hard] What are C++20 concepts?

**Answer:** B

**B is correct.** Concepts are named compile-time predicates that constrain template parameters. They replace SFINAE with readable syntax and produce clear error messages when constraints are not met.

### Q13. [Hard] What does auto [x, y] = make_pair(1, 2); do?

**Answer:** A

**A is correct.** Structured bindings decompose the pair: x gets first (1), y gets second (2). This eliminates the need for .first and .second.

### Q14. [Hard] What is the advantage of using over typedef?

**Answer:** B

**B is correct.** `using` supports template aliases: `template using Vec = vector;`. This is impossible with `typedef`. The syntax is also more readable: `using F = int(*)(double);` vs `typedef int(*F)(double);`.

### Q15. [Medium] What does the mutable keyword do in a lambda?

**Answer:** B

**B is correct.** By default, variables captured by value are const inside the lambda. `mutable` removes this restriction, allowing the lambda to modify its captured copies (not the originals).

### Q16. [Easy] What is the correct way to declare a lambda that takes no parameters and returns void?

**Answer:** B

**B is correct.** The syntax is `[]() {}`: empty capture, no parameters, empty body. The parentheses can be omitted if there are no parameters: `[] {}` is also valid.

### Q17. [Hard] Which C++ standard introduced generic lambdas (auto parameters)?

**Answer:** B

**B is correct.** C++14 introduced generic lambdas where parameters can be declared with `auto`, making the lambda act like a template function.

### Q18. [Medium] What does value_or(default) do on a std::optional?

**Answer:** B

**B is correct.** `value_or(default)` returns the contained value if the optional has one, or the specified default if it is empty (nullopt).

## Coding Challenges

### Challenge 1. Sort Structs Using Lambda Comparator

**Difficulty:** Easy

Create a vector of Student structs (name, marks, grade). Sort by marks descending using a lambda. Print the sorted list using range-based for with structured bindings.

**Constraints:**

- Use auto, lambda, range-based for, and structured bindings. No old-style loops.

**Sample input:**

```
{"Arjun", 85, 'B'}, {"Priya", 92, 'A'}, {"Kiran", 78, 'B'}, {"Neha", 92, 'A'}
```

**Sample output:**

```
Neha: 92 (A)
Priya: 92 (A)
Arjun: 85 (B)
Kiran: 78 (B)
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Student {
    string name;
    int marks;
    char grade;
};

int main() {
    vector<Student> students = {
        {"Arjun", 85, 'B'}, {"Priya", 92, 'A'},
        {"Kiran", 78, 'B'}, {"Neha", 92, 'A'}
    };
    sort(students.begin(), students.end(),
        [](const Student& a, const Student& b) {
            if (a.marks != b.marks) return a.marks > b.marks;
            return a.name < b.name;
        });
    for (const auto& [name, marks, grade] : students)
        cout << name << ": " << marks << " (" << grade << ")" << endl;
    return 0;
}
```

### Challenge 2. Build a Closure Factory for Math Operations

**Difficulty:** Medium

Create a function that returns a lambda. Given an operation string ("add", "multiply", "power"), return a lambda that performs that operation with a fixed operand. Demonstrate calling the returned lambdas.

**Constraints:**

- Use C++14 generic lambdas and closures. No if/else chains inside the lambdas themselves.

**Sample input:**

```
makeOp("add", 5), makeOp("multiply", 3), makeOp("power", 2)
```

**Sample output:**

```
add5(10) = 15
mul3(10) = 30
pow2(10) = 100
```

**Solution:**

```cpp
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

function<int(int)> makeOp(const string& op, int n) {
    if (op == "add")
        return [n](int x) { return x + n; };
    if (op == "multiply")
        return [n](int x) { return x * n; };
    if (op == "power")
        return [n](int x) { return (int)pow(x, n); };
    return [](int x) { return x; };
}

int main() {
    auto add5 = makeOp("add", 5);
    auto mul3 = makeOp("multiply", 3);
    auto pow2 = makeOp("power", 2);
    cout << "add5(10) = " << add5(10) << endl;
    cout << "mul3(10) = " << mul3(10) << endl;
    cout << "pow2(10) = " << pow2(10) << endl;
    return 0;
}
```

### Challenge 3. Compile-Time Lookup Table with constexpr

**Difficulty:** Medium

Create a constexpr function that computes factorial. Use it to build a compile-time array of factorials from 0! to 12!. Print the table at runtime.

**Constraints:**

- The factorial table must be computed entirely at compile time using constexpr.

**Sample input:**

```
Factorials 0 to 12
```

**Sample output:**

```
0! = 1
1! = 1
2! = 2
...
12! = 479001600
```

**Solution:**

```cpp
#include <iostream>
#include <array>
using namespace std;

constexpr long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++)
        result *= i;
    return result;
}

template<size_t... Is>
constexpr auto makeFactTable(index_sequence<Is...>) {
    return array<long long, sizeof...(Is)>{factorial(Is)...};
}

constexpr auto factTable = makeFactTable(make_index_sequence<13>{});

int main() {
    for (int i = 0; i <= 12; i++)
        cout << i << "! = " << factTable[i] << endl;
    return 0;
}
```

### Challenge 4. Transform and Filter with Lambdas (Functional Pipeline)

**Difficulty:** Hard

Given a vector of integers, use STL algorithms with lambdas to: (1) filter out odd numbers, (2) square the remaining even numbers, (3) sum the results. Use erase-remove idiom, transform, and accumulate.

**Constraints:**

- Use lambdas with remove_if, transform, and accumulate. No manual loops.

**Sample input:**

```
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

**Sample output:**

```
Even numbers: 2 4 6 8 10
Squared: 4 16 36 64 100
Sum of squares: 220
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Step 1: Remove odd numbers
    v.erase(remove_if(v.begin(), v.end(), [](int x) { return x % 2 != 0; }), v.end());
    cout << "Even numbers: ";
    for (auto x : v) cout << x << " ";
    cout << endl;

    // Step 2: Square each element
    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * x; });
    cout << "Squared: ";
    for (auto x : v) cout << x << " ";
    cout << endl;

    // Step 3: Sum
    auto sum = accumulate(v.begin(), v.end(), 0);
    cout << "Sum of squares: " << sum << endl;
    return 0;
}
```

### Challenge 5. Optional-Based Safe Division with Error Handling

**Difficulty:** Medium

Write a function safeDivide that returns optional. Return nullopt for division by zero. Chain multiple operations and handle the optional results.

**Constraints:**

- Use std::optional. No exceptions or error codes.

**Sample input:**

```
safeDivide(10, 3), safeDivide(10, 0), safeDivide(100, 4)
```

**Sample output:**

```
10 / 3 = 3.33333
10 / 0 = error (division by zero)
100 / 4 = 25
```

**Solution:**

```cpp
#include <iostream>
#include <optional>
using namespace std;

optional<double> safeDivide(double a, double b) {
    if (b == 0) return nullopt;
    return a / b;
}

void printResult(double a, double b) {
    auto result = safeDivide(a, b);
    cout << a << " / " << b << " = ";
    if (result)
        cout << result.value() << endl;
    else
        cout << "error (division by zero)" << endl;
}

int main() {
    printResult(10, 3);
    printResult(10, 0);
    printResult(100, 4);
    return 0;
}
```

### Challenge 6. Generic Sorting with Concepts (C++20)

**Difficulty:** Hard

Write a generic sortAndPrint function constrained by a concept that requires the type to be sortable (has begin/end iterators and elements support <). Demonstrate with vectors of int, string, and double.

**Constraints:**

- Use C++20 concepts and requires clause.

**Sample input:**

```
vector<int>{5,3,1}, vector<string>{"Kiran","Arjun","Priya"}, vector<double>{3.14,1.41,2.72}
```

**Sample output:**

```
1 3 5
Arjun Kiran Priya
1.41 2.72 3.14
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <concepts>
#include <string>
using namespace std;

template<typename C>
concept Sortable = requires(C c) {
    { c.begin() } -> input_or_output_iterator;
    { c.end() } -> input_or_output_iterator;
    requires totally_ordered<typename C::value_type>;
};

void sortAndPrint(Sortable auto& container) {
    sort(container.begin(), container.end());
    for (const auto& x : container) cout << x << " ";
    cout << endl;
}

int main() {
    vector<int> ints = {5, 3, 1};
    vector<string> strs = {"Kiran", "Arjun", "Priya"};
    vector<double> dbls = {3.14, 1.41, 2.72};
    sortAndPrint(ints);
    sortAndPrint(strs);
    sortAndPrint(dbls);
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/modern-cpp-features/*
