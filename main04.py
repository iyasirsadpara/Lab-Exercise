def even(n):
    if n%2==0:
        return "Even Number"
    else:
        return "Odd number"
def prime(n):
    if n < 2:
        print("Not prime")
        return False
    for i in range(2, n):
        if n % i == 0:
            print("Not prime")
            return False  
    print("Prime")
    return True
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
while True:
    print("welcome to New calculator")
    print("1. Even/ Odd Numbber")
    print("2. Check Prime")
    print("3. Factorial")
    print("4. Exit")

    user=int(input("Choose anyone option: "))
    if user==4:
        break
    num=int(input("Enter any number:"))
    if user==1:
        result=even(num)
        print(result)
    elif user==2:
        result=prime(num)
        print(result)
    elif user==3:
        result=factorial(num)
        print(result)
    else:
        print("invalid syntax")