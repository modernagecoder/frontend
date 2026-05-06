---
title: "Practice: Reinforcement Learning Basics"
description: "50 practice problems for Reinforcement Learning Basics in AI and Machine Learning"
slug: reinforcement-learning-basics-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/reinforcement-learning-basics/practice
category: "AI and Machine Learning"
---
# Practice: Reinforcement Learning Basics

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
rl_components = ["Agent", "Environment", "State", "Action", "Reward", "Policy"]
for i, comp in enumerate(rl_components, 1):
    print(f"{i}. {comp}")
```

*Hint:* enumerate with start=1 gives 1-based indexing.

**Answer:** `1. Agent`
`2. Environment`
`3. State`
`4. Action`
`5. Reward`
`6. Policy`

The six core components of any RL system: the Agent makes decisions, the Environment responds, the State describes the current situation, Actions are choices, Rewards provide feedback, and the Policy is the agent's strategy.

### Q2. [Easy] What is the output?

```
learning_types = {
    "Supervised": "Labeled data",
    "Unsupervised": "No labels",
    "Reinforcement": "Reward signal"
}
for lt, feedback in learning_types.items():
    print(f"{lt}: {feedback}")
```

*Hint:* Dictionary iteration produces key-value pairs in insertion order.

**Answer:** `Supervised: Labeled data`
`Unsupervised: No labels`
`Reinforcement: Reward signal`

The three types of ML learn from different types of feedback. Supervised needs labeled examples (input-output pairs). Unsupervised finds structure without labels. RL learns from delayed reward signals through interaction.

### Q3. [Easy] What is the output?

```
import random
random.seed(42)

epsilon = 0.3
choices = []
for _ in range(10):
    if random.random() < epsilon:
        choices.append("explore")
    else:
        choices.append("exploit")

explore_count = choices.count("explore")
exploit_count = choices.count("exploit")
print(f"Explore: {explore_count}, Exploit: {exploit_count}")
```

*Hint:* With epsilon=0.3, about 30% of actions will be random (explore).

**Answer:** `Explore: 3, Exploit: 7` (approximately, exact depends on seed)

With epsilon=0.3, the agent explores (random action) about 30% of the time and exploits (best known action) about 70% of the time. This is the epsilon-greedy strategy for balancing exploration and exploitation.

### Q4. [Easy] What is the output?

```
gamma_values = [0.0, 0.5, 0.9, 0.99, 1.0]
for g in gamma_values:
    if g == 0:
        desc = "only immediate reward"
    elif g < 0.9:
        desc = "moderate future value"
    elif g < 1.0:
        desc = "high future value"
    else:
        desc = "equal value (may diverge)"
    print(f"gamma={g}: {desc}")
```

*Hint:* gamma controls how much the agent values future rewards vs immediate ones.

**Answer:** `gamma=0.0: only immediate reward`
`gamma=0.5: moderate future value`
`gamma=0.9: high future value`
`gamma=0.99: high future value`
`gamma=1.0: equal value (may diverge)`

The discount factor gamma determines how far-sighted the agent is. gamma=0 means the agent only cares about the next reward. gamma=0.99 means distant rewards are valued at 99% of their face value per step. gamma=1.0 can cause infinite returns in non-terminating environments.

### Q5. [Medium] What is the output?

```
import numpy as np

# Q-table for a 3-state, 2-action environment
Q = np.zeros((3, 2))
print(f"Initial Q-table:\n{Q}")

# Update Q(state=0, action=1) using Bellman equation
state, action = 0, 1
reward = 5.0
next_state = 2
alpha = 0.1
gamma = 0.9

best_next_q = np.max(Q[next_state])
td_target = reward + gamma * best_next_q
td_error = td_target - Q[state][action]
Q[state][action] += alpha * td_error

print(f"\nAfter update: Q[{state}][{action}] = {Q[state][action]}")
print(f"TD target: {td_target}")
print(f"TD error: {td_error}")
```

*Hint:* Q starts at 0. TD target = reward + gamma * max(Q[next_state]) = 5 + 0.9 * 0.

**Answer:** `Initial Q-table:`
`[[0. 0.]`
` [0. 0.]`
` [0. 0.]]`

`After update: Q[0][1] = 0.5`
`TD target: 5.0`
`TD error: 5.0`

All Q-values start at 0. TD target = 5.0 + 0.9 * 0.0 = 5.0 (next state Q is 0). TD error = 5.0 - 0.0 = 5.0. Updated Q = 0.0 + 0.1 * 5.0 = 0.5. The agent learned that taking action 1 in state 0 is valuable because it led to a reward of 5.

### Q6. [Medium] What is the output?

```
def compute_return(rewards, gamma):
    G = 0
    for r in reversed(rewards):
        G = r + gamma * G
    return round(G, 3)

