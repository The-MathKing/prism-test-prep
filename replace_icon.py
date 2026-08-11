import os
import glob

# Files to update Hexagon to Clover
files_to_update = [
    "/Volumes/2TB/prismprep/src/pages/ParentDashboard.jsx",
    "/Volumes/2TB/prismprep/src/pages/StudentDashboard.jsx",
    "/Volumes/2TB/prismprep/src/pages/InstructorDashboard.jsx",
    "/Volumes/2TB/prismprep/src/pages/PartnerDashboard.jsx",
    "/Volumes/2TB/prismprep/src/pages/Login.jsx",
    "/Volumes/2TB/prismprep/src/components/Footer.jsx",
    "/Volumes/2TB/prismprep/src/components/Navbar.jsx"
]

for filepath in files_to_update:
    with open(filepath, 'r') as f:
        content = f.read()
    
    content = content.replace("Hexagon", "Clover")
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Replaced Hexagon with Clover in all files.")
