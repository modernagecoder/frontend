---
title: "Practice: Competitive Programming Patterns in C++"
description: "58 practice problems for Competitive Programming Patterns in C++ in C++"
slug: competitive-programming-patterns-practice
canonical: https://learn.modernagecoders.com/resources/cpp/competitive-programming-patterns/practice/
category: "C++"
---
# Practice: Competitive Programming Patterns in C++

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```cpp
int n = 16;
cout << ((n & (n - 1)) == 0);
```

*Hint:* n & (n-1) clears the lowest set bit. For powers of 2, this gives 0.

**Answer:** `1`

16 = 10000 in binary. n-1 = 15 = 01111. n & (n-1) = 0. Since the result is 0 and n > 0, it is a power of 2. Output: 1 (true).

### Q2. [Easy] What is the output?

```cpp
int arr[] = {3, 1, 3, 1, 5};
int result = 0;
for (int x : arr) result ^= x;
cout << result;
```

*Hint:* XOR: a ^ a = 0, a ^ 0 = a. Pairs cancel out.

**Answer:** `5`

3 ^ 1 ^ 3 ^ 1 ^ 5 = (3^3) ^ (1^1) ^ 5 = 0 ^ 0 ^ 5 = 5. The XOR of pairs cancels out, leaving the unique element.

### Q3. [Easy] What is the output?

```cpp
int n = 13;  // 1101 in binary
cout << __builtin_popcount(n);
```

*Hint:* __builtin_popcount counts the number of set bits (1s).

**Answer:** `3`

13 = 1101 in binary. There are three 1-bits. __builtin_popcount(13) = 3.

### Q4. [Easy] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
int prefix[6] = {0};
for (int i = 0; i < 5; i++)
    prefix[i + 1] = prefix[i] + v[i];
cout << prefix[4] - prefix[1];
```

*Hint:* prefix[i] = sum of first i elements. Range sum [1,3] = prefix[4] - prefix[1].

**Answer:** `9`

prefix = {0, 1, 3, 6, 10, 15}. prefix[4] - prefix[1] = 10 - 1 = 9. This is the sum of v[1]+v[2]+v[3] = 2+3+4 = 9.

### Q5. [Easy] What is the output?

```cpp
int n = 10;  // 1010
int result = n | (1 << 0);  // Set bit 0
cout << result;
```

*Hint:* Setting bit 0 changes 1010 to 1011.

**Answer:** `11`

10 = 1010. Setting bit 0: 1010 | 0001 = 1011 = 11.

### Q6. [Medium] What is the output?

```cpp
vector v = {1, 3, 5, 7, 9};
int target = 8;
int lo = 0, hi = v.size() - 1;
while (lo < hi) {
    int sum = v[lo] + v[hi];
    if (sum == target) {
        cout << v[lo] << " " << v[hi];
        break;
    } else if (sum < target) lo++;
    else hi--;
}
if (lo >= hi) cout << "Not found";
```

*Hint:* Two pointers on a sorted array. Start from both ends.

**Answer:** `1 7`

lo=0, hi=4: 1+9=10 > 8, hi=3. lo=0, hi=3: 1+7=8 == target. Output: 1 7.

### Q7. [Medium] What is the output?

```cpp
vector arr = {2, 3, 5, 1, 4};
int k = 3;
int sum = 0;
for (int i = 0; i < k; i++) sum += arr[i];
int maxSum = sum;
for (int i = k; i < (int)arr.size(); i++) {
    sum += arr[i] - arr[i - k];
    maxSum = max(maxSum, sum);
}
cout << maxSum;
```

*Hint:* Sliding window of size 3. Track the maximum sum.

**Answer:** `10`

Windows: [2,3,5]=10, [3,5,1]=9, [5,1,4]=10. Maximum sum = 10.

### Q8. [Medium] What is the output?

```cpp
int n = 42;  // 101010
for (int i = 5; i >= 0; i--)
    cout << ((n >> i) & 1);