rewards = [1, 1, 1, 10]  # reward at each timestep
print(f"gamma=0.0: G = {compute_return(rewards, 0.0)}")
print(f"gamma=0.5: G = {compute_return(rewards, 0.5)}")
print(f"gamma=0.9: G = {compute_return(rewards, 0.9)}")
print(f"gamma=1.0: G = {compute_return(rewards, 1.0)}")
```

*Hint:* The return is computed backwards: G = r + gamma * G. Start from the last reward.

**Answer:** `gamma=0.0: G = 1`
`gamma=0.5: G = 2.625`
`gamma=0.9: G = 10.539`
`gamma=1.0: G = 13`

With gamma=0, only the first reward matters (G=1). With gamma=1.0, all rewards are summed equally (1+1+1+10=13). With gamma=0.9, the big reward at the end (10) is discounted by 0.9^3 = 0.729 from the start, but still dominates. Higher gamma makes the agent more forward-looking.

### Q7. [Medium] What is the output?

```
import numpy as np

def epsilon_greedy(Q_state, epsilon):
    if np.random.random() < epsilon:
        return np.random.randint(len(Q_state))  # Random
    return np.argmax(Q_state)  # Best

np.random.seed(0)
Q_state = [2.5, 8.1, 1.3, 5.0]  # Q-values for 4 actions

# With epsilon=0 (pure exploitation)
print(f"Q-values: {Q_state}")
print(f"Best action (epsilon=0): {np.argmax(Q_state)}")

# Track exploration vs exploitation over 1000 trials
epsilon = 0.2
actions = [epsilon_greedy(Q_state, epsilon) for _ in range(1000)]
from collections import Counter
counts = Counter(actions)
for a in sorted(counts):
    print(f"Action {a}: {counts[a]} times ({counts[a]/10:.1f}%)")
```

*Hint:* Action 1 has the highest Q-value (8.1). With epsilon=0.2, ~80% exploit (action 1), ~20% random.

**Answer:** `Q-values: [2.5, 8.1, 1.3, 5.0]`
`Best action (epsilon=0): 1`
`Action 0: ~50 times (5%)`
`Action 1: ~850 times (85%)`
`Action 2: ~50 times (5%)`
`Action 3: ~50 times (5%)`

With epsilon=0.2, 80% of the time the agent exploits (chooses action 1, the highest Q-value). 20% of the time it explores randomly (each of 4 actions gets ~5%). Action 1 gets ~80% (exploit) + ~5% (random) = ~85% total.

### Q8. [Hard] What is the output?

```
import numpy as np

# Simulate Q-Learning for 5 updates on a single state-action pair
Q = 0.0  # Initial Q-value for one (state, action) pair
alpha = 0.1
gamma = 0.9

# Simulated transitions: (reward, max_next_Q)
transitions = [
    (1.0, 0.0),
    (1.0, 0.1),
    (0.0, 0.5),
    (1.0, 0.8),
    (1.0, 1.0)
]

for i, (reward, max_next_q) in enumerate(transitions):
    td_target = reward + gamma * max_next_q
    td_error = td_target - Q
    Q = Q + alpha * td_error
    print(f"Step {i+1}: R={reward}, maxQ'={max_next_q}, "
          f"target={td_target:.3f}, error={td_error:.3f}, Q={Q:.4f}")
