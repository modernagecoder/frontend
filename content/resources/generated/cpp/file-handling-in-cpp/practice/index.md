---
title: "Practice: File Handling (ifstream, ofstream, fstream)"
description: "52 practice problems for File Handling (ifstream, ofstream, fstream) in C++"
slug: file-handling-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/file-handling-in-cpp/practice
category: "C++"
---
# Practice: File Handling (ifstream, ofstream, fstream)

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What does this code write to output.txt?

```cpp
ofstream file("output.txt");
file << "Hello" << endl;
file << "World" << endl;
file.close();
```

*Hint:* endl writes a newline and flushes the buffer.

**Answer:** The file contains two lines:
`Hello`
`World`

The `<<` operator writes text to the file just like `cout`. `endl` inserts a newline. The file will contain "Hello\nWorld\n".

### Q2. [Easy] What is the output?

```cpp
ofstream out("test.txt");
out << "Line 1" << endl;
out.close();

ofstream out2("test.txt");
out2 << "Line 2" << endl;
out2.close();

ifstream in("test.txt");
string line;
while (getline(in, line)) cout << line << endl;
in.close();
```

*Hint:* Default ofstream mode is ios::out which truncates the file.

**Answer:** `Line 2`

Opening with default `ofstream` mode truncates the file. The second open erases "Line 1" and writes "Line 2". Only "Line 2" remains.

### Q3. [Easy] What is the output?

```cpp
ofstream out("test.txt");
out << "Line 1" << endl;
out.close();

ofstream out2("test.txt", ios::app);
out2 << "Line 2" << endl;
out2.close();

ifstream in("test.txt");
string line;
while (getline(in, line)) cout << line << endl;
in.close();
```

*Hint:* ios::app means append -- do not truncate.

**Answer:** `Line 1`
`Line 2`

The first write creates "Line 1". The second open uses `ios::app`, so "Line 2" is appended after "Line 1" instead of overwriting.

### Q4. [Easy] What is the output?

```cpp
ofstream out("nums.txt");
out << "10 20 30" << endl;
out.close();

ifstream in("nums.txt");
int a, b, c;
in >> a >> b >> c;
cout << a + b + c;
in.close();
```

*Hint:* >> reads whitespace-separated values.

**Answer:** `60`

The `>>` operator reads integers separated by whitespace. a=10, b=20, c=30. Sum = 60.

### Q5. [Medium] What is the output?

```cpp
ofstream out("test.txt");
out << "ABCDEFGHIJ";
out.close();

ifstream in("test.txt");
in.seekg(5);
char ch;
in.get(ch);
cout << ch << " " << in.tellg();
```

*Hint:* seekg(5) moves to the 6th byte (0-indexed).

**Answer:** `F 6`

`seekg(5)` moves the read position to byte 5 (0-indexed), which is 'F'. After reading one character, `tellg()` returns 6.

### Q6. [Medium] What is the output?

```cpp
ifstream file("nonexistent.txt");
cout << file.is_open() << " ";
cout << file.good() << " ";
cout << file.fail();
```

*Hint:* The file does not exist.

**Answer:** `0 0 1`

Opening a nonexistent file fails. `is_open()` returns false (0). `good()` returns false (0) because the stream is in a failed state. `fail()` returns true (1).

### Q7. [Medium] What is the output?

```cpp
ofstream out("data.txt");
out << "Arjun Kumar 85";
out.close();

ifstream in("data.txt");
string word;
int count = 0;
while (in >> word) count++;
cout << count;
```

*Hint:* >> reads whitespace-separated tokens.

**Answer:** `3`

The `>>` operator reads whitespace-separated tokens: "Arjun", "Kumar", "85". Three tokens are read.

### Q8. [Medium] What is the output?

```cpp
ofstream out("data.txt");
out << "Arjun Kumar 85";
out.close();

ifstream in("data.txt");
string line;
int count = 0;
while (getline(in, line)) count++;
cout << count;
```

*Hint:* getline reads the entire line including spaces.

**Answer:** `1`

`getline` reads the entire line "Arjun Kumar 85" as a single string. There is one line, so count = 1.

### Q9. [Hard] What is the output?

```cpp
struct Data { int x; int y; };

Data d1 = {10, 20};
ofstream out("data.bin", ios::binary);
out.write(reinterpret_cast<char*>(&d1), sizeof(Data));
out.close();

ifstream in("data.bin", ios::binary);
Data d2;
in.read(reinterpret_cast<char*>(&d2), sizeof(Data));
cout << d2.x << " " << d2.y;
```

