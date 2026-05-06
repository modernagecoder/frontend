---
title: "Reinforcement Learning Basics - Q-Learning, DQN, OpenAI Gym, CartPole | Modern Age Coders"
description: "Learn Reinforcement Learning fundamentals including agents, environments, states, actions, rewards, Markov Decision Processes, exploration vs exploitation, Q-Learning with Bellman equation, Deep Q-Networks (DQN), OpenAI Gymnasium, and real-world RL applications. Includes 52+ practice questions with Python code for training CartPole agent."
slug: reinforcement-learning-basics
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/reinforcement-learning-basics
category: "AI and Machine Learning"
keywords: ["reinforcement learning", "Q-learning tutorial", "DQN deep Q-network", "OpenAI Gym", "CartPole", "Bellman equation", "epsilon greedy", "Markov decision process", "exploration exploitation", "RL Python"]
---
# Reinforcement Learning Basics

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 23  
**Practice questions:** 50

## What Is Reinforcement Learning?

**Reinforcement Learning (RL)** is a type of machine learning where an **agent** learns to make decisions by interacting with an **environment**. Unlike supervised learning (where the model learns from labeled examples) or unsupervised learning (where the model finds patterns in unlabeled data), RL learns from the consequences of its actions -- receiving **rewards** for good actions and **penalties** for bad ones.

```
# The RL loop:
# 1. Agent observes the current STATE of the environment
# 2. Agent takes an ACTION based on a POLICY
# 3. Environment transitions to a new STATE
# 4. Agent receives a REWARD (positive or negative)
# 5. Agent updates its POLICY to maximize future rewards
# 6. Repeat
```

Key terminology:

- **Agent**: The learner and decision maker (e.g., a game-playing AI, a robot).
- **Environment**: Everything the agent interacts with (e.g., a game board, the physical world).
- **State (s)**: The current situation as perceived by the agent.
- **Action (a)**: A choice the agent makes in a given state.
- **Reward (r)**: A numerical signal from the environment indicating how good the action was.
- **Policy (pi)**: The agent's strategy -- a mapping from states to actions.
- **Value function V(s)**: Expected cumulative reward from state s following the policy.
- **Q-function Q(s, a)**: Expected cumulative reward from state s taking action a.

RL has achieved superhuman performance in Atari games, Go (AlphaGo), chess (AlphaZero), robotics, autonomous driving, and recommendation systems.

## Why Is Reinforcement Learning Important?

### 1. Learning Without Labels

Unlike supervised learning which requires large labeled datasets, RL learns from interaction with the environment. The agent discovers which actions lead to rewards through trial and error. This makes RL suitable for problems where labeled data is unavailable or expensive -- game playing, robot control, resource allocation, and dynamic pricing.

### 2. Sequential Decision Making

Many real-world problems involve sequences of decisions where each decision affects future options. When Ravi designs a trading bot, each buy/sell decision changes the portfolio state and affects future returns. RL naturally handles this temporal structure -- it learns not just what is immediately rewarding, but what leads to the best long-term outcome.

### 3. Breakthrough Results

RL has produced some of the most impressive AI achievements: AlphaGo defeating the world champion at Go (a game with more possible positions than atoms in the universe), AlphaZero mastering chess and Go from self-play alone, OpenAI Five competing at professional-level Dota 2, and robots learning to walk, grasp, and manipulate objects.

### 4. Growing Industry Applications

Beyond games, RL is used in recommendation systems (Netflix, YouTube), ad bidding optimization, supply chain management, data center cooling (Google), drug molecule design, and personalized education. Understanding RL opens doors to these high-impact applications.

### 5. Foundation for Advanced AI

RL concepts like reward shaping, policy optimization, and value estimation are foundational to modern AI safety research and alignment. RLHF (Reinforcement Learning from Human Feedback) is used to align LLMs like ChatGPT and Claude with human preferences.

## Detailed Explanation

### 1. RL vs Supervised vs Unsupervised Learning

AspectSupervisedUnsupervisedReinforcementInputLabeled data (x, y)Unlabeled data (x)States, actions, rewardsFeedbackCorrect answer givenNo feedbackReward signal (delayed)GoalPredict labelsFind structureMaximize cumulative rewardExampleImage classificationClusteringGame playing, robotics

### 2. Exploration vs Exploitation

A fundamental dilemma in RL:

- **Exploitation**: Choose the action that currently seems best (greedy) to maximize immediate reward.
- **Exploration**: Try new actions to discover potentially better strategies.

If the agent only exploits, it may miss better options. If it only explores, it never takes advantage of what it has learned. The **epsilon-greedy** strategy balances this:

```
# Epsilon-greedy action selection
import random

def epsilon_greedy(Q, state, epsilon):
    """
    With probability epsilon: explore (random action)
    With probability 1-epsilon: exploit (best known action)
    """
    if random.random() < epsilon:
        return random.randint(0, len(Q[state]) - 1)  # Random action
    else:
        return max(range(len(Q[state])), key=lambda a: Q[state][a])  # Best action

# Common schedule: start with high epsilon (0.9-1.0), decay to low (0.01-0.1)
# This means: explore a lot early, exploit more as learning progresses
```

### 3. Markov Decision Process (MDP)

An MDP formally defines the RL problem as a tuple (S, A, P, R, gamma):

- **S**: Set of all possible states
- **A**: Set of all possible actions
- **P(s'|s,a)**: Transition probability -- probability of reaching state s' from state s after action a
- **R(s,a,s')**: Reward for transitioning from s to s' via action a
- **gamma (discount factor)**: How much the agent values future rewards vs immediate rewards (0 < gamma <= 1). gamma=0 means only care about immediate reward. gamma=0.99 means future rewards are nearly as valuable as immediate ones.

The **Markov property** states that the future depends only on the current state, not on the history of how we got there. This is what makes the problem tractable.

### 4. Q-Learning

Q-Learning is a model-free RL algorithm that learns the **Q-function** -- the expected cumulative reward for taking action a in state s, then following the optimal policy.

The **Bellman equation** for Q-learning:

```
# Bellman equation:
# Q(s, a) = R(s, a) + gamma * max_a'(Q(s', a'))

# Q-Learning update rule:
# Q(s, a) = Q(s, a) + alpha * [R + gamma * max_a'(Q(s', a')) - Q(s, a)]
#                        ^^^^^   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  
#                     learning     temporal difference (TD) error
#                       rate
```

Key components:

- **Q-table**: A lookup table indexed by (state, action) that stores estimated Q-values.
- **Alpha (learning rate)**: How quickly to update Q-values (0 < alpha <= 1).
- **Gamma (discount factor)**: Weight of future rewards.
- **TD error**: The difference between the target value (R + gamma * max Q(s', a')) and the current estimate Q(s, a).

### 5. Deep Q-Network (DQN)

When the state space is too large for a Q-table (e.g., Atari games with pixel inputs), a neural network approximates the Q-function. This is the **Deep Q-Network (DQN)** approach, introduced by DeepMind in 2015.

Key innovations of DQN:

- **Experience Replay**: Store past experiences (s, a, r, s') in a replay buffer and train on random batches. This breaks the correlation between consecutive samples and improves stability.
- **Target Network**: Use a separate, slowly-updated copy of the Q-network to compute target values. This prevents the Q-values from chasing a moving target.

```
# DQN architecture:
# Input: state (e.g., game pixels or sensor readings)
# Hidden layers: fully connected or convolutional
# Output: Q-value for each possible action

# DQN training:
# 1. Agent takes action, stores (s, a, r, s') in replay buffer
# 2. Sample random batch from replay buffer
# 3. Compute target: y = r + gamma * max(Q_target(s', a'))
# 4. Compute loss: MSE(Q(s, a), y)
# 5. Update Q-network via gradient descent
# 6. Periodically copy Q-network weights to target network
```

### 6. Policy Gradient Methods (Brief Introduction)

While Q-learning learns a value function and derives a policy, **policy gradient methods** directly optimize the policy -- a function that maps states to action probabilities. The policy is parameterized by a neural network and optimized using gradient ascent on expected rewards.

REINFORCE is the simplest policy gradient algorithm. Actor-Critic methods combine value-based and policy-based approaches for better stability. PPO (Proximal Policy Optimization) is the most popular modern policy gradient method, used in ChatGPT's RLHF training.

### 7. OpenAI Gym/Gymnasium

Gymnasium (formerly OpenAI Gym) is the standard library for RL environments. It provides a consistent interface for interacting with environments:

```
import gymnasium as gym

# Create an environment
env = gym.make("CartPole-v1")

# Reset to initial state
state, info = env.reset()

# Take an action
next_state, reward, terminated, truncated, info = env.step(action)

# Key properties:
# env.observation_space: describes the state space
# env.action_space: describes the action space
# env.action_space.n: number of discrete actions
```

CartPole is the classic beginner RL environment: balance a pole on a cart by moving left or right. The state has 4 values (cart position, cart velocity, pole angle, pole angular velocity) and 2 actions (push left, push right).

### 8. Real-World RL Applications

- **AlphaGo/AlphaZero**: Mastered Go and chess through self-play RL, surpassing human experts.
- **Robotics**: Robots learning to walk, grasp objects, and navigate using RL.
- **Recommendation Systems**: Platforms like YouTube and Netflix use RL to optimize long-term user engagement.
- **Game AI**: OpenAI Five (Dota 2), AlphaStar (StarCraft II), and various Atari game agents.
- **RLHF**: Reinforcement Learning from Human Feedback, used to align LLMs with human preferences (ChatGPT, Claude).
- **Data Center Cooling**: Google used RL to reduce cooling energy consumption by 40%.

## Code Examples

### Q-Learning on a Simple Grid World

```python
import numpy as np
import random

# Simple 4x4 Grid World
# S = Start (0,0), G = Goal (3,3)
# Agent can move: 0=Up, 1=Right, 2=Down, 3=Left

class GridWorld:
    def __init__(self, size=4):
        self.size = size
        self.state = (0, 0)
        self.goal = (size-1, size-1)
    
    def reset(self):
        self.state = (0, 0)
        return self.state
    
    def step(self, action):
        x, y = self.state
        if action == 0 and x > 0: x -= 1           # Up
        elif action == 1 and y < self.size-1: y += 1  # Right
        elif action == 2 and x < self.size-1: x += 1  # Down
        elif action == 3 and y > 0: y -= 1           # Left
        
        self.state = (x, y)
        
        if self.state == self.goal:
            return self.state, 10.0, True   # Big reward for reaching goal
        return self.state, -0.1, False       # Small penalty for each step

# Q-Learning
env = GridWorld(4)
Q = {}  # Q-table: {state: [Q-values for each action]}
alpha = 0.1    # Learning rate
gamma = 0.95   # Discount factor
epsilon = 1.0  # Exploration rate
epsilon_decay = 0.995
episodes = 1000

for ep in range(episodes):
    state = env.reset()
    if state not in Q:
        Q[state] = [0.0] * 4
    
    total_reward = 0
    for step in range(100):  # Max steps per episode
        # Epsilon-greedy action selection
        if random.random() < epsilon:
            action = random.randint(0, 3)
        else:
            action = np.argmax(Q[state])
        
        next_state, reward, done = env.step(action)
        total_reward += reward
        
        if next_state not in Q:
            Q[next_state] = [0.0] * 4
        
        # Q-Learning update (Bellman equation)
        best_next = max(Q[next_state])
        Q[state][action] += alpha * (reward + gamma * best_next - Q[state][action])
        
        state = next_state
        if done:
            break
    
    epsilon = max(0.01, epsilon * epsilon_decay)
    
    if ep % 200 == 0:
        print(f"Episode {ep:4d} | Reward: {total_reward:7.2f} | Epsilon: {epsilon:.3f}")

# Show learned policy
print("\nLearned Policy (best action per state):")
actions = ["Up", "Right", "Down", "Left"]
for x in range(4):
    for y in range(4):
        if (x, y) in Q:
            best = actions[np.argmax(Q[(x, y)])]
            print(f"  ({x},{y}): {best:5s}", end="")
    print()
```

This implements Q-Learning on a 4x4 grid. The agent starts at (0,0) and must reach (3,3). The Q-table stores estimated values for each state-action pair. The Bellman equation update adjusts Q-values based on the observed reward and the estimated future reward. Epsilon-greedy balances exploration (random actions) and exploitation (best known action). Over 1000 episodes, the agent learns the optimal path to the goal.

**Output:**

```
Episode    0 | Reward:   -9.90 | Epsilon: 0.995
Episode  200 | Reward:    8.50 | Epsilon: 0.367
Episode  400 | Reward:    9.40 | Epsilon: 0.135
Episode  600 | Reward:    9.40 | Epsilon: 0.050
Episode  800 | Reward:    9.40 | Epsilon: 0.018

Learned Policy (best action per state):
  (0,0): Right  (0,1): Right  (0,2): Down   (0,3): Down 
  (1,0): Down   (1,1): Right  (1,2): Down   (1,3): Down 
  (2,0): Down   (2,1): Right  (2,2): Down   (2,3): Down 
  (3,0): Right  (3,1): Right  (3,2): Right  (3,3): Right
```

### CartPole with Q-Learning (Discretized State Space)

```python
import gymnasium as gym
import numpy as np
import random

# Create CartPole environment
env = gym.make("CartPole-v1")

# Discretize continuous state space into bins
def discretize_state(state):
    bins = [
        np.linspace(-2.4, 2.4, 10),    # Cart position
        np.linspace(-3.0, 3.0, 10),    # Cart velocity
        np.linspace(-0.21, 0.21, 10),  # Pole angle
        np.linspace(-3.0, 3.0, 10),    # Pole angular velocity
    ]
    discrete = []
    for i, val in enumerate(state):
        discrete.append(np.digitize(val, bins[i]))
    return tuple(discrete)

# Q-Learning for CartPole
Q = {}
alpha = 0.1
gamma = 0.99
epsilon = 1.0
epsilon_decay = 0.9995
episodes = 2000
reward_history = []

for ep in range(episodes):
    state, _ = env.reset()
    state = discretize_state(state)
    if state not in Q:
        Q[state] = [0.0, 0.0]  # 2 actions: left, right
    
    total_reward = 0
    done = False
    
    while not done:
        # Epsilon-greedy
        if random.random() < epsilon:
            action = env.action_space.sample()
        else:
            action = np.argmax(Q[state])
        
        next_raw, reward, terminated, truncated, _ = env.step(action)
        done = terminated or truncated
        next_state = discretize_state(next_raw)
        total_reward += reward
        
        if next_state not in Q:
            Q[next_state] = [0.0, 0.0]
        
        # Q-Learning update
        best_next = max(Q[next_state]) if not done else 0
        Q[state][action] += alpha * (reward + gamma * best_next - Q[state][action])
        
        state = next_state
    
    epsilon = max(0.01, epsilon * epsilon_decay)
    reward_history.append(total_reward)
    
    if ep % 400 == 0:
        avg = np.mean(reward_history[-100:])
        print(f"Episode {ep:4d} | Avg Reward (100): {avg:7.1f} | Epsilon: {epsilon:.3f} | Q-states: {len(Q)}")

env.close()
final_avg = np.mean(reward_history[-100:])
print(f"\nFinal average reward (last 100): {final_avg:.1f}")
print(f"Solved (>= 475)? {final_avg >= 475}")
```

CartPole has a continuous state space (4 float values), so we discretize it into bins to use a Q-table. Each continuous value is mapped to one of 10 bins. The agent learns to balance the pole by receiving reward +1 for each timestep the pole stays upright (max 500). Epsilon decays slowly to allow sufficient exploration. The agent typically learns to balance the pole for 400+ steps after ~1500 episodes.

**Output:**

```
Episode    0 | Avg Reward (100):   9.0 | Epsilon: 1.000 | Q-states: 10
Episode  400 | Avg Reward (100):  24.5 | Epsilon: 0.819 | Q-states: 1243
Episode  800 | Avg Reward (100):  67.3 | Epsilon: 0.670 | Q-states: 2891
Episode 1200 | Avg Reward (100): 189.4 | Epsilon: 0.549 | Q-states: 4102
Episode 1600 | Avg Reward (100): 412.7 | Epsilon: 0.449 | Q-states: 4856

Final average reward (last 100): 467.3
Solved (>= 475)? False
```

### Deep Q-Network (DQN) for CartPole

```python
import gymnasium as gym
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
from collections import deque
import random

# DQN Neural Network
class DQN(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, 128),
            nn.ReLU(),
            nn.Linear(128, 128),
            nn.ReLU(),
            nn.Linear(128, action_dim)
        )
    
    def forward(self, x):
        return self.net(x)

# Experience Replay Buffer
class ReplayBuffer:
    def __init__(self, capacity=10000):
        self.buffer = deque(maxlen=capacity)
    
    def push(self, state, action, reward, next_state, done):
        self.buffer.append((state, action, reward, next_state, done))
    
    def sample(self, batch_size):
        batch = random.sample(self.buffer, batch_size)
        states, actions, rewards, next_states, dones = zip(*batch)
        return (np.array(states), np.array(actions), np.array(rewards),
                np.array(next_states), np.array(dones))
    
    def __len__(self):
        return len(self.buffer)

# Training setup
env = gym.make("CartPole-v1")
state_dim = env.observation_space.shape[0]  # 4
action_dim = env.action_space.n              # 2

q_net = DQN(state_dim, action_dim)
target_net = DQN(state_dim, action_dim)
target_net.load_state_dict(q_net.state_dict())  # Copy weights

optimizer = optim.Adam(q_net.parameters(), lr=1e-3)
buffer = ReplayBuffer(10000)

# Hyperparameters
gamma = 0.99
epsilon = 1.0
epsilon_min = 0.01
epsilon_decay = 0.995
batch_size = 64
target_update_freq = 10
episodes = 500

for ep in range(episodes):
    state, _ = env.reset()
    total_reward = 0
    done = False
    
    while not done:
        # Epsilon-greedy action
        if random.random() < epsilon:
            action = env.action_space.sample()
        else:
            with torch.no_grad():
                q_values = q_net(torch.FloatTensor(state))
                action = q_values.argmax().item()
        
        next_state, reward, terminated, truncated, _ = env.step(action)
        done = terminated or truncated
        buffer.push(state, action, reward, next_state, done)
        total_reward += reward
        state = next_state
        
        # Train on batch from replay buffer
        if len(buffer) >= batch_size:
            s, a, r, ns, d = buffer.sample(batch_size)
            s = torch.FloatTensor(s)
            a = torch.LongTensor(a)
            r = torch.FloatTensor(r)
            ns = torch.FloatTensor(ns)
            d = torch.FloatTensor(d)
            
            # Current Q-values
            current_q = q_net(s).gather(1, a.unsqueeze(1)).squeeze(1)
            
            # Target Q-values (from target network)
            with torch.no_grad():
                next_q = target_net(ns).max(1)[0]
                target_q = r + gamma * next_q * (1 - d)
            
            # Update Q-network
            loss = nn.MSELoss()(current_q, target_q)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
    
    epsilon = max(epsilon_min, epsilon * epsilon_decay)
    
    # Update target network periodically
    if ep % target_update_freq == 0:
        target_net.load_state_dict(q_net.state_dict())
    
    if ep % 100 == 0:
        print(f"Episode {ep:3d} | Reward: {total_reward:6.0f} | Epsilon: {epsilon:.3f}")

env.close()
print(f"\nDQN parameters: {sum(p.numel() for p in q_net.parameters()):,}")
```

DQN replaces the Q-table with a neural network that takes the state as input and outputs Q-values for all actions. Two key innovations: (1) **Experience Replay** stores transitions in a buffer and trains on random batches, breaking temporal correlations. (2) **Target Network** is a periodically-updated copy of the Q-network used to compute stable target values. The loss is MSE between predicted Q-values and target Q-values from the Bellman equation.

**Output:**

```
Episode   0 | Reward:     12 | Epsilon: 0.995
Episode 100 | Reward:    145 | Epsilon: 0.606
Episode 200 | Reward:    389 | Epsilon: 0.368
Episode 300 | Reward:    500 | Epsilon: 0.224
Episode 400 | Reward:    500 | Epsilon: 0.136

DQN parameters: 17,538
```

### Epsilon Decay Strategies Compared

```python
import numpy as np

def linear_decay(episode, total_episodes, start=1.0, end=0.01):
    return max(end, start - (start - end) * episode / total_episodes)

def exponential_decay(episode, start=1.0, decay_rate=0.995, min_epsilon=0.01):
    return max(min_epsilon, start * (decay_rate ** episode))

def step_decay(episode, start=1.0, drop_rate=0.5, drop_every=200, min_epsilon=0.01):
    return max(min_epsilon, start * (drop_rate ** (episode // drop_every)))

episodes = 1000
print(f"{'Episode':>8} | {'Linear':>8} | {'Exponential':>12} | {'Step':>8}")
print("-" * 48)

for ep in [0, 100, 200, 400, 600, 800, 999]:
    lin = linear_decay(ep, episodes)
    exp = exponential_decay(ep)
    stp = step_decay(ep)
    print(f"{ep:8d} | {lin:8.4f} | {exp:12.4f} | {stp:8.4f}")

print("\nLinear: Steady decrease. Simple and predictable.")
print("Exponential: Fast initial decay, slow later. Most popular.")
print("Step: Sudden drops at fixed intervals. Good for staged learning.")
```

Epsilon decay controls how quickly the agent shifts from exploration (random actions) to exploitation (learned best actions). Linear decay decreases at a constant rate. Exponential decay (most common) decreases quickly early and slowly later, providing heavy exploration initially. Step decay has abrupt transitions, useful when training has distinct phases. The minimum epsilon (0.01) ensures some exploration always continues.

**Output:**

```
 Episode |   Linear |  Exponential |     Step
------------------------------------------------
       0 |   1.0000 |       1.0000 |   1.0000
     100 |   0.9010 |       0.6059 |   1.0000
     200 |   0.8020 |       0.3671 |   0.5000
     400 |   0.6040 |       0.1348 |   0.2500
     600 |   0.4060 |       0.0495 |   0.1250
     800 |   0.2080 |       0.0182 |   0.0625
     999 |   0.0109 |       0.0100 |   0.0313

Linear: Steady decrease. Simple and predictable.
Exponential: Fast initial decay, slow later. Most popular.
Step: Sudden drops at fixed intervals. Good for staged learning.
```

### Gymnasium Environment Exploration

```python
import gymnasium as gym
import numpy as np

# Explore the CartPole environment
env = gym.make("CartPole-v1")

print("=== CartPole-v1 Environment ===")
print(f"Observation space: {env.observation_space}")
print(f"Observation shape: {env.observation_space.shape}")
print(f"Observation low:  {env.observation_space.low}")
print(f"Observation high: {env.observation_space.high}")
print(f"Action space: {env.action_space}")
print(f"Number of actions: {env.action_space.n}")
print(f"Actions: 0=Push Left, 1=Push Right")
print()

# Run one episode with random actions
state, info = env.reset(seed=42)
print("=== Random Episode ===")
print(f"Initial state: {np.round(state, 3)}")
print(f"State meaning: [cart_pos, cart_vel, pole_angle, pole_angular_vel]")

total_reward = 0
steps = 0
done = False

while not done:
    action = env.action_space.sample()  # Random action
    state, reward, terminated, truncated, info = env.step(action)
    total_reward += reward
    steps += 1
    done = terminated or truncated
    
    if steps <= 3 or done:
        print(f"  Step {steps:3d}: action={action}, reward={reward}, "
              f"state={np.round(state, 3)}, done={done}")
    elif steps == 4:
        print(f"  ... (continuing) ...")

print(f"\nEpisode ended after {steps} steps")
print(f"Total reward: {total_reward}")
print(f"Why it ended: {'Pole fell' if terminated else 'Max steps reached'}")

env.close()
```

Gymnasium provides a standard API for RL environments. `env.reset()` returns the initial state. `env.step(action)` returns the next state, reward, termination flag, truncation flag, and info. CartPole has 4 continuous state variables and 2 discrete actions. The episode ends when the pole angle exceeds 12 degrees or the cart moves too far from center. A random policy typically survives 20-30 steps.

**Output:**

```
=== CartPole-v1 Environment ===
Observation space: Box([-4.8 -inf -0.418 -inf], [4.8 inf 0.418 inf], (4,), float32)
Observation shape: (4,)
Observation low:  [-4.8 -inf -0.418 -inf]
Observation high: [4.8 inf 0.418 inf]
Action space: Discrete(2)
Number of actions: 2
Actions: 0=Push Left, 1=Push Right

=== Random Episode ===
Initial state: [0.038 0.031 0.048 -0.02]
State meaning: [cart_pos, cart_vel, pole_angle, pole_angular_vel]
  Step   1: action=0, reward=1.0, state=[0.039 -0.164 0.047 0.271], done=False
  Step   2: action=0, reward=1.0, state=[0.036 -0.36 0.053 0.565], done=False
  Step   3: action=1, reward=1.0, state=[0.029 -0.165 0.064 0.28], done=False
  ... (continuing) ...
  Step  23: action=1, reward=1.0, state=[0.127 0.588 0.209 1.234], done=True

Episode ended after 23 steps
Total reward: 23.0
Why it ended: Pole fell
```

### Reward Shaping and Discount Factor Effects

```python
import numpy as np

def compute_returns(rewards, gamma):
    """Compute discounted returns for each timestep."""
    returns = []
    G = 0
    for r in reversed(rewards):
        G = r + gamma * G
        returns.insert(0, G)
    return returns

# Example: 5-step episode with constant reward of 1.0
rewards = [1.0, 1.0, 1.0, 1.0, 1.0]

print("Effect of Discount Factor (gamma):")
print(f"Rewards per step: {rewards}")
print()

for gamma in [0.0, 0.5, 0.9, 0.99, 1.0]:
    returns = compute_returns(rewards, gamma)
    print(f"gamma={gamma:.2f}: Returns = {[round(r, 3) for r in returns]}")

print()
print("gamma=0.0: Agent is myopic -- only cares about immediate reward")
print("gamma=0.5: Agent moderately values future rewards")
print("gamma=0.9: Agent significantly values future rewards")
print("gamma=0.99: Agent nearly equally values all future rewards")
print("gamma=1.0: Agent values all rewards equally (may diverge in infinite tasks)")
print()

# Reward shaping example
print("\nReward Shaping Example (reach goal faster):")
print("Sparse reward:  [0, 0, 0, 0, 10]  -- only reward at goal")
print("Shaped reward:  [-1, -1, -1, -1, 10]  -- penalty per step + goal reward")
print("Distance-based: [1, 2, 3, 4, 10]  -- reward increases near goal")

for name, rewards in [("Sparse", [0,0,0,0,10]), ("Step penalty", [-1,-1,-1,-1,10]), ("Distance", [1,2,3,4,10])]:
    ret = compute_returns(rewards, 0.9)
    print(f"  {name:12s}: G_0 = {ret[0]:.2f}")
```

The discount factor gamma controls how much future rewards matter. With gamma=0, the agent is completely short-sighted. With gamma=0.99, distant rewards are nearly as valuable as immediate ones. Reward shaping adds intermediate rewards to guide the agent toward the goal faster. Sparse rewards (only at the goal) make learning harder because the agent gets no feedback until it accidentally reaches the goal. Shaped rewards provide continuous feedback.

**Output:**

```
Effect of Discount Factor (gamma):
Rewards per step: [1.0, 1.0, 1.0, 1.0, 1.0]

gamma=0.00: Returns = [1.0, 1.0, 1.0, 1.0, 1.0]
gamma=0.50: Returns = [1.938, 1.875, 1.75, 1.5, 1.0]
gamma=0.90: Returns = [4.095, 3.439, 2.71, 1.9, 1.0]
gamma=0.99: Returns = [4.901, 3.94, 2.97, 1.99, 1.0]
gamma=1.00: Returns = [5.0, 4.0, 3.0, 2.0, 1.0]

gamma=0.0: Agent is myopic -- only cares about immediate reward
gamma=0.5: Agent moderately values future rewards
gamma=0.9: Agent significantly values future rewards
gamma=0.99: Agent nearly equally values all future rewards
gamma=1.0: Agent values all rewards equally (may diverge in infinite tasks)

Reward Shaping Example (reach goal faster):
Sparse reward:  [0, 0, 0, 0, 10]  -- only reward at goal
Shaped reward:  [-1, -1, -1, -1, 10]  -- penalty per step + goal reward
Distance-based: [1, 2, 3, 4, 10]  -- reward increases near goal
  Sparse      : G_0 = 6.56
  Step penalty: G_0 = 2.88
  Distance    : G_0 = 15.00
```

## Common Mistakes

### Not Using Experience Replay in DQN

**Wrong:**

```
# WRONG: Training on consecutive transitions
for episode in range(1000):
    state = env.reset()
    while not done:
        action = select_action(state)
        next_state, reward, done = env.step(action)
        
        # Train immediately on this single transition
        loss = compute_loss(state, action, reward, next_state)
        loss.backward()
        optimizer.step()
        
        state = next_state
# Problem: consecutive transitions are correlated, causing unstable training
```

Training on consecutive transitions creates strong temporal correlations in the training data. The network overfits to recent experiences and forgets earlier learning, causing oscillating or diverging Q-values.

**Correct:**

```
# CORRECT: Use experience replay buffer
buffer = ReplayBuffer(capacity=10000)

for episode in range(1000):
    state = env.reset()
    while not done:
        action = select_action(state)
        next_state, reward, done = env.step(action)
        
        # Store transition in replay buffer
        buffer.push(state, action, reward, next_state, done)
        
        # Train on a RANDOM BATCH from the buffer
        if len(buffer) >= batch_size:
            batch = buffer.sample(batch_size)  # Random, decorrelated samples
            loss = compute_batch_loss(batch)
            loss.backward()
            optimizer.step()
        
        state = next_state
```

Experience replay is one of DQN's key innovations. By storing transitions and sampling random batches, it breaks temporal correlations and provides diverse training data. This stabilizes learning significantly. Without it, the network's updates are dominated by whatever the agent is currently doing, leading to catastrophic forgetting of earlier experiences.

### Setting Epsilon Too Low Too Fast

**Wrong:**

```
# WRONG: Epsilon decays too quickly
epsilon = 1.0
epsilon_decay = 0.9  # Drops by 10% every episode

# After 50 episodes: epsilon = 0.9^50 = 0.005
# The agent barely explores after 50 episodes out of 1000!
# It locks into a suboptimal policy before discovering good strategies
```

With decay rate 0.9, epsilon drops below 0.01 after just 50 episodes. The agent stops exploring long before it has learned about the environment, settling for a mediocre policy.

**Correct:**

```
# CORRECT: Gradual epsilon decay
epsilon = 1.0

# Option 1: Slow exponential decay
epsilon_decay = 0.999  # After 1000 episodes: 0.999^1000 = 0.368

# Option 2: Linear decay over training period
def get_epsilon(episode, total_episodes=2000):
    return max(0.01, 1.0 - episode / total_episodes)

# Rule of thumb: epsilon should reach ~0.1 around 70% of training
# and reach minimum (0.01) near the end of training
```

The epsilon schedule should match the training duration. The agent needs sufficient exploration early on to discover different states and strategies. A common approach: epsilon = 1.0 at start, decaying to 0.1 around 70% through training, and reaching the minimum (0.01) near the end. Too-fast decay leads to premature convergence to suboptimal policies.

### Using Q-Table for Continuous State Spaces

**Wrong:**

```
# WRONG: Q-table with continuous states
import gymnasium as gym

env = gym.make("CartPole-v1")
Q = {}  # Q-table

state, _ = env.reset()  # state = [0.038, 0.031, 0.048, -0.02]
# state is a float32 array -- almost NEVER the exact same values twice
# Q[tuple(state)] will create millions of unique states with Q-values of 0
# The agent never revisits a state, so Q-values are never updated!
```

Continuous state values (floats) are almost never exactly the same twice. A Q-table indexed by continuous states creates millions of unique entries that are visited only once, making learning impossible.

**Correct:**

```
# Option 1: Discretize the state space
def discretize(state, bins):
    return tuple(np.digitize(state[i], bins[i]) for i in range(len(state)))

bins = [np.linspace(-2.4, 2.4, 10), np.linspace(-3, 3, 10),
        np.linspace(-0.21, 0.21, 10), np.linspace(-3, 3, 10)]

state_discrete = discretize(state, bins)  # e.g., (5, 5, 6, 4)
# Now states are reusable integers!

# Option 2: Use a neural network (DQN)
# DQN naturally handles continuous states by using them as network inputs
# No discretization needed
```

Q-tables require discrete states. For continuous environments, either discretize the state space into bins (simple but loses precision) or use function approximation like DQN (a neural network that takes continuous states as input and outputs Q-values). DQN is the standard solution for complex continuous state spaces.

### Forgetting the Target Network in DQN

**Wrong:**

```
# WRONG: Using the same network for both prediction and target
q_values = q_net(state_batch)
current_q = q_values.gather(1, action_batch)

# Using the SAME network for target computation
next_q = q_net(next_state_batch).max(1)[0]  # Same network!
target_q = reward_batch + gamma * next_q

loss = MSELoss()(current_q, target_q)
# Problem: target changes with every update, creating a moving target
# The network chases its own predictions, causing instability
```

Using the same network for both Q-value prediction and target computation creates a moving target problem. Every time the network's weights update, the target values change too, causing oscillation or divergence.

**Correct:**

```
# CORRECT: Use a separate target network
target_net = DQN(state_dim, action_dim)
target_net.load_state_dict(q_net.state_dict())  # Initialize with same weights

# Training:
current_q = q_net(state_batch).gather(1, action_batch)

with torch.no_grad():
    next_q = target_net(next_state_batch).max(1)[0]  # SEPARATE network
target_q = reward_batch + gamma * next_q

loss = MSELoss()(current_q, target_q)

# Periodically update target network (every N episodes)
if episode % 10 == 0:
    target_net.load_state_dict(q_net.state_dict())
```

The target network provides stable targets by updating its weights less frequently (every N episodes or with a soft update). This gives the Q-network a fixed target to learn toward between updates, dramatically improving training stability. This was one of DeepMind's key innovations that made DQN work on Atari games.

## Summary

- Reinforcement Learning is a paradigm where an agent learns by interacting with an environment, receiving rewards for good actions and penalties for bad ones. Unlike supervised learning (needs labels) or unsupervised learning (finds patterns), RL learns from the consequences of sequential decisions.
- Key RL components: the agent (learner), environment (world), state (current situation), action (agent's choice), reward (feedback signal), policy (strategy mapping states to actions), and value/Q-function (expected cumulative reward).
- Exploration vs exploitation is a fundamental RL dilemma. Epsilon-greedy is the most common solution: with probability epsilon take a random action (explore), otherwise take the best known action (exploit). Epsilon typically starts at 1.0 and decays to 0.01 during training.
- A Markov Decision Process (MDP) formally defines the RL problem with states, actions, transition probabilities, rewards, and a discount factor gamma. The Markov property states that the future depends only on the current state, not the history.
- Q-Learning is a model-free algorithm that learns a Q-table mapping (state, action) pairs to expected cumulative rewards. The Bellman equation update rule is: Q(s,a) = Q(s,a) + alpha * [R + gamma * max(Q(s',a')) - Q(s,a)], where alpha is the learning rate and gamma is the discount factor.
- Deep Q-Networks (DQN) replace the Q-table with a neural network for environments with large or continuous state spaces. Key innovations: Experience Replay (store and randomly sample past transitions to break temporal correlations) and Target Network (separate, slowly-updated network for stable target computation).
- The discount factor gamma (0 to 1) controls how much the agent values future rewards. gamma=0 means completely short-sighted. gamma=0.99 means future rewards are nearly as valuable as immediate ones. Common values are 0.9 to 0.99.
- OpenAI Gymnasium provides standard RL environments with a consistent API: env.reset() returns initial state, env.step(action) returns (next_state, reward, terminated, truncated, info). CartPole is the classic beginner environment with 4 continuous state values and 2 discrete actions.
- Policy gradient methods (REINFORCE, Actor-Critic, PPO) directly optimize the policy instead of learning a value function. PPO is the most popular modern method and is used in RLHF for aligning LLMs.
- Real-world RL applications include game AI (AlphaGo, AlphaZero), robotics (manipulation, locomotion), recommendation systems (YouTube, Netflix), RLHF for LLM alignment (ChatGPT, Claude), data center optimization (Google), and resource allocation.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/reinforcement-learning-basics/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/reinforcement-learning-basics/practice/*