```

*Hint:* Extract each bit from MSB to LSB using right shift and AND with 1.

**Answer:** `101010`

42 = 101010 in 6-bit binary. The loop extracts each bit from position 5 down to 0.

### Q9. [Medium] What is the output?

```cpp
int n = 7;  // 0111
int cleared = n & ~(1 << 1);  // Clear bit 1
cout << cleared;
```

*Hint:* ~(1 << 1) = ~(0010) = 1101. AND with 0111 clears bit 1.

**Answer:** `5`

7 = 0111. ~(1 << 1) = 1101. 0111 & 1101 = 0101 = 5. Bit 1 is cleared.

### Q10. [Medium] What is the output?

```cpp
int a = 5, b = 3;
a = a ^ b;
b = a ^ b;
a = a ^ b;
cout << a << " " << b;
```

*Hint:* XOR swap trick: swaps two variables without a temporary.

**Answer:** `3 5`

Step 1: a = 5^3 = 6. Step 2: b = 6^3 = 5. Step 3: a = 6^5 = 3. Values are swapped: a=3, b=5.

### Q11. [Hard] What is the output?

```cpp
vector nums = {1, 2, 3};
int n = nums.size();
for (int mask = 0; mask < (1 << n); mask++) {
    cout << "{ ";
    for (int i = 0; i < n; i++)
        if (mask & (1 << i))
            cout << nums[i] << " ";
    cout << "} ";
}
```

*Hint:* This generates all subsets using bitmask enumeration.

**Answer:** `{ } { 1 } { 2 } { 1 2 } { 3 } { 1 3 } { 2 3 } { 1 2 3 }`

Bitmask 000 to 111 generates all 2^3 = 8 subsets. Each bit position determines whether the corresponding element is included.

### Q12. [Hard] What is the output?

```cpp
vector v = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
int maxSum = v[0], currSum = v[0];
for (int i = 1; i < (int)v.size(); i++) {
    currSum = max(v[i], currSum + v[i]);
    maxSum = max(maxSum, currSum);
}
cout << maxSum;
```

*Hint:* Kadane's algorithm finds the maximum subarray sum in O(n).

**Answer:** `6`

Kadane's algorithm: at each position, either start a new subarray or extend the previous one. The maximum subarray is [4, -1, 2, 1] with sum 6.

### Q13. [Hard] What is the output?

```cpp
vector nums = {1, 1, 1};
int k = 2;
unordered_map<int, int> prefixCount;
prefixCount[0] = 1;
int sum = 0, count = 0;
for (int x : nums) {
    sum += x;
    if (prefixCount.count(sum - k))
        count += prefixCount[sum - k];
    prefixCount[sum]++;
}
cout << count;
```

*Hint:* Prefix sum + hash map to count subarrays with sum == k.

**Answer:** `2`

Prefix sums: 0, 1, 2, 3. For sum=2: sum-k=0, prefixCount[0]=1 -> count=1. For sum=3: sum-k=1, prefixCount[1]=1 -> count=2. Two subarrays sum to 2: [1,1] (indices 0-1) and [1,1] (indices 1-2).

### Q14. [Hard] What is the output?

```cpp
int n = 0;
for (int i = 0; i < 10; i++)
    if (i & 1) n++;
cout << n;
```

*Hint:* i & 1 checks if i is odd (bit 0 is set).

**Answer:** `5`

i & 1 is 1 for odd numbers: 1, 3, 5, 7, 9. That is 5 odd numbers in range [0, 9].

### Q15. [Easy] What is the output?

```cpp
vector v = {10, 20, 30, 40, 50};
int sum = 0;
for (int i = 1; i < (int)v.size(); i++)
    sum += v[i] - v[i - 1];
cout << sum;
```

*Hint:* Sum of consecutive differences in an array.

**Answer:** `40`

Differences: 10, 10, 10, 10. Sum = 40. This equals v[last] - v[first] = 50 - 10 = 40 (telescoping sum).

### Q16. [Medium] What is the output?

```cpp
int n = 255;  // 11111111
int count = 0;
while (n) {
    count++;
    n = n & (n - 1);
}
cout << count;
```

*Hint:* n & (n-1) clears the lowest set bit. Count how many times until n becomes 0.

**Answer:** `8`

255 = 11111111 (8 set bits). Each iteration clears one bit. After 8 iterations, n = 0. This is Brian Kernighan's bit counting algorithm.

### Q17. [Medium] What is the output?

```cpp
vector v = {3, 1, -2, 5, -3, 2};
vector prefix(v.size() + 1, 0);
for (int i = 0; i < (int)v.size(); i++)
    prefix[i + 1] = prefix[i] + v[i];
