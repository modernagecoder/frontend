---
title: "Practice: Strings in Java"
description: "65 practice problems for Strings in Java in Java"
slug: strings-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/strings-in-java/practice/
category: "Java"
---
# Practice: Strings in Java

**Total questions:** 65

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
String s = "Hello";
System.out.println(s.length());
System.out.println(s.charAt(0));
System.out.println(s.charAt(4));
```

*Hint:* length() returns the total character count. charAt() uses 0-based indexing.

**Answer:** `5`
`H`
`o`

"Hello" has 5 characters. `charAt(0)` returns the first character 'H'. `charAt(4)` returns the fifth character 'o'. Valid indices are 0 through 4.

### Q2. [Easy] What is the output?

```
String s = "Java Programming";
System.out.println(s.substring(0, 4));
System.out.println(s.substring(5));
```

*Hint:* substring(start, end) includes start but excludes end. substring(start) goes to the end of the string.

**Answer:** `Java`
`Programming`

`substring(0, 4)` extracts characters at indices 0, 1, 2, 3 giving "Java". `substring(5)` extracts from index 5 to the end, giving "Programming".

### Q3. [Easy] What is the output?

```
System.out.println("hello".toUpperCase());
System.out.println("WORLD".toLowerCase());
System.out.println("  spaces  ".trim());
```

*Hint:* toUpperCase() converts all letters to uppercase. toLowerCase() converts all to lowercase. trim() removes leading and trailing whitespace.

**Answer:** `HELLO`
`world`
`spaces`

`toUpperCase()` returns "HELLO". `toLowerCase()` returns "world". `trim()` removes the spaces from both ends, returning "spaces". The original strings remain unchanged.

### Q4. [Easy] What is the output?

```
String a = "Hello";
String b = "Hello";
String c = new String("Hello");
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a.equals(c));
```

*Hint:* == checks reference equality. .equals() checks content equality. Literals share pool references; new creates a separate object.

**Answer:** `true`
`false`
`true`

`a` and `b` are both literals pointing to the same String Pool object, so `==` returns true. `c` is created with `new`, so it is a different object on the heap — `==` returns false. `.equals()` compares content and returns true.

### Q5. [Easy] What is the output?

```
String s = "abcabc";
System.out.println(s.indexOf("b"));
System.out.println(s.lastIndexOf("b"));
System.out.println(s.indexOf("xyz"));
```

*Hint:* indexOf() returns the first occurrence. lastIndexOf() returns the last. Both return -1 if not found.

**Answer:** `1`
`4`
`-1`

`indexOf("b")` finds the first 'b' at index 1. `lastIndexOf("b")` finds the last 'b' at index 4. `indexOf("xyz")` returns -1 because "xyz" does not exist in the string.

### Q6. [Easy] What is the output?

```
String s = "Hello";
System.out.println(s.contains("ell"));
System.out.println(s.startsWith("He"));
System.out.println(s.endsWith("LO"));
```

*Hint:* contains(), startsWith(), and endsWith() are case-sensitive and return boolean values.

**Answer:** `true`
`true`
`false`

`contains("ell")` returns true because "ell" is a substring of "Hello". `startsWith("He")` returns true. `endsWith("LO")` returns false because the comparison is case-sensitive: "lo" is not "LO".

### Q7. [Medium] What is the output?

```
String s1 = "Hello";
String s2 = "Hel" + "lo";
String s3 = "Hel";
String s4 = s3 + "lo";
System.out.println(s1 == s2);
System.out.println(s1 == s4);
```

*Hint:* Concatenation of compile-time constants is resolved at compile time and placed in the pool. Concatenation involving variables happens at runtime.

**Answer:** `true`
`false`

`"Hel" + "lo"` is a compile-time constant expression. The compiler resolves it to "Hello" and puts it in the String Pool, so `s1 == s2` is true. `s3 + "lo"` involves a variable, so it is computed at runtime and creates a new object on the heap. `s1 == s4` is false.

### Q8. [Medium] What is the output?

```
String s = "Java";
s.concat(" Programming");
System.out.println(s);
```

*Hint:* Strings are immutable. Does concat() modify the original string or return a new one?

**Answer:** `Java`

`concat()` returns a new String with the argument appended, but the result is not assigned to any variable. Since strings are immutable, `s` still points to the original "Java". To get "Java Programming", you would need: `s = s.concat(" Programming");`

### Q9. [Medium] What is the output?

```
String s = "Hello World";
String[] parts = s.split(" ");
System.out.println(parts.length);
System.out.println(parts[0]);
System.out.println(parts[1]);
```

*Hint:* split() returns an array of substrings divided by the given delimiter.

**Answer:** `2`
`Hello`
`World`

`split(" ")` splits the string at each space, creating an array with two elements: "Hello" and "World". `parts.length` is 2.

### Q10. [Medium] What is the output?

```
String s = "abcdef";
System.out.println(s.replace('c', 'C'));
System.out.println(s.replace("cd", "XX"));
System.out.println(s);
```

*Hint:* replace() returns a new string. The original remains unchanged.

**Answer:** `abCdef`
`abXXef`
`abcdef`

`replace('c', 'C')` replaces all occurrences of 'c' with 'C', returning "abCdef". `replace("cd", "XX")` replaces the substring "cd" with "XX", returning "abXXef". The original string `s` is unchanged because strings are immutable.

### Q11. [Medium] What is the output?

```
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
sb.reverse();
System.out.println(sb);
System.out.println(sb.length());
```

*Hint:* StringBuilder methods modify the object in place and return the same object for chaining.

**Answer:** `dlroW olleH`
`11`

`append(" World")` makes the content "Hello World". `reverse()` reverses it in place to "dlroW olleH". The length is 11 (including the space). Unlike String, StringBuilder methods modify the same object.

### Q12. [Medium] What is the output?

```
StringBuilder sb = new StringBuilder("ABCDE");
sb.delete(1, 3);
System.out.println(sb);
sb.insert(1, "XY");
System.out.println(sb);
```

*Hint:* delete(start, end) removes characters from start (inclusive) to end (exclusive). insert() shifts existing characters right.

**Answer:** `ADE`
`AXYDE`

`delete(1, 3)` removes characters at indices 1 and 2 ('B' and 'C'), leaving "ADE". `insert(1, "XY")` inserts "XY" at index 1, pushing 'D' and 'E' to the right, giving "AXYDE".

### Q13. [Medium] What is the output?

```
System.out.println("apple".compareTo("banana"));
System.out.println("banana".compareTo("banana"));
System.out.println("cat".compareTo("bat"));
```

*Hint:* compareTo() compares character by character using Unicode values and returns the difference.

**Answer:** `-1`
`0`
`1`

`"apple".compareTo("banana")` compares 'a' (97) with 'b' (98), giving 97-98 = -1. `"banana".compareTo("banana")` returns 0 because the strings are identical. `"cat".compareTo("bat")` compares 'c' (99) with 'b' (98), giving 99-98 = 1.

### Q14. [Hard] What is the output?

```
String s1 = "Hello";
String s2 = new String("Hello");
String s3 = s2.intern();
System.out.println(s1 == s2);
System.out.println(s1 == s3);
System.out.println(s2 == s3);
```

*Hint:* intern() returns the String Pool reference. s1 already points to the pool. s2 points to the heap.

**Answer:** `false`
`true`
`false`

`s1` points to the pool "Hello". `s2` is a new heap object. `s3 = s2.intern()` returns the pool reference (same as s1). So `s1 == s2` is false (pool vs heap), `s1 == s3` is true (both point to pool), `s2 == s3` is false (heap vs pool).

### Q15. [Hard] What is the output?

```
String s = "Java";
System.out.println(s.substring(0, 0));
System.out.println(s.substring(2, 2));
System.out.println(s.substring(4));
```

*Hint:* When start equals end in substring(), the result is an empty string. substring(length) also returns an empty string.

**Answer:** `` (empty string)
`` (empty string)
`` (empty string)

`substring(0, 0)` and `substring(2, 2)` both return empty strings because the range is empty (start equals end). `substring(4)` starts at index 4 which is the length of "Java", so there are no characters left. All three produce empty strings without errors.

### Q16. [Hard] What is the output?

```
String s = "aAbBcC";
String result = "";
for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    if (Character.isUpperCase(c)) {
        result += Character.toLowerCase(c);
    } else {
        result += Character.toUpperCase(c);
    }
}
System.out.println(result);
```

*Hint:* The code swaps the case of each character: uppercase becomes lowercase and vice versa.

**Answer:** `AaBbCc`

Each character's case is swapped. 'a' becomes 'A', 'A' becomes 'a', 'b' becomes 'B', 'B' becomes 'b', 'c' becomes 'C', 'C' becomes 'c'. The result is "AaBbCc".

### Q17. [Hard] What is the output?

```
String s = "abcabc";
System.out.println(s.indexOf("bc"));
System.out.println(s.indexOf("bc", 2));
System.out.println(s.lastIndexOf("ab"));
```

*Hint:* indexOf(str, fromIndex) starts searching from the given index. lastIndexOf() searches from the end.

**Answer:** `1`
`4`
`3`

`indexOf("bc")` finds the first "bc" at index 1. `indexOf("bc", 2)` starts searching from index 2, finding "bc" at index 4. `lastIndexOf("ab")` finds the last "ab" at index 3.

### Q18. [Hard] What is the output?

```
String s1 = "hello";
String s2 = "HELLO";
System.out.println(s1.equals(s2));
System.out.println(s1.equalsIgnoreCase(s2));
System.out.println(s1.compareTo(s2) > 0);
```

*Hint:* equals() is case-sensitive. equalsIgnoreCase() ignores case. compareTo() uses Unicode values where lowercase letters have higher values than uppercase.

**Answer:** `false`
`true`
`true`

`equals()` is case-sensitive: "hello" is not equal to "HELLO". `equalsIgnoreCase()` ignores case and returns true. `compareTo()` compares 'h' (104) with 'H' (72): 104-72 = 32 which is positive, so `s1.compareTo(s2) > 0` is true because lowercase letters have higher Unicode values.

## Mixed Questions

### Q1. [Easy] What is the output?

```
String s = "Java";
System.out.println(s + " is fun");
System.out.println(s);
```

*Hint:* The + operator creates a new string. It does not modify the original.

**Answer:** `Java is fun`
`Java`

`s + " is fun"` creates a new string "Java is fun" and prints it. The original string `s` remains "Java" because strings are immutable. The result of concatenation was printed but not assigned back to `s`.

### Q2. [Easy] What is the output?

```
String name = "Rohit Sharma";
System.out.println(name.indexOf(' '));
System.out.println(name.substring(0, name.indexOf(' ')));
System.out.println(name.substring(name.indexOf(' ') + 1));
```

*Hint:* indexOf(' ') finds the space character. Use it to split first and last name.

**Answer:** `5`
`Rohit`
`Sharma`

The space is at index 5. `substring(0, 5)` gives the first name "Rohit". `substring(6)` gives the last name "Sharma". This is a common pattern for extracting parts of a name.

### Q3. [Easy] What is the output?

```
System.out.println("Hello".isEmpty());
System.out.println("".isEmpty());
System.out.println(" ".isEmpty());
```

*Hint:* isEmpty() returns true only if the length is 0. A string with a space has length 1.

**Answer:** `false`
`true`
`false`

`isEmpty()` returns true only when the string has zero characters (length 0). "Hello" has length 5, so false. "" has length 0, so true. " " (a single space) has length 1, so false. Use `isBlank()` (Java 11+) to check for whitespace-only strings.

### Q4. [Medium] What is the output?

```
String s = "Hello World Hello Java";
System.out.println(s.replace("Hello", "Hi"));
System.out.println(s.replaceFirst("Hello", "Hi"));
```

*Hint:* replace() replaces all occurrences. replaceFirst() replaces only the first one.

**Answer:** `Hi World Hi Java`
`Hi World Hello Java`

`replace("Hello", "Hi")` replaces every occurrence of "Hello" with "Hi". `replaceFirst("Hello", "Hi")` replaces only the first occurrence, leaving the second "Hello" unchanged.

### Q5. [Medium] What is the output?

```
String[] names = {"Aarav", "Priya", "Rohan"};
String joined = String.join("-", names);
System.out.println(joined);
String[] parts = joined.split("-");
System.out.println(parts.length);
```

*Hint:* join() combines array elements with a delimiter. split() breaks a string at the delimiter.

**Answer:** `Aarav-Priya-Rohan`
`3`

`String.join("-", names)` joins the array elements with "-" as separator, producing "Aarav-Priya-Rohan". `split("-")` splits this string at each "-", creating an array of 3 elements.

### Q6. [Medium] What is the output?

```
String s = "Java";
char[] chars = s.toCharArray();
chars[0] = 'L';
System.out.println(new String(chars));
System.out.println(s);
```

*Hint:* toCharArray() creates a separate copy. Modifying the array does not affect the original string.

**Answer:** `Lava`
`Java`

`toCharArray()` returns a new char array that is a copy of the string's characters. Modifying `chars[0]` changes the array but not the original string. `new String(chars)` creates a new string "Lava" from the modified array. The original `s` remains "Java".

### Q7. [Medium] What is the output?

```
System.out.println(String.format("%s scored %d/%d", "Meera", 85, 100));
System.out.println(String.format("PI = %.3f", 3.14159));
System.out.println(String.format("%05d", 42));
```

*Hint:* %s for string, %d for integer, %.3f for 3 decimal places, %05d for zero-padded integer.

**Answer:** `Meera scored 85/100`
`PI = 3.142`
`00042`

`%s` inserts the string "Meera". `%d` inserts integers 85 and 100. `%.3f` formats the double to 3 decimal places (rounds 3.14159 to 3.142). `%05d` pads the integer 42 with leading zeros to make it 5 characters wide.

### Q8. [Hard] What is the output?

```
String s1 = "Java";
String s2 = "Ja";
String s3 = s2 + "va";
System.out.println(s1 == s3);
System.out.println(s1 == s3.intern());
```

*Hint:* Variable-based concatenation creates a runtime object (not in the pool). intern() returns the pool reference.

**Answer:** `false`
`true`

`s2 + "va"` involves a variable, so it is computed at runtime and creates a new heap object. `s1 == s3` is false because they are different objects. `s3.intern()` returns the pool reference for "Java", which is the same object `s1` points to, so `s1 == s3.intern()` is true.

### Q9. [Hard] What is the output?

```
StringBuilder sb = new StringBuilder("Hello");
StringBuilder sb2 = sb;
sb2.append(" World");
System.out.println(sb);
System.out.println(sb == sb2);
```

*Hint:* sb and sb2 reference the same StringBuilder object. Modifying one affects the other.

**Answer:** `Hello World`
`true`

`sb2 = sb` does not create a copy; both variables reference the same StringBuilder object. When `sb2.append(" World")` is called, it modifies the shared object. So `sb` also shows "Hello World". `sb == sb2` is true because they point to the same object.

### Q10. [Hard] What is the output?

```
String s = "a,b,,c,";
String[] parts = s.split(",");
System.out.println(parts.length);
for (String p : parts) {
    System.out.print("[" + p + "]");
}
```

*Hint:* split() removes trailing empty strings by default. But what about empty strings in the middle?

**Answer:** `4`
`[a][b][][c]`

Splitting "a,b,,c," by "," produces: "a", "b", "", "c", "". By default, `split()` removes trailing empty strings. The last empty string (after the final comma) is removed, leaving 4 elements. The empty string between the two commas (between b and c) is kept.

### Q11. [Medium] What is the difference between `StringBuilder` and `StringBuffer`? When would you use each?

*Hint:* Think about thread safety and performance.

**Answer:** `StringBuilder` is not synchronized (not thread-safe) but is faster. `StringBuffer` is synchronized (thread-safe) but is slower due to synchronization overhead. Use `StringBuilder` in single-threaded code (most cases) and `StringBuffer` only when multiple threads access the same mutable string.

Both classes provide a mutable character sequence with the same API (append, insert, delete, reverse). The only difference is thread safety. `StringBuffer` was introduced in Java 1.0 with all synchronized methods. `StringBuilder` was added in Java 5 as a faster, non-synchronized alternative. In modern Java, single-threaded contexts are far more common, making `StringBuilder` the default choice.

### Q12. [Medium] Why are Java strings immutable? What are the benefits?

*Hint:* Think about thread safety, the String Pool, hashing, and security.

**Answer:** Java strings are immutable to provide: (1) **Thread safety** — multiple threads can share strings without synchronization. (2) **String Pool efficiency** — immutability allows safe sharing of string objects. (3) **Security** — strings used as class names, file paths, or network addresses cannot be tampered with. (4) **Hashcode caching** — the hash can be computed once and reused, making strings efficient as HashMap keys.

Immutability is a deliberate design decision. If strings were mutable, the String Pool could not exist because one variable's modification would affect all other variables pointing to the same pool object. Similarly, using mutable strings as HashMap keys would break the map if the key's content (and thus its hashcode) changed after insertion.

### Q13. [Hard] What is the output?

```
String s1 = "abc";
String s2 = "abc";
System.out.println(s1.hashCode() == s2.hashCode());
String s3 = new String("abc");
System.out.println(s1.hashCode() == s3.hashCode());
System.out.println(s1 == s3);
```

*Hint:* hashCode() is based on content, not reference. Two strings with the same content have the same hashcode.

**Answer:** `true`
`true`
`false`

`hashCode()` for Strings is computed from the characters. Since all three strings contain "abc", they have the same hashcode. However, `s1 == s3` is false because `==` checks reference equality, and `s3` is a separate heap object. Equal hashcodes do not mean `==` is true.

## Multiple Choice Questions

### Q1. [Easy] Which of the following correctly creates a string in Java?

A. String s = 'Hello';
B. String s = "Hello";
C. string s = "Hello";
D. String s = new char[]{'H','e','l','l','o'};

**Answer:** B

**B is correct.** Java strings use double quotes. Single quotes (A) are for char literals. Java is case-sensitive, so `string` (C) with a lowercase 's' is not a valid type. Option D creates a char array, not a String (though you can pass a char array to the String constructor).

### Q2. [Easy] What does the .equals() method check when comparing two strings?

A. Whether both variables refer to the same object
B. Whether both strings have the same length
C. Whether both strings contain the same sequence of characters
D. Whether both strings are stored in the String Pool

**Answer:** C

**C is correct.** `.equals()` compares the actual character content of two strings. Option A describes the behavior of `==`. Length alone (B) does not determine equality ("abc" and "xyz" have the same length but are not equal). Pool membership (D) is irrelevant to content equality.

### Q3. [Easy] What is the return type of the split() method?

A. String
B. char[]
C. String[]
D. List

**Answer:** C

**C is correct.** `split()` returns a `String[]` (array of strings). It does not return a single String (A), a char array (B), or a List (D). To get a List, you would wrap it: `Arrays.asList(s.split(","))`.

### Q4. [Easy] Which method would you use to remove leading and trailing whitespace from a string?

A. strip()
B. trim()
C. clean()
D. Both A and B

**Answer:** D

**D is correct.** Both `trim()` and `strip()` (Java 11+) remove leading and trailing whitespace. `trim()` removes characters with Unicode value <= 32. `strip()` uses Unicode-aware whitespace detection and is the preferred modern choice. `clean()` (C) does not exist.

### Q5. [Easy] What happens when you try to modify a character in a String using charAt()?

A. The character is modified successfully
B. A new string is created with the modification
C. charAt() is read-only and cannot modify the string
D. It throws an UnsupportedOperationException

**Answer:** C

**C is correct.** `charAt()` is a read-only method that returns the character at a given index. There is no `setCharAt()` method on String because strings are immutable. To modify characters, use `StringBuilder` which has a `setCharAt()` method.

### Q6. [Medium] How many String objects are created by the statement: String s = new String("Hello");?

A. 1
B. 2
C. 1 or 2, depending on the String Pool
D. 3

**Answer:** C

**C is correct.** If "Hello" is not already in the String Pool, two objects are created: one in the pool (for the literal) and one on the heap (for the `new` keyword). If "Hello" already exists in the pool, only one new object is created on the heap. This is a classic interview question.

### Q7. [Medium] What is the output of "Hello".substring(2, 2)?

A. "l"
B. "" (empty string)
C. StringIndexOutOfBoundsException
D. null

**Answer:** B

**B is correct.** When beginIndex equals endIndex in `substring()`, the result is an empty string because there are no characters in the range. No exception is thrown. This is valid as long as both indices are within bounds (0 to length inclusive).

### Q8. [Medium] Which of the following is true about the String Pool?

A. It stores all String objects regardless of how they are created
B. It stores only string literals and interned strings
C. It is located in the stack memory
D. It is garbage collected differently from the heap

**Answer:** B

**B is correct.** The String Pool stores string literals (created with quotes) and strings explicitly added via `intern()`. Strings created with `new` are stored on the heap, not in the pool (A is wrong). Since Java 7, the pool is part of the heap (C is wrong — it is not on the stack). Pool strings are garbage collected like other heap objects when unreferenced (D is misleading).

### Q9. [Medium] What is the purpose of the intern() method?

A. Converts a string to an internal format
B. Returns the String Pool reference for the given string
C. Makes a string thread-safe
D. Converts a StringBuilder to a String

**Answer:** B

**B is correct.** `intern()` checks if an equal string exists in the String Pool. If yes, it returns the pool reference. If not, it adds the string to the pool and returns that reference. This allows `==` comparison for interned strings. It has nothing to do with thread safety (C) or StringBuilder conversion (D).

### Q10. [Medium] Why should you use StringBuilder instead of String concatenation in a loop?

A. StringBuilder is thread-safe
B. String concatenation in a loop creates O(n) temporary objects, causing O(n^2) performance
C. String concatenation is deprecated
D. StringBuilder uses less memory per character

**Answer:** B

**B is correct.** Each `+=` in a loop creates a new String object and copies all previous characters. Over n iterations, this leads to O(n^2) total character copies. StringBuilder maintains a mutable buffer, avoiding redundant copies. StringBuilder is NOT thread-safe (A) — that is StringBuffer. String concatenation is not deprecated (C).

### Q11. [Hard] What is the output of the following?

```
String s1 = "abc";
String s2 = "a" + "b" + "c";
System.out.println(s1 == s2);
```

A. true
B. false
C. Compilation error
D. Runtime error

**Answer:** A

**A is correct.** The expression `"a" + "b" + "c"` consists entirely of compile-time string constants. The Java compiler evaluates this at compile time and replaces it with the literal "abc". Both `s1` and `s2` reference the same String Pool object, so `==` returns true.

### Q12. [Hard] What is the difference between String.valueOf(null) and passing null to System.out.println()?

A. Both print "null"
B. valueOf(null) throws NullPointerException, println(null) prints "null"
C. valueOf(null) prints "null", println(null) throws NullPointerException
D. Both throw NullPointerException

**Answer:** B

**B is correct.** `String.valueOf(Object obj)` handles null gracefully and returns the string "null". However, `String.valueOf(null)` is ambiguous — the compiler may match it to `valueOf(char[])` which throws a `NullPointerException`. `System.out.println((Object) null)` prints "null" safely. This is a nuanced interview question about method overloading resolution.

### Q13. [Hard] Which of the following statements about StringBuffer is FALSE?

A. StringBuffer is thread-safe
B. StringBuffer is faster than StringBuilder
C. StringBuffer methods are synchronized
D. StringBuffer was introduced before StringBuilder

**Answer:** B

**B is FALSE and therefore the correct answer.** StringBuffer is SLOWER than StringBuilder because of synchronization overhead. Each method call acquires and releases a lock. StringBuffer is thread-safe (A) because its methods are synchronized (C). StringBuffer was in Java 1.0, while StringBuilder was added in Java 5 (D).

### Q14. [Hard] What does "Hello".compareTo("Hello World") return?

A. 0
B. A negative value
C. A positive value
D. It depends on the JVM

**Answer:** B

**B is correct.** When one string is a prefix of the other, `compareTo()` returns the difference in lengths. "Hello" has length 5 and "Hello World" has length 11. The return value is 5 - 11 = -6 (a negative number), meaning "Hello" comes before "Hello World" lexicographically.

### Q15. [Easy] What is the correct way to check if a string contains the substring "Java"?

A. s.has("Java")
B. s.includes("Java")
C. s.contains("Java")
D. s.find("Java")

**Answer:** C

**C is correct.** `contains()` checks if a string contains the specified character sequence and returns a boolean. Java does not have `has()` (A) or `includes()` (B) methods on String. `find()` (D) is a Python method; Java uses `indexOf()` which returns an int, not a boolean.

### Q16. [Medium] What is the output of "abc".charAt(3)?

A. 'c'
B. ' ' (space)
C. StringIndexOutOfBoundsException
D. null

**Answer:** C

**C is correct.** The string "abc" has valid indices 0, 1, and 2. Index 3 is out of bounds, so `charAt(3)` throws a `StringIndexOutOfBoundsException`. Unlike Python, Java does not support negative indexing and strictly enforces bounds.

## Coding Challenges

### Challenge 1. Count Vowels and Consonants

**Difficulty:** Easy

Aarav has the string "Modern Age Coders". Write a Java program that counts and prints the number of vowels and consonants (ignore spaces and special characters).

**Constraints:**

- Use a for loop and Character.isLetter() for checking. Consider both uppercase and lowercase.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Vowels: 6
Consonants: 9
```

