---
title: "Modern C++ Features - C++11 to C++20: auto, lambdas, move semantics, concepts, ranges | Modern Age Coders"
description: "Master modern C++ features from C++11 to C++20. Learn auto, range-based for, lambdas, nullptr, enum class, constexpr, structured bindings, optional, concepts, ranges, and the spaceship operator. Includes 58+ practice questions."
slug: modern-cpp-features
canonical: https://learn.modernagecoders.com/resources/cpp/modern-cpp-features
category: "C++"
keywords: ["modern c++", "c++11 features", "c++14 features", "c++17 features", "c++20 features", "c++ auto", "c++ lambdas", "c++ constexpr", "c++ structured bindings", "c++ concepts"]
---
# Modern C++ Features (C++11 to C++20)

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 25

## What Are Modern C++ Features?

**Modern C++** refers to the language features introduced from C++11 onward. C++11 was a landmark release that fundamentally transformed the language, followed by incremental improvements in C++14, C++17, and C++20. These features make C++ safer, more expressive, and more productive while maintaining zero-cost abstractions.

Key categories of modern features:

- **C++11** -- auto, range-based for, lambdas, nullptr, enum class, constexpr, move semantics, smart pointers, uniform initialization, using aliases
- **C++14** -- generic lambdas, return type deduction, relaxed constexpr
- **C++17** -- structured bindings, if with initializer, optional/variant/any, string_view, filesystem
- **C++20** -- concepts, ranges, the spaceship operator (<=>), coroutines

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    // C++11: auto, range-based for, lambda
    vector v = {5, 2, 8, 1, 9};

    // Old C++03 way
    for (vector::iterator it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";
    cout << endl;

    // Modern C++11 way
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
    for (auto x : v) cout << x << " ";
    cout << endl;

    // C++17: structured bindings
    auto [minIt, maxIt] = minmax_element(v.begin(), v.end());
    cout << "Min: " << *minIt << ", Max: " << *maxIt << endl;
    return 0;
}
```

When Harish writes `auto [key, value] = *m.begin()` or Deepika writes `auto f = [&](int x) { return x * x; }`, they are using modern C++ idioms that make code shorter, safer, and more readable than the equivalent C++03 code.

## Why Are Modern C++ Features Important?

### 1. Drastically Reduced Boilerplate

`auto` eliminates verbose type declarations. Range-based for loops eliminate iterator boilerplate. Lambdas eliminate the need for separate function objects. Structured bindings eliminate `.first` and `.second`. Modern C++ lets you express intent directly instead of fighting the type system.

### 2. Safety Without Runtime Cost

`nullptr` prevents integer-pointer ambiguity bugs. `enum class` prevents implicit conversions. `constexpr` moves computation to compile-time. Smart pointers prevent memory leaks. These features add safety at zero or near-zero runtime cost -- a core C++ principle.

### 3. Competitive Programming Speed

In competitive programming, modern features save precious minutes: `auto` avoids typing long iterator types, range-based for is faster to write, lambdas enable inline comparators, and structured bindings simplify pair/tuple access.

### 4. Industry Standard

Every major C++ codebase (Google, Meta, Microsoft, Bloomberg, game engines) uses C++17 or later. Job interviews and production code expect fluency with modern features. Writing C++03-style code in 2026 is a red flag.

### 5. Foundation for Advanced Patterns

C++20 concepts enable constrained templates (no more cryptic SFINAE errors). Ranges enable composable, lazy data pipelines. These features make advanced C++ patterns accessible to a wider audience.

## Detailed Explanation

**Modern C++** refers to the language features introduced from C++11 onward. C++11 was a landmark release that fundamentally transformed the language, followed by incremental improvements in C++14, C++17, and C++20. These features make C++ safer, more expressive, and more productive while maintaining zero-cost abstractions.

Key categories of modern features:

- **C++11** -- auto, range-based for, lambdas, nullptr, enum class, constexpr, move semantics, smart pointers, uniform initialization, using aliases
- **C++14** -- generic lambdas, return type deduction, relaxed constexpr
- **C++17** -- structured bindings, if with initializer, optional/variant/any, string_view, filesystem
- **C++20** -- concepts, ranges, the spaceship operator (<=>), coroutines

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    // C++11: auto, range-based for, lambda
    vector v = {5, 2, 8, 1, 9};

    // Old C++03 way
    for (vector::iterator it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";
    cout << endl;

    // Modern C++11 way
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
    for (auto x : v) cout << x << " ";
    cout << endl;

    // C++17: structured bindings
    auto [minIt, maxIt] = minmax_element(v.begin(), v.end());
    cout << "Min: " << *minIt << ", Max: " << *maxIt << endl;
    return 0;
}
```