cout << prefix[4] - prefix[1];
```

*Hint:* prefix[i] = sum of first i elements. Range sum v[1..3] = prefix[4] - prefix[1].

**Answer:** `4`

prefix = {0, 3, 4, 2, 7, 4, 6}. prefix[4] - prefix[1] = 7 - 3 = 4 = v[1]+v[2]+v[3] = 1+(-2)+5 = 4.

### Q18. [Hard] What is the output?

```cpp
vector v = {1, 3, 5, 7, 9, 11};
int lo = 0, hi = v.size() - 1;
int target = 6;
while (lo <= hi) {
    int mid = lo + (hi - lo) / 2;
    if (v[mid] <= target) lo = mid + 1;
    else hi = mid - 1;
}
cout << hi << " " << lo;
```

*Hint:* Binary search variant: find the last element <= target.

**Answer:** `2 3`

After binary search: hi = 2 (index of 5, last element <= 6), lo = 3 (index of 7, first element > 6). This finds the upper bound of 6.

### Q19. [Easy] What is the output?

```cpp
int x = 5;  // 101
int y = 3;  // 011
cout << (x & y) << " " << (x | y);
```

*Hint:* AND keeps common bits. OR combines all bits.

**Answer:** `1 7`

101 AND 011 = 001 = 1. 101 OR 011 = 111 = 7.

### Q20. [Hard] What is the output?

```cpp
string s = "abcba";
int lo = 0, hi = s.size() - 1;
bool isPalin = true;
while (lo < hi) {
    if (s[lo] != s[hi]) { isPalin = false; break; }
    lo++; hi--;
}
cout << isPalin;
```

*Hint:* Two pointers from both ends to check palindrome.

**Answer:** `1`

"abcba" is a palindrome. Two pointers verify: a==a, b==b, c is the middle. isPalin remains true (1).

## Mixed Questions

### Q1. [Easy] What is the output?

```cpp
int x = 6;  // 110
int y = 3;  // 011
cout << (x ^ y);
```

*Hint:* XOR returns 1 where bits differ.

**Answer:** `5`

110 XOR 011 = 101 = 5. XOR produces 1 in positions where the bits differ.

### Q2. [Easy] What is the output?

```cpp
int x = 12;
cout << (x >> 2);
```

*Hint:* Right shift by 2 divides by 4 (for non-negative integers).

**Answer:** `3`

12 = 1100. Right shift by 2: 0011 = 3. This is equivalent to integer division by 4.

### Q3. [Easy] What is the output?

```cpp
cout << (1 << 10);
```

*Hint:* Left shift by k multiplies by 2^k.

**Answer:** `1024`

1 << 10 = 2^10 = 1024. Left shifting 1 by n positions gives 2^n.

### Q4. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5, 6};
int lo = 0, hi = v.size() - 1;
int target = 7;
int pairs = 0;
while (lo < hi) {
    int sum = v[lo] + v[hi];
    if (sum == target) { pairs++; lo++; hi--; }
    else if (sum < target) lo++;
    else hi--;
}
cout << pairs;
```

*Hint:* Two pointers counting all pairs that sum to target.

**Answer:** `3`

Pairs: (1,6), (2,5), (3,4) all sum to 7. The two-pointer approach finds all 3 pairs.

### Q5. [Medium] What is the output?

```cpp
vector v = {10, 20, 30, 40, 50};
vector prefix(6, 0);
for (int i = 0; i < 5; i++)
    prefix[i + 1] = prefix[i] + v[i];
// Sum of v[1..3]
cout << prefix[4] - prefix[1];
```

*Hint:* prefix[i] stores sum of first i elements. Range sum = prefix[r+1] - prefix[l].

**Answer:** `90`

prefix = {0, 10, 30, 60, 100, 150}. prefix[4] - prefix[1] = 100 - 10 = 90 = v[1]+v[2]+v[3] = 20+30+40.

### Q6. [Medium] What is the output?

```cpp
int n = 20;  // 10100
int toggled = n ^ (1 << 2);  // Toggle bit 2
cout << toggled;
```

