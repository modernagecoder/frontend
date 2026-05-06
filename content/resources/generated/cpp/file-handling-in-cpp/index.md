---
title: "C++ File Handling - ifstream, ofstream, fstream, Binary I/O, File Modes | Modern Age Coders"
description: "Master C++ file handling with ifstream, ofstream, fstream. Learn file modes, binary I/O, seekg, seekp, getline, CSV parsing, and student record systems. Includes 52+ practice questions."
slug: file-handling-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/file-handling-in-cpp
category: "C++"
keywords: ["c++ file handling", "c++ ifstream", "c++ ofstream", "c++ fstream", "c++ binary file io", "c++ read file", "c++ write file", "c++ getline", "c++ file modes", "c++ seekg seekp"]
---
# File Handling (ifstream, ofstream, fstream)

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 22  
**Practice questions:** 52

## What Is File Handling in C++?

**File handling** allows C++ programs to read data from files and write data to files on disk. Instead of losing all data when a program terminates, you can persist student records, configuration settings, logs, and any structured data to files.

C++ provides file handling through the `` header, which defines three stream classes:

- **ifstream** (input file stream): Read from files
- **ofstream** (output file stream): Write to files
- **fstream** (file stream): Both read and write

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    // Write to a file
    ofstream outFile("students.txt");
    outFile << "Arjun 85" << endl;
    outFile << "Priya 92" << endl;
    outFile << "Kiran 78" << endl;
    outFile.close();

    // Read from the file
    ifstream inFile("students.txt");
    string name;
    int marks;
    while (inFile >> name >> marks) {
        cout << name << " scored " << marks << endl;
    }
    inFile.close();
    return 0;
}
```

File streams inherit from the same iostream hierarchy as `cin` and `cout`. Everything Raghav knows about `<<`, `>>`, `getline`, and stream state applies directly to file streams.

## Why Is File Handling Important?

### 1. Data Persistence

Without files, all program data is lost when the program exits. File handling lets Arjun save student records, configuration settings, and computation results that survive beyond the program's lifetime.

### 2. Practical Applications

Nearly every real-world application involves files: reading configuration files, parsing CSV data, logging errors, saving game state, processing large datasets that do not fit in memory, and communicating between programs through files.

### 3. Binary File I/O for Performance

Text files are human-readable but slow for large data. Binary files store data in the same format as memory, making reads and writes significantly faster. Database engines, image processors, and serialization libraries all use binary I/O.

### 4. Foundation for Advanced Topics

Understanding file streams prepares you for network streams, string streams (`stringstream`), and the C++17 `` library. The iostream abstraction is the same -- once you understand file I/O, you understand all C++ I/O.

### 5. Competitive Programming and Interviews

While competitive programming typically uses `cin`/`cout`, many online judges and companies use file-based I/O (`freopen`). Interview questions often involve parsing files, implementing CSV readers, or building config file parsers.

## Detailed Explanation

### 1. Opening and Closing Files

Files can be opened through the constructor or the `open()` method:

```cpp
#include 
#include 
using namespace std;

int main() {
    // Method 1: Open via constructor
    ofstream file1("output.txt");
    file1 << "Hello from constructor" << endl;
    file1.close();

    // Method 2: Open via open()
    ofstream file2;
    file2.open("output2.txt");
    if (file2.is_open()) {
        file2 << "Hello from open()" << endl;
        file2.close();
    } else {
        cerr << "Failed to open file" << endl;
    }

    // Destructor auto-closes, but explicit close is good practice
    {
        ofstream file3("output3.txt");
        file3 << "Auto-closed when file3 goes out of scope";
    } // file3.close() called automatically here
    return 0;
}
```

### 2. File Modes

File modes control how a file is opened:

ModeDescriptionios::inOpen for reading (default for ifstream)ios::outOpen for writing (default for ofstream, truncates file)ios::appAppend to end of file (does not truncate)ios::binaryBinary mode (no text translation)ios::truncTruncate file to zero length on openios::ateSeek to end after opening

```cpp
#include 
using namespace std;

int main() {
    // Truncate and write (default for ofstream)
    ofstream f1("data.txt");
    f1 << "First write" << endl;
    f1.close();

    // Append mode: adds to existing content
    ofstream f2("data.txt", ios::app);
    f2 << "Appended line" << endl;
    f2.close();

    // Binary mode for raw data
    ofstream f3("data.bin", ios::binary);
    int num = 42;
    f3.write(reinterpret_cast<char*>(&num), sizeof(num));
    f3.close();

    // Combining modes with |
    fstream f4("data.txt", ios::in | ios::out | ios::app);
    f4.close();
    return 0;
}
```

### 3. Reading Line by Line (getline) and Word by Word (>>)

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    // Create a test file
    ofstream out("poem.txt");
    out << "Twinkle twinkle little star" << endl;
    out << "How I wonder what you are" << endl;
    out.close();

    // Read line by line
    ifstream in1("poem.txt");
    string line;
    cout << "Line by line:" << endl;
    while (getline(in1, line)) {
        cout << "  " << line << endl;
    }
    in1.close();

    // Read word by word
    ifstream in2("poem.txt");
    string word;
    cout << "Word by word:" << endl;
    while (in2 >> word) {
        cout << "[" << word << "] ";
    }
    cout << endl;
    in2.close();
    return 0;
}
```