**Solution:**

```java
public class CountVowels {
    public static void main(String[] args) {
        String text = "Modern Age Coders";
        int vowels = 0, consonants = 0;
        for (int i = 0; i < text.length(); i++) {
            char c = Character.toLowerCase(text.charAt(i));
            if ("aeiou".indexOf(c) != -1) {
                vowels++;
            } else if (Character.isLetter(c)) {
                consonants++;
            }
        }
        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}
```

### Challenge 2. Reverse Each Word

**Difficulty:** Easy

Given the string "Java is powerful", reverse each word individually but keep the word order the same. Print the result.

**Constraints:**

- Use split(), StringBuilder for reversing, and String.join().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
avaJ si lufrewop
```

**Solution:**

```java
public class ReverseWords {
    public static void main(String[] args) {
        String text = "Java is powerful";
        String[] words = text.split(" ");
        String[] reversed = new String[words.length];
        for (int i = 0; i < words.length; i++) {
            reversed[i] = new StringBuilder(words[i]).reverse().toString();
        }
        System.out.println(String.join(" ", reversed));
    }
}
```

### Challenge 3. Check Palindrome

**Difficulty:** Easy

Write a Java program that checks whether the string "madam" is a palindrome (reads the same forwards and backwards). Print the result.

**Constraints:**

- Use StringBuilder to reverse the string and compare with .equals().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
madam is a palindrome
```

