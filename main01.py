def reversed(n):
    reversed_str=""
    for i in range(len(n)-1,-1,-1):
        # print(n[i])
        reversed_str+=n[i]
    return reversed_str
user=input("Enter any string: ")
result=reversed(user)
print(result)