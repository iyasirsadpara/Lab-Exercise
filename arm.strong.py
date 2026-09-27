num=int(input("enter any number: "))
temp= num
result=0 #27,35 ,36
while num>0:
    ram=num%10 #3 ,2,1
    num=num//10 #12,1,0
    pow=ram**3 #27,8,1
    result=result+pow 
if temp==result:
    print(f" {temp} is armstorng number: ")
else:
    print(f" {temp} is not armstorng number: ")