*Hint:* XOR with 1 toggles a bit. 10100 XOR 00100 = ?

**Answer:** `16`

20 = 10100. 1 << 2 = 00100. 10100 XOR 00100 = 10000 = 16. Bit 2 was 1, toggled to 0.

### Q7. [Hard] What is the output?

```cpp
vector arr = {4, 2, 1, 5, 3};
int k = 2;
int n = arr.size();
int windowMin = INT_MAX;
for (int i = 0; i <= n - k; i++) {
    int localMax = *max_element(arr.begin() + i, arr.begin() + i + k);
    windowMin = min(windowMin, localMax);
}
cout << windowMin;
```

*Hint:* Find the minimum of maximum values across all windows of size k.

**Answer:** `2`

Windows of size 2: [4,2]->max=4, [2,1]->max=2, [1,5]->max=5, [5,3]->max=5. Minimum of these maxima = 2.

### Q8. [Hard] What is the output?

```cpp
int n = 15;  // 1111
int lowest = n & (-n);
cout << lowest;
```

*Hint:* n & (-n) isolates the lowest set bit.

**Answer:** `1`

15 = 1111. -15 in two's complement = ...10001. 1111 & 10001 = 00001 = 1. The lowest set bit of 15 is bit 0, which has value 1.

### Q9. [Hard] What is the output?

```cpp
int n = 12;  // 1100
int lowest = n & (-n);
cout << lowest;
```

*Hint:* n & (-n) isolates the lowest set bit.

**Answer:** `4`

12 = 1100. -12 in two's complement has the pattern such that 1100 & (-1100) = 0100 = 4. The lowest set bit is bit 2, which has value 4.

### Q10. [Hard] What is the output?

```cpp
// Greedy: minimum coins for amount
vector coins = {1, 5, 10, 25};
int amount = 41;
int count = 0;
for (int i = coins.size() - 1; i >= 0; i--) {
    count += amount / coins[i];
    amount %= coins[i];
}
cout << count;
```

*Hint:* Greedy coin change: use the largest coin as many times as possible.

**Answer:** `4`

25: 41/25=1, remainder 16. 10: 16/10=1, remainder 6. 5: 6/5=1, remainder 1. 1: 1/1=1. Total coins: 1+1+1+1 = 4.

### Q11. [Medium] When does the greedy approach work, and when does it fail?

*Hint:* Think about the greedy choice property.

**Answer:** Greedy works when the problem has the **greedy choice property** (a locally optimal choice leads to a globally optimal solution) and **optimal substructure** (optimal solution to the problem contains optimal solutions to subproblems). It works for activity selection, fractional knapsack, Huffman coding, and minimum spanning trees. It fails for 0/1 knapsack, shortest path with negative edges, and the general coin change problem (where coin denominations are not canonical).

For example, greedy coin change fails with coins {1, 3, 4} and amount 6. Greedy picks 4+1+1 = 3 coins, but optimal is 3+3 = 2 coins. Always verify that the greedy choice property holds before using a greedy approach.

### Q12. [Hard] Explain the binary search on answer technique. When should you use it?

*Hint:* Think about searching the solution space, not the input.

**Answer:** Binary search on the answer works when: (1) the answer lies in a known range [lo, hi], (2) you can write a function `canDo(mid)` that checks if a given answer is feasible, and (3) the feasibility function is monotonic (if mid works, then mid+1 also works, or vice versa). You binary search this range, checking feasibility at each midpoint. Classic examples: minimum maximum pages allocation, minimum days to make m bouquets, Koko eating bananas, and splitting array to minimize the largest sum.

The key insight is that you are not binary searching the input array -- you are binary searching the possible answer values. The feasibility check is usually a greedy simulation. Total complexity: O(n * log(answer_range)).

### Q13. [Easy] What is the output?

```cpp
int n = 8;  // 1000
cout << (n & (n - 1));
```

*Hint:* n & (n-1) clears the lowest set bit.

**Answer:** `0`

8 = 1000, 7 = 0111. 1000 & 0111 = 0. Since the result is 0, 8 is a power of 2.

### Q14. [Medium] What is the output?