When Harish writes `auto [key, value] = *m.begin()` or Deepika writes `auto f = [&](int x) { return x * x; }`, they are using modern C++ idioms that make code shorter, safer, and more readable than the equivalent C++03 code.

### 1. Drastically Reduced Boilerplate

`auto` eliminates verbose type declarations. Range-based for loops eliminate iterator boilerplate. Lambdas eliminate the need for separate function objects. Structured bindings eliminate `.first` and `.second`. Modern C++ lets you express intent directly instead of fighting the type system.

### 2. Safety Without Runtime Cost

`nullptr` prevents integer-pointer ambiguity bugs. `enum class` prevents implicit conversions. `constexpr` moves computation to compile-time. Smart pointers prevent memory leaks. These features add safety at zero or near-zero runtime cost -- a core C++ principle.

### 3. Competitive Programming Speed

In competitive programming, modern features save precious minutes: `auto` avoids typing long iterator types, range-based for is faster to write, lambdas enable inline comparators, and structured bindings simplify pair/tuple access.

### 4. Industry Standard

Every major C++ codebase (Google, Meta, Microsoft, Bloomberg, game engines) uses C++17 or later. Job interviews and production code expect fluency with modern features. Writing C++03-style code in 2026 is a red flag.

### 5. Foundation for Advanced Patterns

C++20 concepts enable constrained templates (no more cryptic SFINAE errors). Ranges enable composable, lazy data pipelines. These features make advanced C++ patterns accessible to a wider audience.

## Code Examples

### C++11: auto, Range-Based For, and Uniform Initialization

```cpp
#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    // auto deduces the type
    auto x = 42;          // int
    auto pi = 3.14;       // double
    auto name = "Arjun"s; // string (with s suffix)

    // Range-based for loop (replaces iterator boilerplate)
    vector<int> v = {10, 20, 30, 40, 50};
    for (auto val : v)
        cout << val << " ";
    cout << endl;

    // By reference (avoids copy)
    for (auto& val : v)
        val *= 2;
    for (const auto& val : v)
        cout << val << " ";
    cout << endl;

    // Uniform initialization with braces
    int a{42};
    vector<int> w{1, 2, 3, 4, 5};
    map<string, int> marks{{"Arjun", 85}, {"Priya", 92}};

    // auto with iterators (no more verbose type names)
    auto it = marks.find("Arjun");
    if (it != marks.end())
        cout << it->first << ": " << it->second << endl;

    return 0;
}
```

`auto` lets the compiler deduce the type, eliminating verbose declarations like `map<string, int>::iterator`. Range-based for replaces manual iterator loops. Uniform initialization with `{}` prevents narrowing conversions (e.g., `int x{3.14}` is a compile error). These three features alone make C++11 code dramatically cleaner than C++03.

**Output:**

```
10 20 30 40 50
20 40 60 80 100
Arjun: 85
```

