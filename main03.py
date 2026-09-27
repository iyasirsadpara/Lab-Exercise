import tkinter as tk
from tkinter import messagebox, filedialog
import matplotlib.pyplot as plt

# Data structure
students = {}

# ---------------- FUNCTIONS ---------------- #

def add_student():
    name = entry_name.get().strip()
    if not name:
        messagebox.showwarning("Input Error", "Enter student name!")
        return
    if name in students:
        messagebox.showerror("Error", "Student already exists!")
    else:
        students[name] = {'present': 0, 'total': 0}
        messagebox.showinfo("Success", f"{name} added successfully!")
        entry_name.delete(0, tk.END)

def mark_attendance():
    if not students:
        messagebox.showwarning("Error", "No students added!")
        return

    win = tk.Toplevel(root)
    win.title("Mark Attendance")

    entries = {}

    tk.Label(win, text="Mark Attendance (P/A)", font=("Arial", 12, "bold")).pack(pady=5)

    for name in students:
        frame = tk.Frame(win)
        frame.pack(pady=2)

        tk.Label(frame, text=name, width=15).pack(side=tk.LEFT)
        entry = tk.Entry(frame, width=5)
        entry.pack(side=tk.LEFT)
        entries[name] = entry

    def submit():
        for name, entry in entries.items():
            status = entry.get().strip().upper()
            if status not in ['P', 'A']:
                messagebox.showerror("Error", f"Invalid input for {name}")
                return
            students[name]['total'] += 1
            if status == 'P':
                students[name]['present'] += 1
        messagebox.showinfo("Success", "Attendance marked!")
        win.destroy()

    tk.Button(win, text="Submit", command=submit).pack(pady=10)

def calculate_percentage(name):
    data = students[name]
    if data['total'] == 0:
        return 0
    return (data['present'] / data['total']) * 100

def view_percentages():
    output.delete(1.0, tk.END)
    output.insert(tk.END, "Attendance Percentages\n\n")
    for name in students:
        perc = calculate_percentage(name)
        output.insert(tk.END, f"{name}: {perc:.2f}%\n")

def view_defaulters():
    output.delete(1.0, tk.END)
    output.insert(tk.END, "Defaulters (<75%)\n\n")
    found = False
    for name in students:
        perc = calculate_percentage(name)
        if perc < 75:
            output.insert(tk.END, f"{name}: {perc:.2f}%\n")
            found = True
    if not found:
        output.insert(tk.END, "No defaulters 🎉")

def save_file():
    if not students:
        messagebox.showwarning("Error", "No data to save!")
        return
    file = filedialog.asksaveasfilename(defaultextension=".txt")
    if file:
        with open(file, "w") as f:
            for name, data in students.items():
                f.write(f"{name},{data['present']},{data['total']}\n")
        messagebox.showinfo("Saved", "Data saved successfully!")

def load_file():
    file = filedialog.askopenfilename(filetypes=[("Text Files", "*.txt")])
    if file:
        students.clear()
        with open(file, "r") as f:
            for line in f:
                name, p, t = line.strip().split(',')
                students[name] = {'present': int(p), 'total': int(t)}
        messagebox.showinfo("Loaded", "Data loaded successfully!")

def text_graph_report():
    output.delete(1.0, tk.END)
    output.insert(tk.END, "TEXT BASED ATTENDANCE GRAPH\n\n")
    for name in students:
        perc = calculate_percentage(name)
        bar = "#" * int(perc // 2)
        output.insert(tk.END, f"{name:15} | {bar} {perc:.2f}%\n")

# ---------------- GUI ---------------- #

root = tk.Tk()
root.title("Student Attendance & Defaulter System")
root.geometry("600x550")

tk.Label(root, text="Student Attendance System", font=("Arial", 16, "bold")).pack(pady=10)

frame_top = tk.Frame(root)
frame_top.pack()

tk.Label(frame_top, text="Student Name:").pack(side=tk.LEFT)
entry_name = tk.Entry(frame_top)
entry_name.pack(side=tk.LEFT, padx=5)
tk.Button(frame_top, text="Add Student", command=add_student).pack(side=tk.LEFT)

frame_btn = tk.Frame(root)
frame_btn.pack(pady=10)

tk.Button(frame_btn, text="Mark Attendance", width=20, command=mark_attendance).grid(row=0, column=0, padx=5)
tk.Button(frame_btn, text="View Percentages", width=20, command=view_percentages).grid(row=0, column=1, padx=5)
tk.Button(frame_btn, text="View Defaulters", width=20, command=view_defaulters).grid(row=1, column=0, padx=5, pady=5)
tk.Button(frame_btn, text="Text Graph Report", width=20, command=text_graph_report).grid(row=1, column=1, padx=5, pady=5)
tk.Button(frame_btn, text="Save Data", width=20, command=save_file).grid(row=2, column=0, padx=5)
tk.Button(frame_btn, text="Load Data", width=20, command=load_file).grid(row=2, column=1, padx=5)

output = tk.Text(root, height=12, width=70)
output.pack(pady=10)

tk.Button(root, text="Exit", command=root.destroy).pack(pady=5)

root.mainloop()