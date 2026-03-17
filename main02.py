def largest(n):
    largest=0
    while(n!=0):
        re=n%10
        if re>=largest:
            largest=re
        n=n//10
    return largest
user=int(input("Enter any digit: "))
output=largest(user)
print("the largest integer is: ",output)