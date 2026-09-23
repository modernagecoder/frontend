"""Python halves of the Scratch-and-Python pairs on /blog/scratch-vs-python-which-better-young-learners."""

PROGRAMS = [
    dict(n=1, title='A loop', code='''import time

for i in range(3):          # Scratch: repeat (3)
    print("Hello!")         # Scratch: say [Hello!]
    time.sleep(1)           # Scratch: wait (1) seconds'''),
    dict(n=2, title='If-then-else', code='''score = 120

if score > 100:             # Scratch: if <(score) > (100)> then
    print("You win!")
else:
    print("Keep trying!")'''),
    dict(n=3, title='Variables', code='''score = 0                   # Scratch: set [score] to (0)
score = score + 10          # Scratch: change [score] by (10)
score += 10                 # the short way to write the same thing
print("score:", score)'''),
    dict(n=4, title='Forever loop with a stop', code='''lives = 3

while True:                 # Scratch: forever
    print("lives left:", lives)
    lives -= 1
    if lives == 0:          # Scratch: if <(lives) = (0)> then ... stop [all]
        print("Game Over!")
        break'''),
]