```cpp
vector v = {2, 4, 6, 8, 10};
int lo = 0, hi = v.size() - 1;
int target = 14;
bool found = false;
while (lo < hi) {
    int sum = v[lo] + v[hi];
    if (sum == target) { found = true; break; }
    else if (sum < target) lo++;
    else hi--;
}
cout << found << " " << lo << " " << hi;
```

*Hint:* Two pointers: find a pair summing to 14.

**Answer:** `1 1 4`

lo=0,hi=4: 2+10=12 < 14, lo=1. lo=1,hi=4: 4+10=14 == target. found=true, lo=1, hi=4.

### Q15. [Hard] What is the output?

```cpp
vector arr = {1, 3, -1, -3, 5, 3, 6, 7};
int k = 3;
vector result;
for (int i = 0; i <= (int)arr.size() - k; i++) {
    int mx = *max_element(arr.begin() + i, arr.begin() + i + k);
    result.push_back(mx);
}
for (int x : result) cout << x << " ";
```

*Hint:* Maximum of each sliding window of size 3.

**Answer:** `3 3 5 5 6 7`

Windows: [1,3,-1]->3, [3,-1,-3]->3, [-1,-3,5]->5, [-3,5,3]->5, [5,3,6]->6, [3,6,7]->7.

### Q16. [Medium] What is the output?

```cpp
int a = 10, b = 7;
cout << (a & b) << " " << (a | b) << " " << (a ^ b);
```

*Hint:* 10 = 1010, 7 = 0111. Compute AND, OR, XOR.

**Answer:** `2 15 13`

1010 AND 0111 = 0010 = 2. 1010 OR 0111 = 1111 = 15. 1010 XOR 0111 = 1101 = 13.

## Multiple Choice Questions

### Q1. [Easy] What does ios_base::sync_with_stdio(false) do?

**Answer:** B

**B is correct.** It disables the synchronization between `cin/cout` and `scanf/printf`, significantly speeding up C++ I/O. Essential for competitive programming.

### Q2. [Easy] What is the result of n & (n - 1) when n is a power of 2?

**Answer:** C

**C is correct.** A power of 2 has exactly one set bit. n-1 flips that bit and sets all lower bits. AND produces 0. Example: 8 (1000) & 7 (0111) = 0.

### Q3. [Easy] What does XOR of a number with itself give?

**Answer:** C

**C is correct.** a ^ a = 0 for any value a. This property is used to find the unique element in arrays where all other elements appear twice.

### Q4. [Easy] What is the time complexity of the two pointers technique on a sorted array of size n?

**Answer:** C

**C is correct.** Two pointers scan the array from both ends, with each pointer moving at most n times. Total operations: O(n).

### Q5. [Easy] What does a sliding window of fixed size k on an array of size n reduce the complexity from?

**Answer:** B

**B is correct.** Without sliding window, computing a property for each window of size k takes O(k) per window = O(n*k) total. Sliding window updates incrementally: O(1) per slide = O(n) total.

### Q6. [Medium] What is the time complexity of answering a range sum query using prefix sums (after precomputation)?

**Answer:** C

**C is correct.** After building the prefix sum array in O(n), each range sum query is O(1): sum(l, r) = prefix[r] - prefix[l-1].

### Q7. [Medium] What does __builtin_popcount(n) return?

**Answer:** B

**B is correct.** `__builtin_popcount(n)` counts the number of 1-bits in the binary representation of n. It runs in O(1) as a compiler built-in.

### Q8. [Medium] In binary search on the answer, what does the feasibility function check?

**Answer:** B

**B is correct.** The feasibility function (often called `canDo(mid)`) checks whether a given candidate answer is achievable. It typically uses a greedy simulation to verify.

### Q9. [Medium] Which bit operation checks if the ith bit of n is set?

**Answer:** B

**B is correct.** Right-shift n by i positions to bring bit i to position 0, then AND with 1 to extract it. Result is 0 or 1.

### Q10. [Medium] What is the greedy strategy for the activity selection problem?

**Answer:** B

**B is correct.** Sort activities by end time. Greedily select the next activity that starts after the current one ends. This provably maximizes the number of non-overlapping activities.

### Q11. [Hard] For an input of size n = 10^6, which time complexity will likely pass within 1 second?