### C++11: Lambdas and Capture Modes

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Basic lambda: [capture](params) -> return_type { body }
    auto square = [](int x) { return x * x; };
    cout << "square(5) = " << square(5) << endl;

    // Capture by value [=] and by reference [&]
    int factor = 3;
    auto multiply = [factor](int x) { return x * factor; };
    cout << "multiply(7) = " << multiply(7) << endl;

    // Capture by reference to modify
    int total = 0;
    vector<int> v = {1, 2, 3, 4, 5};
    for_each(v.begin(), v.end(), [&total](int x) { total += x; });
    cout << "Total: " << total << endl;

    // Lambda as comparator for sort
    vector<pair<string, int>> students = {
        {"Arjun", 85}, {"Priya", 92}, {"Kiran", 78}
    };
    sort(students.begin(), students.end(),
        [](const pair<string, int>& a, const pair<string, int>& b) {
            return a.second > b.second;  // sort by marks descending
        });
    for (auto& [name, marks] : students)
        cout << name << ": " << marks << endl;

    // Mutable lambda (modify captured-by-value variables)
    int counter = 0;
    auto inc = [counter]() mutable { return ++counter; };
    cout << inc() << " " << inc() << " " << inc() << endl;
    cout << "Original counter: " << counter << endl;  // unchanged

    return 0;
}
```

Lambdas are anonymous functions: `[capture](params){ body }`. Capture modes: `[x]` by value, `[&x]` by reference, `[=]` all by value, `[&]` all by reference. The `mutable` keyword allows modifying captured-by-value variables (the copy, not the original). Lambdas are essential for STL algorithms, custom comparators, and callbacks.

**Output:**

```
square(5) = 25
multiply(7) = 21
Total: 15
Priya: 92
Arjun: 85
Kiran: 78
1 2 3
Original counter: 0
```

### C++11: nullptr, enum class, constexpr

```cpp
#include <iostream>
using namespace std;

// nullptr replaces NULL
void process(int n) { cout << "int: " << n << endl; }
void process(int* p) { cout << "pointer: " << p << endl; }

// enum class: strongly typed, no implicit conversion
enum class Color { Red, Green, Blue };
enum class Size { Small, Medium, Large };

// constexpr: compile-time computation
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