**Solution:**

```java
public class Palindrome {
    public static void main(String[] args) {
        String text = "madam";
        String reversed = new StringBuilder(text).reverse().toString();
        if (text.equals(reversed)) {
            System.out.println(text + " is a palindrome");
        } else {
            System.out.println(text + " is not a palindrome");
        }
    }
}
```

### Challenge 4. Title Case Converter

**Difficulty:** Medium

Priya has the string "the quick brown fox jumps over the lazy dog". Write a Java program that converts it to title case — capitalize the first letter of each word.

**Constraints:**

- Use split() and substring(). Do not use any external library.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
The Quick Brown Fox Jumps Over The Lazy Dog
```

**Solution:**

```java
public class TitleCase {
    public static void main(String[] args) {
        String text = "the quick brown fox jumps over the lazy dog";
        String[] words = text.split(" ");
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            result.append(Character.toUpperCase(word.charAt(0)));
            result.append(word.substring(1));
            if (i < words.length - 1) {
                result.append(" ");
            }
        }
        System.out.println(result.toString());
    }
}
```

### Challenge 5. Character Frequency Counter

**Difficulty:** Medium

Write a Java program that prints the frequency of each character in the string "banana" (excluding spaces). Print each character and its count on a separate line, without repeating characters.

**Constraints:**

- Use a loop. Track which characters have already been counted.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
b: 1
a: 3
n: 2
```