*Hint:* Binary write stores the exact bytes of the struct.

**Answer:** `10 20`

Binary `write` stores the raw bytes of the struct. Binary `read` loads those exact bytes back into a struct of the same type. The values are preserved exactly.

### Q10. [Hard] What is the output?

```cpp
ofstream out("test.txt");
out << "Hello World";
out.close();

ifstream in("test.txt", ios::binary);
in.seekg(0, ios::end);
cout << in.tellg();
```

*Hint:* seekg(0, ios::end) moves to the end of the file. tellg() returns the position.

**Answer:** `11`

"Hello World" is 11 characters. Seeking to the end and calling `tellg()` returns the file size in bytes: 11.

### Q11. [Medium] What is the difference between ios::app and ios::ate?

*Hint:* Both position at the end, but they differ in what happens during writes.

**Answer:** `ios::app` (append) always writes to the end of the file, regardless of any seekp calls. Every write operation is guaranteed to append. `ios::ate` (at end) positions the cursor at the end when the file is opened, but you can seekp to any position and write there. `ios::app` is safer for log files where you always want to append.

With `ios::app`, even if you call seekp(0), the next write still goes to the end. With `ios::ate`, seekp is honored. Use `ios::app` for logs and append-only files.

### Q12. [Hard] Why should you never use while(!file.eof()) as a loop condition?

*Hint:* Think about when the eof flag is actually set.

**Answer:** The `eof()` flag is set only **after** a read operation fails, not when the last successful read reaches the end of data. Using `while(!eof())` causes the loop to execute one extra time after the last valid read: the read fails, the old data is processed again, and then eof is detected. The correct pattern is `while(getline(file, line))` or `while(file >> var)`, where the read result is the condition.

This is one of the most common C++ file handling bugs. The stream operator returns the stream reference, which converts to false when the read fails, making it the ideal loop condition.

## Mixed Questions

### Q1. [Easy] What is the output?

```cpp
ofstream file("greet.txt");
file << "Hello ";
file << "World";
file.close();

ifstream in("greet.txt");
string content;
getline(in, content);
cout << content.length();
```

*Hint:* There is no endl between Hello and World.

**Answer:** `11`

"Hello " (6 chars) + "World" (5 chars) = "Hello World" (11 chars). Since there is no endl, everything is on one line.

### Q2. [Easy] What happens when you run this code?

```cpp
ofstream file;
file << "Hello";
file.close();
```

*Hint:* The file was never opened.

**Answer:** Nothing is written anywhere. The stream is in a failed state because no file was opened. The `<<` operation silently fails.

Without calling `open()` or using the constructor with a filename, the ofstream has no associated file. All write operations fail silently. Always open a file before writing.

### Q3. [Medium] What is the output?

```cpp
ofstream out("test.txt");
for (int i = 1; i <= 5; i++)
    out << i << " ";
out.close();

ifstream in("test.txt");
int sum = 0, num;
while (in >> num) sum += num;
cout << sum;
```

*Hint:* The file contains "1 2 3 4 5 ".

**Answer:** `15`

The file contains "1 2 3 4 5 ". The loop reads five integers (1+2+3+4+5 = 15). The trailing space does not cause issues because `>>` skips whitespace.

### Q4. [Medium] What is the output?

```cpp
ofstream out("test.txt");
out << "Name: Arjun" << endl;
out << "Age: 20" << endl;
out.close();

ifstream in("test.txt");
string line;
int lineCount = 0;
while (getline(in, line)) {
    if (line.find("Age") != string::npos)
        cout << line;
    lineCount++;
}
cout << " (" << lineCount << " lines)";
```

*Hint:* find() returns string::npos if the substring is not found.

**Answer:** `Age: 20 (2 lines)`

The loop reads 2 lines. The first line ("Name: Arjun") does not contain "Age". The second line ("Age: 20") does, so it is printed. Total lines = 2.

### Q5. [Medium] What is the output?

```cpp
struct Point { int x; int y; };
Point p1 = {3, 7};

ofstream out("point.bin", ios::binary);
out.write(reinterpret_cast<char*>(&p1), sizeof(Point));
out.close();

ifstream in("point.bin", ios::binary);
in.seekg(0, ios::end);
cout << in.tellg();
```

*Hint:* sizeof(Point) is typically sizeof(int) + sizeof(int).

**Answer:** `8`

A Point struct has two ints, each typically 4 bytes, so sizeof(Point) = 8. The binary file contains exactly 8 bytes.