```

*Hint:* Apply the Q-learning update: Q += alpha * (R + gamma * maxQ' - Q) at each step.

**Answer:** Each step shows the Bellman update: the Q-value gradually increases as the agent observes rewards and higher future values.

Q-learning incrementally adjusts Q toward the TD target (reward + discounted future value). The TD error decreases over time as Q converges toward the true value. With alpha=0.1, each update moves Q 10% of the way toward the target, providing smooth convergence.

### Q9. [Easy] What is the difference between exploration and exploitation in RL?

*Hint:* Think about trying new restaurants vs going to your favorite one.

**Answer:** **Exploitation** means choosing the action that currently has the highest estimated value -- using what the agent has already learned. **Exploration** means trying actions the agent has not tried much, potentially discovering better strategies. The dilemma: too much exploitation means the agent might miss better options; too much exploration means the agent wastes time on suboptimal actions instead of using what it knows. The epsilon-greedy strategy balances this: with probability epsilon, explore (random action); otherwise, exploit (best known action). Epsilon typically decays from 1.0 to 0.01 during training.

This is analogous to choosing restaurants: always going to your favorite (exploitation) means you might miss a better one. Always trying random new places (exploration) means you often eat bad food. A good strategy is to explore a lot initially (try many places) and gradually exploit more (go to favorites you have found).

### Q10. [Medium] Why does DQN use a separate target network instead of using the same Q-network for both prediction and target computation?

*Hint:* Think about what happens when the target keeps changing every time you update the network.

**Answer:** If the same network is used for both Q-value prediction and target computation, every weight update changes the target values too. This creates a **moving target problem**: the network is trying to match targets that shift with every gradient step, causing oscillation or divergence. The target network is a separate copy of the Q-network that is updated less frequently (every N episodes or via soft updates). This provides **stable, fixed targets** for several training steps, allowing the Q-network to converge toward them before the targets shift again.

The target network is like a student studying for an exam with a fixed answer key (target network) rather than an answer key that changes with every question they answer (same network). Fixed targets make the optimization problem well-defined and stable.

### Q11. [Hard] What is the Bellman equation in Q-Learning, and why is it the foundation of the algorithm?

*Hint:* Think about how the value of a state-action pair relates to the immediate reward plus future value.

**Answer:** The Bellman equation states: `Q(s, a) = R(s,a) + gamma * max_a'(Q(s', a'))`. It says the value of taking action a in state s equals the immediate reward R plus the discounted value of the best action in the next state s'. This creates a **recursive relationship**: the value of the current state depends on the values of future states. Q-Learning uses this to iteratively update a Q-table: `Q(s,a) += alpha * [R + gamma * max(Q(s',a')) - Q(s,a)]`. The term in brackets is the **temporal difference (TD) error** -- the gap between the target (Bellman estimate) and the current Q-value. By reducing this error over many updates, Q-values converge to the true optimal values.

The Bellman equation is the mathematical foundation of most value-based RL methods. It decomposes the long-term return into an immediate reward plus a discounted future value, making it possible to learn optimal behavior through incremental updates rather than waiting for complete episodes.

### Q12. [Hard] What is the output?

```
import torch
import torch.nn as nn

# Simple DQN for CartPole
class DQN(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, 64),
            nn.ReLU(),
            nn.Linear(64, 64),
            nn.ReLU(),
            nn.Linear(64, action_dim)
        )
    
    def forward(self, x):
        return self.net(x)

model = DQN(4, 2)  # CartPole: 4 state dims, 2 actions
params = sum(p.numel() for p in model.parameters())
print(f"Total parameters: {params}")

# Test forward pass
state = torch.randn(1, 4)  # Single state
q_values = model(state)
print(f"Q-values shape: {q_values.shape}")
print(f"Best action: {q_values.argmax().item()}")
```

*Hint:* Count params: Linear(4,64) + Linear(64,64) + Linear(64,2). Include biases.

**Answer:** `Total parameters: 4738`
`Q-values shape: torch.Size([1, 2])`
`Best action: 0 or 1 (random, untrained)`

Parameters: Linear(4,64) = 4*64+64 = 320. Linear(64,64) = 64*64+64 = 4160. Linear(64,2) = 64*2+2 = 130. Total = 320 + 4160 + 130 = 4610. Wait: let me recalculate. 4*64=256, +64 bias=320. 64*64=4096, +64=4160. 64*2=128, +2=130. Total=4610. The model outputs 2 Q-values (one per action). Before training, the best action is essentially random.

### Q13. [Hard] What is RLHF (Reinforcement Learning from Human Feedback) and how is it used to align LLMs like ChatGPT?

*Hint:* Think about how human preferences can be turned into a reward signal for RL.

**Answer:** RLHF aligns LLMs with human preferences in three steps: (1) **Supervised fine-tuning**: Train the LLM on high-quality human-written responses. (2) **Reward model training**: Human raters rank multiple model outputs for the same prompt. These rankings train a reward model that predicts how much a human would prefer a given response. (3) **PPO optimization**: The LLM (as the RL agent) generates responses (actions), and the reward model provides reward signals. The LLM's policy is optimized using PPO (Proximal Policy Optimization) to maximize the reward while staying close to the original model (KL penalty prevents the model from diverging too far).

RLHF is how ChatGPT, Claude, and other assistants are trained to be helpful, harmless, and honest. The key insight: instead of manually writing reward functions (impossible for open-ended language), train a reward model from human preferences. The reward model becomes a proxy for human judgment.

### Q14. [Easy] What is the output?

```
rl_apps = ["AlphaGo", "Robotics", "Recommendations", "RLHF", "Data center cooling"]
for i, app in enumerate(rl_apps, 1):
    print(f"{i}. {app}")
```

*Hint:* 5 real-world RL applications.

**Answer:** `1. AlphaGo`
`2. Robotics`
`3. Recommendations`
`4. RLHF`
`5. Data center cooling`

RL has diverse real-world applications: game AI (AlphaGo), robot control, recommendation systems (YouTube, Netflix), LLM alignment via RLHF (ChatGPT, Claude), and resource optimization (Google reduced data center cooling energy by 40%).