**Answer:** C

**C is correct.** For n = 10^6: O(n log n) = ~20 million operations (passes easily). O(n^2) = 10^12 (far too slow). O(n*sqrt(n)) = ~10^9 (borderline). O(2^n) is astronomical.

### Q12. [Hard] What is the total number of subsets of a set with n elements?

**Answer:** B

**B is correct.** Each element is either included or excluded, giving 2 choices per element. Total subsets: 2^n. Bitmask enumeration uses masks from 0 to 2^n - 1 to generate all subsets.

### Q13. [Hard] What does Kadane's algorithm find?

**Answer:** B

**B is correct.** Kadane's algorithm finds the maximum sum contiguous subarray in O(n). At each position, it decides whether to extend the current subarray or start a new one: `currSum = max(arr[i], currSum + arr[i])`.

### Q14. [Hard] What is the overflow-safe way to compute the midpoint in binary search?

**Answer:** B

**B is correct.** `(lo + hi) / 2` can overflow when lo + hi exceeds INT_MAX. `lo + (hi - lo) / 2` avoids this by computing the difference first, which is always non-negative and within range.

### Q15. [Medium] What is n & (-n) for a non-zero integer n?

**Answer:** B

**B is correct.** `n & (-n)` isolates the lowest set bit. For example, 12 (1100) & -12 = 4 (0100). This trick is used in Fenwick trees (Binary Indexed Trees).

### Q16. [Easy] What does 1 << n compute?

**Answer:** C

**C is correct.** Left-shifting 1 by n positions gives 2^n. For example, 1 << 3 = 8 = 2^3.

## Coding Challenges

### Challenge 1. Two Pointers: Remove Duplicates from Sorted Array In-Place

**Difficulty:** Easy

Given a sorted array, remove duplicates in-place and return the new length. Use two pointers: a slow pointer for the write position and a fast pointer for scanning.

**Constraints:**

- O(n) time, O(1) extra space. Modify the array in-place.

**Sample input:**

```
{1, 1, 2, 2, 3, 4, 4, 5}
```

**Sample output:**

```
Unique elements: 5
Array: 1 2 3 4 5
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> v = {1, 1, 2, 2, 3, 4, 4, 5};
    if (v.empty()) { cout << 0 << endl; return 0; }

    int slow = 0;
    for (int fast = 1; fast < (int)v.size(); fast++) {
        if (v[fast] != v[slow]) {
            slow++;
            v[slow] = v[fast];
        }
    }
    int newLen = slow + 1;
    cout << "Unique elements: " << newLen << endl;
    cout << "Array: ";
    for (int i = 0; i < newLen; i++) cout << v[i] << " ";
    cout << endl;
    return 0;
}
```

### Challenge 2. Sliding Window: Count Subarrays with Sum Exactly K

**Difficulty:** Medium

Given an array of positive integers and a target sum K, count the number of contiguous subarrays whose sum equals exactly K using prefix sums and a hash map.

**Constraints:**

- O(n) time complexity. Use prefix sum + hash map pattern.

**Sample input:**

```
{1, 2, 3, 4, 1, 2, 3}, K = 6
```

**Sample output:**

```
Subarrays with sum 6: 3
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> arr = {1, 2, 3, 4, 1, 2, 3};
    int k = 6;
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int sum = 0, count = 0;
    for (int x : arr) {
        sum += x;
        if (prefixCount.count(sum - k))
            count += prefixCount[sum - k];
        prefixCount[sum]++;
    }
    cout << "Subarrays with sum " << k << ": " << count << endl;
    return 0;
}
```

### Challenge 3. Bit Manipulation: Find Two Non-Repeating Elements

**Difficulty:** Hard

Given an array where every element appears twice except two elements that appear once, find those two elements using XOR in O(n) time and O(1) space.

**Constraints:**

- O(n) time, O(1) space. Use XOR and bit manipulation only.

**Sample input:**

```
{1, 2, 3, 1, 2, 4}
```

**Sample output:**