### Q6. [Hard] What is the output?

```cpp
ofstream out("seq.txt");
for (int i = 0; i < 3; i++)
    out << i << endl;
out.close();

ifstream in("seq.txt");
int val;
while (!in.eof()) {
    in >> val;
    cout << val << " ";
}
```

*Hint:* This uses the problematic while(!eof()) pattern.

**Answer:** `0 1 2 2`

The file contains "0\n1\n2\n". The loop reads 0, 1, 2 successfully. After reading 2, eof is not yet set (the newline has been consumed but eof is not triggered until the next read attempt). The next `in >> val` fails and sets eof, but val still holds 2 from the previous read, so 2 is printed again. This is exactly why `while(!eof())` is wrong.

### Q7. [Easy] What is the difference between ifstream, ofstream, and fstream?

*Hint:* Think about read-only, write-only, and read-write.

**Answer:** `ifstream` opens files for reading only (input). `ofstream` opens files for writing only (output, truncates by default). `fstream` can do both reading and writing, but you must specify the mode explicitly (e.g., `ios::in | ios::out`). Use the most restrictive type that meets your needs.

Using ifstream when you only need to read prevents accidental writes. Using ofstream when you only need to write is simpler than fstream. Use fstream only when you need both read and write access in the same stream.

### Q8. [Medium] What is reinterpret_cast<char*> used for in binary file I/O?

*Hint:* write() and read() expect a char* pointer.

**Answer:** `write()` and `read()` take a `char*` (pointer to bytes) and a byte count. `reinterpret_cast<char*>` converts a pointer to any type (struct, int, etc.) into a `char*`, telling the compiler to treat the memory as raw bytes. This allows writing the raw memory representation of any object to a file.

Binary I/O operates at the byte level. `reinterpret_cast` is necessary because `write` and `read` do not know about your struct's fields -- they just copy sizeof(T) bytes to/from the file.

### Q9. [Hard] Why is random access possible in binary files with fixed-size records but not in text files with variable-length lines?

*Hint:* Think about how you calculate the byte position of record N.

**Answer:** In binary files with fixed-size records (e.g., all records are sizeof(Student) = 64 bytes), the byte offset of record N is exactly `N * sizeof(Student)`. You can seekg to that position in O(1). In text files, each line can have a different length ("Arjun" is 5 chars, "Raghunath" is 9 chars), so you cannot compute the byte offset of line N without reading all preceding lines. Text files require sequential access.

This is why databases and binary formats use fixed-size records or index structures. Random access requires knowing the exact byte position, which is only trivial with fixed-size records.

## Multiple Choice Questions

### Q1. [Easy] Which header provides ifstream, ofstream, and fstream?

**Answer:** B

**B is correct.** The `` header provides all file stream classes: ifstream, ofstream, and fstream.

### Q2. [Easy] What is the default mode for ofstream?

**Answer:** B

**B is correct.** ofstream defaults to `ios::out`, which truncates the file if it exists. Use `ios::app` to append instead.

### Q3. [Easy] Which function reads an entire line including spaces from a file?

**Answer:** C

**C is correct.** `getline(file, line)` reads until the newline, including spaces. The `>>` operator stops at whitespace.

### Q4. [Easy] What does file.is_open() return if the file was not found?

**Answer:** B

**B is correct.** `is_open()` returns false if the file could not be opened for any reason (not found, permission denied, etc.).

### Q5. [Easy] What does ios::app mode do?

**Answer:** C

**C is correct.** `ios::app` ensures every write goes to the end of the file, preserving existing content.

### Q6. [Medium] What does seekg(0, ios::end) followed by tellg() give you?

**Answer:** C

**C is correct.** Seeking to the end and calling `tellg()` returns the byte position at the end, which equals the file size.

### Q7. [Medium] What does reinterpret_cast<char*>(&obj) do?

**Answer:** B

**B is correct.** `reinterpret_cast<char*>` tells the compiler to treat the memory at that address as raw bytes (char*). This is required for `write()` and `read()` which operate on byte buffers.

### Q8. [Medium] What is the correct way to read integers from a file until end?

**Answer:** B

**B is correct.** `file >> num` returns the stream, which converts to false when the read fails. This is the idiomatic and correct pattern. Options A and C process the last value twice.

### Q9. [Medium] What is the difference between seekg and seekp?

**Answer:** B

**B is correct.** `seekg` (seek get) positions the read pointer. `seekp` (seek put) positions the write pointer. In an fstream, both may be needed.