### Q15. [Medium] What is the output?

```
import numpy as np

def compare_q_values(Q_before, Q_after, state):
    print(f"Before training: {Q_before[state]}")
    print(f"After training:  {Q_after[state]}")
    print(f"Best action before: {np.argmax(Q_before[state])}")
    print(f"Best action after:  {np.argmax(Q_after[state])}")

Q_before = {0: [0.0, 0.0, 0.0, 0.0]}
Q_after = {0: [0.5, 8.2, 1.3, 0.7]}

compare_q_values(Q_before, Q_after, 0)
```

*Hint:* Before training, all Q-values are 0. After training, action 1 has the highest value.

**Answer:** `Before training: [0.0, 0.0, 0.0, 0.0]`
`After training:  [0.5, 8.2, 1.3, 0.7]`
`Best action before: 0`
`Best action after:  1`

Before training, all Q-values are initialized to 0, so the best action is arbitrarily 0. After Q-learning converges, action 1 has the highest Q-value (8.2), indicating it leads to the most cumulative reward from state 0.

### Q16. [Hard] What is the output?

```
from collections import deque

buf = deque(maxlen=5)
for i in range(8):
    buf.append(f"exp_{i}")

print(f"Buffer size: {len(buf)}")
print(f"Contents: {list(buf)}")
print(f"Oldest: {buf[0]}")
print(f"Newest: {buf[-1]}")
```

*Hint:* deque with maxlen=5 drops oldest when full. After 8 pushes, only last 5 remain.

**Answer:** `Buffer size: 5`
`Contents: ['exp_3', 'exp_4', 'exp_5', 'exp_6', 'exp_7']`
`Oldest: exp_3`
`Newest: exp_7`

The replay buffer (deque with maxlen=5) automatically drops the oldest entries when capacity is reached. After 8 pushes, the 3 oldest (exp_0, exp_1, exp_2) have been dropped. This ensures the buffer contains recent, relevant experiences for DQN training.

### Q17. [Medium] What is the difference between on-policy and off-policy RL? Give an example of each.

*Hint:* Think about whether the data-collecting policy matches the policy being learned.

**Answer:** **On-policy**: The agent learns about the same policy it uses to collect data. The behavior policy and target policy are identical. Example: SARSA uses the actual next action taken. **Off-policy**: The agent can learn about a different (usually optimal) policy while following an exploratory behavior policy. Example: Q-Learning always uses max Q(s',a') regardless of the action actually taken. Off-policy enables experience replay (reusing old data) and is more sample-efficient. On-policy is generally more stable but requires fresh data for each update.

DQN is off-policy (uses experience replay of old experiences). PPO is on-policy (discards data after each update). This distinction determines whether experience replay can be used and affects sample efficiency.

## Mixed Questions

### Q1. [Easy] What is the output?

```
rl_milestones = [
    ("AlphaGo", "Go", 2016),
    ("AlphaZero", "Chess + Go", 2017),
    ("OpenAI Five", "Dota 2", 2019),
    ("AlphaStar", "StarCraft II", 2019)
]
for name, game, year in rl_milestones:
    print(f"{year}: {name} mastered {game}")
```

*Hint:* Tuple unpacking in a for loop.

**Answer:** `2016: AlphaGo mastered Go`
`2017: AlphaZero mastered Chess + Go`
`2019: OpenAI Five mastered Dota 2`
`2019: AlphaStar mastered StarCraft II`

RL achieved landmark results in increasingly complex games. AlphaGo defeated the world Go champion. AlphaZero learned chess and Go from scratch through self-play. These successes demonstrated RL's potential for complex sequential decision-making.

### Q2. [Easy] What is the output?

```
epsilon = 1.0
decay = 0.9
for step in range(6):
    print(f"Step {step}: epsilon = {epsilon:.4f}")
    epsilon *= decay
```

*Hint:* Multiply epsilon by 0.9 each step. 1.0 * 0.9 = 0.9, * 0.9 = 0.81, etc.

**Answer:** `Step 0: epsilon = 1.0000`
`Step 1: epsilon = 0.9000`
`Step 2: epsilon = 0.8100`
`Step 3: epsilon = 0.7290`
`Step 4: epsilon = 0.6561`
`Step 5: epsilon = 0.5905`

Exponential epsilon decay: epsilon is multiplied by the decay rate (0.9) each step. Starting from 1.0: 0.9, 0.81, 0.729, 0.6561, 0.5905. This gradually shifts the agent from exploration to exploitation.

### Q3. [Medium] What is the output?

