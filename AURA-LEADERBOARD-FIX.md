# Aura Type - WPM-Based Leaderboard & Accuracy Fix

## Issues Fixed

### 1. ✅ Negative Accuracy Bug
**Problem:** Accuracy could show negative values when errors exceeded characters typed.

**Solution:** 
- Added `Math.max(0, ...)` to ensure accuracy never goes below 0%
- Changed calculation to use `correctChars / charsTyped` for more accurate tracking
- Added proper character counting in the input handler
- Fixed accuracy calculation before saving to database

### 2. ✅ WPM-Only Ranking System
**Problem:** Leaderboard was ranking by score, not WPM. Vansh (60 WPM) ranked higher than Rachit (63 WPM).

**Solution:**
- **Removed score-based ranking completely**
- Leaderboard now ranks **ONLY by WPM** (highest WPM = #1)
- Tiebreaker: If WPM is equal, higher accuracy wins
- Removed filter toggle - single, clear ranking system

### 3. ✅ Accuracy Display in Leaderboard
**Problem:** Leaderboard showed 0% accuracy for all entries.

**Solution:**
- Fixed accuracy calculation to properly track correct vs total characters
- Accuracy is calculated before saving: `(correctChars / charsTyped) × 100`
- Each leaderboard entry now displays both WPM and Accuracy
- Accuracy is saved to Firebase with each score

### 4. ✅ Improved WPM Calculation
**Problem:** WPM calculation included incorrect characters, inflating the metric.

**Solution:**
- Changed WPM calculation to use only **correct characters**: `(correctChars / 5) / minutes`
- This gives a more realistic and honest WPM metric
- No more false WPM inflation from typing errors

## Leaderboard Display

Each entry shows:
- **Rank** (1st, 2nd, 3rd with Gold, Silver, Bronze styling)
- **Player Name**
- **Speed:** WPM (correct characters only)
- **Accuracy:** Percentage of correct characters

Example:
```
🥇 1  Rachit
      Speed: 67 WPM  |  Accuracy: 98%

🥈 2  Vansh
      Speed: 60 WPM  |  Accuracy: 95%
```

## Database Schema

Scores saved to Firebase include:
```javascript
{
  name: "Player Name",
  wpm: 67,           // Primary ranking metric
  accuracy: 98,      // Tiebreaker
  score: 5890,       // Kept for game scoring
  timestamp: Date
}
```

## Ranking Logic

**Primary:** Highest WPM wins
**Tiebreaker:** If WPM is equal, higher accuracy wins

Firebase query: `orderBy("wpm", "desc")`

## Technical Details

### Character Tracking
```javascript
state.charsTyped     // Total characters typed (including errors)
state.correctChars   // Only correct characters
state.errors         // Number of incorrect characters
```

### Accuracy Formula
```javascript
accuracy = (correctChars / charsTyped) × 100
accuracy = Math.max(0, accuracy) // Never negative
```

### WPM Formula
```javascript
wpm = (correctChars / 5) / elapsedMinutes
```
Standard formula: 5 characters = 1 word

### When Accuracy is Calculated
1. **During gameplay:** Updated every second in `gameLoop()`
2. **End of stage:** Displayed in round summary
3. **End of game:** Final calculation before saving
4. **Before saving:** Recalculated to ensure accuracy: `(state.correctChars / state.charsTyped) × 100`

## Testing Checklist

- [x] Play a complete game
- [x] Verify accuracy shows correctly (not 0%)
- [x] Submit score to leaderboard
- [x] Check leaderboard ranks by WPM (highest first)
- [x] Verify accuracy displays for each entry
- [x] Confirm no negative accuracy values

---

**Status:** ✅ All fixes implemented
**Ranking:** WPM-based only (no filters)
**Accuracy:** Fixed and displaying correctly
**Version:** 2.1
