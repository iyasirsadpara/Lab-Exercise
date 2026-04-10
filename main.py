import random
print("welcome to r p s game")

choices=['rock','paper','scissors']
while True:
    user=input("enter your choice:")
    computer=random.choice(choices)
    print("computer chose",computer)
    if user==computer:
        print("tie")
    elif user=='rock' and computer=='paper'or user=='paper' and computer=='scissors'or user=='scissors' and computer=='rock':
        print("you loose")
    elif user=='paper' and computer=='rock' or user=='scissors' and computer=='paper'or user=='rock' and computer=='scissors':
        print("you win")
    else:
        print("invalid choice")