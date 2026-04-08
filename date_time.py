# import datetime
# x=datetime.datetime.now()
# print(x)
def find_grades(grades,students):

    for i in students:
        if i in grades:
            print(grades[i])
    return "G"
dic = {
    "ana":"b",
    "matt":"C",
    "john":"D",
    "katy":"E"
}
print(find_grades(dic,['matt',"katy"]))
# dic["fra"]="z"
# dic["ana"]="x"
# del dic["john"]


# print("an" in dic)
# print("ana" in dic)
# print("D" in dic)
# print(dic)

# print(find_grades(dic,["matt","katy"]))

# def find(ld):
#     count=0
#     for i,j in ld.items():
#         if i==j:
#             count+=1
#     print(count)
#     return count

# d={
#     1:2,
#     4:4,
#     6:6
#     }
# print("h",find(d))