**Solution:**

```java
public class CharFrequency {
    public static void main(String[] args) {
        String text = "banana";
        String counted = "";
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (counted.indexOf(c) == -1) {
                int count = 0;
                for (int j = 0; j < text.length(); j++) {
                    if (text.charAt(j) == c) count++;
                }
                System.out.println(c + ": " + count);
                counted += c;
            }
        }
    }
}
```

### Challenge 6. Caesar Cipher Encoder

**Difficulty:** Medium

Rohan wants to encode the message "HELLO" by shifting each letter 3 positions forward in the alphabet (A becomes D, B becomes E, ..., X becomes A, Y becomes B, Z becomes C). Write the encoder.

**Constraints:**

- Use charAt(), type casting, and the modulus operator for wrapping.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Encoded: KHOOR
```

**Solution:**

```java
public class CaesarCipher {
    public static void main(String[] args) {
        String message = "HELLO";
        int shift = 3;
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < message.length(); i++) {
            char c = message.charAt(i);
            int newPos = (c - 'A' + shift) % 26;
            result.append((char) ('A' + newPos));
        }
        System.out.println("Encoded: " + result);
    }
}
```

### Challenge 7. Remove Duplicate Characters

**Difficulty:** Hard

Write a Java program that removes duplicate characters from the string "programming" while preserving the order of first occurrence. Print the result.

**Constraints:**

- Use StringBuilder to build the result. Track seen characters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
progamin
```