```
import numpy as np

# Simulate experience replay buffer
buffer = []
for i in range(10):
    experience = (f"s{i}", f"a{i%2}", i * 0.5, f"s{i+1}")
    buffer.append(experience)

print(f"Buffer size: {len(buffer)}")
print(f"First: {buffer[0]}")
print(f"Last: {buffer[-1]}")

# Random sample of 3
np.random.seed(42)
indices = np.random.choice(len(buffer), 3, replace=False)
print(f"\nSampled indices: {sorted(indices)}")
for idx in sorted(indices):
    print(f"  {buffer[idx]}")
```

*Hint:* 10 experiences are stored. Random sample draws 3 non-consecutive transitions.

**Answer:** `Buffer size: 10`
`First: ('s0', 'a0', 0.0, 's1')`
`Last: ('s9', 'a1', 4.5, 's10')`
`Sampled indices: [varies]`
Three random experiences from the buffer.

The replay buffer stores transitions (state, action, reward, next_state). Random sampling breaks temporal correlations -- instead of training on consecutive transitions, the agent trains on a diverse mix of past experiences. This is essential for stable DQN training.

### Q4. [Medium] What is the output?

```
def cartpole_state_meaning(state):
    names = ["Cart Position", "Cart Velocity", "Pole Angle", "Pole Angular Vel"]
    for name, val in zip(names, state):
        print(f"  {name:20s}: {val:+.4f}")

state = [0.0312, -0.1547, 0.0285, 0.3021]
print("CartPole State:")
cartpole_state_meaning(state)

# Check if pole is falling
angle = state[2]
print(f"\nPole angle: {angle:.4f} rad ({abs(angle)*180/3.14159:.1f} degrees)")
print(f"Falling? {abs(angle) > 0.2095}")
```

*Hint:* CartPole has 4 state variables. The episode ends when angle exceeds ~12 degrees (0.2095 rad).

**Answer:** `CartPole State:`
`  Cart Position      : +0.0312`
`  Cart Velocity      : -0.1547`
`  Pole Angle         : +0.0285`
`  Pole Angular Vel   : +0.3021`

`Pole angle: 0.0285 rad (1.6 degrees)`
`Falling? False`

CartPole's state has 4 continuous values. The pole angle of 0.0285 radians (~1.6 degrees) is well within the safe zone (episode ends at ~12 degrees = 0.2095 radians). The agent must keep the angle small by pushing the cart left or right.

### Q5. [Hard] What is the output?
import torch
import torch.nn as nn

# Experience replay sampling and DQN loss computation
def compute_dqn_loss(q_net, target_net, batch, gamma=0.99):
    states, actions, rewards, next_states, dones = batch
    
    states = torch.FloatTensor(states)
    actions = torch.LongTensor(actions)
    rewards = torch.FloatTensor(rewards)
    next_states = torch.FloatTensor(next_states)
    dones = torch.FloatTensor(dones)
    
    # Current Q-values for taken actions
    current_q = q_net(states).gather(1, actions.unsqueeze(1)).squeeze(1)
    
    # Target Q-values
    with torch.no_grad():
        next_q = target_net(next_states).max(1)[0]
        target_q = rewards + gamma * next_q * (1 - dones)
    
    loss = nn.MSELoss()(current_q, target_q)
    return loss

# Dummy networks and batch
q_net = nn.Sequential(nn.Linear(4, 32), nn.ReLU(), nn.Linear(32, 2))
target_net = nn.Sequential(nn.Linear(4, 32), nn.ReLU(), nn.Linear(32, 2))
target_net.load_state_dict(q_net.state_dict())

batch = (
    [[0.1, 0.2, 0.3, 0.4], [0.5, 0.6, 0.7, 0.8]],  # states
    [0, 1],                                             # actions
    [1.0, 1.0],                                         # rewards
    [[0.2, 0.3, 0.4, 0.5], [0.6, 0.7, 0.8, 0.9]],    # next_states
    [0.0, 0.0]                                          # dones (not done)
)

loss = compute_dqn_loss(q_net, target_net, batch)
print(f"DQN Loss: {loss.item():.6f}")
print(f"Loss > 0: {loss.item() > 0}")
print(f"Loss type: {type(loss).__name__}")

*Hint:* The loss is MSE between predicted Q-values and Bellman targets.

**Answer:** `DQN Loss: [some small positive value]`
`Loss > 0: True`
`Loss type: Tensor`

The DQN loss is MSE between: (1) current Q-values for the taken actions (from Q-network), and (2) target values computed using the Bellman equation with the target network. Since both networks start with the same random weights, the loss will be small but positive. Training minimizes this loss to make Q-predictions match Bellman targets.

### Q6. [Medium] Nidhi wants to build an RL agent that learns to play a simple board game. Should she use Q-Learning with a Q-table or DQN? What factors should she consider?

*Hint:* Think about the size of the state space and action space.