```
Two unique elements: 3 4
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> arr = {1, 2, 3, 1, 2, 4};

    // Step 1: XOR all elements -> xorAll = a ^ b
    int xorAll = 0;
    for (int x : arr) xorAll ^= x;

    // Step 2: Find any set bit in xorAll (a and b differ here)
    int diffBit = xorAll & (-xorAll);  // lowest set bit

    // Step 3: Partition elements by that bit, XOR each group
    int group1 = 0, group2 = 0;
    for (int x : arr) {
        if (x & diffBit)
            group1 ^= x;
        else
            group2 ^= x;
    }

    if (group1 > group2) swap(group1, group2);
    cout << "Two unique elements: " << group1 << " " << group2 << endl;
    return 0;
}
```

### Challenge 4. Binary Search on Answer: Koko Eating Bananas

**Difficulty:** Hard

Koko has n piles of bananas. She can eat at most K bananas per hour from one pile. If a pile has fewer than K bananas, she finishes that pile and waits. Find the minimum K such that she finishes all bananas within H hours.

**Constraints:**

- Binary search on K in range [1, max(piles)]. Feasibility check: sum of ceil(pile/K) <= H.

**Sample input:**

```
piles = {3, 6, 7, 11}, H = 8
```

**Sample output:**

```
Minimum eating speed: 4
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool canFinish(vector<int>& piles, int k, int h) {
    long long hours = 0;
    for (int p : piles)
        hours += (p + k - 1) / k;  // ceil(p / k)
    return hours <= h;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> piles = {3, 6, 7, 11};
    int H = 8;

    int lo = 1, hi = *max_element(piles.begin(), piles.end());
    int answer = hi;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (canFinish(piles, mid, H)) {
            answer = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    cout << "Minimum eating speed: " << answer << endl;
    return 0;
}
```

### Challenge 5. Kadane's Algorithm: Maximum Subarray Sum with Indices

**Difficulty:** Medium

Find the maximum sum contiguous subarray and print the start and end indices along with the sum. Use Kadane's algorithm.

**Constraints:**

- O(n) time, O(1) space.

**Sample input:**

```
{-2, 1, -3, 4, -1, 2, 1, -5, 4}
```

**Sample output:**

```
Max sum: 6
Subarray: index 3 to 6 -> [4, -1, 2, 1]
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> v = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int maxSum = v[0], currSum = v[0];
    int start = 0, end = 0, tempStart = 0;

    for (int i = 1; i < (int)v.size(); i++) {
        if (v[i] > currSum + v[i]) {
            currSum = v[i];
            tempStart = i;
        } else {
            currSum += v[i];
        }
        if (currSum > maxSum) {
            maxSum = currSum;
            start = tempStart;
            end = i;
        }
    }

    cout << "Max sum: " << maxSum << endl;
    cout << "Subarray: index " << start << " to " << end << " -> [";
    for (int i = start; i <= end; i++) {
        cout << v[i];
        if (i < end) cout << ", ";
    }
    cout << "]" << endl;
    return 0;
}
```

### Challenge 6. Prefix Sum: 2D Range Sum Query

**Difficulty:** Hard

Given a 2D matrix, precompute a 2D prefix sum so that any rectangle sum query can be answered in O(1). Compute prefix[i][j] = sum of all elements in the submatrix from (0,0) to (i-1,j-1).

**Constraints:**

- O(m*n) precomputation, O(1) per query.

**Sample input:**

```
matrix = {{1,2,3},{4,5,6},{7,8,9}}, query: sum of submatrix (1,1) to (2,2)
```

**Sample output:**

```
Sum of submatrix (1,1) to (2,2): 28
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    int m = matrix.size(), n = matrix[0].size();

    // prefix[i][j] = sum of matrix[0..i-1][0..j-1]
    vector<vector<int>> prefix(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            prefix[i][j] = matrix[i-1][j-1] + prefix[i-1][j]
                           + prefix[i][j-1] - prefix[i-1][j-1];

    // Query: sum of submatrix (r1,c1) to (r2,c2)
    int r1 = 1, c1 = 1, r2 = 2, c2 = 2;
    int sum = prefix[r2+1][c2+1] - prefix[r1][c2+1]
             - prefix[r2+1][c1] + prefix[r1][c1];
    cout << "Sum of submatrix (" << r1 << "," << c1 << ") to ("
         << r2 << "," << c2 << "): " << sum << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/competitive-programming-patterns/*