constexpr int fibonacci(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

int main() {
    // nullptr: unambiguous null pointer
    int* ptr = nullptr;
    // process(NULL);    // Ambiguous! NULL is 0 (int)
    process(nullptr);    // Calls process(int*)
    process(42);         // Calls process(int)

    // enum class: scoped, no implicit int conversion
    Color c = Color::Red;
    // int x = c;        // ERROR: no implicit conversion
    int x = static_cast<int>(c);  // Explicit: 0
    cout << "Color value: " << x << endl;

    // constexpr: evaluated at compile time
    constexpr int fact5 = factorial(5);   // Computed at compile time!
    constexpr int fib10 = fibonacci(10);  // Also compile time
    cout << "5! = " << fact5 << endl;
    cout << "fib(10) = " << fib10 << endl;

    // constexpr array size
    constexpr int N = 1024;
    int arr[N];  // Valid: N is known at compile time
    cout << "Array size: " << N << endl;

    return 0;
}
```

`nullptr` is a type-safe null pointer constant that resolves overload ambiguity (unlike NULL which is just 0). `enum class` creates scoped enumerations with no implicit int conversion, preventing accidental comparisons between unrelated enums. `constexpr` functions are evaluated at compile time when given constant arguments, enabling zero-runtime-cost computations.

**Output:**

```
pointer: 0
int: 42
Color value: 0
5! = 120
fib(10) = 55
Array size: 1024
```

### C++14: Generic Lambdas and Return Type Deduction

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // Generic lambda (C++14): auto parameters
    auto print = [](auto x) { cout << x << " "; };
    print(42);       // int
    print(3.14);     // double
    print("hello");  // const char*
    cout << endl;

    // Generic lambda as comparator
    auto maxOf = [](auto a, auto b) { return (a > b) ? a : b; };
    cout << "max(3, 7) = " << maxOf(3, 7) << endl;
    cout << "max(3.14, 2.71) = " << maxOf(3.14, 2.71) << endl;

    // Return type deduction (C++14)
    auto add = [](auto a, auto b) { return a + b; };
    cout << "add(2, 3) = " << add(2, 3) << endl;
    cout << "add(2.5, 3.7) = " << add(2.5, 3.7) << endl;
    cout << "add strings: " << add(string("Hello"), string(" World")) << endl;

    // C++14: auto return type deduction for functions
    // auto multiply(int a, int b) { return a * b; }  // Valid in C++14

    // Generic lambda for sorting any vector
    auto sortAndPrint = [](auto& vec) {
        sort(vec.begin(), vec.end());
        for (const auto& x : vec) cout << x << " ";
        cout << endl;
    };

    vector<int> ints = {5, 3, 1, 4, 2};
    vector<string> strs = {"Kiran", "Arjun", "Priya"};
    sortAndPrint(ints);
    sortAndPrint(strs);

    return 0;
}
```

C++14 generic lambdas use `auto` for parameters, making them work like templates. The compiler generates a separate function for each type used. Return type deduction lets the compiler figure out the return type automatically. These features make lambdas as powerful as template functions but with inline convenience.

**Output:**

```
42 3.14 hello
max(3, 7) = 7
max(3.14, 2.71) = 3.14
add(2, 3) = 5
add(2.5, 3.7) = 6.2
add strings: Hello World
1 2 3 4 5
Arjun Kiran Priya
```

### C++17: Structured Bindings, If-Init, and optional

```cpp
#include <iostream>
#include <map>
#include <optional>
#include <string>
#include <tuple>
using namespace std;

// Function returning optional (may or may not have a value)
optional<int> findIndex(const vector<int>& v, int target) {
    for (int i = 0; i < (int)v.size(); i++)
        if (v[i] == target) return i;
    return nullopt;  // No value
}

tuple<string, int, double> getStudent() {
    return {"Arjun", 85, 9.2};
}

int main() {
    // Structured bindings: unpack pairs, tuples, structs
    auto [name, marks, gpa] = getStudent();
    cout << name << ": " << marks << ", GPA: " << gpa << endl;

    // Structured bindings with maps
    map<string, int> scores = {{"Arjun", 85}, {"Priya", 92}, {"Kiran", 78}};
    for (auto& [student, score] : scores)
        cout << student << ": " << score << endl;

    // If with initializer (C++17)
    if (auto it = scores.find("Priya"); it != scores.end())
        cout << "Found Priya: " << it->second << endl;
    else
        cout << "Priya not found" << endl;
    // it is not accessible here (scoped to the if)

    // std::optional
    vector<int> v = {10, 20, 30, 40, 50};
    auto result = findIndex(v, 30);
    if (result.has_value())
        cout << "Found at index: " << result.value() << endl;
    else
        cout << "Not found" << endl;

    auto missing = findIndex(v, 99);
    cout << "99 found? " << missing.has_value() << endl;
    cout << "Default: " << missing.value_or(-1) << endl;

    return 0;
}
```

C++17 structured bindings (`auto [x, y] = pair`) eliminate `.first`/`.second` boilerplate. If-with-initializer limits variable scope to the if/else block. `std::optional` represents a value that may or may not exist, replacing sentinel values (-1, nullptr) with an explicit type.

**Output:**

```
Arjun: 85, GPA: 9.2
Arjun: 85
Kiran: 78
Priya: 92
Found Priya: 92
Found at index: 2
99 found? 0
Default: -1
```

### C++17: string_view and using Aliases

```cpp
#include <iostream>
#include <string>
#include <string_view>
#include <vector>
using namespace std;

// string_view: non-owning reference to string data (zero-copy)
void greet(string_view name) {
    cout << "Hello, " << name << "!" << endl;
}

// Count words without copying the string
int countWords(string_view text) {
    int count = 0;
    bool inWord = false;
    for (char c : text) {
        if (c != ' ' && !inWord) { count++; inWord = true; }
        else if (c == ' ') inWord = false;
    }
    return count;
}

// using alias (C++11): cleaner than typedef
using StringVec = vector<string>;
using ScoreMap = map<string, int>;
template<typename T>
using Vec = vector<T>;  // Template alias!

int main() {
    // string_view works with string, const char*, and substrings
    string s = "Vikram Sharma";
    greet(s);              // From string
    greet("Priya");        // From literal (no string construction!)

    string_view sv = s;
    cout << "First name: " << sv.substr(0, 6) << endl;  // Zero-copy substring
    cout << "Words: " << countWords("Modern C++ is powerful") << endl;

    // using aliases in action
    StringVec names = {"Arjun", "Priya", "Kiran"};
    Vec<int> numbers = {1, 2, 3, 4, 5};  // Template alias
    for (auto& name : names) cout << name << " ";
    cout << endl;

    return 0;
}
```

`string_view` is a non-owning, read-only view into string data. It avoids copying when you just need to read a string. It works with `std::string`, C-string literals, and substrings. `using` aliases (C++11) replace `typedef` with cleaner syntax and support template aliases, which `typedef` cannot.

**Output:**

```
Hello, Vikram Sharma!
Hello, Priya!
First name: Vikram
Words: 4
Arjun Priya Kiran
```

### C++20: Concepts and the Spaceship Operator

```cpp
#include <iostream>
#include <concepts>
#include <compare>
#include <string>
using namespace std;

// Concept: constrain template parameters
template<typename T>
concept Numeric = is_arithmetic_v<T>;

template<typename T>
concept Printable = requires(T t) {
    { cout << t } -> same_as<ostream&>;
};

// Function using concept (clear error messages!)
template<Numeric T>
T add(T a, T b) {
    return a + b;
}

// Abbreviated function template with auto + concept
void printValue(Printable auto val) {
    cout << "Value: " << val << endl;
}

// Spaceship operator <=> : three-way comparison
struct Student {
    string name;
    int marks;

    // Compiler generates ==, !=, <, >, <=, >= from <=>
    auto operator<=>(const Student&) const = default;
};

struct Score {
    int value;
    // Custom spaceship: compare by value
    auto operator<=>(const Score& other) const {
        return value <=> other.value;
    }
    bool operator==(const Score& other) const = default;
};

int main() {
    // Concepts in action
    cout << add(3, 4) << endl;       // OK: int is Numeric
    cout << add(2.5, 3.7) << endl;   // OK: double is Numeric
    // add("a", "b");                // ERROR: string is not Numeric (clear message!)

    printValue(42);
    printValue("hello");

    // Spaceship operator
    Student s1{"Arjun", 85}, s2{"Priya", 92};
    cout << (s1 < s2) << endl;   // Compares name first, then marks

    Score a{85}, b{92}, c{85};
    cout << (a < b) << " " << (a == c) << " " << (b > a) << endl;

    // Three-way comparison result
    auto result = a <=> b;
    if (result < 0) cout << "a < b" << endl;
    else if (result > 0) cout << "a > b" << endl;
    else cout << "a == b" << endl;

    return 0;
}
```

C++20 `concepts` constrain template parameters with readable requirements. Instead of cryptic SFINAE errors, you get clear messages like "T does not satisfy Numeric." The `<=>` (spaceship) operator generates all six comparison operators from a single declaration. `= default` asks the compiler to generate memberwise comparison. These features make generic C++ dramatically more approachable.

**Output:**

```
7
6.2
Value: 42
Value: hello
1
1 1 1
a < b
```

### Old vs Modern C++: Before and After Comparison

```cpp
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
#include <memory>
#include <numeric>
using namespace std;

int main() {
    // === VARIABLE DECLARATION ===
    // Old: explicit types everywhere
    map<string, vector<int>>::iterator oldIt;
    // Modern: auto
    auto modernMap = map<string, vector<int>>{{"Arjun", {85, 90, 78}}};
    auto it = modernMap.begin();

    // === ITERATION ===
    vector<int> v = {1, 2, 3, 4, 5};
    // Old:
    for (vector<int>::iterator i = v.begin(); i != v.end(); ++i)
        cout << *i << " ";
    cout << endl;
    // Modern:
    for (auto x : v) cout << x << " ";
    cout << endl;

    // === NULL POINTER ===
    // Old: NULL (which is 0, an int)
    int* oldPtr = NULL;
    // Modern: nullptr (type-safe)
    int* newPtr = nullptr;

    // === FUNCTION OBJECTS ===
    // Old: write a whole struct
    struct OldCompare {
        bool operator()(int a, int b) { return a > b; }
    };
    sort(v.begin(), v.end(), OldCompare());
    // Modern: lambda
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });

    // === MEMORY MANAGEMENT ===
    // Old: raw new/delete
    int* oldArr = new int[5];
    delete[] oldArr;
    // Modern: smart pointer
    auto smartArr = make_unique<int[]>(5);

    // === TYPE ALIASES ===
    // Old: typedef
    typedef vector<pair<string, int>> OldType;
    // Modern: using
    using ModernType = vector<pair<string, int>>;

    cout << "Modern C++ is cleaner and safer!" << endl;
    return 0;
}
```

This program shows the same operations in old C++03 style and modern C++11/17 style. Every modern replacement is shorter, safer, or both. The transformation is dramatic: `auto` replaces verbose types, range-based for replaces iterator loops, `nullptr` replaces `NULL`, lambdas replace function objects, smart pointers replace raw `new/delete`, and `using` replaces `typedef`.

**Output:**

```
1 2 3 4 5
1 2 3 4 5
Modern C++ is cleaner and safer!
```

## Common Mistakes

### Using auto When the Type Is Unclear or Surprising

**Wrong:**

```
auto x = 3.14f;  // float, not double!
auto y = {1, 2, 3};  // initializer_list<int>, not vector!
auto z = "hello";  // const char*, not string!
```

auto deduces the exact type of the initializer, which may not be what you expect. 3.14f is float, not double. A braced list is initializer_list, not vector. A string literal is const char*, not std::string.

**Correct:**

```
double x = 3.14;           // Explicit when type matters
vector<int> y = {1, 2, 3}; // Explicit vector
string z = "hello";        // Explicit string
// Or use auto with the right initializer:
auto x2 = 3.14;            // double (no f suffix)
auto z2 = "hello"s;        // string (with s suffix)
```

Use `auto` when the type is obvious from context (iterators, lambda results, make_unique results). Use explicit types when the deduced type might be surprising or when you want a specific type.

### Capturing by Reference in a Lambda That Outlives the Scope

**Wrong:**

```
auto createCounter() {
    int count = 0;
    return [&count]() { return ++count; };  // Dangling reference!
}
auto counter = createCounter();
cout << counter() << endl;  // Undefined behavior!
```

The lambda captures count by reference, but count is destroyed when createCounter returns. The lambda now holds a dangling reference. Calling it is undefined behavior.

**Correct:**

```
auto createCounter() {
    int count = 0;
    return [count]() mutable { return ++count; };  // Capture by value
}
auto counter = createCounter();
cout << counter() << endl;  // Safe: 1
```

Capture by value (`[count]`) when the lambda outlives the captured variable's scope. Use `mutable` to allow modification of the captured copy. Only capture by reference when you are certain the referenced variable will outlive the lambda.

### Forgetting That constexpr Functions Must Be Evaluable at Compile Time

**Wrong:**

```
constexpr int readInput() {
    int x;
    cin >> x;  // ERROR: cin is not constexpr
    return x;
}
```

constexpr functions can only use operations that are evaluable at compile time. I/O operations, dynamic memory allocation (in C++11), and non-constexpr function calls are not allowed.

**Correct:**

```
constexpr int square(int x) {
    return x * x;  // Pure computation, no I/O
}

constexpr int result = square(5);  // Evaluated at compile time
int runtime = square(n);  // Can also be called at runtime
```

A `constexpr` function must be evaluable at compile time when given constant arguments. It can still be called at runtime with non-constant arguments. Keep constexpr functions pure: no I/O, no global state modification.

### Using string_view After the Source String Is Destroyed

**Wrong:**

```
string_view getDangling() {
    string s = "temporary";
    return string_view(s);  // s destroyed, view is dangling!
}
string_view sv = getDangling();
cout << sv << endl;  // Undefined behavior!
```

string_view is a non-owning reference. If the underlying string is destroyed, the string_view becomes a dangling pointer. Accessing it is undefined behavior.

**Correct:**

```
// Option 1: Return string, not string_view
string getSafe() {
    string s = "temporary";
    return s;  // Move semantics, efficient
}

// Option 2: Use string_view only for function parameters
void process(string_view sv) {
    cout << sv << endl;  // Safe: caller owns the string
}
```

`string_view` should primarily be used for function parameters and local references to existing strings. Never return a `string_view` that refers to a local variable. If you need to return string data, return `std::string`.

### Structured Bindings with Wrong Number of Variables

**Wrong:**

```
pair<int, string> p = {1, "hello"};
auto [a, b, c] = p;  // ERROR: pair has 2 elements, not 3
```

Structured bindings require the exact number of variables to match the number of elements in the pair, tuple, or struct. Mismatching counts is a compile error.

**Correct:**

```
pair<int, string> p = {1, "hello"};
auto [a, b] = p;  // Correct: 2 variables for pair
cout << a << " " << b << endl;

tuple<int, string, double> t = {1, "hello", 3.14};
auto [x, y, z] = t;  // Correct: 3 variables for 3-element tuple
```

The number of variables in a structured binding must exactly match the number of members. For pairs, use 2 variables. For tuples, use the exact tuple size. For structs, match the number of public non-static data members.

## Summary

- C++11 auto deduces types from initializers, eliminating verbose type declarations. Use it for iterators, lambda results, and make_unique/make_shared results. Avoid it when the deduced type might be surprising.
- Range-based for loops (for (auto x : container)) replace manual iterator loops. Use auto& for references (modify or avoid copy), const auto& for read-only access to non-trivial types.
- Lambdas [capture](params){ body } are anonymous functions. Capture by value [x], by reference [&x], all by value [=], or all by reference [&]. Use mutable to modify by-value captures. Lambdas are essential for STL algorithm comparators and callbacks.
- nullptr is a type-safe null pointer (replaces NULL which is just 0). enum class is a scoped enumeration with no implicit int conversion. constexpr enables compile-time evaluation of functions and variables.
- C++14 generic lambdas use auto parameters, working like templates. Return type deduction lets the compiler infer the return type. These make lambdas as powerful as template functions.
- C++17 structured bindings (auto [x, y] = pair) unpack pairs, tuples, and structs. If-with-initializer (if (auto x = expr; condition)) limits variable scope. std::optional represents a value that may not exist.
- C++17 string_view is a non-owning, read-only view into string data. It avoids copies when passing strings to functions. Never let a string_view outlive its source string.
- C++20 concepts constrain template parameters with readable requirements, replacing SFINAE with clear error messages. The spaceship operator (<=>) generates all six comparison operators from a single declaration.
- Modern C++ follows the Rule of Zero: use smart pointers, std::string, and std::vector so the compiler-generated constructors and destructors do the right thing. No manual new/delete.
- The evolution from C++03 to C++20 makes the language dramatically safer and more productive: auto reduces boilerplate, lambdas replace function objects, smart pointers prevent leaks, constexpr moves computation to compile time, and concepts make templates readable.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/modern-cpp-features/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/modern-cpp-features/practice/*