### 4. Checking File State

```cpp
#include 
#include 
using namespace std;

int main() {
    ifstream file("nonexistent.txt");

    // is_open(): was the file successfully opened?
    if (!file.is_open()) {
        cerr << "Could not open file" << endl;
    }

    // Stream state flags
    ifstream f("test.txt");
    // f.good()  -- no errors
    // f.eof()   -- end of file reached
    // f.fail()  -- logical error (e.g., reading int but found string)
    // f.bad()   -- serious I/O error (e.g., disk failure)

    // Common pattern: read until failure
    ifstream data("numbers.txt");
    int num;
    while (data >> num) {
        cout << num << " ";
    }
    if (data.eof()) cout << "\nReached end of file" << endl;
    if (data.fail()) cout << "Read failed (format error or EOF)" << endl;
    return 0;
}
```

### 5. Binary File I/O

```cpp
#include 
#include 
#include 
using namespace std;

struct Student {
    char name[50];
    int age;
    double gpa;
};

int main() {
    // Write binary
    Student s1;
    strcpy(s1.name, "Arjun");
    s1.age = 20;
    s1.gpa = 8.5;

    Student s2;
    strcpy(s2.name, "Priya");
    s2.age = 21;
    s2.gpa = 9.2;

    ofstream out("students.dat", ios::binary);
    out.write(reinterpret_cast<char*>(&s1), sizeof(Student));
    out.write(reinterpret_cast<char*>(&s2), sizeof(Student));
    out.close();

    // Read binary
    ifstream in("students.dat", ios::binary);
    Student temp;
    while (in.read(reinterpret_cast<char*>(&temp), sizeof(Student))) {
        cout << temp.name << ", Age: " << temp.age
             << ", GPA: " << temp.gpa << endl;
    }
    in.close();
    return 0;
}
```

### 6. File Position: seekg, seekp, tellg, tellp

```cpp
#include 
#include 
using namespace std;

int main() {
    // seekg: set get (read) position
    // seekp: set put (write) position
    // tellg: get current read position
    // tellp: get current write position

    ofstream out("seektest.txt");
    out << "ABCDEFGHIJ";
    out.close();

    ifstream in("seektest.txt");

    // Read from position 3
    in.seekg(3);  // move to 4th byte (0-indexed)
    char ch;
    in.get(ch);
    cout << "At position 3: " << ch << endl;  // D

    // Tell current position
    cout << "Current position: " << in.tellg() << endl;  // 4

    // Seek from end
    in.seekg(-3, ios::end);
    in.get(ch);
    cout << "3 from end: " << ch << endl;  // H

    // Seek from current position
    in.seekg(1, ios::cur);
    in.get(ch);
    cout << "Skip 1 from current: " << ch << endl;  // J

    // Get file size
    in.seekg(0, ios::end);
    cout << "File size: " << in.tellg() << " bytes" << endl;
    in.close();
    return 0;
}
```

### 7. Practical Example: CSV Reader/Writer

```cpp
#include 
#include 
#include 
#include 
#include 
using namespace std;

struct Student {
    string name;
    int age;
    double gpa;
};

void writeCSV(const string& filename, const vector& students) {
    ofstream file(filename);
    file << "Name,Age,GPA" << endl;  // header
    for (const auto& s : students) {
        file << s.name << "," << s.age << "," << s.gpa << endl;
    }
    file.close();
}

vector readCSV(const string& filename) {
    vector students;
    ifstream file(filename);
    string line;
    getline(file, line);  // skip header

    while (getline(file, line)) {
        stringstream ss(line);
        Student s;
        string token;
        getline(ss, s.name, ',');
        getline(ss, token, ',');
        s.age = stoi(token);
        getline(ss, token, ',');
        s.gpa = stod(token);
        students.push_back(s);
    }
    file.close();
    return students;
}

int main() {
    vector students = {
        {"Arjun", 20, 8.5}, {"Priya", 21, 9.2}, {"Kiran", 19, 7.8}
    };
    writeCSV("students.csv", students);

    auto loaded = readCSV("students.csv");
    for (const auto& s : loaded) {
        cout << s.name << ", Age: " << s.age << ", GPA: " << s.gpa << endl;
    }
    return 0;
}
```

### 8. Practical Example: Config File Parser

```cpp
#include 
#include 
#include 
#include 
#include 
using namespace std;

map<string, string> parseConfig(const string& filename) {
    map<string, string> config;
    ifstream file(filename);
    string line;

    while (getline(file, line)) {
        // Skip empty lines and comments
        if (line.empty() || line[0] == '#') continue;

        size_t pos = line.find('=');
        if (pos != string::npos) {
            string key = line.substr(0, pos);
            string value = line.substr(pos + 1);
            config[key] = value;
        }
    }
    file.close();
    return config;
}

int main() {
    // Create a config file
    ofstream out("app.conf");
    out << "# Application Config" << endl;
    out << "db_host=localhost" << endl;
    out << "db_port=3306" << endl;
    out << "app_name=StudentPortal" << endl;
    out << "debug=true" << endl;
    out.close();

    auto config = parseConfig("app.conf");
    for (auto& [key, value] : config) {
        cout << key << " = " << value << endl;
    }
    return 0;
}
```

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/file-handling-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/file-handling-in-cpp/practice/*