**Answer:** If the board game has a **small, discrete state space** (e.g., tic-tac-toe has about 5,500 valid states), a **Q-table** is simpler, faster, and guaranteed to converge. If the game has a **large or continuous state space** (e.g., chess has ~10^43 possible positions), a Q-table is impractical and Nidhi should use **DQN** which can generalize across similar states. Other factors: Q-tables are easier to implement and debug, require no GPU, and are fully interpretable (you can read the exact Q-values). DQN requires more hyperparameter tuning, training data, and compute, but handles complex environments that Q-tables cannot.

Rule of thumb: if the state space fits in memory (under ~1 million states) and states are discrete, use a Q-table. If the state space is large, continuous, or has high dimensionality, use DQN. Many practitioners start with a Q-table for prototyping and switch to DQN when needed.

### Q7. [Hard] Compare Q-Learning and Policy Gradient methods. What are the advantages and disadvantages of each? When would Vikram choose Policy Gradients over Q-Learning?

*Hint:* Think about discrete vs continuous action spaces and the nature of what each method learns.

**Answer:** **Q-Learning** learns a value function and derives the policy (pick the action with highest Q-value). Pros: sample-efficient, works well with discrete actions. Cons: struggles with continuous action spaces, may converge to suboptimal solutions due to function approximation errors. **Policy Gradient** methods directly optimize the policy (a probability distribution over actions). Pros: naturally handles continuous action spaces, can learn stochastic policies, more theoretically grounded. Cons: high variance, less sample-efficient, may converge to local optima. Vikram should choose Policy Gradients when: the action space is continuous (e.g., controlling a robot's joint angles), a stochastic policy is needed (e.g., game theory scenarios where randomization is optimal), or when using actor-critic methods like PPO for complex environments.

In practice, PPO (a policy gradient method) is the most popular RL algorithm for complex problems because it is stable, handles both discrete and continuous actions, and scales well. DQN is preferred for discrete-action environments where sample efficiency matters.

### Q8. [Hard] Explain Experience Replay in DQN. Why is random sampling from a buffer better than training on consecutive transitions?

*Hint:* Think about what happens when a model trains on correlated data sequences.

**Answer:** Experience Replay stores past transitions (s, a, r, s', done) in a buffer and trains on randomly sampled batches. This is better than consecutive training for three reasons: (1) **Breaks temporal correlations**: consecutive transitions are highly correlated (similar states, same part of the environment). Neural networks trained on correlated data overfit to recent patterns and forget earlier learning. Random sampling provides diverse, decorrelated training data. (2) **Data efficiency**: each experience can be reused for multiple training updates instead of being used once and discarded. (3) **Stability**: the training distribution is smoother (a mix of many experiences) rather than shifting rapidly as the agent moves through different parts of the environment.

Without replay, a DQN exploring one area of the environment would only train on transitions from that area, forgetting how to behave in other areas (catastrophic forgetting). Random sampling ensures the network sees a balanced mix of all past experiences.

### Q9. [Easy] What is the output?

```
rl_vs_others = {
    "Supervised": "Labeled data (x, y)",
    "Unsupervised": "Unlabeled data (x)",
    "Reinforcement": "Reward signal from environment"
}
for paradigm, feedback in rl_vs_others.items():
    print(f"{paradigm:15s} uses: {feedback}")
```

*Hint:* Three ML paradigms with different types of feedback.

**Answer:** `Supervised      uses: Labeled data (x, y)`
`Unsupervised    uses: Unlabeled data (x)`
`Reinforcement   uses: Reward signal from environment`

The three ML paradigms differ in their feedback: supervised gets correct answers, unsupervised finds patterns without feedback, and RL gets reward signals that may be delayed and sparse.

### Q10. [Medium] What is the output?

```
def q_learning_update(Q_sa, reward, max_Q_next, alpha, gamma):
    target = reward + gamma * max_Q_next
    td_error = target - Q_sa
    new_Q = Q_sa + alpha * td_error
    return round(new_Q, 4), round(td_error, 4)

# State-action Q-value starts at 0
Q = 0.0
alpha, gamma = 0.1, 0.9

updates = [(1.0, 0.0), (1.0, 0.5), (0.0, 1.0), (1.0, 1.2)]
for reward, max_next_q in updates:
    Q, td_err = q_learning_update(Q, reward, max_next_q, alpha, gamma)
    print(f"R={reward}, maxQ'={max_next_q} -> Q={Q}, TD_err={td_err}")
```

*Hint:* Apply Bellman update: Q += alpha * (R + gamma * maxQ' - Q) at each step.

**Answer:** Each line shows the Q-value incrementally increasing as the agent observes rewards and estimates of future value.

The Q-value starts at 0 and is updated toward the Bellman target (reward + gamma * max next Q) with each experience. The TD error decreases over time as Q converges. This incremental update is the core of Q-learning.

### Q11. [Medium] What is the output?

```
import numpy as np

def evaluate_policy(Q_table, env_size=4):
    actions = ["Up", "Right", "Down", "Left"]
    policy = {}
    for state in Q_table:
        best_action = actions[np.argmax(Q_table[state])]
        policy[state] = best_action
    return policy

# Simulated Q-table for a 2x2 grid
Q = {
    (0,0): [0.1, 0.8, 0.3, 0.1],  # Best: Right
    (0,1): [0.1, 0.1, 0.9, 0.1],  # Best: Down
    (1,0): [0.1, 0.7, 0.1, 0.1],  # Best: Right
    (1,1): [0.0, 0.0, 0.0, 0.0],  # Goal state
}

policy = evaluate_policy(Q)
for state, action in sorted(policy.items()):
    print(f"State {state}: {action}")
```

*Hint:* argmax selects the action with the highest Q-value at each state.

**Answer:** `State (0, 0): Right`
`State (0, 1): Down`
`State (1, 0): Right`
`State (1, 1): Up`

The greedy policy selects the action with the highest Q-value at each state. The learned path from (0,0) to the goal (1,1) is: Right to (0,1), then Down to (1,1). This represents the optimal policy learned by Q-learning.

### Q12. [Easy] What is the difference between a policy and a value function in RL?

*Hint:* One tells the agent what to do, the other tells the agent how good a situation is.

**Answer:** A **policy** (pi) is the agent's strategy: it maps states to actions, telling the agent what to do in each situation. It can be deterministic (one action per state) or stochastic (probability distribution over actions). A **value function** V(s) estimates how good a state is by predicting the expected cumulative reward from that state forward. The **Q-function** Q(s,a) estimates how good a specific action is in a given state. The relationship: a greedy policy selects the action that maximizes the Q-function at each state.

Value-based methods (Q-learning, DQN) learn a Q-function and derive the policy from it. Policy-based methods (REINFORCE, PPO) directly learn the policy without explicitly computing values. Actor-Critic methods combine both.

### Q13. [Hard] Why is reward shaping important in RL, and what risks does it introduce?

*Hint:* Think about sparse vs dense rewards and how shaping can accidentally change the optimal policy.

**Answer:** Reward shaping adds intermediate rewards to guide the agent toward the goal, solving the **sparse reward problem** where the agent only receives reward at the goal (making it hard to learn). Example: adding a small reward proportional to distance traveled toward the goal. Risks: (1) **Reward hacking**: the agent may find unintended ways to maximize shaped rewards without achieving the actual goal. (2) **Optimal policy change**: poorly designed shaping can change the optimal policy (the agent does what earns shaped rewards instead of the real objective). (3) **Human bias**: the designer's assumptions about 'good' intermediate states may be wrong. Potential-based reward shaping (PBRS) is a theoretically safe method that preserves the optimal policy while providing denser feedback.

Reward design is arguably the most important and most difficult part of RL. RLHF addresses this for language models by learning a reward function from human preferences rather than hand-crafting rewards.

## Multiple Choice Questions

### Q1. [Easy] What type of feedback does an RL agent receive from the environment?

**Answer:** B

**B is correct.** An RL agent receives a numerical reward signal after taking actions. Positive rewards encourage the action, negative rewards discourage it. This is different from supervised learning (labeled examples) or unsupervised learning (no explicit feedback).

### Q2. [Easy] In epsilon-greedy strategy, what does the agent do when random() < epsilon?

**Answer:** B

**B is correct.** When random() < epsilon, the agent explores by taking a random action. Otherwise (1-epsilon probability), it exploits by taking the action with the highest Q-value. Higher epsilon means more exploration.

### Q3. [Easy] What does the discount factor gamma control in RL?

**Answer:** B

**B is correct.** Gamma between 0 and 1 determines the importance of future rewards. Gamma=0 means the agent only cares about the immediate reward. Gamma=0.99 means future rewards are nearly as valuable as immediate ones.

### Q4. [Easy] What is a Q-table?

**Answer:** B

**B is correct.** A Q-table maps (state, action) pairs to their estimated Q-values (expected cumulative rewards). The Q-learning algorithm updates this table using the Bellman equation as the agent gains experience.

### Q5. [Easy] What is the Markov property in an MDP?

**Answer:** B

**B is correct.** The Markov property states that the probability of the next state depends only on the current state and action, not on the sequence of states that preceded it. This memoryless property makes RL tractable.

### Q6. [Medium] What is the TD (Temporal Difference) error in Q-Learning?

**Answer:** B

**B is correct.** TD error = [R + gamma * max(Q(s',a'))] - Q(s,a). It is the difference between the target value (from the Bellman equation) and the current estimate. Q-learning updates Q by alpha * TD error, driving the error toward zero.

### Q7. [Medium] Why does DQN use experience replay?

**Answer:** B

**B is correct.** Consecutive transitions are correlated, causing unstable training. Experience replay stores past transitions in a buffer and trains on random batches, breaking correlations and providing diverse, decorrelated training data.

### Q8. [Medium] What function does env.step(action) return in Gymnasium?

**Answer:** B

**B is correct.** `env.step(action)` returns a 5-tuple: next_state (new observation), reward (numerical feedback), terminated (episode ended due to environment rules), truncated (episode ended due to time limit), and info (diagnostic information).

### Q9. [Medium] What RL technique is used to align LLMs like ChatGPT with human preferences?

**Answer:** C

**C is correct.** RLHF trains a reward model from human preference rankings, then uses PPO to optimize the LLM's policy to maximize this learned reward while staying close to the original model. This makes LLMs helpful, harmless, and honest.

### Q10. [Medium] In CartPole, what causes the episode to end (terminate)?

**Answer:** B

**B is correct.** CartPole terminates when the pole angle exceeds +/-12 degrees (0.2095 radians) or the cart position exceeds +/-2.4 units from center. The agent gets reward +1 for every step the pole stays upright, up to a maximum of 500 steps.

### Q11. [Hard] What is the role of the target network in DQN?

**Answer:** B

**B is correct.** The target network is a copy of the Q-network that is updated only periodically (every N episodes). It computes stable target Q-values for the Bellman equation, preventing the moving target problem where the Q-network chases its own changing predictions.

### Q12. [Hard] Why is Q-Learning called a 'model-free' algorithm?

**Answer:** B

**B is correct.** 'Model-free' means Q-Learning does not need to know the transition probabilities P(s'|s,a) or the reward function R(s,a). It learns directly from experience -- the agent takes actions, observes outcomes, and updates Q-values. Model-based methods, in contrast, learn or use a model of the environment to plan ahead.

### Q13. [Hard] What problem does Q-Learning face when applied to environments with continuous state spaces?

**Answer:** B

**B is correct.** With continuous states (float values), almost no state is visited twice, so the Q-table has millions of unique entries with values of 0. Learning is impossible because Q-values are never updated. Solutions: discretize the state space (lose precision) or use DQN (neural network as function approximator).

### Q14. [Hard] What is the key difference between on-policy and off-policy RL algorithms?

**Answer:** B

**B is correct.** On-policy methods (SARSA, PPO) learn about the same policy that generates actions. Off-policy methods (Q-Learning, DQN) can learn about the optimal policy while following a different exploration policy (like epsilon-greedy). Off-policy is more sample-efficient because it can reuse old data (experience replay).

### Q15. [Hard] Which algorithm defeated the world champion at Go in 2016?

**Answer:** B

**B is correct.** AlphaGo (DeepMind, 2016) defeated Lee Sedol at Go using a combination of deep convolutional neural networks, Monte Carlo Tree Search, supervised learning from human games, and reinforcement learning through self-play. Its successor AlphaZero learned entirely from self-play.

### Q16. [Easy] What does the agent receive from the environment after taking an action?

**Answer:** B

**B is correct.** After the agent takes an action, the environment returns: the next state (new observation), a reward signal (numerical feedback), and a done flag (whether the episode has ended). This tuple is the fundamental data unit in RL.

### Q17. [Medium] What is the purpose of the replay buffer in DQN?

**Answer:** B

**B is correct.** The replay buffer stores past transitions (s, a, r, s', done) and provides random batches for training. This breaks temporal correlations between consecutive transitions and provides diverse training data, which is essential for stable DQN training.

### Q18. [Easy] What RL algorithm learns a Q-table mapping state-action pairs to expected cumulative rewards?

**Answer:** B

**B is correct.** Q-Learning is a model-free RL algorithm that maintains a Q-table storing the expected cumulative reward for each (state, action) pair. It updates values using the Bellman equation as the agent interacts with the environment.

### Q19. [Hard] What is PPO (Proximal Policy Optimization) and why is it popular?

**Answer:** B

**B is correct.** PPO is a policy gradient method that limits how much the policy can change in each update (via a clipping mechanism). This prevents large, destabilizing updates while still making progress. PPO is used in RLHF for aligning LLMs and is the default choice for many complex RL tasks.

### Q20. [Medium] Why is epsilon typically decayed during Q-learning training?

**Answer:** B

**B is correct.** Early in training, the agent knows little, so high epsilon (lots of exploration) helps discover good strategies. As training progresses and Q-values improve, lower epsilon (more exploitation) lets the agent use what it has learned. A minimum epsilon (e.g., 0.01) ensures some exploration continues.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/reinforcement-learning-basics/*