**Solution:**

```java
public class RemoveDuplicates {
    public static void main(String[] args) {
        String text = "programming";
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (result.toString().indexOf(c) == -1) {
                result.append(c);
            }
        }
        System.out.println(result);
    }
}
```

### Challenge 8. Anagram Checker

**Difficulty:** Hard

Write a Java program that checks whether "listen" and "silent" are anagrams (contain the same characters in a different order). Print the result.

**Constraints:**

- Convert to char arrays, sort them, and compare. Use java.util.Arrays.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
listen and silent are anagrams
```

**Solution:**

```java
import java.util.Arrays;

public class AnagramCheck {
    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";
        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        if (Arrays.equals(arr1, arr2)) {
            System.out.println(s1 + " and " + s2 + " are anagrams");
        } else {
            System.out.println(s1 + " and " + s2 + " are not anagrams");
        }
    }
}
```

### Challenge 9. String Compression

**Difficulty:** Hard

Write a Java program that compresses the string "aaabbccddddee" by replacing consecutive duplicate characters with the character followed by its count. Single characters should not have a count.

**Constraints:**

- Use a loop. Handle the last group carefully.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
a3b2c2d4e2
```

**Solution:**

```java
public class StringCompression {
    public static void main(String[] args) {
        String text = "aaabbccddddee";
        StringBuilder result = new StringBuilder();
        int i = 0;
        while (i < text.length()) {
            char c = text.charAt(i);
            int count = 1;
            while (i + count < text.length() && text.charAt(i + count) == c) {
                count++;
            }
            result.append(c);
            if (count > 1) {
                result.append(count);
            }
            i += count;
        }
        System.out.println(result);
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/strings-in-java/*