### Q10. [Hard] Why must you use ios::binary when using write() and read() for struct I/O?

**Answer:** B

**B is correct.** In text mode, the runtime may translate \n to \r\n (Windows) or vice versa. If the struct's raw bytes happen to contain 0x0A (\n byte), this translation corrupts the data. Binary mode performs no translation.

### Q11. [Hard] How do you calculate the byte position of the Nth record in a binary file with fixed-size records?

**Answer:** B

**B is correct.** With 0-based indexing, record N starts at byte position `N * sizeof(Record)`. Use seekg with this value for O(1) random access.

### Q12. [Hard] What happens if you open a file with ofstream (default mode) that already contains data?

**Answer:** B

**B is correct.** The default mode for ofstream is `ios::out`, which implies `ios::trunc`. The file is truncated to zero length before any new data is written.

### Q13. [Medium] How do you combine file modes in C++?

**Answer:** C

**C is correct.** File modes are combined using the bitwise OR operator (`|`). Example: `ios::in | ios::out | ios::binary`.

### Q14. [Easy] What does file.close() do?

**Answer:** B

**B is correct.** `close()` flushes any buffered data to disk and releases the OS file handle. The file remains on disk.

## Coding Challenges

### Challenge 1. Word Frequency Counter from File

**Difficulty:** Easy

Read a text file word by word and count the frequency of each word. Print the words and their counts in alphabetical order. Use a map to store counts.

**Constraints:**

- Use ifstream with >> to read words. Use map<string, int> for counting.

**Sample input:**

```
File content: "the cat sat on the mat the cat"
```

**Sample output:**

```
cat: 2
mat: 1
on: 1
sat: 1
the: 3
```

**Solution:**

```cpp
#include <iostream>
#include <fstream>
#include <map>
#include <string>
using namespace std;

int main() {
    ofstream out("text.txt");
    out << "the cat sat on the mat the cat";
    out.close();

    ifstream in("text.txt");
    map<string, int> freq;
    string word;
    while (in >> word) freq[word]++;
    in.close();

    for (auto& [w, c] : freq)
        cout << w << ": " << c << endl;
    return 0;
}
```

### Challenge 2. Student Marks CSV Parser and Topper Finder

**Difficulty:** Medium

Write a CSV file with student name, maths, physics, chemistry marks. Read the CSV, calculate total marks for each student, and find the topper. Use stringstream to parse comma-separated values.

**Constraints:**

- Use getline for reading lines, stringstream for parsing. Do not hardcode the number of students.

**Sample input:**

```
Arjun,85,90,78
Priya,92,88,95
Kiran,78,82,80
```

**Sample output:**

```
Arjun: Total=253
Priya: Total=275
Kiran: Total=240
Topper: Priya (275)
```

**Solution:**

```cpp
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    ofstream out("marks.csv");
    out << "Arjun,85,90,78" << endl;
    out << "Priya,92,88,95" << endl;
    out << "Kiran,78,82,80" << endl;
    out.close();

    ifstream in("marks.csv");
    string line, topperName;
    int topperTotal = 0;

    while (getline(in, line)) {
        stringstream ss(line);
        string name, token;
        getline(ss, name, ',');
        int total = 0;
        while (getline(ss, token, ','))
            total += stoi(token);
        cout << name << ": Total=" << total << endl;
        if (total > topperTotal) {
            topperTotal = total;
            topperName = name;
        }
    }
    cout << "Topper: " << topperName << " (" << topperTotal << ")" << endl;
    in.close();
    return 0;
}
```

### Challenge 3. Binary Student Database with Search and Update

**Difficulty:** Hard

Implement a student database using binary file I/O. Support: (1) Add student record, (2) Display all records, (3) Search by roll number, (4) Update marks by roll number. Use seekg/seekp for in-place updates.

**Constraints:**

- Use fixed-size struct with char array for name (not string). Use seekg/seekp for O(1) updates.

**Sample input:**

```
Add {101, Arjun, 85}, {102, Priya, 78}. Update roll 102 marks to 95. Display all.
```

**Sample output:**

```
101: Arjun, Marks: 85
102: Priya, Marks: 95
```

**Solution:**

