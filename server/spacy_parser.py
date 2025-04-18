import spacy  # type: ignore
import sys
import re
import json

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

def extract_name(text):
    doc = nlp('\n'.join(text.split('\n')[:10]))  # Check only first 10 lines
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            return ent.text
    return None

def extract_email(text):
    match = re.search(r'[\w\.-]+@[\w\.-]+', text)
    return match.group(0) if match else None

def extract_phone(text):
    match = re.search(r'(\+?\d{1,3}[\s\-\.]?)?(\(?\d{2,5}\)?[\s\-\.]?)?\d{3,5}[\s\-\.]?\d{3,5}', text)
    return match.group(0) if match else None

def extract_education(text):
    education_keywords = [
        "Bachelor", "Master", "BCA", "MCA", "Intermediate", 
        "High School", "Secondary", "Senior Secondary"
    ]
    lines = text.split('\n')
    education = []

    for line in lines:
        for keyword in education_keywords:
            if keyword.lower() in line.lower():
                if 2 <= len(line.split()) <= 8:
                    education.append(line.strip(" -•:\t"))
    return education

def extract_skills(text):
    skills_keywords = [
        "Java", "C++", "C", "Python", "JavaScript", "React", "Node", "MongoDB", "Express", "SQL", "HTML", "CSS"
    ]
    skills_found = []
    for skill in skills_keywords:
        if re.search(rf'\b{re.escape(skill)}\b', text, re.IGNORECASE):
            skills_found.append(skill)
    return list(set(skills_found))

def extract_experience(text):
    lines = text.split('\n')
    experience = []
    temp = ""

    keywords = [
        "experience", "developed", "project", "intern", 
        "worked", "job", "role", "responsibilities", "built", "created"
    ]
    skip_phrases = ["Enthusiastic", "motivated", "Actively seeking", "technical expertise"]

    for line in lines:
        clean_line = line.strip(" -•:\t")
        lower = clean_line.lower()

        if any(k in lower for k in keywords) and not any(p in lower for p in skip_phrases):
            if len(clean_line.split()) >= 3:
                temp += clean_line + " "
        else:
            if temp:
                experience.append(temp.strip())
                temp = ""

    if temp:  # Add last collected block
        experience.append(temp.strip())

    return experience

def clean_list(data):
    return list({line.strip() for line in data if line and len(line.strip()) > 1})

def parse_resume(text):
    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),
        "education": clean_list(extract_education(text)),
        "skills": extract_skills(text),
        "experience": clean_list(extract_experience(text))
    }

# 🔥 Resume Scoring Function (NEW FEATURE)
def calculate_resume_score(skills, experience, education):
    score = 60  # Base score

    if len(skills) > 5:
        score += 10  # More relevant skills = better score
    if len(experience) > 2:
        score += 15  # Strong experience adds points
    if len(education) > 0:
        score += 10  # Having education listed is important

    return min(score, 100)  # Max score should be 100

# 📝 Resume Improvement Suggestions (NEW FEATURE)
def generate_suggestions(skills, experience, education):
    suggestions = []

    if len(skills) < 3:
        suggestions.append("Consider adding more skills relevant to your target job.")
    if len(experience) < 2:
        suggestions.append("Include more details about your work experience or projects.")
    if not any("Bachelor" in edu or "Master" in edu for edu in education):
        suggestions.append("List your education to improve credibility.")
    
    return suggestions

# 📄 Updated Resume Analysis Function with AI Scoring & Suggestions
def analyze_resume(text):
    parsed_data = parse_resume(text)

    parsed_data["resumeScore"] = calculate_resume_score(parsed_data["skills"], parsed_data["experience"], parsed_data["education"])
    parsed_data["suggestions"] = generate_suggestions(parsed_data["skills"], parsed_data["experience"], parsed_data["education"])

    return parsed_data

# 🔄 Run the script and return JSON results
if __name__ == "__main__":
    text_input = sys.stdin.read()
    result = analyze_resume(text_input)
    print(json.dumps(result, indent=4))