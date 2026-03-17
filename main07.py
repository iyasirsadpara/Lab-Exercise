sent=input("Enter any Gmail: ")
new_sent=sent.lower()
count=0
for char in new_sent:
    if char=="a":
        count=count+1
    else:
        char
print("Total 'A' in given sentence are:",count)