```cpp
#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;

struct Student {
    int rollNo;
    char name[30];
    double marks;
};

void addStudent(const string& fname, int roll, const char* name, double marks) {
    Student s;
    s.rollNo = roll;
    strcpy(s.name, name);
    s.marks = marks;
    ofstream file(fname, ios::binary | ios::app);
    file.write(reinterpret_cast<char*>(&s), sizeof(Student));
    file.close();
}

void updateMarks(const string& fname, int roll, double newMarks) {
    fstream file(fname, ios::in | ios::out | ios::binary);
    Student s;
    while (file.read(reinterpret_cast<char*>(&s), sizeof(Student))) {
        if (s.rollNo == roll) {
            s.marks = newMarks;
            file.seekp(-static_cast<int>(sizeof(Student)), ios::cur);
            file.write(reinterpret_cast<char*>(&s), sizeof(Student));
            break;
        }
    }
    file.close();
}

void displayAll(const string& fname) {
    ifstream file(fname, ios::binary);
    Student s;
    while (file.read(reinterpret_cast<char*>(&s), sizeof(Student)))
        cout << s.rollNo << ": " << s.name << ", Marks: " << s.marks << endl;
    file.close();
}

int main() {
    string fname = "students.dat";
    ofstream clear(fname, ios::trunc); clear.close();

    addStudent(fname, 101, "Arjun", 85);
    addStudent(fname, 102, "Priya", 78);
    updateMarks(fname, 102, 95);
    displayAll(fname);
    return 0;
}
```

### Challenge 4. Config File Parser with Default Values

**Difficulty:** Medium

Write a config file parser that reads key=value pairs, skips comment lines (starting with #) and empty lines. Provide a get method that returns a default value if the key is not found.

**Constraints:**

- Use map<string, string> for storage. Support # comments and empty lines. Provide a get(key, default) method.

**Sample input:**

```
# Config file
host=localhost
port=3306
debug=true
```

**Sample output:**

```
host = localhost
port = 3306
debug = true
timeout = 30 (default)
```

**Solution:**

```cpp
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <map>
using namespace std;

class Config {
    map<string, string> data;
public:
    void load(const string& filename) {
        ifstream file(filename);
        string line;
        while (getline(file, line)) {
            if (line.empty() || line[0] == '#') continue;
            size_t pos = line.find('=');
            if (pos != string::npos)
                data[line.substr(0, pos)] = line.substr(pos + 1);
        }
        file.close();
    }
    string get(const string& key, const string& defaultVal = "") {
        auto it = data.find(key);
        return it != data.end() ? it->second : defaultVal;
    }
    void display() {
        for (auto& [k, v] : data) cout << k << " = " << v << endl;
    }
};

int main() {
    ofstream out("app.conf");
    out << "# Config file" << endl;
    out << "host=localhost" << endl;
    out << "port=3306" << endl;
    out << "debug=true" << endl;
    out.close();

    Config config;
    config.load("app.conf");
    config.display();
    cout << "timeout = " << config.get("timeout", "30") << " (default)" << endl;
    return 0;
}
```

### Challenge 5. File-based Leaderboard System

**Difficulty:** Hard

Create a leaderboard system that stores player names and scores in a text file. Support adding new scores, reading all scores, sorting by score (descending), and displaying the top N players. The file persists between program runs.

**Constraints:**

- Read from file, sort in memory, display. Handle the case where the file does not exist.

**Sample input:**

```
Add: Arjun 850, Priya 920, Kiran 780, Neha 920. Display top 3.
```

**Sample output:**

```
=== Top 3 ===
1. Neha: 920
2. Priya: 920
3. Arjun: 850
```

**Solution:**

```cpp
#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

struct Player {
    string name;
    int score;
};

void addScore(const string& fname, const string& name, int score) {
    ofstream file(fname, ios::app);
    file << name << " " << score << endl;
    file.close();
}

vector<Player> loadScores(const string& fname) {
    vector<Player> players;
    ifstream file(fname);
    string name;
    int score;
    while (file >> name >> score)
        players.push_back({name, score});
    file.close();
    return players;
}

void showTop(const string& fname, int n) {
    auto players = loadScores(fname);
    sort(players.begin(), players.end(),
        [](const Player& a, const Player& b) { return a.score > b.score; });
    cout << "=== Top " << n << " ===" << endl;
    for (int i = 0; i < min(n, (int)players.size()); i++)
        cout << i + 1 << ". " << players[i].name << ": " << players[i].score << endl;
}

int main() {
    string fname = "leaderboard.txt";
    ofstream clear(fname, ios::trunc); clear.close();

    addScore(fname, "Arjun", 850);
    addScore(fname, "Priya", 920);
    addScore(fname, "Kiran", 780);
    addScore(fname, "Neha", 920);
    showTop(fname, 3);
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/file-handling-in-cpp/*
